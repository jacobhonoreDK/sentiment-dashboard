#!/usr/bin/env python3
"""
Market Sentiment Dashboard - Live Data Updater  (refactored)
=============================================================
Fetches data from Yahoo Finance, FRED, CBOE and NAAIM.
Computes z-scores/percentiles, regime-conditional composite scores,
correlation-cluster de-duplication, fast vs full composites,
signal-strength transform and rate-of-change tracking.

Run:
    python3 update_dashboard.py

Requires FRED_API_KEY environment variable for credit/macro indicators.
"""

import io, itertools, json, os, sys
from collections import defaultdict
from datetime import datetime, timedelta
from pathlib import Path

from bs4 import BeautifulSoup

# ─── Dependency check ────────────────────────────────────────────────────────
try:
    import numpy as np
    import pandas as pd
    import requests
    import yfinance as yf
except ImportError as e:
    print(f"❌ Missing package: {e.name}")
    print("   pip3 install yfinance pandas numpy requests beautifulsoup4 openpyxl")
    sys.exit(1)


# ════════════════════════════════════════════════════════════════════════════
# MASTER CONFIG — every weight, window, threshold and transform param lives here
# ════════════════════════════════════════════════════════════════════════════
CONFIG = {
    # ── Lookback windows ─────────────────────────────────────────────────────
    # Default years of history for z-score / percentile computation.
    # Breadth is kept at 1y because downloading 5y for 500 tickers is expensive.
    "history_years":         5,
    "history_years_breadth": 1,

    # ── Category weights — RISK-ON regime ────────────────────────────────────
    # Must sum to 1.0; script normalizes automatically.
    "weights_risk_on": {
        "credit":  0.28,
        "pos":     0.22,
        "breadth": 0.20,
        "vol":     0.17,
        "cross":   0.13,
    },

    # ── Category weights — RISK-OFF regime ───────────────────────────────────
    # Heavier on credit + vol; lighter on breadth when in risk-off.
    "weights_risk_off": {
        "credit":  0.33,
        "vol":     0.25,
        "pos":     0.18,
        "breadth": 0.14,
        "cross":   0.10,
    },

    # ── Regime detection ─────────────────────────────────────────────────────
    # RISK-OFF when SPX < 200-day MA  OR  VIX > its trailing-1yr median.
    "regime_spx_ma_days":       200,
    "regime_vix_lookback_days": 252,

    # ── Correlation-cluster weighting ────────────────────────────────────────
    # Within each category: indicators in a cluster of size K together count
    # as ONE independent signal, so each member receives weight 1/K of that slot.
    # Set enabled=False to revert to simple equal weights within each category.
    "corr_penalty_enabled": True,
    "corr_threshold":       0.80,   # |r| above this → same cluster
    "corr_min_obs":         52,     # min weekly obs needed to compute correlation

    # ── Non-linear signal-strength transform (piecewise linear, symmetric) ───
    # Raw score 35–65 → signal 0.0 (no actionable signal)
    # Raw score   0   → signal -1.0 (extreme fear)
    # Raw score 100   → signal +1.0 (extreme greed)
    "signal_neutral_lo": 35,
    "signal_neutral_hi": 65,

    # ── Rate-of-change lags (calendar weeks) ─────────────────────────────────
    "roc_lags_weeks": [1, 4],

    # ── Frequency tags that count toward the "fast" composite ────────────────
    # "weekly" and "monthly" indicators are excluded from fast composite.
    "fast_freqs": {"rt", "daily"},
}


# ─── File paths & environment ────────────────────────────────────────────────
FRED_API_KEY         = os.environ.get("FRED_API_KEY", "").strip()
GITHUB_TOKEN         = os.environ.get("GITHUB_TOKEN", "").strip()
GITHUB_REPO          = "jacobhonoreDK/sentiment-dashboard"
OUTPUT_FILE          = Path(__file__).parent / "data.js"
PCR_CACHE_FILE       = Path(__file__).parent / "pcr_cache.json"
MANUAL_DATA_FILE     = Path(__file__).parent / "manual_data.json"
MANUAL_CACHE_FILE    = Path(__file__).parent / "manual_cache.json"
COMPOSITE_CACHE_FILE = Path(__file__).parent / "composite_cache.json"

# PCR empirical parameters (CBOE equity put/call 2010-2024)
PCR_HIST_MEAN = 0.64
PCR_HIST_STD  = 0.10


# ════════════════════════════════════════════════════════════════════════════
# FIX 1 — EXPLICIT POLARITY CONFIG (single source of truth)
# +1 = high value → greed/risk-on
# -1 = high value → fear/risk-off
# Applied in calc_position_and_zscore; INDICATORS direction column must match.
# A runtime assertion in main() flags any drift.
# ════════════════════════════════════════════════════════════════════════════
POLARITY = {
    # ── Volatilitet & Optioner ────────────────────────────────────────────────
    "VIX":                    -1,  # low VIX = complacency = greed
    "VVIX":                   -1,  # low vol-of-vol = greed
    "SKEW Index":             -1,  # low tail-risk demand = greed
    "VIX Term Structure":     -1,  # <1 = contango = calm = greed
    "Put/Call Ratio":         -1,  # low PCR = call-heavy = greed

    # ── Kredit & Makro ────────────────────────────────────────────────────────
    "MOVE Index":             -1,  # low bond vol = greed
    "HY Credit Spread":       -1,  # tight spreads = greed
    "IG Credit Spread":       -1,  # tight spreads = greed
    "2s10s kurve":            +1,  # steep curve = growth optimism = greed
    "Financial Conds.":       -1,  # loose financial conditions (low NFCI) = greed
    "SOFR":                   -1,  # low funding rate = loose = greed (crude proxy)

    # ── Cross-Asset Signaler ──────────────────────────────────────────────────
    # Gold/Silver HIGH = gold outperforming silver = defensive flight = fear.
    # NOTE: pos=91 (greed) is observed when ratio is below 5-year mean — the
    # 2020-2022 peaks inflate the baseline. Polarity is correct; long baseline
    # is a separate lookback-window concern.
    "Guld/Sølv ratio":        -1,  # low ratio = silver catching up = risk-on = greed
    "Kobber/Guld ratio":      +1,  # high ratio = industrial demand = greed
    # Strong dollar = global risk-off (EM stress, tighter USD liquidity) = fear.
    "DXY":                    -1,  # weak USD = risk-on = greed
    # XLP/XLY HIGH = staples outperform discretionary = defensive rotation = fear.
    "XLP / XLY ratio":        -1,  # low ratio = discretionary leading = greed
    "Bitcoin (BTC)":          +1,  # high BTC = risk appetite = greed

    # ── Positionering & Flows ─────────────────────────────────────────────────
    "NAAIM Exposure":         +1,  # high manager equity exposure = greed
    "AAII Bull-Bear":         +1,  # high bull-bear spread = greed
    "Investors Intel.":       +1,  # high bullish % = greed
    "Short Interest":         -1,  # high short interest = fear
    "Insider Buy/Sell":       +1,  # net insider buying = greed
    "X / Twitter Bull":       +1,  # high social bullishness = greed

    # ── Markedsbredde ─────────────────────────────────────────────────────────
    "% over 50-DMA":          +1,  # broad participation = greed
    "% over 200-DMA":         +1,  # broad participation = greed
    "New Highs - Lows":       +1,  # positive net = greed
    "A/D Linje":              +1,  # rising cumulative = greed
    "McClellan Osc.":         +1,  # positive oscillator = greed
    "SPY / RSP ratio":        -1,  # low ratio = equal-weight leading = broad breadth = greed
    "50/200 DMA divergence":  +1,  # positive = 50DMA breadth ≥ 200DMA = healthy = greed
}


