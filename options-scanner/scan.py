#!/usr/bin/env python3
"""
Wheel Options Scanner - hourly data updater
============================================
Screens a watchlist of US growth / tech / digital-asset names for
cash-secured puts and covered calls, using the rules in RULES below,
and writes options-scanner/data.js for options-scanner/index.html.

Sources:
  - Yahoo Finance (yfinance): daily OHLC (SMA, RSI, ADX), PEG, earnings date
  - CBOE delayed quotes: option chains with bid, ask, delta, IV
  - IV rank: options-scanner/ivr.json (prior-close values from
    optionsanalysissuite.com, refreshed once a day outside this workflow,
    since that site refuses requests from GitHub's runners). Once a year of
    CBOE iv30 readings has been logged in cache.json, the scanner computes
    IV rank itself when ivr.json is stale.

A required metric that can't be fetched counts as a failed check: no
trade qualifies on missing data.

Run:
    python3 options-scanner/scan.py
"""

from __future__ import annotations

import json, math, re, sys, time
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

try:
    import numpy as np
    import pandas as pd
    import requests
    import yfinance as yf
except ImportError as e:
    print(f"❌ Missing package: {e.name}")
    print("   pip3 install yfinance pandas numpy requests")
    sys.exit(1)


# ════════════════════════════════════════════════════════════════════════════
# CONFIG
# ════════════════════════════════════════════════════════════════════════════
TICKERS = [
    "NVDA", "AMD", "MSFT", "META", "GOOGL", "AMZN", "TSLA",
    "PLTR", "CRWD", "COIN", "MSTR", "MARA", "HOOD",
]

RULES = {
    "dte_min":     30,     # days to expiration window
    "dte_max":     45,
    "delta_min":   0.15,   # absolute delta band
    "delta_max":   0.30,
    "ivr_min":     30.0,   # IV rank must be above this
    "adx_min":     25.0,   # trend strength
    "rsi_max_csp": 38.0,   # "approaching or below 35" for cash-secured puts
    "peg_max":     2.5,    # "reasonable" PEG; must also be positive
    "roc_min":     15.0,   # minimum annualized return on capital, %
    "risk_free":   0.04,   # only used when a quote has no delta
    "max_spread":  0.35,   # skip quotes whose bid/ask spread exceeds 35% of mid
}

HERE       = Path(__file__).resolve().parent
DATA_JS    = HERE / "data.js"
CACHE_JSON = HERE / "cache.json"
IVR_JSON   = HERE / "ivr.json"
IVR_MAX_AGE_DAYS = 5      # ivr.json older than this is ignored
ET         = ZoneInfo("America/New_York")
UA         = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"}


# ════════════════════════════════════════════════════════════════════════════
# Helpers
# ════════════════════════════════════════════════════════════════════════════
def num(x, nd=2):
    """Round to nd places; None for missing / non-finite."""
    try:
        x = float(x)
    except (TypeError, ValueError):
        return None
    return round(x, nd) if math.isfinite(x) else None


def norm_cdf(x: float) -> float:
    return 0.5 * (1 + math.erf(x / math.sqrt(2)))


def bs_delta(spot, strike, iv, t_years, is_call, r=RULES["risk_free"]):
    if not (spot and strike and iv and t_years) or iv <= 0 or t_years <= 0:
        return None
    d1 = (math.log(spot / strike) + (r + iv * iv / 2) * t_years) / (iv * math.sqrt(t_years))
    return norm_cdf(d1) if is_call else norm_cdf(d1) - 1


def load_json(path: Path, default):
    try:
        return json.loads(path.read_text())
    except Exception:
        return default


# ════════════════════════════════════════════════════════════════════════════
# Indicators (Wilder smoothing)
# ════════════════════════════════════════════════════════════════════════════
def rsi(close: pd.Series, n: int = 14) -> pd.Series:
    d = close.diff()
    gain = d.clip(lower=0).ewm(alpha=1 / n, adjust=False).mean()
    loss = (-d.clip(upper=0)).ewm(alpha=1 / n, adjust=False).mean()
    return 100 - 100 / (1 + gain / loss)


def adx(high: pd.Series, low: pd.Series, close: pd.Series, n: int = 14) -> pd.Series:
    prev_c = close.shift()
    tr = pd.concat([high - low, (high - prev_c).abs(), (low - prev_c).abs()], axis=1).max(axis=1)
    up, down = high.diff(), -low.diff()
    plus_dm  = up.where((up > down) & (up > 0), 0.0)
    minus_dm = down.where((down > up) & (down > 0), 0.0)
    atr      = tr.ewm(alpha=1 / n, adjust=False).mean()
    plus_di  = 100 * plus_dm.ewm(alpha=1 / n, adjust=False).mean() / atr
    minus_di = 100 * minus_dm.ewm(alpha=1 / n, adjust=False).mean() / atr
    dx = 100 * (plus_di - minus_di).abs() / (plus_di + minus_di)
    return dx.ewm(alpha=1 / n, adjust=False).mean()


