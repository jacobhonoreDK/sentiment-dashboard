window.SCANNER_DATA = {
 "generatedAt": "2026-10-13T03:03:40Z",
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
   "price": 226.32,
   "sma50": 222.59,
   "sma200": 202.34,
   "rsi": 49.4,
   "adx": 17.0,
   "bar": "2026-10-12",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 30.09,
   "ivr": 5.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 215.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.26,
    "mid": 3.55,
    "roc": 18.8,
    "capital": 21500
   },
   "putFails": [
    "ADX 17.0 not above 25",
    "IV rank 5.5 not above 30",
    "RSI 49.4 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.28,
    "mid": 3.25,
    "roc": 16.4,
    "capital": 22632
   },
   "callFails": [
    "ADX 17.0 not above 25",
    "IV rank 5.5 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 594.24,
   "sma50": 531.28,
   "sma200": 387.22,
   "rsi": 53.0,
   "adx": 25.2,
   "bar": "2026-10-12",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 52.97,
   "ivr": 26.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 515.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.16,
    "mid": 8.6,
    "roc": 19.0,
    "capital": 51500
   },
   "putFails": [
    "IV rank 26.3 not above 30",
    "RSI 53.0 too high for a put"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.18,
    "mid": 8.35,
    "roc": 16.0,
    "capital": 59424
   },
   "callFails": [
    "IV rank 26.3 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 541.15,
   "sma50": 501.98,
   "sma200": 434.28,
   "rsi": 69.9,
   "adx": 40.1,
   "bar": "2026-10-12",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 30.87,
   "ivr": 49.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 510.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.24,
    "mid": 7.47,
    "roc": 16.7,
    "capital": 51000
   },
   "putFails": [
    "RSI 69.9 too high for a put"
   ],
   "call": {
    "strike": 575.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.28,
    "mid": 7.6,
    "roc": 16.0,
    "capital": 54115
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 742.96,
   "sma50": 643.46,
   "sma200": 630.52,
   "rsi": 62.3,
   "adx": 36.3,
   "bar": "2026-10-12",
   "peg": 0.98,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 44.48,
   "ivr": 62.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 660.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.16,
    "mid": 9.18,
    "roc": 15.9,
    "capital": 66000
   },
   "putFails": [
    "RSI 62.3 too high for a put"
   ],
   "call": {
    "strike": 840.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.2,
    "mid": 10.43,
    "roc": 16.0,
    "capital": 74296
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 352.72,
   "sma50": 346.18,
   "sma200": 340.22,
   "rsi": 57.2,
   "adx": 17.3,
   "bar": "2026-10-12",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.34,
   "ivr": 60.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.2,
    "mid": 4.43,
    "roc": 15.5,
    "capital": 32500
   },
   "putFails": [
    "ADX 17.3 not above 25",
    "RSI 57.2 too high for a put"
   ],
   "call": {
    "strike": 385.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.24,
    "mid": 4.68,
    "roc": 15.1,
    "capital": 35272
   },
   "callFails": [
    "ADX 17.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 259.53,
   "sma50": 258.85,
   "sma200": 242.29,
   "rsi": 55.6,
   "adx": 14.0,
   "bar": "2026-10-12",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 38.99,
   "ivr": 59.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.22,
    "mid": 4.08,
    "roc": 19.4,
    "capital": 24000
   },
   "putFails": [
    "ADX 14.0 not above 25",
    "RSI 55.6 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.24,
    "mid": 3.88,
    "roc": 17.0,
    "capital": 25953
   },
   "callFails": [
    "ADX 14.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 378.03,
   "sma50": 356.08,
   "sma200": 390.07,
   "rsi": 56.4,
   "adx": 17.0,
   "bar": "2026-10-12",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 42.26,
   "ivr": 21.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 340.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.18,
    "mid": 4.83,
    "roc": 16.2,
    "capital": 34000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 21.2 not above 30",
    "RSI 56.4 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.2,
    "mid": 4.97,
    "roc": 15.0,
    "capital": 37803
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 21.2 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 209.0,
   "sma50": 178.7,
   "sma200": 152.41,
   "rsi": 76.2,
   "adx": 35.1,
   "bar": "2026-10-12",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 56.08,
   "ivr": 51.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 180.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.42,
    "roc": 21.7,
    "capital": 18000
   },
   "putFails": [
    "RSI 76.2 too high for a put"
   ],
   "call": {
    "strike": 250.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": 0.18,
    "mid": 3.35,
    "roc": 15.0,
    "capital": 20900
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 263.01,
   "sma50": 230.15,
   "sma200": 158.03,
   "rsi": 56.9,
   "adx": 24.9,
   "bar": "2026-10-12",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 50.04,
   "ivr": 41.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": -0.15,
    "mid": 3.88,
    "roc": 16.1,
    "capital": 22500
   },
   "putFails": [
    "ADX 24.9 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 56.9 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": 0.19,
    "mid": 4.28,
    "roc": 15.2,
    "capital": 26301
   },
   "callFails": [
    "ADX 24.9 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 180.39,
   "sma50": 175.25,
   "sma200": 183.47,
   "rsi": 48.5,
   "adx": 19.4,
   "bar": "2026-10-12",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 65.01,
   "ivr": 40.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 150.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": -0.16,
    "mid": 3.45,
    "roc": 21.5,
    "capital": 15000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25",
    "RSI 48.5 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": 0.17,
    "mid": 3.15,
    "roc": 16.3,
    "capital": 18039
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 152.68,
   "sma50": 131.01,
   "sma200": 135.83,
   "rsi": 53.9,
   "adx": 33.4,
   "bar": "2026-10-12",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 64.47,
   "ivr": 13.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 130.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.08,
    "roc": 27.0,
    "capital": 13000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 13.9 not above 30",
    "RSI 53.9 too high for a put"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.61,
    "roc": 19.5,
    "capital": 15268
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 13.9 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 9.44,
   "sma50": 11.11,
   "sma200": 10.98,
   "rsi": 31.8,
   "adx": 17.4,
   "bar": "2026-10-12",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 74.75,
   "ivr": 0.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 8.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.19,
    "mid": 0.26,
    "roc": 36.4,
    "capital": 800
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.4 not above 25",
    "IV rank 0.0 not above 30"
   ],
   "call": {
    "strike": 12.5,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.16,
    "mid": 0.16,
    "roc": 19.3,
    "capital": 944
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.4 not above 25",
    "IV rank 0.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 109.22,
   "sma50": 107.69,
   "sma200": 94.05,
   "rsi": 46.1,
   "adx": 13.2,
   "bar": "2026-10-12",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 63.55,
   "ivr": 29.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 95.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.2,
    "mid": 2.49,
    "roc": 29.9,
    "capital": 9500
   },
   "putFails": [
    "ADX 13.2 not above 25",
    "IV rank 29.2 not above 30",
    "RSI 46.1 too high for a put"
   ],
   "call": {
    "strike": 135.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.17,
    "mid": 1.71,
    "roc": 17.8,
    "capital": 10922
   },
   "callFails": [
    "ADX 13.2 not above 25",
    "IV rank 29.2 not above 30"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 575.0,
   "exp": "2026-11-13",
   "dte": 32,
   "delta": 0.28,
   "mid": 7.6,
   "roc": 16.0,
   "capital": 54115,
   "ivr": 49.3,
   "rsi": 69.9,
   "adx": 40.1,
   "price": 541.15,
   "sma50": 501.98,
   "sma200": 434.28
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 840.0,
   "exp": "2026-11-13",
   "dte": 32,
   "delta": 0.2,
   "mid": 10.43,
   "roc": 16.0,
   "capital": 74296,
   "ivr": 62.0,
   "rsi": 62.3,
   "adx": 36.3,
   "price": 742.96,
   "sma50": 643.46,
   "sma200": 630.52
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 250.0,
   "exp": "2026-11-20",
   "dte": 39,
   "delta": 0.18,
   "mid": 3.35,
   "roc": 15.0,
   "capital": 20900,
   "ivr": 51.0,
   "rsi": 76.2,
   "adx": 35.1,
   "price": 209.0,
   "sma50": 178.7,
   "sma200": 152.41
  }
 ],
 "errors": []
};