# ════════════════════════════════════════════════════════════════════════════
# INDICATOR REGISTRY
# (name, source, ticker/key, direction, category, freq)
#   direction: must match POLARITY dict above — validated at startup.
#   freq:      "rt" | "daily" | "weekly" | "monthly" | "manual"
# ════════════════════════════════════════════════════════════════════════════
INDICATORS = [
    # ── Volatilitet & Optioner ────────────────────────────────────────────────
    ("VIX",                "yf",      "^VIX",            -1, "vol",     "rt"),
    ("VVIX",               "yf",      "^VVIX",           -1, "vol",     "rt"),
    ("SKEW Index",         "yf",      "^SKEW",           -1, "vol",     "daily"),
    ("VIX Term Structure", "derived", "vix9d_vix",       -1, "vol",     "rt"),
    ("Put/Call Ratio",     "cboe",    "equity_pcr",      -1, "vol",     "daily"),

    # ── Kredit & Makro ───────────────────────────────────────────────────────
    ("MOVE Index",         "yf",      "^MOVE",           -1, "credit",  "daily"),
    ("HY Credit Spread",   "fred",    "BAMLH0A0HYM2",    -1, "credit",  "daily"),
    ("IG Credit Spread",   "fred",    "BAMLC0A4CBBB",    -1, "credit",  "daily"),
    ("2s10s kurve",        "fred",    "T10Y2Y",           1, "credit",  "daily"),
    ("Financial Conds.",   "fred",    "NFCI",            -1, "credit",  "weekly"),
    # Funding/liquidity proxy. SOFR tracks the overnight secured rate.
    # TODO: A cleaner signal would be SOFR-OIS spread, but OIS isn't freely
    # available on FRED. Raw SOFR direction=-1: higher = tighter = risk-off.
    # Use with caution — it mostly moves with the Fed Funds target, not stress.
    ("SOFR",               "fred",    "SOFR",            -1, "credit",  "daily"),

    # ── Cross-Asset Signaler ─────────────────────────────────────────────────
    ("Guld/Sølv ratio",    "derived", "gold_silver",     -1, "cross",   "rt"),
    ("Kobber/Guld ratio",  "derived", "copper_gold",      1, "cross",   "rt"),
    ("DXY",                "yf",      "DX-Y.NYB",        -1, "cross",   "rt"),
    ("XLP / XLY ratio",    "derived", "xlp_xly",         -1, "cross",   "rt"),
    ("Bitcoin (BTC)",      "yf",      "BTC-USD",          1, "cross",   "rt"),

    # ── Positionering & Flows ────────────────────────────────────────────────
    ("NAAIM Exposure",     "naaim",   "naaim_number",     1, "pos",     "weekly"),
    ("AAII Bull-Bear",     "manual",  "AAII Bull-Bear",   1, "pos",     "weekly"),
    ("Investors Intel.",   "manual",  "Investors Intel.", 1, "pos",     "weekly"),
    ("Short Interest",     "manual",  "Short Interest",  -1, "pos",     "monthly"),
    ("Insider Buy/Sell",   "manual",  "Insider Buy/Sell", 1, "pos",     "monthly"),
    # X/Twitter: moved from dead "alt" category into pos; null values are skipped
    ("X / Twitter Bull",   "manual",  "X / Twitter Bull", 1, "pos",    "manual"),

    # ── Markedsbredde ────────────────────────────────────────────────────────
    ("% over 50-DMA",      "breadth", "pct_above_50",     1, "breadth", "daily"),
    ("% over 200-DMA",     "breadth", "pct_above_200",    1, "breadth", "daily"),
    ("New Highs - Lows",   "breadth", "hl_net",           1, "breadth", "daily"),
    ("A/D Linje",          "breadth", "ad_cumulative",    1, "breadth", "daily"),
    ("McClellan Osc.",     "breadth", "mcclellan",        1, "breadth", "daily"),
    # Cap-weight vs equal-weight divergence: falling = leadership narrowing = fear
    ("SPY / RSP ratio",    "derived", "spy_rsp",         -1, "breadth", "rt"),
    # Short-term vs long-term breadth divergence: drop = early deterioration signal
    ("50/200 DMA divergence", "breadth", "dma_divergence", 1, "breadth", "daily"),
]


# ════════════════════════════════════════════════════════════════════════════
# DATA FETCHING
# ════════════════════════════════════════════════════════════════════════════

def fetch_yf(ticker: str, years: int = None) -> pd.Series | None:
    if years is None:
        years = CONFIG["history_years"]
    try:
        df = yf.download(ticker, period=f"{years}y", progress=False, auto_adjust=False)
        if df is None or df.empty:
            return None
        close = df["Close"]
        if isinstance(close, pd.DataFrame):
            close = close.iloc[:, 0]
        return close.dropna()
    except Exception as e:
        print(f"  ⚠ yfinance {ticker}: {e}")
        return None


def fetch_fred(series_id: str, years: int = None) -> pd.Series | None:
    if not FRED_API_KEY:
        return None
    if years is None:
        years = CONFIG["history_years"]
    end   = datetime.now()
    start = end - timedelta(days=int(years * 365.25) + 30)
    url   = "https://api.stlouisfed.org/fred/series/observations"
    params = {
        "series_id":        series_id,
        "api_key":          FRED_API_KEY,
        "file_type":        "json",
        "observation_start": start.strftime("%Y-%m-%d"),
    }
    try:
        r   = requests.get(url, params=params, timeout=15)
        r.raise_for_status()
        obs = r.json().get("observations", [])
        rows = [
            (pd.to_datetime(o["date"]), float(o["value"]))
            for o in obs if o["value"] not in (".", "")
        ]
        if not rows:
            return None
        idx, vals = zip(*rows)
        return pd.Series(vals, index=pd.DatetimeIndex(idx))
    except Exception as e:
        print(f"  ⚠ FRED {series_id}: {e}")
        return None