# ════════════════════════════════════════════════════════════════════════════
# Fetchers
# ════════════════════════════════════════════════════════════════════════════
def fetch_technicals(tk: yf.Ticker) -> dict:
    df = tk.history(period="1y", interval="1d", auto_adjust=False)
    if df is None or len(df) < 200:
        raise ValueError(f"only {0 if df is None else len(df)} daily bars")
    c, h, l = df["Close"].astype(float), df["High"].astype(float), df["Low"].astype(float)
    return {
        "price":  num(c.iloc[-1]),
        "sma50":  num(c.rolling(50).mean().iloc[-1]),
        "sma200": num(c.rolling(200).mean().iloc[-1]),
        "rsi":    num(rsi(c).iloc[-1], 1),
        "adx":    num(adx(h, l, c).iloc[-1], 1),
        "bar":    str(df.index[-1].date()),
    }


def fetch_peg(tk: yf.Ticker):
    info = tk.info or {}
    for key in ("trailingPegRatio", "pegRatio"):
        v = num(info.get(key))
        if v is not None:
            return v
    return None


def fetch_earnings(tk: yf.Ticker, today: date) -> list[str]:
    """Upcoming earnings date(s) as ISO strings; a range comes back as two dates."""
    cal = tk.calendar
    dates = []
    if isinstance(cal, dict):
        dates = cal.get("Earnings Date") or []
    elif isinstance(cal, pd.DataFrame) and "Earnings Date" in cal.index:
        dates = list(cal.loc["Earnings Date"].values)
    out = []
    for d in dates:
        try:
            d = pd.Timestamp(d).date()
        except Exception:
            continue
        if d >= today - timedelta(days=1):
            out.append(d.isoformat())
    return sorted(set(out))


def load_ivr(today: date) -> tuple[dict, str | None]:
    """IV ranks from ivr.json if it is recent enough, else empty."""
    js = load_json(IVR_JSON, {})
    try:
        as_of = date.fromisoformat(js.get("asOf", ""))
    except ValueError:
        return {}, None
    if (today - as_of).days > IVR_MAX_AGE_DAYS:
        return {}, None
    vals = {k: num(v, 1) for k, v in (js.get("values") or {}).items()}
    vals = {k: v for k, v in vals.items() if v is not None and 0 <= v <= 100}
    return vals, f"{js.get('source', 'ivr.json')}, as of {as_of.isoformat()}"


def own_ivr(history: dict, current) -> float | None:
    """IV rank from our own daily iv30 log, once it covers about a year."""
    vals = list(history.values())[-252:]
    if current is None or len(vals) < 252:
        return None
    lo, hi = min(vals), max(vals)
    return round((current - lo) / (hi - lo) * 100, 1) if hi > lo else None


OPT_RE = re.compile(r"^([A-Z]+)(\d{6})([CP])(\d{8})$")


def fetch_chain(ticker: str) -> dict:
    """CBOE delayed quotes: spot, iv30 and every contract with bid/ask/delta/iv."""
    url = f"https://cdn.cboe.com/api/global/delayed_quotes/options/{ticker}.json"
    r = requests.get(url, headers=UA, timeout=40)
    r.raise_for_status()
    js = r.json()
    data = js.get("data") or {}
    rows = []
    for o in data.get("options") or []:
        m = OPT_RE.match(str(o.get("option", "")))
        if not m or m.group(1) != ticker:
            continue          # skips adjusted / non-standard roots
        rows.append({
            "exp":    datetime.strptime(m.group(2), "%y%m%d").date(),
            "call":   m.group(3) == "C",
            "strike": int(m.group(4)) / 1000,
            "bid":    num(o.get("bid"), 4),
            "ask":    num(o.get("ask"), 4),
            "delta":  num(o.get("delta"), 4),
            "iv":     num(o.get("iv"), 4),
            "oi":     o.get("open_interest"),
        })
    return {
        "spot":      num(data.get("current_price") or data.get("close")),
        "iv30":      num(data.get("iv30"), 2),
        "timestamp": js.get("timestamp"),
        "rows":      rows,
    }


