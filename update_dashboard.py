#!/usr/bin/env python3
"""
Market Sentiment Dashboard - Live Data Updater
================================================

Henter ægte markedsdata fra Yahoo Finance og FRED, beregner z-scores
ud fra 3 års historik, og skriver data.js som dashboard.html læser.

Kør scriptet med:
    python3 update_dashboard.py

For kredit-data (HY/IG spreads, NFCI, 2s10s) skal du have en gratis
FRED API-nøgle. Den får du på 30 sekunder her:
    https://fred.stlouisfed.org/docs/api/api_key.html

Sæt den derefter som environment variable:
    export FRED_API_KEY=din_noegle_her

Se SETUP.md for fuld vejledning, inkl. automatisk timely opdatering via launchd.
"""

import io
import json
import os
import sys
from datetime import datetime, timedelta
from pathlib import Path
from bs4 import BeautifulSoup

# ---- Dependency check -------------------------------------------------------
try:
    import numpy as np
    import pandas as pd
    import requests
    import yfinance as yf
except ImportError as e:
    missing = e.name
    print(f"❌ Mangler Python-pakke: {missing}")
    print()
    print("Installer afhængigheder med:")
    print("    pip3 install yfinance pandas numpy requests")
    sys.exit(1)


# ---- Configuration ----------------------------------------------------------
FRED_API_KEY = os.environ.get("FRED_API_KEY", "").strip()
OUTPUT_FILE = Path(__file__).parent / "data.js"
PCR_CACHE_FILE = Path(__file__).parent / "pcr_cache.json"
MANUAL_DATA_FILE = Path(__file__).parent / "manual_data.json"
HISTORY_YEARS = 3

# Historiske normalfordelingsparametre for equity put/call ratio
# (baseret på CBOE data 2010-2024: mean ~0.64, std ~0.10)
PCR_HIST_MEAN = 0.64
PCR_HIST_STD = 0.10

INDICATORS = [
    # Volatilitet & Optioner
    ("VIX",                "yf",      "^VIX",          -1, "vol"),
    ("VVIX",               "yf",      "^VVIX",         -1, "vol"),
    ("SKEW Index",         "yf",      "^SKEW",         -1, "vol"),
    ("VIX Term Structure", "derived", "vix9d_vix",     -1, "vol"),

    # Kredit & Makro
    ("MOVE Index",         "yf",      "^MOVE",         -1, "credit"),
    ("HY Credit Spread",   "fred",    "BAMLH0A0HYM2",  -1, "credit"),
    ("IG Credit Spread",   "fred",    "BAMLC0A4CBBB",  -1, "credit"),
    ("2s10s kurve",        "fred",    "T10Y2Y",         1, "credit"),
    ("Financial Conds.",   "fred",    "NFCI",          -1, "credit"),

    # Cross-Asset
    ("Guld/Sølv ratio",    "derived", "gold_silver",   -1, "cross"),
    ("Kobber/Guld ratio",  "derived", "copper_gold",    1, "cross"),
    ("DXY",                "yf",      "DX-Y.NYB",      -1, "cross"),
    ("XLP / XLY ratio",    "derived", "xlp_xly",       -1, "cross"),
    ("Bitcoin (BTC)",      "yf",      "BTC-USD",        1, "cross"),

    # Positionering & sentiment
    ("NAAIM Exposure",     "naaim",   "naaim_number",   1, "pos"),
    ("Put/Call Ratio",     "cboe",    "equity_pcr",    -1, "vol"),

    # Manuel input (opdateres i manual_data.json)
    ("AAII Bull-Bear",     "manual",  "AAII Bull-Bear",  1, "pos"),
    ("Investors Intel.",   "manual",  "Investors Intel.", 1, "pos"),
    ("Short Interest",     "manual",  "Short Interest",  -1, "pos"),
    ("Insider Buy/Sell",   "manual",  "Insider Buy/Sell", 1, "pos"),
    ("X / Twitter Bull",   "manual",  "X / Twitter Bull", 1, "alt"),

    # Markedsbredde (beregnes fra S&P 500 komponent-data)
    ("% over 50-DMA",      "breadth", "pct_above_50",   1, "breadth"),
    ("% over 200-DMA",     "breadth", "pct_above_200",  1, "breadth"),
    ("New Highs - Lows",   "breadth", "hl_net",         1, "breadth"),
    ("A/D Linje",          "breadth", "ad_cumulative",  1, "breadth"),
    ("McClellan Osc.",     "breadth", "mcclellan",      1, "breadth"),
]