def fetch_sp500_breadth() -> dict | None:
    """
    Downloads S&P 500 component price data and computes breadth indicators.
    Uses history_years_breadth (default 1y) — intentionally short to limit
    download time; note this constrains z-score quality for breadth indicators.
    """
    try:
        r = requests.get(
            "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies",
            headers={"User-Agent": "Mozilla/5.0"},
            timeout=15,
        )
        tickers = (
            pd.read_html(io.StringIO(r.text))[0]["Symbol"]
            .str.replace(".", "-", regex=False)
            .tolist()
        )
    except Exception as e:
        print(f"  ⚠ S&P 500 list: {e}")
        return None

    yrs = CONFIG["history_years_breadth"]
    try:
        raw = yf.download(
            tickers,
            period=f"{yrs}y",
            progress=False,
            auto_adjust=False,
            group_by="ticker",
        )
    except Exception as e:
        print(f"  ⚠ S&P 500 batch download: {e}")
        return None

    if isinstance(raw.columns, pd.MultiIndex):
        try:
            close = raw.xs("Close", axis=1, level=1)
        except KeyError:
            close = raw.xs("Close", axis=1, level=0)
    else:
        close = raw["Close"]

    close = close.dropna(how="all")
    if close.empty or len(close) < 50:
        return None

    daily_ret = close.pct_change()
    total     = close.notna().sum(axis=1)

    pct_above_50  = (close > close.rolling(50).mean()).sum(axis=1)  / total * 100
    pct_above_200 = (close > close.rolling(200).mean()).sum(axis=1) / total * 100

    high52 = close.rolling(252).max()
    low52  = close.rolling(252).min()
    hl_net = (
        (close >= high52 * 0.995).sum(axis=1)
        - (close <= low52  * 1.005).sum(axis=1)
    ).astype(float)

    net_ad       = ((daily_ret > 0).sum(axis=1) - (daily_ret < 0).sum(axis=1)).astype(float)
    ad_cumulative = net_ad.cumsum()
    mcclellan    = (
        net_ad.ewm(span=19, adjust=False).mean()
        - net_ad.ewm(span=39, adjust=False).mean()
    )

    # ── CHANGE 9: breadth divergence — short-term vs long-term DMA breadth ──
    # Positive: %>50DMA ≥ %>200DMA (healthy); negative: 50DMA breadth < 200DMA
    # breadth = early deterioration signal (stocks breaking below 50 but still above 200).
    dma_divergence = pct_above_50 - pct_above_200

    return {
        "pct_above_50":   pct_above_50.dropna(),
        "pct_above_200":  pct_above_200.dropna(),
        "hl_net":         hl_net.dropna(),
        "ad_cumulative":  ad_cumulative.dropna(),
        "mcclellan":      mcclellan.dropna(),
        "dma_divergence": dma_divergence.dropna(),
    }


# ─── Manual indicators ────────────────────────────────────────────────────────
MANUAL_HIST_PARAMS = {
    "AAII Bull-Bear":   {"mean":  6.0,  "std": 17.0},
    "Investors Intel.": {"mean":  2.0,  "std":  0.5},
    "Short Interest":   {"mean":  2.5,  "std":  0.6},
    "Insider Buy/Sell": {"mean":  0.35, "std":  0.12},
    "X / Twitter Bull": {"mean": 52.0,  "std": 10.0},
}


def fetch_manual() -> dict:
    if not MANUAL_DATA_FILE.exists():
        return {}
    try:
        raw = json.loads(MANUAL_DATA_FILE.read_text())
    except Exception as e:
        print(f"  ⚠ manual_data.json: {e}")
        return {}

    cache = {}
    if MANUAL_CACHE_FILE.exists():
        try:
            cache = json.loads(MANUAL_CACHE_FILE.read_text())
        except Exception:
            cache = {}

    results   = {}
    today_str = datetime.now().strftime("%Y-%m-%d")

    for name, entry in raw.items():
        if name.startswith("_") or not isinstance(entry, dict):
            continue
        value = entry.get("value")
        if value is None:
            continue
        value    = float(value)
        obs_date = entry.get("date") or today_str

        if name not in cache:
            cache[name] = {}
        cache[name][obs_date] = value

        hist_params = MANUAL_HIST_PARAMS.get(name, {"mean": 50.0, "std": 10.0})
        hist_dates  = sorted(cache[name].keys())
        hist_vals   = [cache[name][d] for d in hist_dates]
        cache_series = pd.Series(
            hist_vals,
            index=pd.DatetimeIndex([pd.Timestamp(d) for d in hist_dates]),
        )

        if len(cache_series) >= 52:
            history = cache_series
        else:
            rng = pd.date_range(
                end=pd.Timestamp.today() - timedelta(days=len(cache_series) + 1),
                periods=200, freq="W",
            )
            np.random.seed(hash(name) % (2**32))
            synthetic = pd.Series(
                np.random.normal(hist_params["mean"], hist_params["std"], len(rng)),
                index=rng,
            )
            history = pd.concat([synthetic, cache_series]).sort_index()

        results[name] = (value, history)

    try:
        MANUAL_CACHE_FILE.write_text(json.dumps(cache, sort_keys=True, indent=2))
    except Exception:
        pass
    return results


def fetch_naaim() -> pd.Series | None:
    try:
        r = requests.get(
            "https://www.naaim.org/programs/naaim-exposure-index/",
            headers={"User-Agent": "Mozilla/5.0"},
            timeout=15,
        )
        soup       = BeautifulSoup(r.text, "html.parser")
        xlsx_links = [
            a["href"] for a in soup.find_all("a", href=True)
            if ".xlsx" in a["href"].lower() and "naaim" in a["href"].lower()
        ]
        if not xlsx_links:
            print("  ⚠ NAAIM: no xlsx link found")
            return None
        r2 = requests.get(xlsx_links[0], headers={"User-Agent": "Mozilla/5.0"}, timeout=20)
        r2.raise_for_status()
        df = pd.read_excel(io.BytesIO(r2.content))
        df["Date"] = pd.to_datetime(df["Date"], errors="coerce")
        df = df.dropna(subset=["Date", "NAAIM Number"]).sort_values("Date")
        return pd.Series(
            df["NAAIM Number"].values,
            index=pd.DatetimeIndex(df["Date"].values),
        ).dropna()
    except Exception as e:
        print(f"  ⚠ NAAIM: {e}")
        return None


