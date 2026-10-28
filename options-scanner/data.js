window.SCANNER_DATA = {
 "generatedAt": "2026-10-28T21:39:41Z",
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
   "price": 215.38,
   "sma50": 222.07,
   "sma200": 204.14,
   "rsi": 43.9,
   "adx": 18.2,
   "bar": "2026-10-28",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 40.66,
   "ivr": 44.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.19,
    "mid": 2.98,
    "roc": 18.6,
    "capital": 19500
   },
   "putFails": [
    "ADX 18.2 not above 25",
    "RSI 43.9 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.25,
    "mid": 3.25,
    "roc": 18.4,
    "capital": 21538
   },
   "callFails": [
    "ADX 18.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 578.44,
   "sma50": 545.58,
   "sma200": 407.36,
   "rsi": 53.6,
   "adx": 21.1,
   "bar": "2026-10-28",
   "peg": 0.53,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.15,
   "ivr": 39.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 495.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 9.4,
    "roc": 23.1,
    "capital": 49500
   },
   "putFails": [
    "ADX 21.1 not above 25",
    "RSI 53.6 too high for a put"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.16,
    "mid": 7.62,
    "roc": 16.0,
    "capital": 57844
   },
   "callFails": [
    "ADX 21.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 531.01,
   "sma50": 511.18,
   "sma200": 437.32,
   "rsi": 56.1,
   "adx": 24.7,
   "bar": "2026-10-28",
   "peg": 1.73,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.43,
   "ivr": 51.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.24,
    "mid": 7.03,
    "roc": 17.1,
    "capital": 50000
   },
   "putFails": [
    "ADX 24.7 not above 25",
    "RSI 56.1 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.3,
    "mid": 8.45,
    "roc": 19.4,
    "capital": 53101
   },
   "callFails": [
    "ADX 24.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 612.49,
   "sma50": 667.03,
   "sma200": 632.14,
   "rsi": 30.7,
   "adx": 27.8,
   "bar": "2026-10-28",
   "peg": 0.81,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.83,
   "ivr": 44.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 560.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.18,
    "mid": 7.22,
    "roc": 15.7,
    "capital": 56000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 675.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.22,
    "mid": 7.82,
    "roc": 15.5,
    "capital": 61249
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 324.89,
   "sma50": 341.51,
   "sma200": 341.2,
   "rsi": 38.7,
   "adx": 20.4,
   "bar": "2026-10-28",
   "peg": 1.11,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 38.64,
   "ivr": 75.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 300.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.2,
    "mid": 4.33,
    "roc": 17.5,
    "capital": 30000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25",
    "RSI 38.7 too high for a put"
   ],
   "call": {
    "strike": 360.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.21,
    "mid": 4.2,
    "roc": 15.7,
    "capital": 32489
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 254.6,
   "sma50": 255.12,
   "sma200": 243.38,
   "rsi": 50.1,
   "adx": 12.6,
   "bar": "2026-10-28",
   "peg": 1.44,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 44.07,
   "ivr": 74.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.15,
    "mid": 2.77,
    "roc": 15.0,
    "capital": 22500
   },
   "putFails": [
    "ADX 12.6 not above 25",
    "RSI 50.1 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.21,
    "mid": 3.35,
    "roc": 16.0,
    "capital": 25460
   },
   "callFails": [
    "ADX 12.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 404.22,
   "sma50": 367.47,
   "sma200": 385.72,
   "rsi": 63.6,
   "adx": 14.6,
   "bar": "2026-10-28",
   "peg": 4.75,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 36.96,
   "ivr": 4.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 370.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.19,
    "mid": 5.0,
    "roc": 16.4,
    "capital": 37000
   },
   "putFails": [
    "ADX 14.6 not above 25",
    "PEG 4.75 outside 0 to 2.5",
    "IV rank 4.6 not above 30",
    "next earnings date unavailable",
    "RSI 63.6 too high for a put"
   ],
   "call": {
    "strike": 440.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.24,
    "mid": 5.53,
    "roc": 16.6,
    "capital": 40422
   },
   "callFails": [
    "ADX 14.6 not above 25",
    "PEG 4.75 outside 0 to 2.5",
    "IV rank 4.6 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 196.81,
   "sma50": 186.28,
   "sma200": 153.45,
   "rsi": 53.9,
   "adx": 21.7,
   "bar": "2026-10-28",
   "peg": 1.72,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 61.56,
   "ivr": 68.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 165.0,
    "exp": "2026-12-04",
    "dte": 37,
    "delta": -0.16,
    "mid": 3.65,
    "roc": 21.8,
    "capital": 16500
   },
   "putFails": [
    "ADX 21.7 not above 25",
    "RSI 53.9 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.15,
    "mid": 2.48,
    "roc": 15.3,
    "capital": 19681
   },
   "callFails": [
    "ADX 21.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 266.66,
   "sma50": 237.86,
   "sma200": 165.85,
   "rsi": 59.5,
   "adx": 20.1,
   "bar": "2026-10-28",
   "peg": 6.76,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 58.54,
   "ivr": 63.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.17,
    "mid": 4.35,
    "roc": 23.0,
    "capital": 23000
   },
   "putFails": [
    "ADX 20.1 not above 25",
    "PEG 6.76 outside 0 to 2.5",
    "RSI 59.5 too high for a put"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.28,
    "mid": 7.05,
    "roc": 32.2,
    "capital": 26666
   },
   "callFails": [
    "ADX 20.1 not above 25",
    "PEG 6.76 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 162.32,
   "sma50": 180.31,
   "sma200": 179.27,
   "rsi": 41.2,
   "adx": 20.4,
   "bar": "2026-10-28",
   "peg": 2.33,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 67.78,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.19,
    "mid": 3.85,
    "roc": 33.5,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25",
    "RSI 41.2 too high for a put"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.18,
    "mid": 2.84,
    "roc": 21.3,
    "capital": 16232
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 145.16,
   "sma50": 142.56,
   "sma200": 134.96,
   "rsi": 49.5,
   "adx": 19.1,
   "bar": "2026-10-28",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.22,
   "ivr": 24.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.85,
    "roc": 28.9,
    "capital": 12000
   },
   "putFails": [
    "ADX 19.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.0 not above 30",
    "RSI 49.5 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.18,
    "mid": 2.55,
    "roc": 21.4,
    "capital": 14516
   },
   "callFails": [
    "ADX 19.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.35,
   "sma50": 10.51,
   "sma200": 10.84,
   "rsi": 31.3,
   "adx": 33.8,
   "bar": "2026-10-28",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 97.65,
   "ivr": 38.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.19,
    "mid": 0.27,
    "roc": 53.7,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-04",
    "dte": 37,
    "delta": 0.18,
    "mid": 0.19,
    "roc": 25.5,
    "capital": 735
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 91.43,
   "sma50": 108.78,
   "sma200": 92.91,
   "rsi": 34.5,
   "adx": 23.0,
   "bar": "2026-10-28",
   "peg": 1.57,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 55.49,
   "ivr": 39.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.18,
    "mid": 1.58,
    "roc": 24.1,
    "capital": 8000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25"
   ],
   "call": {
    "strike": 109.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.17,
    "mid": 1.23,
    "roc": 16.4,
    "capital": 9143
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
