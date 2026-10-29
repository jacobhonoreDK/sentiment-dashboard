window.SCANNER_DATA = {
 "generatedAt": "2026-10-29T16:08:40Z",
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
   "price": 213.85,
   "sma50": 222.0,
   "sma200": 204.28,
   "rsi": 42.4,
   "adx": 18.4,
   "bar": "2026-10-29",
   "peg": 0.27,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 40.45,
   "ivr": 47.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 195.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.21,
    "mid": 3.7,
    "roc": 19.2,
    "capital": 19500
   },
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 42.4 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.25,
    "mid": 3.47,
    "roc": 16.5,
    "capital": 21385
   },
   "callFails": [
    "ADX 18.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 572.01,
   "sma50": 547.7,
   "sma200": 409.11,
   "rsi": 52.1,
   "adx": 19.7,
   "bar": "2026-10-29",
   "peg": 0.56,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.48,
   "ivr": 36.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 485.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.16,
    "mid": 9.68,
    "roc": 20.2,
    "capital": 48500
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 52.1 too high for a put"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.17,
    "mid": 8.5,
    "roc": 15.1,
    "capital": 57201
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 523.77,
   "sma50": 511.97,
   "sma200": 437.58,
   "rsi": 50.6,
   "adx": 23.3,
   "bar": "2026-10-29",
   "peg": 1.73,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 25.66,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 500.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.28,
    "mid": 7.8,
    "roc": 15.8,
    "capital": 50000
   },
   "putFails": [
    "ADX 23.3 not above 25",
    "RSI 50.6 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.29,
    "mid": 7.05,
    "roc": 13.6,
    "capital": 52377
   },
   "callFails": [
    "ADX 23.3 not above 25",
    "best ROC 13.6% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 630.36,
   "sma50": 668.72,
   "sma200": 632.13,
   "rsi": 36.9,
   "adx": 27.7,
   "bar": "2026-10-29",
   "peg": 0.81,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.41,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 575.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.2,
    "mid": 9.15,
    "roc": 16.1,
    "capital": 57500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 695.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.23,
    "mid": 9.57,
    "roc": 15.4,
    "capital": 63036
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 286.43,
   "sma50": 340.34,
   "sma200": 340.95,
   "rsi": 22.9,
   "adx": 23.3,
   "bar": "2026-10-29",
   "peg": 1.13,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 30.05,
   "ivr": 85.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 270.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.24,
    "mid": 4.05,
    "roc": 15.2,
    "capital": 27000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.3 not above 25"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.29,
    "mid": 4.78,
    "roc": 16.9,
    "capital": 28643
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 246.86,
   "sma50": 254.74,
   "sma200": 243.4,
   "rsi": 43.0,
   "adx": 13.4,
   "bar": "2026-10-29",
   "peg": 1.47,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 44.99,
   "ivr": 78.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 220.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.18,
    "mid": 3.55,
    "roc": 16.4,
    "capital": 22000
   },
   "putFails": [
    "ADX 13.4 not above 25",
    "RSI 43.0 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.24,
    "mid": 4.33,
    "roc": 17.8,
    "capital": 24686
   },
   "callFails": [
    "ADX 13.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 406.08,
   "sma50": 368.56,
   "sma200": 385.51,
   "rsi": 64.2,
   "adx": 15.6,
   "bar": "2026-10-29",
   "peg": 4.75,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 36.54,
   "ivr": 0.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 370.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.2,
    "mid": 5.85,
    "roc": 16.0,
    "capital": 37000
   },
   "putFails": [
    "ADX 15.6 not above 25",
    "PEG 4.75 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable",
    "RSI 64.2 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.25,
    "mid": 6.42,
    "roc": 16.0,
    "capital": 40608
   },
   "callFails": [
    "ADX 15.6 not above 25",
    "PEG 4.75 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 195.0,
   "sma50": 186.67,
   "sma200": 153.53,
   "rsi": 51.9,
   "adx": 20.3,
   "bar": "2026-10-29",
   "peg": 1.72,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 63.65,
   "ivr": 65.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 165.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.17,
    "mid": 4.03,
    "roc": 24.7,
    "capital": 16500
   },
   "putFails": [
    "ADX 20.3 not above 25",
    "RSI 51.9 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.19,
    "mid": 3.47,
    "roc": 18.1,
    "capital": 19500
   },
   "callFails": [
    "ADX 20.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 258.96,
   "sma50": 239.01,
   "sma200": 166.55,
   "rsi": 54.7,
   "adx": 19.0,
   "bar": "2026-10-29",
   "peg": 6.92,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 59.74,
   "ivr": 64.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 215.0,
    "exp": "2026-12-11",
    "dte": 43,
    "delta": -0.18,
    "mid": 6.0,
    "roc": 23.7,
    "capital": 21500
   },
   "putFails": [
    "ADX 19.0 not above 25",
    "PEG 6.92 outside 0 to 2.5",
    "RSI 54.7 too high for a put"
   ],
   "call": {
    "strike": 320.0,
    "exp": "2026-12-11",
    "dte": 43,
    "delta": 0.19,
    "mid": 5.55,
    "roc": 18.2,
    "capital": 25896
   },
   "callFails": [
    "ADX 19.0 not above 25",
    "PEG 6.92 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 162.52,
   "sma50": 180.35,
   "sma200": 178.82,
   "rsi": 41.4,
   "adx": 21.2,
   "bar": "2026-10-29",
   "peg": 2.36,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 67.78,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 135.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.55,
    "roc": 26.7,
    "capital": 13500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 21.2 not above 25",
    "RSI 41.4 too high for a put"
   ],
   "call": {
    "strike": 205.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.62,
    "roc": 16.4,
    "capital": 16252
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 21.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 144.6,
   "sma50": 143.37,
   "sma200": 134.81,
   "rsi": 49.1,
   "adx": 18.3,
   "bar": "2026-10-29",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.76,
   "ivr": 23.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 115.0,
    "exp": "2026-12-11",
    "dte": 43,
    "delta": -0.15,
    "mid": 3.21,
    "roc": 23.7,
    "capital": 11500
   },
   "putFails": [
    "ADX 18.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 23.1 not above 30",
    "RSI 49.1 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.44,
    "roc": 17.1,
    "capital": 14460
   },
   "callFails": [
    "ADX 18.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 23.1 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.36,
   "sma50": 10.46,
   "sma200": 10.82,
   "rsi": 31.5,
   "adx": 34.3,
   "bar": "2026-10-29",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 97.6,
   "ivr": 42.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-11",
    "dte": 43,
    "delta": -0.15,
    "mid": 0.23,
    "roc": 35.5,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.18,
    "mid": 0.19,
    "roc": 26.2,
    "capital": 736
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 92.29,
   "sma50": 108.71,
   "sma200": 92.77,
   "rsi": 35.9,
   "adx": 24.2,
   "bar": "2026-10-29",
   "peg": 1.6,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 55.11,
   "ivr": 14.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 79.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": -0.17,
    "mid": 1.67,
    "roc": 21.4,
    "capital": 7900
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.2 not above 25",
    "IV rank 14.5 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 111.0,
    "exp": "2026-12-04",
    "dte": 36,
    "delta": 0.17,
    "mid": 1.37,
    "roc": 15.1,
    "capital": 9229
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.2 not above 25",
    "IV rank 14.5 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