def fetch_cboe_pcr():
    equity_pcr = None
    try:
        r    = requests.get(
            "https://www.cboe.com/us/options/market_statistics/daily/",
            headers={"User-Agent": "Mozilla/5.0"},
            timeout=15,
        )
        soup = BeautifulSoup(r.text, "html.parser")
        for table in soup.find_all("table"):
            for row in table.find_all("tr"):
                cells = [td.get_text(strip=True) for td in row.find_all(["td", "th"])]
                if len(cells) >= 2 and "EQUITY PUT/CALL" in cells[0].upper():
                    try:
                        equity_pcr = float(cells[1])
                    except ValueError:
                        pass
                    break
            if equity_pcr is not None:
                break
    except Exception as e:
        print(f"  ⚠ CBOE PCR: {e}")

    if equity_pcr is None:
        return None, None

    today_str = datetime.now().strftime("%Y-%m-%d")
    cache     = {}
    if PCR_CACHE_FILE.exists():
        try:
            cache = json.loads(PCR_CACHE_FILE.read_text())
        except Exception:
            cache = {}
    cache[today_str] = equity_pcr
    try:
        PCR_CACHE_FILE.write_text(json.dumps(cache, sort_keys=True))
    except Exception:
        pass

    cache_dates  = sorted(cache.keys())
    cache_series = pd.Series(
        [cache[d] for d in cache_dates],
        index=pd.DatetimeIndex([pd.Timestamp(d) for d in cache_dates]),
    )

    if len(cache_series) >= 60:
        history = cache_series
    else:
        rng       = pd.date_range(
            end=pd.Timestamp.today() - timedelta(days=len(cache_series) + 1),
            periods=500, freq="B",
        )
        np.random.seed(42)
        synthetic = pd.Series(
            np.random.normal(PCR_HIST_MEAN, PCR_HIST_STD, len(rng)),
            index=rng,
        ).clip(0.3, 1.2)
        history = pd.concat([synthetic, cache_series]).sort_index()

    return equity_pcr, history


# ════════════════════════════════════════════════════════════════════════════
# SCORING PRIMITIVES
# ════════════════════════════════════════════════════════════════════════════

def calc_position_and_zscore(value, history, direction):
    if history is None or len(history) < 30:
        return None, None
    history = history.dropna()
    if len(history) < 30:
        return None, None
    mean = float(history.mean())
    std  = float(history.std())

    percentile = float((history <= value).sum()) / len(history) * 100
    pos        = percentile if direction == 1 else 100 - percentile
    pos        = max(1.0, min(99.0, pos))

    # FIX 2 — guard against near-zero std (e.g. hl_net hovers near 0)
    if std < 1e-6:
        return float(pos), 0.0

    z_raw = (value - mean) / std

    # FIX 2 — global z clamp ±4; emit QA warning for |z|>5
    if abs(z_raw) > 5:
        _qa_warnings.append(
            f"QA: |z_raw|={z_raw:.2f} (>{5}) for indicator (std={std:.4g}, "
            f"n={len(history)}) — clamped to ±4"
        )
    z_clamped = max(-4.0, min(4.0, z_raw))

    return float(pos), float(z_clamped * direction)


def aligned_ratio(num: pd.Series, denom: pd.Series) -> pd.Series | None:
    if num is None or denom is None:
        return None
    aligned = pd.concat([num, denom], axis=1, keys=["n", "d"]).dropna()
    if aligned.empty:
        return None
    return aligned["n"] / aligned["d"]


# ════════════════════════════════════════════════════════════════════════════
# CHANGE 1 + 2: REGIME DETECTION & WEIGHT NORMALIZATION
# ════════════════════════════════════════════════════════════════════════════

def normalize_weights(w: dict) -> dict:
    """Normalize a weight dict so values sum to 1.0."""
    total = sum(w.values())
    return {k: v / total for k, v in w.items()}


def detect_regime(yf_data: dict) -> str:
    """
    RISK-OFF when:  SPX < its 200-day MA  OR  VIX > its 1-year median.
    RISK-ON otherwise.
    Returns 'risk-on' or 'risk-off'.
    """
    spx = yf_data.get("^GSPC")
    vix = yf_data.get("^VIX")
    flags = []

    if spx is not None and len(spx) >= CONFIG["regime_spx_ma_days"]:
        ma200     = spx.rolling(CONFIG["regime_spx_ma_days"]).mean().iloc[-1]
        spx_last  = float(spx.iloc[-1])
        flags.append(spx_last < float(ma200))          # True = bearish flag

    if vix is not None and len(vix) >= CONFIG["regime_vix_lookback_days"]:
        vix_med  = float(vix.rolling(CONFIG["regime_vix_lookback_days"]).median().iloc[-1])
        vix_last = float(vix.iloc[-1])
        flags.append(vix_last > vix_med)               # True = elevated fear

    if any(flags):
        return "risk_off"
    return "risk_on"


# ════════════════════════════════════════════════════════════════════════════
# CHANGE 3: CORRELATION-CLUSTER WEIGHTING (anti-double-counting)
# ════════════════════════════════════════════════════════════════════════════

def corr_cluster_weights(indicators_raw: dict) -> dict:
    """
    Returns {indicator_name: float} — within-category weights normalized to
    sum to 1.0 per category.

    When corr_penalty_enabled=True, indicators in a high-correlation cluster
    (|r| > corr_threshold) together occupy ONE independent-signal slot.
    Example: VIX and VVIX at r=0.92 → each gets 0.5× of one slot rather than
    both getting a full independent slot.
    """
    cfg     = CONFIG
    enabled = cfg["corr_penalty_enabled"]
    thresh  = cfg["corr_threshold"]
    min_obs = cfg["corr_min_obs"]

    by_cat = defaultdict(list)
    for name, d in indicators_raw.items():
        by_cat[d["category"]].append(name)

    weights = {}

    for cat, names in by_cat.items():
        n = len(names)
        if n == 1 or not enabled:
            for name in names:
                weights[name] = 1.0 / n
            continue

        # Build weekly-resampled series for each indicator that has a history
        histories = {}
        for name in names:
            h = indicators_raw[name].get("history")
            if h is not None and len(h) >= min_obs:
                weekly = h.resample("W").last().ffill().dropna()
                if len(weekly) >= min_obs:
                    histories[name] = weekly

        if len(histories) < 2:
            for name in names:
                weights[name] = 1.0 / n
            continue

        # Correlation on the aligned weekly series
        df   = pd.DataFrame(histories).dropna()
        if len(df) < min_obs:
            for name in names:
                weights[name] = 1.0 / n
            continue
        corr = df.corr().abs()

        # ── Connected-component clustering ──
        # Two indicators share a cluster if |r| > threshold (transitive).
        adj     = {nm: set() for nm in histories}
        for a, b in itertools.combinations(list(histories.keys()), 2):
            if corr.loc[a, b] > thresh:
                adj[a].add(b)
                adj[b].add(a)

        visited  = set()
        clusters = []
        for nm in histories:
            if nm not in visited:
                cluster = []
                queue   = [nm]
                while queue:
                    node = queue.pop()
                    if node in visited:
                        continue
                    visited.add(node)
                    cluster.append(node)
                    queue.extend(adj[node] - visited)
                clusters.append(cluster)

        # Indicators without enough history each form their own singleton cluster
        no_hist = [nm for nm in names if nm not in histories]
        for nm in no_hist:
            clusters.append([nm])

        # Each cluster = 1 independent signal; members share equally within cluster
        n_clusters = len(clusters)
        for cluster in clusters:
            member_weight = 1.0 / n_clusters / len(cluster)
            for nm in cluster:
                weights[nm] = member_weight

    return weights