# ---- Data fetching ----------------------------------------------------------
def fetch_yf(ticker: str, years: int = HISTORY_YEARS):
    try:
        df = yf.download(ticker, period=f"{years}y", progress=False, auto_adjust=False)
        if df is None or df.empty:
            return None
        close = df["Close"]
        if isinstance(close, pd.DataFrame):
            close = close.iloc[:, 0]
        return close.dropna()
    except Exception as e:
        print(f"  ⚠ Fejl ved hentning af {ticker}: {e}")
        return None


def fetch_fred(series_id: str, years: int = HISTORY_YEARS):
    if not FRED_API_KEY:
        return None
    end = datetime.now()
    start = end - timedelta(days=int(years * 365.25) + 30)
    url = "https://api.stlouisfed.org/fred/series/observations"
    params = {
        "series_id": series_id,
        "api_key": FRED_API_KEY,
        "file_type": "json",
        "observation_start": start.strftime("%Y-%m-%d"),
    }
    try:
        r = requests.get(url, params=params, timeout=15)
        r.raise_for_status()
        obs = r.json().get("observations", [])
        rows = [
            (pd.to_datetime(o["date"]), float(o["value"]))
            for o in obs
            if o["value"] not in (".", "")
        ]
        if not rows:
            return None
        idx, vals = zip(*rows)
        return pd.Series(vals, index=pd.DatetimeIndex(idx))
    except Exception as e:
        print(f"  ⚠ Fejl ved hentning af FRED {series_id}: {e}")
        return None


def fetch_sp500_breadth():
    """
    Henter S&P 500 komponentliste fra Wikipedia og downloader 1 års kursdata.
    Returnerer dict med daglige tidsserier for alle breadth-indikatorer.
    """
    try:
        r = requests.get(
            "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies",
            headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"},
            timeout=15,
        )
        tickers = (
            pd.read_html(io.StringIO(r.text))[0]["Symbol"]
            .str.replace(".", "-", regex=False)
            .tolist()
        )
    except Exception as e:
        print(f"  ⚠ Kunne ikke hente S&P 500-liste: {e}")
        return None

    try:
        raw = yf.download(
            tickers,
            period="1y",
            progress=False,
            auto_adjust=False,
            group_by="ticker",
        )
    except Exception as e:
        print(f"  ⚠ Fejl ved batch-download af S&P 500: {e}")
        return None

    # Byg date × ticker Close-matrix
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
    total = close.notna().sum(axis=1)

    # % over 50-DMA og 200-DMA
    pct_above_50 = (close > close.rolling(50).mean()).sum(axis=1) / total * 100
    pct_above_200 = (close > close.rolling(200).mean()).sum(axis=1) / total * 100

    # New Highs - Lows (52-uger ≈ 252 handelsdage)
    high52 = close.rolling(252).max()
    low52 = close.rolling(252).min()
    hl_net = ((close >= high52 * 0.995).sum(axis=1) - (close <= low52 * 1.005).sum(axis=1)).astype(float)

    # A/D linje: kumuleret sum af (antal op − antal ned) pr. dag
    net_ad = ((daily_ret > 0).sum(axis=1) - (daily_ret < 0).sum(axis=1)).astype(float)
    ad_cumulative = net_ad.cumsum()

    # McClellan Oscillator: 19-dages EMA − 39-dages EMA af daglig net A/D
    mcclellan = (
        net_ad.ewm(span=19, adjust=False).mean()
        - net_ad.ewm(span=39, adjust=False).mean()
    )

    return {
        "pct_above_50":  pct_above_50.dropna(),
        "pct_above_200": pct_above_200.dropna(),
        "hl_net":        hl_net.dropna(),
        "ad_cumulative": ad_cumulative.dropna(),
        "mcclellan":     mcclellan.dropna(),
    }


# ---- Manuel input -----------------------------------------------------------
# Historiske normalfordelingsparametre til z-score når vi kun har én observasjon
MANUAL_HIST_PARAMS = {
    "AAII Bull-Bear":   {"mean":  6.0, "std": 17.0},   # range ca. -40 til +50
    "Investors Intel.": {"mean":  2.0, "std":  0.5},   # ratio, mean ~2.0
    "Short Interest":   {"mean":  2.5, "std":  0.6},   # % af float, mean ~2.5%
    "Insider Buy/Sell": {"mean":  0.35, "std": 0.12},  # ratio 0-1
    "X / Twitter Bull": {"mean": 52.0, "std": 10.0},   # %, mean ~52%
}

