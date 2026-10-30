window.SCANNER_DATA = {
 "generatedAt": "2026-10-30T19:26:08Z",
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
   "price": 203.06,
   "sma50": 221.72,
   "sma200": 204.38,
   "rsi": 34.0,
   "adx": 19.8,
   "bar": "2026-10-30",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 46.08,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 175.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.15,
    "mid": 2.81,
    "roc": 16.8,
    "capital": 17500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.24,
    "mid": 3.45,
    "roc": 17.7,
    "capital": 20306
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 499.44,
   "sma50": 548.18,
   "sma200": 410.46,
   "rsi": 38.9,
   "adx": 20.2,
   "bar": "2026-10-30",
   "peg": 0.58,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 65.37,
   "ivr": 37.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 410.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.15,
    "mid": 9.15,
    "roc": 23.3,
    "capital": 41000
   },
   "putFails": [
    "ADX 20.2 not above 25",
    "RSI 38.9 too high for a put"
   ],
   "call": {
    "strike": 610.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 7.68,
    "roc": 16.0,
    "capital": 49944
   },
   "callFails": [
    "ADX 20.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 522.05,
   "sma50": 512.91,
   "sma200": 437.93,
   "rsi": 49.1,
   "adx": 22.6,
   "bar": "2026-10-30",
   "peg": 1.72,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 28.18,
   "ivr": 26.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 490.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.24,
    "mid": 7.25,
    "roc": 15.4,
    "capital": 49000
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "IV rank 26.7 not above 30",
    "RSI 49.1 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.28,
    "mid": 6.67,
    "roc": 13.3,
    "capital": 52205
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "IV rank 26.7 not above 30",
    "best ROC 13.3% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 613.08,
   "sma50": 669.94,
   "sma200": 632.09,
   "rsi": 32.9,
   "adx": 27.5,
   "bar": "2026-10-30",
   "peg": 0.8,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 39.15,
   "ivr": 42.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 550.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.18,
    "mid": 7.97,
    "roc": 15.1,
    "capital": 55000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 675.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.24,
    "mid": 9.6,
    "roc": 16.3,
    "capital": 61308
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 278.01,
   "sma50": 339.04,
   "sma200": 340.65,
   "rsi": 21.0,
   "adx": 26.1,
   "bar": "2026-10-30",
   "peg": 1.0,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.9,
   "ivr": 31.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.24,
    "mid": 4.3,
    "roc": 17.2,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": 0.27,
    "mid": 4.4,
    "roc": 13.8,
    "capital": 27801
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "best ROC 13.8% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 239.0,
   "sma50": 254.25,
   "sma200": 243.39,
   "rsi": 37.4,
   "adx": 15.3,
   "bar": "2026-10-30",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 32.91,
   "ivr": 81.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.26,
    "mid": 4.25,
    "roc": 19.7,
    "capital": 22500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25"
   ],
   "call": {
    "strike": 255.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.29,
    "mid": 3.95,
    "roc": 17.2,
    "capital": 23900
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 399.03,
   "sma50": 369.59,
   "sma200": 385.29,
   "rsi": 60.4,
   "adx": 15.3,
   "bar": "2026-10-30",
   "peg": 4.71,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 41.59,
   "ivr": 0.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 350.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.16,
    "mid": 5.1,
    "roc": 15.2,
    "capital": 35000
   },
   "putFails": [
    "ADX 15.3 not above 25",
    "PEG 4.71 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable",
    "RSI 60.4 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": 0.24,
    "mid": 7.3,
    "roc": 15.9,
    "capital": 39903
   },
   "callFails": [
    "ADX 15.3 not above 25",
    "PEG 4.71 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 185.87,
   "sma50": 186.94,
   "sma200": 153.58,
   "rsi": 43.2,
   "adx": 20.0,
   "bar": "2026-10-30",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 71.39,
   "ivr": 74.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.15,
    "mid": 3.75,
    "roc": 26.1,
    "capital": 15000
   },
   "putFails": [
    "ADX 20.0 not above 25",
    "RSI 43.2 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 2.97,
    "roc": 16.7,
    "capital": 18587
   },
   "callFails": [
    "ADX 20.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 249.48,
   "sma50": 240.23,
   "sma200": 167.24,
   "rsi": 49.4,
   "adx": 17.7,
   "bar": "2026-10-30",
   "peg": 6.88,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 66.97,
   "ivr": 67.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 200.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": -0.16,
    "mid": 5.78,
    "roc": 25.1,
    "capital": 20000
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "PEG 6.88 outside 0 to 2.5",
    "RSI 49.4 too high for a put"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": 0.24,
    "mid": 7.05,
    "roc": 24.6,
    "capital": 24948
   },
   "callFails": [
    "ADX 17.7 not above 25",
    "PEG 6.88 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 140.2,
   "sma50": 179.67,
   "sma200": 178.23,
   "rsi": 30.7,
   "adx": 23.5,
   "bar": "2026-10-30",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.15,
   "ivr": 47.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 115.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.17,
    "mid": 3.25,
    "roc": 29.5,
    "capital": 11500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 2.37,
    "roc": 17.6,
    "capital": 14020
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 131.1,
   "sma50": 143.68,
   "sma200": 134.56,
   "rsi": 40.4,
   "adx": 18.2,
   "bar": "2026-10-30",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 75.64,
   "ivr": 17.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.17,
    "mid": 3.42,
    "roc": 34.0,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 17.1 not above 30",
    "RSI 40.4 too high for a put"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.15,
    "mid": 2.02,
    "roc": 16.1,
    "capital": 13110
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 17.1 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.77,
   "sma50": 10.37,
   "sma200": 10.8,
   "rsi": 27.5,
   "adx": 35.3,
   "bar": "2026-10-30",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 105.67,
   "ivr": 43.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.16,
    "mid": 0.22,
    "roc": 45.9,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": 0.17,
    "mid": 0.17,
    "roc": 22.5,
    "capital": 677
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 83.51,
   "sma50": 108.46,
   "sma200": 92.58,
   "rsi": 28.3,
   "adx": 26.0,
   "bar": "2026-10-30",
   "peg": 1.55,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 60.43,
   "ivr": 12.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.18,
    "mid": 1.86,
    "roc": 27.8,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank 12.8 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 100.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 1.25,
    "roc": 15.7,
    "capital": 8351
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank 12.8 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
