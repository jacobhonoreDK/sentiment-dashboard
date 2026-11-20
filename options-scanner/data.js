window.SCANNER_DATA = {
 "generatedAt": "2026-11-20T13:52:28Z",
 "rules": {
  "dte_min": 30,
  "dte_max": 45,
  "delta_min": 0.15,
  "delta_max": 0.3,
  "ivr_min": 30.0,
  "adx_min": 25.0,
  "rsi_max_csp": 38.0,
  "peg_max": 2.5,
  "roc_min": 15.0,
  "risk_free": 0.04,
  "max_spread": 0.35
 },
 "tickers": [
  "NVDA",
  "AMD",
  "MSFT",
  "META",
  "GOOGL",
  "AMZN",
  "TSLA",
  "PLTR",
  "CRWD",
  "COIN",
  "MSTR",
  "MARA",
  "HOOD"
 ],
 "screen": [
  {
   "ticker": "NVDA",
   "price": 145.98,
   "sma50": 208.86,
   "sma200": 203.58,
   "rsi": 19.6,
   "adx": 48.6,
   "bar": "2026-11-19",
   "peg": 0.18,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 63.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-31",
    "dte": 41,
    "delta": -0.15,
    "mid": 3.08,
    "roc": 22.9,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 160.0,
    "exp": "2026-12-24",
    "dte": 34,
    "delta": 0.27,
    "mid": 2.76,
    "roc": 20.3,
    "capital": 14598
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 489.19,
   "sma50": 554.93,
   "sma200": 428.63,
   "rsi": 45.2,
   "adx": 17.3,
   "bar": "2026-11-19",
   "peg": 0.47,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 77.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 400.0,
    "exp": "2026-12-24",
    "dte": 34,
    "delta": -0.21,
    "mid": 21.9,
    "roc": 58.8,
    "capital": 40000
   },
   "putFails": [
    "ADX 17.3 not above 25",
    "RSI 45.2 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 17.3 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 498.3,
   "sma50": 520.06,
   "sma200": 443.18,
   "rsi": 39.2,
   "adx": 17.9,
   "bar": "2026-11-19",
   "peg": 1.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 58.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 460.0,
    "exp": "2026-12-24",
    "dte": 34,
    "delta": -0.26,
    "mid": 11.5,
    "roc": 26.8,
    "capital": 46000
   },
   "putFails": [
    "ADX 17.9 not above 25",
    "RSI 39.2 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 17.9 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 596.22,
   "sma50": 678.4,
   "sma200": 629.14,
   "rsi": 36.7,
   "adx": 23.6,
   "bar": "2026-11-19",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 60.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 510.0,
    "exp": "2026-12-24",
    "dte": 34,
    "delta": -0.16,
    "mid": 10.0,
    "roc": 21.0,
    "capital": 51000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 272.66,
   "sma50": 323.76,
   "sma200": 337.3,
   "rsi": 30.6,
   "adx": 24.3,
   "bar": "2026-11-19",
   "peg": 1.0,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 77.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 24.3 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 24.3 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 257.37,
   "sma50": 255.23,
   "sma200": 245.03,
   "rsi": 49.0,
   "adx": 11.5,
   "bar": "2026-11-19",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 55.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "ADX 11.5 not above 25",
    "next earnings date unavailable",
    "RSI 49.0 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 11.5 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 374.41,
   "sma50": 376.03,
   "sma200": 381.92,
   "rsi": 47.2,
   "adx": 10.9,
   "bar": "2026-11-19",
   "peg": 4.47,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 73.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 335.0,
    "exp": "2026-12-24",
    "dte": 34,
    "delta": -0.24,
    "mid": 11.4,
    "roc": 36.5,
    "capital": 33500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 10.9 not above 25",
    "PEG 4.47 outside 0 to 2.5",
    "RSI 47.2 too high for a put"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 10.9 not above 25",
    "PEG 4.47 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 153.68,
   "sma50": 183.73,
   "sma200": 153.9,
   "rsi": 31.3,
   "adx": 29.7,
   "bar": "2026-11-19",
   "peg": 1.24,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 59.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 243.46,
   "sma50": 246.59,
   "sma200": 175.52,
   "rsi": 53.4,
   "adx": 19.5,
   "bar": "2026-11-19",
   "peg": 6.12,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 93.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "ADX 19.5 not above 25",
    "PEG 6.12 outside 0 to 2.5",
    "RSI 53.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 19.5 not above 25",
    "PEG 6.12 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 108.87,
   "sma50": 165.26,
   "sma200": 172.67,
   "rsi": 25.3,
   "adx": 38.8,
   "bar": "2026-11-19",
   "peg": 0.49,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 58.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 86.13,
   "sma50": 139.97,
   "sma200": 131.9,
   "rsi": 22.7,
   "adx": 27.9,
   "bar": "2026-11-19",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 50.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.25,
   "sma50": 9.11,
   "sma200": 10.57,
   "rsi": 37.5,
   "adx": 30.9,
   "bar": "2026-11-19",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 54.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 68.65,
   "sma50": 99.47,
   "sma200": 91.02,
   "rsi": 26.8,
   "adx": 32.7,
   "bar": "2026-11-19",
   "peg": 1.12,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 55.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": [
  "NVDA: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/NVDA.json)",
  "AMD: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/AMD.json)",
  "MSFT: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/MSFT.json)",
  "META: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/META.json)",
  "GOOGL: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/GOOGL.json)",
  "AMZN: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/AMZN.json)",
  "TSLA: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/TSLA.json)",
  "PLTR: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/PLTR.json)",
  "CRWD: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/CRWD.json)",
  "COIN: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/COIN.json)",
  "MSTR: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/MSTR.json)",
  "MARA: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/MARA.json)",
  "HOOD: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/HOOD.json)"
 ]
};