MANUAL_CACHE_FILE = Path(__file__).parent / "manual_cache.json"


def fetch_manual():
    """
    Læser manual_data.json og returnerer dict:
      { indikator_navn: (value, history_series) }
    Akkumulerer historik i manual_cache.json for bedre z-scores over tid.
    Indikatorer sat til null i JSON springes over.
    """
    if not MANUAL_DATA_FILE.exists():
        return {}

    try:
        raw = json.loads(MANUAL_DATA_FILE.read_text())
    except Exception as e:
        print(f"  ⚠ Kunne ikke læse manual_data.json: {e}")
        return {}

    # Læs eksisterende cache
    cache = {}
    if MANUAL_CACHE_FILE.exists():
        try:
            cache = json.loads(MANUAL_CACHE_FILE.read_text())
        except Exception:
            cache = {}

    results = {}
    today_str = datetime.now().strftime("%Y-%m-%d")

    for name, entry in raw.items():
        if name.startswith("_") or not isinstance(entry, dict):
            continue
        value = entry.get("value")
        if value is None:
            continue
        value = float(value)

        # Opdater cache med denne observations dato
        obs_date = entry.get("date") or today_str
        if name not in cache:
            cache[name] = {}
        cache[name][obs_date] = value

        # Byg historisk serie fra cache + syntetisk baggrundsserie
        hist_params = MANUAL_HIST_PARAMS.get(name, {"mean": 50.0, "std": 10.0})
        hist_dates = sorted(cache[name].keys())
        hist_vals = [cache[name][d] for d in hist_dates]
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

    # Gem opdateret cache
    try:
        MANUAL_CACHE_FILE.write_text(json.dumps(cache, sort_keys=True, indent=2))
    except Exception:
        pass

    return results


# ---- NAAIM Exposure Index ---------------------------------------------------
def fetch_naaim():
    """
    Henter NAAIM Exposure Index fra naaim.org's ugentlige Excel-fil.
    Returnerer en pd.Series med historik siden 2006.
    """
    try:
        r = requests.get(
            "https://www.naaim.org/programs/naaim-exposure-index/",
            headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"},
            timeout=15,
        )
        soup = BeautifulSoup(r.text, "html.parser")
        xlsx_links = [
            a["href"] for a in soup.find_all("a", href=True)
            if ".xlsx" in a["href"].lower() and "naaim" in a["href"].lower()
        ]
        if not xlsx_links:
            print("  ⚠ NAAIM: ingen xlsx-link fundet på siden")
            return None
        url = xlsx_links[0]
        r2 = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=20)
        r2.raise_for_status()
        df = pd.read_excel(io.BytesIO(r2.content))
        df["Date"] = pd.to_datetime(df["Date"], errors="coerce")
        df = df.dropna(subset=["Date", "NAAIM Number"]).sort_values("Date")
        series = pd.Series(
            df["NAAIM Number"].values,
            index=pd.DatetimeIndex(df["Date"].values),
        )
        return series.dropna()
    except Exception as e:
        print(f"  ⚠ NAAIM fejl: {e}")
        return None


