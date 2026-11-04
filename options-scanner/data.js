window.SCANNER_DATA = {
 "generatedAt": "2026-11-04T17:21:24Z",
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
   "price": 203.18,
   "sma50": 221.26,
   "sma200": 204.69,
   "rsi": 36.5,
   "adx": 23.6,
   "bar": "2026-11-04",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 46.62,
   "ivr": 71.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 173.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": -0.15,
    "mid": 3.15,
    "roc": 15.1,
    "capital": 17300
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.24,
    "mid": 3.25,
    "roc": 19.5,
    "capital": 20318
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 488.0,
   "sma50": 548.88,
   "sma200": 414.22,
   "rsi": 39.3,
   "adx": 22.5,
   "bar": "2026-11-04",
   "peg": 0.46,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.79,
   "ivr": 50.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 410.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.15,
    "mid": 7.5,
    "roc": 22.3,
    "capital": 41000
   },
   "putFails": [
    "ADX 22.5 not above 25",
    "RSI 39.3 too high for a put"
   ],
   "call": {
    "strike": 585.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.16,
    "mid": 6.45,
    "roc": 16.1,
    "capital": 48800
   },
   "callFails": [
    "ADX 22.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 555.43,
   "sma50": 515.34,
   "sma200": 438.99,
   "rsi": 64.2,
   "adx": 22.7,
   "bar": "2026-11-04",
   "peg": 1.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 26.76,
   "ivr": 38.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 530.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.26,
    "mid": 7.08,
    "roc": 16.2,
    "capital": 53000
   },
   "putFails": [
    "ADX 22.7 not above 25",
    "RSI 64.2 too high for a put"
   ],
   "call": {
    "strike": 585.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.27,
    "mid": 6.65,
    "roc": 14.6,
    "capital": 55543
   },
   "callFails": [
    "ADX 22.7 not above 25",
    "best ROC 14.6% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 638.0,
   "sma50": 673.72,
   "sma200": 632.21,
   "rsi": 42.7,
   "adx": 26.4,
   "bar": "2026-11-04",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 37.93,
   "ivr": 49.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 580.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.19,
    "mid": 7.93,
    "roc": 16.6,
    "capital": 58000
   },
   "putFails": [
    "RSI 42.7 too high for a put"
   ],
   "call": {
    "strike": 695.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.23,
    "mid": 8.6,
    "roc": 16.4,
    "capital": 63800
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 291.83,
   "sma50": 335.29,
   "sma200": 339.99,
   "rsi": 32.5,
   "adx": 30.1,
   "bar": "2026-11-04",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 30.5,
   "ivr": 41.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 275.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.24,
    "mid": 3.97,
    "roc": 17.6,
    "capital": 27500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.27,
    "mid": 4.03,
    "roc": 16.8,
    "capital": 29183
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 267.76,
   "sma50": 253.93,
   "sma200": 243.68,
   "rsi": 60.8,
   "adx": 15.1,
   "bar": "2026-11-04",
   "peg": 1.17,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 30.52,
   "ivr": 35.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.21,
    "mid": 3.23,
    "roc": 15.7,
    "capital": 25000
   },
   "putFails": [
    "ADX 15.1 not above 25",
    "next earnings date unavailable",
    "RSI 60.8 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.26,
    "mid": 3.33,
    "roc": 15.1,
    "capital": 26776
   },
   "callFails": [
    "ADX 15.1 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 387.29,
   "sma50": 372.15,
   "sma200": 384.77,
   "rsi": 52.4,
   "adx": 15.0,
   "bar": "2026-11-04",
   "peg": 4.71,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 43.08,
   "ivr": 35.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 340.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.16,
    "mid": 4.67,
    "roc": 16.7,
    "capital": 34000
   },
   "putFails": [
    "ADX 15.0 not above 25",
    "PEG 4.71 outside 0 to 2.5",
    "RSI 52.4 too high for a put"
   ],
   "call": {
    "strike": 430.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.2,
    "mid": 4.97,
    "roc": 15.6,
    "capital": 38729
   },
   "callFails": [
    "ADX 15.0 not above 25",
    "PEG 4.71 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 170.26,
   "sma50": 186.81,
   "sma200": 153.6,
   "rsi": 32.6,
   "adx": 23.5,
   "bar": "2026-11-04",
   "peg": 1.62,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 49.81,
   "ivr": 38.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": -0.16,
    "mid": 2.86,
    "roc": 16.4,
    "capital": 14500
   },
   "putFails": [
    "ADX 23.5 not above 25"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-11",
    "dte": 37,
    "delta": 0.19,
    "mid": 2.63,
    "roc": 15.3,
    "capital": 17026
   },
   "callFails": [
    "ADX 23.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 242.26,
   "sma50": 243.47,
   "sma200": 169.2,
   "rsi": 45.9,
   "adx": 15.8,
   "bar": "2026-11-04",
   "peg": 6.24,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 69.39,
   "ivr": 91.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": -0.16,
    "mid": 5.72,
    "roc": 24.4,
    "capital": 19500
   },
   "putFails": [
    "ADX 15.8 not above 25",
    "PEG 6.24 outside 0 to 2.5",
    "RSI 45.9 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": 0.17,
    "mid": 4.43,
    "roc": 15.2,
    "capital": 24226
   },
   "callFails": [
    "ADX 15.8 not above 25",
    "PEG 6.24 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 151.2,
   "sma50": 177.37,
   "sma200": 176.88,
   "rsi": 40.4,
   "adx": 27.1,
   "bar": "2026-11-04",
   "peg": 2.02,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 66.63,
   "ivr": 50.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 125.0,
    "exp": "2026-12-11",
    "dte": 37,
    "delta": -0.17,
    "mid": 3.4,
    "roc": 26.8,
    "capital": 12500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 40.4 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": 0.17,
    "mid": 2.82,
    "roc": 15.4,
    "capital": 15120
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 144.41,
   "sma50": 144.51,
   "sma200": 134.08,
   "rsi": 51.0,
   "adx": 16.3,
   "bar": "2026-11-04",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 71.92,
   "ivr": 26.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 115.0,
    "exp": "2026-12-11",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.08,
    "roc": 26.4,
    "capital": 11500
   },
   "putFails": [
    "ADX 16.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.8 not above 30",
    "next earnings date unavailable",
    "RSI 51.0 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.4,
    "roc": 20.3,
    "capital": 14441
   },
   "callFails": [
    "ADX 16.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.8 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.97,
   "sma50": 10.1,
   "sma200": 10.74,
   "rsi": 34.8,
   "adx": 36.7,
   "bar": "2026-11-04",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 103.63,
   "ivr": 61.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.19,
    "mid": 0.24,
    "roc": 54.2,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 25.3,
    "capital": 697
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 87.79,
   "sma50": 107.16,
   "sma200": 92.25,
   "rsi": 35.5,
   "adx": 28.5,
   "bar": "2026-11-04",
   "peg": 1.36,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 62.0,
   "ivr": 37.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 75.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.18,
    "mid": 1.77,
    "roc": 28.8,
    "capital": 7500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 106.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.19,
    "roc": 16.6,
    "capital": 8779
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
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 695.0,
   "exp": "2026-12-04",
   "dte": 30,
   "delta": 0.23,
   "mid": 8.6,
   "roc": 16.4,
   "capital": 63800,
   "ivr": 49.1,
   "rsi": 42.7,
   "adx": 26.4,
   "price": 638.0,
   "sma50": 673.72,
   "sma200": 632.21
  }
 ],
 "errors": []
};
