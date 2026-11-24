window.SCANNER_DATA = {
 "generatedAt": "2026-11-24T00:52:44Z",
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
   "price": 165.05,
   "sma50": 206.08,
   "sma200": 203.24,
   "rsi": 42.9,
   "adx": 49.3,
   "bar": "2026-11-23",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 140.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.18,
    "mid": 3.62,
    "roc": 30.5,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 42.9 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.19,
    "mid": 2.67,
    "roc": 19.0,
    "capital": 16505
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 453.46,
   "sma50": 552.3,
   "sma200": 431.01,
   "rsi": 42.6,
   "adx": 18.4,
   "bar": "2026-11-23",
   "peg": 0.38,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 355.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": -0.15,
    "mid": 12.12,
    "roc": 32.8,
    "capital": 35500
   },
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 570.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.16,
    "mid": 7.33,
    "roc": 19.0,
    "capital": 45346
   },
   "callFails": [
    "ADX 18.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 492.5,
   "sma50": 519.58,
   "sma200": 444.09,
   "rsi": 39.1,
   "adx": 18.3,
   "bar": "2026-11-23",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 80.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 450.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": -0.21,
    "mid": 7.17,
    "roc": 15.3,
    "capital": 45000
   },
   "putFails": [
    "ADX 18.3 not above 25",
    "RSI 39.1 too high for a put"
   ],
   "call": {
    "strike": 525.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.28,
    "mid": 6.7,
    "roc": 16.0,
    "capital": 49250
   },
   "callFails": [
    "ADX 18.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 597.6,
   "sma50": 675.29,
   "sma200": 628.27,
   "rsi": 41.7,
   "adx": 25.6,
   "bar": "2026-11-23",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 82.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 520.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.15,
    "mid": 7.2,
    "roc": 16.3,
    "capital": 52000
   },
   "putFails": [
    "below 200-day SMA",
    "RSI 41.7 too high for a put"
   ],
   "call": {
    "strike": 660.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.24,
    "mid": 8.55,
    "roc": 16.8,
    "capital": 59760
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 282.1,
   "sma50": 320.95,
   "sma200": 336.77,
   "rsi": 41.0,
   "adx": 22.9,
   "bar": "2026-11-23",
   "peg": 0.94,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 255.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": -0.2,
    "mid": 4.0,
    "roc": 15.1,
    "capital": 25500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 22.9 not above 25",
    "next earnings date unavailable",
    "RSI 41.0 too high for a put"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.26,
    "mid": 3.62,
    "roc": 15.1,
    "capital": 28210
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 22.9 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 255.39,
   "sma50": 255.07,
   "sma200": 245.38,
   "rsi": 48.4,
   "adx": 10.2,
   "bar": "2026-11-23",
   "peg": 1.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 83.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 230.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.17,
    "mid": 3.05,
    "roc": 15.6,
    "capital": 23000
   },
   "putFails": [
    "ADX 10.2 not above 25",
    "next earnings date unavailable",
    "RSI 48.4 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.28,
    "mid": 3.9,
    "roc": 18.0,
    "capital": 25539
   },
   "callFails": [
    "ADX 10.2 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 385.46,
   "sma50": 376.17,
   "sma200": 381.53,
   "rsi": 52.1,
   "adx": 11.3,
   "bar": "2026-11-23",
   "peg": 4.03,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 330.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.15,
    "mid": 5.8,
    "roc": 20.7,
    "capital": 33000
   },
   "putFails": [
    "ADX 11.3 not above 25",
    "PEG 4.03 outside 0 to 2.5",
    "RSI 52.1 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.22,
    "mid": 5.65,
    "roc": 17.3,
    "capital": 38546
   },
   "callFails": [
    "ADX 11.3 not above 25",
    "PEG 4.03 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 159.36,
   "sma50": 182.98,
   "sma200": 154.09,
   "rsi": 41.7,
   "adx": 29.2,
   "bar": "2026-11-23",
   "peg": 1.13,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 82.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 135.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.97,
    "roc": 25.9,
    "capital": 13500
   },
   "putFails": [
    "RSI 41.7 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.19,
    "mid": 2.2,
    "roc": 16.2,
    "capital": 15936
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 208.97,
   "sma50": 246.52,
   "sma200": 176.74,
   "rsi": 37.8,
   "adx": 18.5,
   "bar": "2026-11-23",
   "peg": 5.92,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 175.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.17,
    "mid": 4.55,
    "roc": 30.6,
    "capital": 17500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "PEG 5.92 outside 0 to 2.5"
   ],
   "call": {
    "strike": 250.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": 0.23,
    "mid": 4.95,
    "roc": 22.8,
    "capital": 20897
   },
   "callFails": [
    "ADX 18.5 not above 25",
    "PEG 5.92 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 108.78,
   "sma50": 162.14,
   "sma200": 172.17,
   "rsi": 29.8,
   "adx": 42.2,
   "bar": "2026-11-23",
   "peg": 0.45,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 76.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.17,
    "mid": 2.76,
    "roc": 36.1,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 140.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": 0.16,
    "mid": 1.79,
    "roc": 15.8,
    "capital": 10878
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 84.4,
   "sma50": 137.86,
   "sma200": 131.51,
   "rsi": 27.0,
   "adx": 32.1,
   "bar": "2026-11-23",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 74.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.66,
    "roc": 48.1,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 115.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": 0.17,
    "mid": 1.77,
    "roc": 20.1,
    "capital": 8440
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
   "price": 5.58,
   "sma50": 8.85,
   "sma200": 10.54,
   "rsi": 35.8,
   "adx": 31.5,
   "bar": "2026-11-23",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 90.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 4.5,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.21,
    "mid": 0.29,
    "roc": 74.6,
    "capital": 450
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 8.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.16,
    "mid": 0.12,
    "roc": 26.4,
    "capital": 558
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 67.37,
   "sma50": 97.53,
   "sma200": 90.89,
   "rsi": 31.6,
   "adx": 33.7,
   "bar": "2026-11-23",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 84.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": {
    "strike": 55.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": -0.16,
    "mid": 1.47,
    "roc": 31.5,
    "capital": 5500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 84.0,
    "exp": "2026-12-24",
    "dte": 31,
    "delta": 0.15,
    "mid": 0.93,
    "roc": 16.2,
    "capital": 6737
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 185.0,
   "exp": "2026-12-24",
   "dte": 31,
   "delta": 0.19,
   "mid": 2.2,
   "roc": 16.2,
   "capital": 15936,
   "ivr": 82.9,
   "rsi": 41.7,
   "adx": 29.2,
   "price": 159.36,
   "sma50": 182.98,
   "sma200": 154.09
  }
 ],
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