# ════════════════════════════════════════════════════════════════════════════
# CHANGE 6: NON-LINEAR SIGNAL STRENGTH TRANSFORM
# ════════════════════════════════════════════════════════════════════════════

def signal_strength(score: float) -> float:
    """
    Piecewise-linear transform: neutral band (35-65) → 0.0;
    extremes (0 or 100) → ±1.0. Values outside [0,100] clipped.

    This makes the headline value 0 when there is no actionable signal,
    and ramps toward ±1 only at the extremes.
    """
    lo = CONFIG["signal_neutral_lo"]   # 35
    hi = CONFIG["signal_neutral_hi"]   # 65
    s  = max(0.0, min(100.0, score))

    if s <= lo:
        return round(-1.0 + (s / lo), 4)   # -1.0 at 0,  0.0 at 35
    elif s >= hi:
        return round((s - hi) / (100 - hi), 4)  # 0.0 at 65, +1.0 at 100
    else:
        return 0.0


# ════════════════════════════════════════════════════════════════════════════
# CHANGE 7: COMPOSITE HISTORY / RATE-OF-CHANGE
# ════════════════════════════════════════════════════════════════════════════

def load_composite_cache() -> dict:
    if COMPOSITE_CACHE_FILE.exists():
        try:
            return json.loads(COMPOSITE_CACHE_FILE.read_text())
        except Exception:
            pass
    return {}


def save_composite_cache(cache: dict) -> None:
    # Keep trailing 2 years (104 weeks ~ 730 days) to bound file size
    cutoff = (datetime.now() - timedelta(days=730)).strftime("%Y-%m-%d")
    pruned = {k: v for k, v in cache.items() if k >= cutoff}
    try:
        COMPOSITE_CACHE_FILE.write_text(json.dumps(pruned, sort_keys=True, indent=2))
    except Exception:
        pass


def calc_roc(cache: dict, composite_today: float) -> dict:
    """
    Returns {'1w': delta, '4w': delta, 'range_pct_1y': pct} for the composite.
    """
    today = datetime.now().date()
    roc   = {}
    for lag_weeks in CONFIG["roc_lags_weeks"]:
        target_date = (today - timedelta(weeks=lag_weeks)).isoformat()
        # Find nearest entry at or before target_date
        past_dates = sorted(k for k in cache if k <= target_date)
        if past_dates:
            past_val = cache[past_dates[-1]]["full"]
            roc[f"{lag_weeks}w"] = round(composite_today - past_val, 1)
        else:
            roc[f"{lag_weeks}w"] = None

    # 1-year range percentile — FIX 5: null when fewer than 2 historical points
    one_yr_ago = (today - timedelta(days=365)).isoformat()
    yr_vals    = [v["full"] for k, v in cache.items() if k >= one_yr_ago]
    roc["cache_days"] = len(cache)   # Transparency: how many days of history exist

    if len(yr_vals) >= 2:
        yr_vals_with_today = yr_vals + [composite_today]
        roc["range_pct_1y"] = round(
            float((np.array(yr_vals_with_today) <= composite_today).mean() * 100), 1
        )
    else:
        # FIX 5: misleading to show range_pct_1y=100 when only 1 day exists
        roc["range_pct_1y"] = None

    return roc


# ════════════════════════════════════════════════════════════════════════════
# CHANGE 1+2+3+5: COMPOSITE COMPUTATION (Python-side)
# ════════════════════════════════════════════════════════════════════════════

def calc_composites(
    indicators_raw: dict,
    ind_weights:    dict,
    regime:         str,
) -> dict:
    """
    Computes:
      - category scores (weighted average of pos, using correlation-cluster weights)
      - full composite (all indicators, regime-conditional category weights)
      - fast composite (RT + daily indicators only)

    Returns a dict suitable for JSON output.
    """
    # Category weights for this regime
    raw_cat_weights = CONFIG[f"weights_{regime}"]
    cat_weights     = normalize_weights(raw_cat_weights)

    fast_freqs = CONFIG["fast_freqs"]

    # ── Per-category weighted-average pos ────────────────────────────────────
    category_scores = {}
    fast_scores     = {}       # same logic but only fast-freq indicators

    categories = sorted(set(d["category"] for d in indicators_raw.values()))
    for cat in categories:
        members = [(nm, d) for nm, d in indicators_raw.items() if d["category"] == cat]
        if not members:
            continue

        # Full composite
        total_w, total_wpos = 0.0, 0.0
        fast_w,  fast_wpos  = 0.0, 0.0
        for nm, d in members:
            w   = ind_weights.get(nm, 1.0 / len(members))
            pos = d["pos"]
            total_w   += w
            total_wpos += w * pos
            if d["freq"] in fast_freqs:
                fast_w   += w
                fast_wpos += w * pos

        category_scores[cat] = round(total_wpos / total_w, 1) if total_w > 0 else 50.0
        fast_scores[cat]     = round(fast_wpos  / fast_w,  1) if fast_w  > 0 else None

    # ── Composite ─────────────────────────────────────────────────────────────
    # Only include categories present in the data
    present = set(category_scores.keys()) & set(cat_weights.keys())
    sub_w   = {c: cat_weights[c] for c in present}
    sub_w   = normalize_weights(sub_w)

    full_composite = round(
        sum(sub_w[c] * category_scores[c] for c in present), 1
    )

    # Fast composite: only include categories that have at least one fast indicator
    fast_cats = {c: s for c, s in fast_scores.items() if s is not None}
    if fast_cats:
        fsub_w     = {c: cat_weights[c] for c in fast_cats if c in cat_weights}
        fsub_w     = normalize_weights(fsub_w)
        fast_composite = round(
            sum(fsub_w[c] * fast_cats[c] for c in fast_cats if c in fsub_w), 1
        )
    else:
        fast_composite = full_composite

    return {
        "full":            full_composite,
        "fast":            fast_composite,
        "regime":          regime,
        "weights_used":    {k: round(v, 4) for k, v in sub_w.items()},
        "category_scores": category_scores,
        "signal_strength": signal_strength(full_composite),
    }


# ════════════════════════════════════════════════════════════════════════════
# LEGACY COMPOSITE (old green-count method for comparison)
# ════════════════════════════════════════════════════════════════════════════