def fetch_chain_yf(tk: yf.Ticker, spot: float, today: date) -> dict:
    """Fallback: yfinance chains, delta from Black-Scholes on each quote's IV."""
    rows = []
    for exp_s in tk.options or ():
        exp = date.fromisoformat(exp_s)
        dte = (exp - today).days
        if not (RULES["dte_min"] <= dte <= RULES["dte_max"]):
            continue
        ch = tk.option_chain(exp_s)
        for is_call, df in ((True, ch.calls), (False, ch.puts)):
            for _, o in df.iterrows():
                iv = num(o.get("impliedVolatility"), 4)
                rows.append({
                    "exp": exp, "call": is_call, "strike": float(o["strike"]),
                    "bid": num(o.get("bid"), 4), "ask": num(o.get("ask"), 4),
                    "delta": num(bs_delta(spot, float(o["strike"]), iv, dte / 365, is_call), 4),
                    "iv": iv, "oi": o.get("openInterest"),
                })
    return {"spot": spot, "iv30": None, "timestamp": None, "rows": rows}


# ════════════════════════════════════════════════════════════════════════════
# Screening
# ════════════════════════════════════════════════════════════════════════════
def iso_week(d: date):
    return d.isocalendar()[:2]


def pick_contract(rows, spot, today, earnings, strategy):
    """Best contract for a strategy: inside DTE and delta bands, not in an
    earnings week, meeting min ROC with the lowest |delta|. If none meets
    ROC, the highest-ROC contract is returned as a near miss."""
    is_call = strategy == "CC"
    earn_weeks = {iso_week(date.fromisoformat(e)) for e in earnings}
    cands = []
    for o in rows:
        if o["call"] != is_call:
            continue
        dte = (o["exp"] - today).days
        if not (RULES["dte_min"] <= dte <= RULES["dte_max"]):
            continue
        if iso_week(o["exp"]) in earn_weeks:
            continue
        bid, ask, delta = o["bid"], o["ask"], o["delta"]
        if not bid or not ask or bid <= 0 or ask < bid:
            continue
        mid = (bid + ask) / 2
        if (ask - bid) / mid > RULES["max_spread"]:
            continue
        if delta is None or delta == 0:
            delta = bs_delta(spot, o["strike"], o["iv"], dte / 365, is_call)
        if delta is None or not (RULES["delta_min"] <= abs(delta) <= RULES["delta_max"]):
            continue
        basis = spot if is_call else o["strike"]
        roc = mid / basis * 365 / dte * 100
        cands.append({
            "strike": o["strike"], "exp": o["exp"].isoformat(), "dte": dte,
            "delta": round(delta, 2), "mid": round(mid, 2), "roc": round(roc, 1),
            "capital": round(basis * 100),
        })
    if not cands:
        return None
    ok = [c for c in cands if c["roc"] >= RULES["roc_min"]]
    if ok:
        return min(ok, key=lambda c: (abs(c["delta"]), -c["roc"]))
    return max(cands, key=lambda c: c["roc"])


def screen_ticker(t: str, row: dict, chain: dict | None, today: date):
    """Fill in pass/fail per strategy. Returns (row, trades)."""
    common = []
    price, sma50, sma200 = row.get("price"), row.get("sma50"), row.get("sma200")
    if None in (price, sma200):
        common.append("price or 200-day SMA unavailable")
    elif price <= sma200:
        common.append("below 200-day SMA")
    if row.get("adx") is None:
        common.append("ADX unavailable")
    elif row["adx"] <= RULES["adx_min"]:
        common.append(f"ADX {row['adx']:.1f} not above {RULES['adx_min']:.0f}")
    peg = row.get("peg")
    if peg is None:
        common.append("PEG unavailable")
    elif not (0 < peg <= RULES["peg_max"]):
        common.append(f"PEG {peg:.2f} outside 0 to {RULES['peg_max']}")
    if row.get("ivr") is None:
        common.append("IV rank unavailable")
    elif row["ivr"] <= RULES["ivr_min"]:
        common.append(f"IV rank {row['ivr']:.1f} not above {RULES['ivr_min']:.0f}")
    if not row.get("earnings"):
        common.append("next earnings date unavailable")
    if not chain or not chain.get("rows"):
        common.append("option chain unavailable")

    trades = []
    for strat in ("CSP", "CC"):
        reasons = list(common)
        if strat == "CSP":
            if row.get("rsi") is None:
                reasons.append("RSI unavailable")
            elif row["rsi"] > RULES["rsi_max_csp"]:
                reasons.append(f"RSI {row['rsi']:.1f} too high for a put")
        best = None
        if chain and chain.get("rows") and price:
            best = pick_contract(chain["rows"], price, today, row.get("earnings") or [], strat)
            if best is None:
                reasons.append("no liquid contract in the delta and DTE window")
            elif best["roc"] < RULES["roc_min"]:
                reasons.append(f"best ROC {best['roc']:.1f}% below {RULES['roc_min']:.0f}%")
        row["put" if strat == "CSP" else "call"] = best
        row[("putFails" if strat == "CSP" else "callFails")] = reasons
        if not reasons and best:
            trades.append({
                "ticker": t,
                "strategy": "Cash-Secured Put" if strat == "CSP" else "Covered Call",
                **best,
                "ivr": row["ivr"], "rsi": row["rsi"], "adx": row["adx"],
                "price": price, "sma50": sma50, "sma200": sma200,
            })
    row["result"] = "Qualifies" if trades else "Fail"
    return row, trades