# ---- CBOE Put/Call Ratio ----------------------------------------------------
def fetch_cboe_pcr():
    """
    Scraper dagens equity put/call ratio fra CBOE's daglige statistikside.
    Akkumulerer historik i en lokal cache-fil og bruger kendte historiske
    parametre (mean=0.64, std=0.10) som fallback til z-score-beregning.
    Returnerer (value, history_series).
    """
    equity_pcr = None
    try:
        r = requests.get(
            "https://www.cboe.com/us/options/market_statistics/daily/",
            headers={"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)"},
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
        print(f"  ⚠ CBOE PCR fejl: {e}")

    if equity_pcr is None:
        return None, None

    # Opdater lokal cache
    today_str = datetime.now().strftime("%Y-%m-%d")
    cache = {}
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

    # Byg historisk serie fra cache + syntetisk historik baseret på kendte parametre
    cache_dates = sorted(cache.keys())
    cache_vals = [cache[d] for d in cache_dates]
    cache_series = pd.Series(
        cache_vals,
        index=pd.DatetimeIndex([pd.Timestamp(d) for d in cache_dates]),
    )

    if len(cache_series) >= 60:
        history = cache_series
    else:
        # Syntetisk 3-årig baggrundsserie baseret på historiske parametre
        rng = pd.date_range(end=pd.Timestamp.today() - timedelta(days=len(cache_series) + 1),
                            periods=500, freq="B")
        np.random.seed(42)
        synthetic = pd.Series(
            np.random.normal(PCR_HIST_MEAN, PCR_HIST_STD, len(rng)),
            index=rng,
        ).clip(0.3, 1.2)
        history = pd.concat([synthetic, cache_series]).sort_index()

    return equity_pcr, history


# ---- Position & z-score beregning -------------------------------------------
def calc_position_and_zscore(value, history, direction):
    if history is None or len(history) < 30:
        return None, None
    history = history.dropna()
    if len(history) < 30:
        return None, None
    mean = float(history.mean())
    std = float(history.std())
    if std == 0:
        return 50.0, 0.0
    z_raw = (value - mean) / std
    percentile = float((history <= value).sum()) / len(history) * 100
    pos = percentile if direction == 1 else 100 - percentile
    z = z_raw * direction
    pos = max(1.0, min(99.0, pos))
    return float(pos), float(z)


def aligned_ratio(num: pd.Series, denom: pd.Series) -> pd.Series:
    if num is None or denom is None:
        return None
    aligned = pd.concat([num, denom], axis=1, keys=["n", "d"]).dropna()
    if aligned.empty:
        return None
    return aligned["n"] / aligned["d"]


# ---- Main -------------------------------------------------------------------
def main():
    print("=" * 64)
    print("  Market Sentiment Dashboard - Live Data Updater")
    print("=" * 64)
    print()

    # Find alle yfinance tickere vi skal bruge
    yf_tickers_needed = {"^GSPC"}
    for name, source, info, _, _ in INDICATORS:
        if source == "yf":
            yf_tickers_needed.add(info)
        elif source == "derived":
            mapping = {
                "vix9d_vix":   ["^VIX", "^VIX9D"],
                "gold_silver": ["GC=F", "SI=F"],
                "copper_gold": ["HG=F", "GC=F"],
                "xlp_xly":     ["XLP", "XLY"],
            }
            yf_tickers_needed.update(mapping.get(info, []))

    # ---- Hent Yahoo Finance data ----
    print(f"📈 Henter {len(yf_tickers_needed)} tickere fra Yahoo Finance:")
    yf_data = {}
    for ticker in sorted(yf_tickers_needed):
        h = fetch_yf(ticker)
        if h is not None and len(h) > 0:
            yf_data[ticker] = h
            print(f"   ✓ {ticker:14}  →  {float(h.iloc[-1]):>10.4g}   (sidste: {h.index[-1].date()})")
        else:
            print(f"   ✗ {ticker:14}  →  ingen data")
    print()

    # ---- Hent FRED data ----
    fred_data = {}
    if FRED_API_KEY:
        fred_series = [info for _, source, info, _, _ in INDICATORS if source == "fred"]
        print(f"🏦 Henter {len(fred_series)} serier fra FRED:")
        for series in fred_series:
            h = fetch_fred(series)
            if h is not None and len(h) > 0:
                fred_data[series] = h
                print(f"   ✓ {series:14}  →  {float(h.iloc[-1]):>10.4g}   (sidste: {h.index[-1].date()})")
            else:
                print(f"   ✗ {series:14}  →  ingen data")
        print()
    else:
        print("⚠  Ingen FRED API-nøgle fundet.")
        print("   Sæt FRED_API_KEY for at få kredit-indikatorer.")
        print()

    # ---- Læs manuel data ----
    manual_data = fetch_manual()
    live_manual = [k for k in manual_data]
    if live_manual:
        print(f"✏️  Manuel data ({len(live_manual)} indikatorer):")
        for name, (val, _) in manual_data.items():
            print(f"   ✓ {name:24}  →  {val}")
    else:
        print("✏️  Ingen manuel data fundet (manual_data.json er tomt — udfyld det for ekstra indikatorer)")
    print()

    # ---- Hent NAAIM data ----
    print("📋 Henter NAAIM Exposure Index (ugentlig):")
    naaim_series = fetch_naaim()
    if naaim_series is not None and len(naaim_series) > 0:
        print(f"   ✓ NAAIM Number        →  {float(naaim_series.iloc[-1]):>8.2f}   (sidste: {naaim_series.index[-1].date()})")
    else:
        print("   ✗ NAAIM data utilgængeligt")
    print()

    # ---- Hent CBOE Put/Call data ----
    print("📊 Henter CBOE Equity Put/Call Ratio (daglig):")
    cboe_pcr_value, cboe_pcr_history = fetch_cboe_pcr()
    if cboe_pcr_value is not None:
        print(f"   ✓ Equity PCR          →  {cboe_pcr_value:>8.2f}   (i dag)")
    else:
        print("   ✗ CBOE PCR utilgængeligt")
    print()

    # ---- Hent S&P 500 breadth data ----
    print("📊 Henter S&P 500 komponent-data til breadth-indikatorer (~20 sek.):")
    breadth_data = fetch_sp500_breadth()
    if breadth_data:
        for key, series in breadth_data.items():
            if series is not None and len(series) > 0:
                print(f"   ✓ {key:20}  →  {float(series.iloc[-1]):>8.2f}   (sidste: {series.index[-1].date()})")
    else:
        print("   ✗ Breadth-data utilgængeligt")
    print()

    # ---- Beregn indikatorer ----
    print("🧮 Beregner positioner og z-scores fra historik:")
    indicators_out = {}

    for name, source, info, direction, category in INDICATORS:
        value, history = None, None

        if source == "yf":
            series = yf_data.get(info)
            if series is not None and len(series) > 0:
                value = float(series.iloc[-1])
                history = series

        elif source == "fred":
            series = fred_data.get(info)
            if series is not None and len(series) > 0:
                value = float(series.iloc[-1])
                history = series

        elif source == "derived":
            if info == "vix9d_vix":
                series = aligned_ratio(yf_data.get("^VIX9D"), yf_data.get("^VIX"))
            elif info == "gold_silver":
                series = aligned_ratio(yf_data.get("GC=F"), yf_data.get("SI=F"))
            elif info == "copper_gold":
                series = aligned_ratio(yf_data.get("HG=F"), yf_data.get("GC=F"))
            elif info == "xlp_xly":
                series = aligned_ratio(yf_data.get("XLP"), yf_data.get("XLY"))
            else:
                series = None
            if series is not None and len(series) > 0:
                value = float(series.iloc[-1])
                history = series

        elif source == "manual":
            entry = manual_data.get(info)
            if entry is not None:
                value, history = entry

        elif source == "naaim":
            if naaim_series is not None and len(naaim_series) > 0:
                value = float(naaim_series.iloc[-1])
                history = naaim_series

        elif source == "cboe":
            if cboe_pcr_value is not None:
                value = cboe_pcr_value
                history = cboe_pcr_history

        elif source == "breadth":
            if breadth_data:
                series = breadth_data.get(info)
                if series is not None and len(series) > 0:
                    value = float(series.iloc[-1])
                    history = series

        if value is not None and history is not None:
            pos, z = calc_position_and_zscore(value, history, direction)
            if pos is not None:
                indicators_out[name] = {"base": value, "pos": pos, "z": z}
                print(f"   ✓ {name:24}  base={value:>10.4g}   pos={pos:5.1f}   z={z:+.2f}")
            else:
                print(f"   ⚠ {name:24}  utilstrækkelig historik")
        else:
            print(f"   ✗ {name:24}  ingen data")

    print()

    # ---- S&P 500 og VIX til headeren ----
    spx_data = yf_data.get("^GSPC")
    spx_payload = None
    if spx_data is not None and len(spx_data) > 1:
        spx_value = float(spx_data.iloc[-1])
        spx_prev = float(spx_data.iloc[-2])
        spx_payload = {"value": spx_value, "change_pct": (spx_value - spx_prev) / spx_prev * 100}

    vix_data = yf_data.get("^VIX")
    vix_payload = None
    if vix_data is not None and len(vix_data) > 1:
        vix_value = float(vix_data.iloc[-1])
        vix_prev = float(vix_data.iloc[-2])
        vix_payload = {"value": vix_value, "change_pct": (vix_value - vix_prev) / vix_prev * 100}

    # ---- Saml output ----
    output = {
        "timestamp": datetime.now().isoformat(timespec="seconds"),
        "spx": spx_payload,
        "vix_ticker": vix_payload,
        "indicators": indicators_out,
    }

    js_content = (
        f"// Auto-genereret af update_dashboard.py - {datetime.now().isoformat(timespec='seconds')}\n"
        f"// Live indikatorer: {len(indicators_out)} / {len(INDICATORS)} mulige\n\n"
        f"window.DASHBOARD_DATA = {json.dumps(output, indent=2, default=str)};\n"
    )
    OUTPUT_FILE.write_text(js_content, encoding="utf-8")

    print(f"💾 Skrev {OUTPUT_FILE}")
    print(f"   Live indikatorer: {len(indicators_out)} / {len(INDICATORS)} mulige")
    print()
    print("✅ Færdig. Genindlæs dashboard.html i din browser for at se de nye tal.")


if __name__ == "__main__":
    main()