def calc_legacy_composite(indicators_raw: dict) -> float:
    """Replicates the old JS frontend green-count composite for comparison."""
    old_weights = {
        "vol": 0.25, "credit": 0.25, "breadth": 0.20, "pos": 0.15, "cross": 0.15
    }
    by_cat = defaultdict(list)
    for nm, d in indicators_raw.items():
        # Exclude alt and manual-only categories that old frontend ignored
        if d["category"] in old_weights:
            by_cat[d["category"]].append(d["pos"])

    total = 0.0
    for cat, positions in by_cat.items():
        green_count  = sum(1 for p in positions if p > 65)
        panel_score  = (green_count / len(positions)) * 100 if positions else 50.0
        total       += old_weights.get(cat, 0) * panel_score

    # Normalize for any missing categories
    present_w = sum(old_weights[c] for c in by_cat if c in old_weights)
    return round(total / present_w * 1.0, 1) if present_w > 0 else 50.0


# ════════════════════════════════════════════════════════════════════════════
# MAIN
# ════════════════════════════════════════════════════════════════════════════
_qa_warnings: list = []   # Collected by calc_position_and_zscore; printed at end

def main():
    global _qa_warnings
    _qa_warnings = []   # Populated by calc_position_and_zscore; printed in QA section

    print("=" * 70)
    print("  Market Sentiment Dashboard  —  Composite Model v2")
    print("=" * 70)
    print()

    # ── Build yfinance ticker set ─────────────────────────────────────────────
    yf_tickers_needed = {"^GSPC", "^VIX3M"}
    derived_map = {
        "vix9d_vix":   ["^VIX", "^VIX9D"],
        "gold_silver": ["GC=F", "SI=F"],
        "copper_gold": ["HG=F", "GC=F"],
        "xlp_xly":     ["XLP", "XLY"],
        "spy_rsp":     ["SPY", "RSP"],
    }
    for _, source, info, _, _, _ in INDICATORS:
        if source == "yf":
            yf_tickers_needed.add(info)
        elif source == "derived":
            yf_tickers_needed.update(derived_map.get(info, []))

    # ── Fetch Yahoo Finance ────────────────────────────────────────────────────
    print(f"📈 Yahoo Finance ({len(yf_tickers_needed)} tickers, {CONFIG['history_years']}y):")
    yf_data = {}
    for ticker in sorted(yf_tickers_needed):
        h = fetch_yf(ticker)
        if h is not None and len(h) > 0:
            yf_data[ticker] = h
            print(f"   ✓ {ticker:14}  {float(h.iloc[-1]):>10.4g}   ({h.index[-1].date()})")
        else:
            print(f"   ✗ {ticker:14}  no data")
    print()

    # ── Fetch FRED ─────────────────────────────────────────────────────────────
    fred_data = {}
    if FRED_API_KEY:
        fred_series = [info for _, src, info, _, _, _ in INDICATORS if src == "fred"]
        print(f"🏦 FRED ({len(fred_series)} series, {CONFIG['history_years']}y):")
        for series in fred_series:
            h = fetch_fred(series)
            if h is not None and len(h) > 0:
                fred_data[series] = h
                print(f"   ✓ {series:16}  {float(h.iloc[-1]):>10.4g}   ({h.index[-1].date()})")
            else:
                print(f"   ✗ {series:16}  no data")
        print()
    else:
        print("⚠  No FRED_API_KEY — credit/macro indicators will be missing.\n")

    # ── Fetch manual, NAAIM, CBOE ─────────────────────────────────────────────
    manual_data = fetch_manual()
    if manual_data:
        print(f"✏️  Manual ({len(manual_data)} indicators):")
        for nm, (val, _) in manual_data.items():
            print(f"   ✓ {nm:24}  {val}")
        print()

    print("📋 NAAIM Exposure Index:")
    naaim_series = fetch_naaim()
    if naaim_series is not None:
        print(f"   ✓ {float(naaim_series.iloc[-1]):.2f}  ({naaim_series.index[-1].date()})")
    else:
        print("   ✗ unavailable")
    print()

    print("📊 CBOE Equity Put/Call Ratio:")
    cboe_pcr_value, cboe_pcr_history = fetch_cboe_pcr()
    if cboe_pcr_value is not None:
        print(f"   ✓ {cboe_pcr_value:.2f}  (today)")
    else:
        print("   ✗ unavailable")
    print()

    print(f"📊 S&P 500 breadth ({CONFIG['history_years_breadth']}y):")
    breadth_data = fetch_sp500_breadth()
    if breadth_data:
        for key, series in breadth_data.items():
            if series is not None and len(series) > 0:
                print(f"   ✓ {key:24}  {float(series.iloc[-1]):>8.2f}   ({series.index[-1].date()})")
    else:
        print("   ✗ unavailable")
    print()

    # ── FIX 1: Validate POLARITY dict against INDICATORS direction column ─────
    print("🔏 Polarity config (FIX 1 — explicit POLARITY dict validation):")
    sign_changes = []
    polarity_ok  = True
    for name, _src, _info, ind_dir, _cat, _freq in INDICATORS:
        pol = POLARITY.get(name)
        if pol is None:
            print(f"   ⚠ MISSING from POLARITY dict: {name}")
            polarity_ok = False
        elif pol != ind_dir:
            sign_changes.append((name, ind_dir, pol))
            polarity_ok = False
    if sign_changes:
        print("   ⚠ SIGN CHANGES (POLARITY overrides INDICATORS direction):")
        for nm, old, new in sign_changes:
            print(f"     {nm:28}  {old:+d} → {new:+d}")
    elif polarity_ok:
        print("   ✓ All directions match POLARITY dict — no sign changes.")

    print()
    print("   Polarity table:")
    print(f"   {'Indicator':28}  {'Dir':>4}  {'Greed when...'}")
    print("   " + "─" * 65)
    greed_desc = {
        "VIX": "VIX low", "VVIX": "VVIX low", "SKEW Index": "SKEW low",
        "VIX Term Structure": "ratio<1 (contango)", "Put/Call Ratio": "PCR low",
        "MOVE Index": "MOVE low", "HY Credit Spread": "spread tight",
        "IG Credit Spread": "spread tight", "2s10s kurve": "steep curve",
        "Financial Conds.": "NFCI low", "SOFR": "SOFR low",
        "Guld/Sølv ratio": "ratio historically low", "Kobber/Guld ratio": "ratio high",
        "DXY": "weak USD", "XLP / XLY ratio": "discretionary leading",
        "Bitcoin (BTC)": "BTC high", "NAAIM Exposure": "high exposure",
        "AAII Bull-Bear": "bullish spread", "Investors Intel.": "bullish %",
        "Short Interest": "low short interest", "Insider Buy/Sell": "net buying",
        "X / Twitter Bull": "social bullishness",
        "% over 50-DMA": "high %", "% over 200-DMA": "high %",
        "New Highs - Lows": "positive net", "A/D Linje": "rising cumulative",
        "McClellan Osc.": "positive", "SPY / RSP ratio": "RSP leads (broad breadth)",
        "50/200 DMA divergence": "50DMA breadth ≥ 200DMA",
    }
    for name, _s, _i, _d, cat, _f in INDICATORS:
        pol = POLARITY.get(name, _d)
        desc = greed_desc.get(name, "")
        print(f"   {name:28}  {pol:+d}   {desc}")
    print()

    # ── Detect regime ─────────────────────────────────────────────────────────
    regime = detect_regime(yf_data)
    print(f"🌡  Regime detected: {regime.upper()}")
    cat_weights = normalize_weights(CONFIG[f"weights_{regime}"])
    print("    Category weights used:")
    for cat, w in sorted(cat_weights.items(), key=lambda x: -x[1]):
        print(f"      {cat:12}  {w:.1%}")
    print()

    # ── Compute per-indicator pos/z ───────────────────────────────────────────
    print("🧮 Indicator scores:")
    indicators_raw = {}   # {name: {pos, z, base, category, freq, history}}

    for name, source, info, direction, category, freq in INDICATORS:
        value, history = None, None

        if source == "yf":
            s = yf_data.get(info)
            if s is not None and len(s) > 0:
                value, history = float(s.iloc[-1]), s

        elif source == "fred":
            s = fred_data.get(info)
            if s is not None and len(s) > 0:
                value, history = float(s.iloc[-1]), s

        elif source == "derived":
            if info == "vix9d_vix":
                s = aligned_ratio(yf_data.get("^VIX9D"), yf_data.get("^VIX"))
            elif info == "gold_silver":
                s = aligned_ratio(yf_data.get("GC=F"), yf_data.get("SI=F"))
            elif info == "copper_gold":
                s = aligned_ratio(yf_data.get("HG=F"), yf_data.get("GC=F"))
            elif info == "xlp_xly":
                s = aligned_ratio(yf_data.get("XLP"), yf_data.get("XLY"))
            elif info == "spy_rsp":
                s = aligned_ratio(yf_data.get("SPY"), yf_data.get("RSP"))
            else:
                s = None
            if s is not None and len(s) > 0:
                value, history = float(s.iloc[-1]), s

        elif source == "manual":
            entry = manual_data.get(info)
            if entry is not None:
                value, history = entry

        elif source == "naaim":
            if naaim_series is not None and len(naaim_series) > 0:
                value, history = float(naaim_series.iloc[-1]), naaim_series

        elif source == "cboe":
            if cboe_pcr_value is not None:
                value, history = cboe_pcr_value, cboe_pcr_history

        elif source == "breadth":
            if breadth_data:
                s = breadth_data.get(info)
                if s is not None and len(s) > 0:
                    value, history = float(s.iloc[-1]), s

        if value is not None and history is not None:
            pos, z = calc_position_and_zscore(value, history, direction)
            if pos is not None:
                indicators_raw[name] = {
                    "base":     value,
                    "pos":      pos,
                    "z":        z,
                    "category": category,
                    "freq":     freq,
                    "history":  history,
                }
                print(f"   ✓ {name:28}  pos={pos:5.1f}  z={z:+.2f}  base={value:.4g}")
            else:
                print(f"   ⚠ {name:28}  insufficient history")
        else:
            print(f"   ✗ {name:28}  no data")

    print()

    # ── CHANGE 3: Correlation matrix & cluster weights ─────────────────────────
    ind_weights = corr_cluster_weights(indicators_raw)

    if CONFIG["corr_penalty_enabled"]:
        print("🔗 Correlation-cluster weights (anti-double-counting):")
        by_cat = defaultdict(dict)
        for nm, w in ind_weights.items():
            cat = indicators_raw[nm]["category"]
            by_cat[cat][nm] = w
        for cat in sorted(by_cat):
            print(f"   {cat}:")
            for nm, w in sorted(by_cat[cat].items(), key=lambda x: -x[1]):
                print(f"     {nm:28}  {w:.3f}")

        # Print correlation matrix per category for transparency
        print()
        print("📊 Pairwise |r| > 0.50 (weekly resampled):")
        cats_shown = set()
        for nm, d in indicators_raw.items():
            cat = d["category"]
            if cat in cats_shown:
                continue
            members = [(n, v) for n, v in indicators_raw.items() if v["category"] == cat]
            if len(members) < 2:
                continue
            cats_shown.add(cat)
            hists = {}
            for n, v in members:
                h = v.get("history")
                if h is not None:
                    weekly = h.resample("W").last().ffill().dropna()
                    if len(weekly) >= CONFIG["corr_min_obs"]:
                        hists[n] = weekly
            if len(hists) < 2:
                continue
            df   = pd.DataFrame(hists).dropna()
            corr = df.corr().abs()
            pairs_printed = False
            for a, b in itertools.combinations(list(hists.keys()), 2):
                r = corr.loc[a, b]
                if r > 0.50:
                    marker = " ← clustered" if r > CONFIG["corr_threshold"] else ""
                    print(f"   [{cat}] {a} × {b}: |r|={r:.2f}{marker}")
                    pairs_printed = True
            if not pairs_printed:
                print(f"   [{cat}] no pairs |r|>0.50")
        print()

    # ── CHANGE 1+2+5: Compute composites ──────────────────────────────────────
    result  = calc_composites(indicators_raw, ind_weights, regime)
    legacy  = calc_legacy_composite(indicators_raw)
    roc_cfg = calc_roc.__doc__  # (just using load/save below)

    # Rate-of-change vs composite history
    comp_cache = load_composite_cache()
    roc        = calc_roc(comp_cache, result["full"])

    # Persist today's composite
    today_str              = datetime.now().strftime("%Y-%m-%d")
    comp_cache[today_str]  = {"full": result["full"], "fast": result["fast"], "regime": result["regime"]}
    save_composite_cache(comp_cache)

    result["roc"]          = roc
    result["window_years"] = CONFIG["history_years"]

    # ── FIX 3: Explicit per-category aggregation report ───────────────────────
    print("📐 Category aggregation (FIX 3 — method: weighted-avg of pos via corr-clusters):")
    for cat in sorted(result["category_scores"].keys()):
        members = [(nm, d) for nm, d in indicators_raw.items() if d["category"] == cat]
        plain_mean = sum(d["pos"] for _, d in members) / len(members) if members else 0
        weighted_score = result["category_scores"][cat]
        method = "plain-mean (no clusters)" if abs(weighted_score - plain_mean) < 0.5 else "cluster-weighted"
        print(f"  {cat:14}  plain-mean={plain_mean:5.1f}  cluster-weighted={weighted_score:5.1f}  [{method}]")
        for nm, d in sorted(members, key=lambda x: -ind_weights.get(x[0], 0)):
            w = ind_weights.get(nm, 1.0 / len(members))
            print(f"    {nm:28}  pos={d['pos']:5.1f}  weight={w:.3f}")
    print()

    # ── Summary printout ──────────────────────────────────────────────────────
    print("═" * 70)
    print("  COMPOSITE RESULTS")
    print("═" * 70)
    print(f"  Regime         : {regime.upper()}")
    print(f"  Full composite : {result['full']:5.1f} / 100")
    print(f"  Fast composite : {result['fast']:5.1f} / 100  (RT + daily only)")
    print(f"  Signal strength: {result['signal_strength']:+.3f}  (-1=extreme fear, +1=extreme greed)")
    print()
    print("  Category scores (OLD plain-mean → NEW cluster-weighted):")
    for cat, score in sorted(result["category_scores"].items(), key=lambda x: -x[1]):
        w = result["weights_used"].get(cat, 0)
        members = [(nm, d) for nm, d in indicators_raw.items() if d["category"] == cat]
        plain = sum(d["pos"] for _, d in members) / len(members) if members else 0
        print(f"    {cat:14}  {plain:5.1f} → {score:5.1f}   (weight {w:.1%})")
    print()
    print("  Rate-of-change:")
    for lag_weeks in CONFIG["roc_lags_weeks"]:
        delta = roc.get(f"{lag_weeks}w")
        print(f"    {lag_weeks}-week change:  {('+' if delta and delta >= 0 else '') + str(delta)}")
    pct = roc.get("range_pct_1y")
    days = roc.get("cache_days", 0)
    # FIX 5: show null when insufficient cache
    pct_str = f"{pct}%" if pct is not None else f"null ({days} cache day(s) — need ≥2)"
    print(f"    1-year range pct: {pct_str}")
    print()
    print("─" * 70)
    print(f"  OLD composite (JS green-count, old weights) : {legacy:5.1f}")
    print(f"  NEW composite (Python weighted-avg, new weights): {result['full']:5.1f}")
    delta_vs_old = result["full"] - legacy
    print(f"  Delta: {delta_vs_old:+.1f} pts  ({'↑ new is higher' if delta_vs_old > 0 else '↓ new is lower'})")
    print("─" * 70)
    print()

    # ── QA section (FIX 2) ────────────────────────────────────────────────────
    print("🔬 QA — Indicator anomalies:")
    qa_found = False
    for nm, d in indicators_raw.items():
        flags = []
        if abs(d["z"]) >= 3.9:
            flags.append(f"|z|={d['z']:.2f} (clamped at ±4)")
        if d["pos"] <= 1.5:
            flags.append(f"pos pinned at floor ({d['pos']:.1f})")
        if d["pos"] >= 98.5:
            flags.append(f"pos pinned at ceiling ({d['pos']:.1f})")
        if abs(d["pos"] - 50.0) < 0.01:
            flags.append("pos exactly 50.0 (possible std=0 fallback)")
        if flags:
            print(f"  ⚠ {nm:28}  " + ";  ".join(flags))
            qa_found = True
    if _qa_warnings:
        for w in _qa_warnings:
            print(f"  ⚠ {w}")
        qa_found = True
    if not qa_found:
        print("  ✓ No anomalies detected.")
    print()

    # ── Assemble header stats ─────────────────────────────────────────────────
    spx_data = yf_data.get("^GSPC")
    spx_payload = None
    if spx_data is not None and len(spx_data) > 1:
        sv, sp = float(spx_data.iloc[-1]), float(spx_data.iloc[-2])
        spx_payload = {"value": sv, "change_pct": (sv - sp) / sp * 100}

    vix_data = yf_data.get("^VIX")
    vix_payload = None
    if vix_data is not None and len(vix_data) > 1:
        vv, vp = float(vix_data.iloc[-1]), float(vix_data.iloc[-2])
        vix_payload = {"value": vv, "change_pct": (vv - vp) / vp * 100}

    vix_contango = {}
    vix9d_s = yf_data.get("^VIX9D")
    vix_s   = yf_data.get("^VIX")
    vix3m_s = yf_data.get("^VIX3M")
    if vix9d_s is not None and vix_s is not None:
        vix_contango["front"] = bool(float(vix9d_s.iloc[-1]) < float(vix_s.iloc[-1]))
    if vix_s is not None and vix3m_s is not None:
        vix_contango["back"] = bool(float(vix_s.iloc[-1]) < float(vix3m_s.iloc[-1]))

    # ── Build output — strip history from indicators_raw before serializing ───
    indicators_out = {
        nm: {"base": d["base"], "pos": d["pos"], "z": d["z"], "freq": d["freq"]}
        for nm, d in indicators_raw.items()
    }

    output = {
        "timestamp":  datetime.now().isoformat(timespec="seconds"),
        "spx":        spx_payload,
        "vix_ticker": vix_payload,
        "vix_contango": vix_contango,
        "composite":  {k: v for k, v in result.items() if k != "history"},
        "indicators": indicators_out,
    }

    js_content = (
        f"// Auto-generated by update_dashboard.py  —  {datetime.now().isoformat(timespec='seconds')}\n"
        f"// Live indicators: {len(indicators_out)} / {len(INDICATORS)}  |  "
        f"regime: {regime}  |  composite: {result['full']}\n\n"
        f"window.DASHBOARD_DATA = {json.dumps(output, indent=2, default=str)};\n"
    )
    OUTPUT_FILE.write_text(js_content, encoding="utf-8")
    print(f"💾 Wrote {OUTPUT_FILE}")
    print(f"   Live: {len(indicators_out)} / {len(INDICATORS)} indicators")
    print()
    print("✅ Done.")

    if GITHUB_TOKEN and not os.environ.get("GITHUB_ACTIONS_RUN"):
        _push_to_github(js_content)


