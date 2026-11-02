window.SCANNER_DATA = {
 "generatedAt": "2026-11-02T14:49:23Z",
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
   "price": 208.79,
   "sma50": 221.63,
   "sma200": 204.49,
   "rsi": 40.1,
   "adx": 21.2,
   "bar": "2026-11-02",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.66,
   "ivr": 64.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": -0.19,
    "mid": 3.65,
    "roc": 18.5,
    "capital": 18500
   },
   "putFails": [
    "ADX 21.2 not above 25",
    "RSI 40.1 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.22,
    "mid": 2.9,
    "roc": 15.8,
    "capital": 20879
   },
   "callFails": [
    "ADX 21.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 505.73,
   "sma50": 548.94,
   "sma200": 411.88,
   "rsi": 39.9,
   "adx": 20.8,
   "bar": "2026-11-02",
   "peg": 0.5,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 63.59,
   "ivr": 48.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 425.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.16,
    "mid": 9.05,
    "roc": 24.3,
    "capital": 42500
   },
   "putFails": [
    "ADX 20.8 not above 25",
    "RSI 39.9 too high for a put"
   ],
   "call": {
    "strike": 620.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.16,
    "mid": 7.03,
    "roc": 15.8,
    "capital": 50573
   },
   "callFails": [
    "ADX 20.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 524.18,
   "sma50": 513.73,
   "sma200": 438.26,
   "rsi": 50.7,
   "adx": 21.5,
   "bar": "2026-11-02",
   "peg": 1.69,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 26.99,
   "ivr": 35.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 500.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.28,
    "mid": 8.12,
    "roc": 18.5,
    "capital": 50000
   },
   "putFails": [
    "ADX 21.5 not above 25",
    "RSI 50.7 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.28,
    "mid": 7.22,
    "roc": 15.7,
    "capital": 52418
   },
   "callFails": [
    "ADX 21.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 616.04,
   "sma50": 671.31,
   "sma200": 632.08,
   "rsi": 33.6,
   "adx": 27.5,
   "bar": "2026-11-02",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 38.9,
   "ivr": 47.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 555.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.18,
    "mid": 7.53,
    "roc": 15.5,
    "capital": 55500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.22,
    "mid": 8.72,
    "roc": 16.2,
    "capital": 61604
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 286.68,
   "sma50": 337.91,
   "sma200": 340.42,
   "rsi": 27.1,
   "adx": 28.2,
   "bar": "2026-11-02",
   "peg": 0.98,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 30.88,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 265.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.21,
    "mid": 3.47,
    "roc": 15.0,
    "capital": 26500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.26,
    "mid": 4.07,
    "roc": 16.2,
    "capital": 28668
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 250.52,
   "sma50": 254.12,
   "sma200": 243.46,
   "rsi": 48.2,
   "adx": 15.6,
   "bar": "2026-11-02",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.72,
   "ivr": 34.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.23,
    "mid": 3.52,
    "roc": 17.5,
    "capital": 23000
   },
   "putFails": [
    "ADX 15.6 not above 25",
    "next earnings date unavailable",
    "RSI 48.2 too high for a put"
   ],
   "call": {
    "strike": 265.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.23,
    "mid": 2.92,
    "roc": 13.3,
    "capital": 25052
   },
   "callFails": [
    "ADX 15.6 not above 25",
    "next earnings date unavailable",
    "best ROC 13.3% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 400.45,
   "sma50": 370.35,
   "sma200": 385.11,
   "rsi": 61.1,
   "adx": 15.5,
   "bar": "2026-11-02",
   "peg": 4.66,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 41.9,
   "ivr": 24.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 360.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.16,
    "mid": 4.9,
    "roc": 15.5,
    "capital": 36000
   },
   "putFails": [
    "ADX 15.5 not above 25",
    "PEG 4.66 outside 0 to 2.5",
    "IV rank 24.2 not above 30",
    "RSI 61.1 too high for a put"
   ],
   "call": {
    "strike": 455.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.22,
    "mid": 5.8,
    "roc": 16.5,
    "capital": 40045
   },
   "callFails": [
    "ADX 15.5 not above 25",
    "PEG 4.66 outside 0 to 2.5",
    "IV rank 24.2 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 185.44,
   "sma50": 187.01,
   "sma200": 153.61,
   "rsi": 43.3,
   "adx": 20.4,
   "bar": "2026-11-02",
   "peg": 1.67,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 71.36,
   "ivr": 93.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.15,
    "mid": 3.62,
    "roc": 27.6,
    "capital": 15000
   },
   "putFails": [
    "ADX 20.4 not above 25",
    "RSI 43.3 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.16,
    "mid": 2.62,
    "roc": 16.1,
    "capital": 18544
   },
   "callFails": [
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 243.62,
   "sma50": 241.29,
   "sma200": 167.89,
   "rsi": 46.4,
   "adx": 16.9,
   "bar": "2026-11-02",
   "peg": 6.46,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 69.27,
   "ivr": 81.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": null,
   "putFails": [
    "ADX 16.9 not above 25",
    "PEG 6.46 outside 0 to 2.5",
    "RSI 46.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 16.9 not above 25",
    "PEG 6.46 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 140.93,
   "sma50": 178.83,
   "sma200": 177.76,
   "rsi": 30.9,
   "adx": 25.6,
   "bar": "2026-11-02",
   "peg": 2.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 67.92,
   "ivr": 46.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.19,
    "mid": 3.75,
    "roc": 35.6,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.21,
    "mid": 2.92,
    "roc": 23.7,
    "capital": 14093
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 133.54,
   "sma50": 143.95,
   "sma200": 134.37,
   "rsi": 42.6,
   "adx": 18.1,
   "bar": "2026-11-02",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.8,
   "ivr": 28.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.62,
    "roc": 37.6,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.1 not above 30",
    "next earnings date unavailable",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.37,
    "roc": 20.2,
    "capital": 13354
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.1 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.59,
   "sma50": 10.28,
   "sma200": 10.78,
   "rsi": 26.4,
   "adx": 36.3,
   "bar": "2026-11-02",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 104.61,
   "ivr": 55.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": -0.16,
    "mid": 0.23,
    "roc": 44.0,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": 0.16,
    "mid": 0.16,
    "roc": 22.7,
    "capital": 659
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 86.29,
   "sma50": 108.05,
   "sma200": 92.47,
   "rsi": 31.6,
   "adx": 27.4,
   "bar": "2026-11-02",
   "peg": 1.38,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 60.22,
   "ivr": 25.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 75.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.21,
    "mid": 2.13,
    "roc": 32.4,
    "capital": 7500
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank 25.4 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 104.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.16,
    "mid": 1.19,
    "roc": 15.7,
    "capital": 8629
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank 25.4 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
