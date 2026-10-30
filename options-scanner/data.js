window.SCANNER_DATA = {
 "generatedAt": "2026-10-30T14:11:09Z",
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
   "price": 207.79,
   "sma50": 221.81,
   "sma200": 204.4,
   "rsi": 37.3,
   "adx": 19.3,
   "bar": "2026-10-30",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.37,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.17,
    "roc": 17.9,
    "capital": 18500
   },
   "putFails": [
    "ADX 19.3 not above 25"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.23,
    "mid": 3.05,
    "roc": 15.3,
    "capital": 20779
   },
   "callFails": [
    "ADX 19.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 516.58,
   "sma50": 548.53,
   "sma200": 410.55,
   "rsi": 41.4,
   "adx": 19.9,
   "bar": "2026-10-30",
   "peg": 0.58,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 62.54,
   "ivr": 37.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 430.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.15,
    "mid": 8.73,
    "roc": 21.2,
    "capital": 43000
   },
   "putFails": [
    "ADX 19.9 not above 25",
    "RSI 41.4 too high for a put"
   ],
   "call": {
    "strike": 630.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 7.98,
    "roc": 16.1,
    "capital": 51658
   },
   "callFails": [
    "ADX 19.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 522.36,
   "sma50": 512.92,
   "sma200": 437.93,
   "rsi": 49.3,
   "adx": 22.6,
   "bar": "2026-10-30",
   "peg": 1.72,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 26.05,
   "ivr": 26.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 500.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.28,
    "mid": 7.75,
    "roc": 16.2,
    "capital": 50000
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "IV rank 26.7 not above 30",
    "RSI 49.3 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": 0.3,
    "mid": 8.15,
    "roc": 13.6,
    "capital": 52236
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "IV rank 26.7 not above 30",
    "best ROC 13.6% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 619.03,
   "sma50": 670.06,
   "sma200": 632.12,
   "rsi": 33.9,
   "adx": 27.5,
   "bar": "2026-10-30",
   "peg": 0.8,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.71,
   "ivr": 42.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 565.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.2,
    "mid": 8.82,
    "roc": 16.3,
    "capital": 56500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.24,
    "mid": 9.68,
    "roc": 16.3,
    "capital": 61903
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 280.54,
   "sma50": 339.09,
   "sma200": 340.66,
   "rsi": 21.5,
   "adx": 26.0,
   "bar": "2026-10-30",
   "peg": 1.0,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 29.69,
   "ivr": 31.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 265.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.24,
    "mid": 3.95,
    "roc": 15.5,
    "capital": 26500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.28,
    "mid": 4.25,
    "roc": 15.8,
    "capital": 28054
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 237.81,
   "sma50": 254.23,
   "sma200": 243.39,
   "rsi": 36.6,
   "adx": 15.3,
   "bar": "2026-10-30",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 31.71,
   "ivr": 81.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.26,
    "mid": 3.85,
    "roc": 17.8,
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
    "delta": 0.28,
    "mid": 3.83,
    "roc": 16.8,
    "capital": 23781
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 396.89,
   "sma50": 369.54,
   "sma200": 385.28,
   "rsi": 59.2,
   "adx": 15.3,
   "bar": "2026-10-30",
   "peg": 4.71,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 38.21,
   "ivr": 0.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 355.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.18,
    "mid": 5.33,
    "roc": 15.6,
    "capital": 35500
   },
   "putFails": [
    "ADX 15.3 not above 25",
    "PEG 4.71 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable",
    "RSI 59.2 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.23,
    "mid": 5.72,
    "roc": 15.0,
    "capital": 39689
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
   "price": 188.53,
   "sma50": 186.99,
   "sma200": 153.59,
   "rsi": 45.4,
   "adx": 19.7,
   "bar": "2026-10-30",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 66.86,
   "ivr": 74.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 155.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": -0.15,
    "mid": 3.75,
    "roc": 21.0,
    "capital": 15500
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 45.4 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.16,
    "mid": 2.81,
    "roc": 15.5,
    "capital": 18853
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 255.13,
   "sma50": 240.35,
   "sma200": 167.27,
   "rsi": 52.4,
   "adx": 18.0,
   "bar": "2026-10-30",
   "peg": 6.88,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 63.01,
   "ivr": 67.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 210.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": -0.16,
    "mid": 5.42,
    "roc": 22.5,
    "capital": 21000
   },
   "putFails": [
    "ADX 18.0 not above 25",
    "PEG 6.88 outside 0 to 2.5",
    "RSI 52.4 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 18.0 not above 25",
    "PEG 6.88 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 141.48,
   "sma50": 179.7,
   "sma200": 178.24,
   "rsi": 31.1,
   "adx": 23.4,
   "bar": "2026-10-30",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.59,
   "ivr": 47.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.38,
    "roc": 29.3,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.4 not above 25"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 23.4 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 128.88,
   "sma50": 143.64,
   "sma200": 134.55,
   "rsi": 39.3,
   "adx": 18.2,
   "bar": "2026-10-30",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 74.31,
   "ivr": 17.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.38,
    "roc": 33.5,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 17.1 not above 30",
    "RSI 39.3 too high for a put"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.16,
    "mid": 2.33,
    "roc": 18.8,
    "capital": 12888
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
   "price": 6.7,
   "sma50": 10.37,
   "sma200": 10.8,
   "rsi": 27.1,
   "adx": 35.3,
   "bar": "2026-10-30",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 103.71,
   "ivr": 43.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.17,
    "mid": 0.23,
    "roc": 46.9,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 0.16,
    "roc": 25.7,
    "capital": 670
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 83.82,
   "sma50": 108.47,
   "sma200": 92.58,
   "rsi": 28.5,
   "adx": 26.0,
   "bar": "2026-10-30",
   "peg": 1.55,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 60.42,
   "ivr": 12.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.15,
    "mid": 1.45,
    "roc": 21.6,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank 12.8 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 103.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.16,
    "mid": 1.21,
    "roc": 15.0,
    "capital": 8382
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