def _push_to_github(js_content: str) -> None:
    import base64, subprocess
    api_url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/data.js"
    headers = {"Authorization": f"token {GITHUB_TOKEN}", "Content-Type": "application/json"}
    r   = requests.get(api_url, headers=headers, timeout=15)
    sha = r.json().get("sha") if r.status_code == 200 else None
    payload = {
        "message": f"auto: update data.js {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        "content": base64.b64encode(js_content.encode()).decode(),
    }
    if sha:
        payload["sha"] = sha
    r2 = requests.put(api_url, headers=headers, json=payload, timeout=15)
    if r2.status_code in (200, 201):
        repo_dir = str(OUTPUT_FILE.parent)
        remote   = f"https://jacobhonoreDK:{GITHUB_TOKEN}@github.com/{GITHUB_REPO}.git"
        subprocess.run(["git", "-C", repo_dir, "fetch", remote, "main:refs/remotes/origin/main"], capture_output=True)
        subprocess.run(["git", "-C", repo_dir, "reset", "--soft", "origin/main"], capture_output=True)
        print("🌐 GitHub Pages updated → https://jacobhonoredk.github.io/sentiment-dashboard/")
    else:
        print(f"⚠ GitHub push failed: {r2.status_code} {r2.json().get('message')}")


if __name__ == "__main__":
    main()