# ════════════════════════════════════════════════════════════════════════════
# Main
# ════════════════════════════════════════════════════════════════════════════
def main() -> int:
    now   = datetime.now(timezone.utc)
    today = now.astimezone(ET).date()
    cache = load_json(CACHE_JSON, {})
    daily = cache.setdefault("daily", {})
    ivh   = cache.setdefault("iv30_history", {})
    ivr_vals, ivr_src = load_ivr(today)
    if not ivr_vals:
        print("  ⚠ ivr.json missing or stale; IV rank falls back to the scanner's own log")

    screen, trades, errors = [], [], []
    for t in TICKERS:
        print(f"→ {t}")
        tk  = yf.Ticker(t)
        row = {"ticker": t}
        try:
            row.update(fetch_technicals(tk))
        except Exception as e:
            errors.append(f"{t}: price history ({e})")

        # Daily-cached fundamentals (they change at most once a day)
        d = daily.get(t, {})
        if d.get("date") != today.isoformat():
            d = {"date": today.isoformat()}
            for key, fn in (("peg", lambda: fetch_peg(tk)),
                            ("earnings", lambda: fetch_earnings(tk, today))):
                try:
                    d[key] = fn()
                except Exception as e:
                    d[key] = None
                    errors.append(f"{t}: {key} ({e})")
            if d.get("peg") is not None and d.get("earnings"):
                daily[t] = d          # only cache a complete set; retry next hour otherwise
        row["peg"], row["earnings"] = d.get("peg"), d.get("earnings") or []

        chain = None
        try:
            chain = fetch_chain(t)
            row["chainSource"] = "CBOE"
        except Exception as e:
            errors.append(f"{t}: CBOE chain ({e})")
        if (not chain or not chain["rows"]) and row.get("price"):
            try:
                chain = fetch_chain_yf(tk, row["price"], today)
                row["chainSource"] = "Yahoo"
            except Exception as e:
                errors.append(f"{t}: Yahoo chain ({e})")
        if chain and chain.get("iv30") is not None:
            row["iv30"] = chain["iv30"]
            ivh.setdefault(t, {})[today.isoformat()] = chain["iv30"]
            ivh[t] = dict(sorted(ivh[t].items())[-400:])
        if t in ivr_vals:
            row["ivr"], row["ivrSource"] = ivr_vals[t], ivr_src
        else:
            row["ivr"] = own_ivr(ivh.get(t, {}), row.get("iv30"))
            row["ivrSource"] = "own iv30 log" if row["ivr"] is not None else None

        row, tr = screen_ticker(t, row, chain, today)
        screen.append(row)
        roc = lambda c: f"{c['roc']:.1f}%" if c else "-"
        print(f"  {t:5} {row['result']:9} px={row.get('price')} rsi={row.get('rsi')} adx={row.get('adx')} "
              f"peg={row.get('peg')} ivr={row.get('ivr')} earn={row.get('earnings')} "
              f"put={roc(row.get('put'))} call={roc(row.get('call'))} chain={row.get('chainSource')}")
        trades.extend(tr)
        time.sleep(0.5)

    payload = {
        "rules":   RULES,
        "tickers": TICKERS,
        "screen":  screen,
        "trades":  sorted(trades, key=lambda x: -x["roc"]),
        "errors":  errors,
    }

    # Skip the write when nothing but the clock moved (nights, weekends)
    prev = DATA_JS.read_text() if DATA_JS.exists() else ""
    m = re.search(r"window\.SCANNER_DATA = (\{.*\});", prev, re.S)
    old = json.loads(m.group(1)) if m else {}
    old.pop("generatedAt", None)
    if old != json.loads(json.dumps(payload)):
        payload = {"generatedAt": now.strftime("%Y-%m-%dT%H:%M:%SZ"), **payload}
        DATA_JS.write_text("window.SCANNER_DATA = " + json.dumps(payload, indent=1) + ";\n")
        print(f"✓ wrote {DATA_JS.name}: {len(trades)} qualifying trade(s)")
    else:
        print("= no change since last scan")
    CACHE_JSON.write_text(json.dumps(cache, indent=1, sort_keys=True) + "\n")

    for e in errors:
        print(f"  ⚠ {e}")
    # Fail the run only if nothing at all came back
    return 1 if not any(r.get("price") for r in screen) else 0


if __name__ == "__main__":
    sys.exit(main())
