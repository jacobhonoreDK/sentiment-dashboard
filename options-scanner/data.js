window.SCANNER_DATA = {
 "generatedAt": "2026-11-23T02:46:33Z",
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
   "price": 125.53,
   "sma50": 207.0,
   "sma200": 203.35,
   "rsi": 15.0,
   "adx": 50.6,
   "bar": "2026-11-20",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 63.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 100.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.16,
    "mid": 3.35,
    "roc": 38.2,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 155.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.18,
    "mid": 2.21,
    "roc": 20.0,
    "capital": 12553
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 424.39,
   "sma50": 553.1,
   "sma200": 429.79,
   "rsi": 38.4,
   "adx": 17.9,
   "bar": "2026-11-20",
   "peg": 0.44,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 77.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 320.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": -0.15,
    "mid": 13.88,
    "roc": 40.6,
    "capital": 32000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.9 not above 25",
    "RSI 38.4 too high for a put"
   ],
   "call": {
    "strike": 575.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": 0.16,
    "mid": 7.95,
    "roc": 17.5,
    "capital": 42439
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 484.52,
   "sma50": 519.84,
   "sma200": 443.63,
   "rsi": 34.8,
   "adx": 18.3,
   "bar": "2026-11-20",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 58.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 430.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.19,
    "mid": 8.22,
    "roc": 21.8,
    "capital": 43000
   },
   "putFails": [
    "ADX 18.3 not above 25"
   ],
   "call": {
    "strike": 525.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": 0.29,
    "mid": 8.53,
    "roc": 16.5,
    "capital": 48452
   },
   "callFails": [
    "ADX 18.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 560.84,
   "sma50": 676.65,
   "sma200": 628.59,
   "rsi": 30.3,
   "adx": 25.0,
   "bar": "2026-11-20",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 60.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 470.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": -0.15,
    "mid": 9.7,
    "roc": 19.3,
    "capital": 47000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 25.0 not above 25"
   ],
   "call": {
    "strike": 640.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.2,
    "mid": 7.53,
    "roc": 15.3,
    "capital": 56084
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 25.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 265.29,
   "sma50": 322.3,
   "sma200": 336.97,
   "rsi": 27.8,
   "adx": 23.6,
   "bar": "2026-11-20",
   "peg": 0.94,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 77.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 230.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.16,
    "mid": 4.03,
    "roc": 20.0,
    "capital": 23000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 295.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.23,
    "mid": 3.58,
    "roc": 15.4,
    "capital": 26529
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 246.82,
   "sma50": 255.03,
   "sma200": 245.15,
   "rsi": 42.3,
   "adx": 11.0,
   "bar": "2026-11-20",
   "peg": 1.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 55.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 220.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": -0.21,
    "mid": 5.05,
    "roc": 21.5,
    "capital": 22000
   },
   "putFails": [
    "ADX 11.0 not above 25",
    "next earnings date unavailable",
    "RSI 42.3 too high for a put"
   ],
   "call": {
    "strike": 270.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.28,
    "mid": 4.5,
    "roc": 20.8,
    "capital": 24682
   },
   "callFails": [
    "ADX 11.0 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 345.82,
   "sma50": 375.64,
   "sma200": 381.66,
   "rsi": 37.8,
   "adx": 11.7,
   "bar": "2026-11-20",
   "peg": 4.03,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 73.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 285.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.16,
    "mid": 7.38,
    "roc": 29.5,
    "capital": 28500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 11.7 not above 25",
    "PEG 4.03 outside 0 to 2.5"
   ],
   "call": {
    "strike": 405.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.19,
    "mid": 5.03,
    "roc": 16.6,
    "capital": 34582
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 11.7 not above 25",
    "PEG 4.03 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 143.49,
   "sma50": 183.26,
   "sma200": 153.97,
   "rsi": 26.4,
   "adx": 30.1,
   "bar": "2026-11-20",
   "peg": 1.13,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 59.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 115.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": -0.15,
    "mid": 3.28,
    "roc": 26.7,
    "capital": 11500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.2,
    "mid": 2.43,
    "roc": 19.3,
    "capital": 14349
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 229.44,
   "sma50": 247.04,
   "sma200": 176.19,
   "rsi": 46.1,
   "adx": 18.2,
   "bar": "2026-11-20",
   "peg": 5.92,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 93.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": -0.19,
    "mid": 8.4,
    "roc": 42.5,
    "capital": 18500
   },
   "putFails": [
    "ADX 18.2 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "RSI 46.1 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-31",
    "dte": 39,
    "delta": 0.26,
    "mid": 7.78,
    "roc": 31.7,
    "capital": 22944
   },
   "callFails": [
    "ADX 18.2 not above 25",
    "PEG 5.92 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 101.97,
   "sma50": 163.79,
   "sma200": 172.45,
   "rsi": 22.9,
   "adx": 40.6,
   "bar": "2026-11-20",
   "peg": 0.45,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 58.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 80.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.27,
    "roc": 46.6,
    "capital": 8000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
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
   "price": 77.8,
   "sma50": 138.91,
   "sma200": 131.76,
   "rsi": 20.2,
   "adx": 30.4,
   "bar": "2026-11-20",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 50.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 60.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.19,
    "mid": 4.05,
    "roc": 77.0,
    "capital": 6000
   },
   "putFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 105.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.2,
    "mid": 2.18,
    "roc": 32.0,
    "capital": 7780
   },
   "callFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 5.09,
   "sma50": 8.97,
   "sma200": 10.56,
   "rsi": 30.1,
   "adx": 31.4,
   "bar": "2026-11-20",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 54.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 4.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.21,
    "mid": 0.32,
    "roc": 89.8,
    "capital": 400
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 7.5,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.16,
    "mid": 0.12,
    "roc": 28.0,
    "capital": 509
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 62.17,
   "sma50": 98.47,
   "sma200": 90.97,
   "rsi": 22.8,
   "adx": 33.4,
   "bar": "2026-11-20",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 55.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 55.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": -0.27,
    "mid": 3.38,
    "roc": 70.0,
    "capital": 5500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 80.0,
    "exp": "2026-12-24",
    "dte": 32,
    "delta": 0.16,
    "mid": 1.06,
    "roc": 19.5,
    "capital": 6217
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
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
