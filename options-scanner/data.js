window.SCANNER_DATA = {
 "generatedAt": "2026-11-03T15:10:25Z",
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
   "price": 208.1,
   "sma50": 221.49,
   "sma200": 204.57,
   "rsi": 40.8,
   "adx": 22.1,
   "bar": "2026-11-03",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 46.34,
   "ivr": 76.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.8,
    "roc": 18.3,
    "capital": 18000
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 40.8 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.23,
    "mid": 3.25,
    "roc": 18.4,
    "capital": 20810
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 488.39,
   "sma50": 548.79,
   "sma200": 412.97,
   "rsi": 39.3,
   "adx": 22.3,
   "bar": "2026-11-03",
   "peg": 0.5,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 67.14,
   "ivr": 57.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 400.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.15,
    "mid": 9.47,
    "roc": 22.8,
    "capital": 40000
   },
   "putFails": [
    "ADX 22.3 not above 25",
    "RSI 39.3 too high for a put"
   ],
   "call": {
    "strike": 605.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.15,
    "mid": 6.78,
    "roc": 16.3,
    "capital": 48839
   },
   "callFails": [
    "ADX 22.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 512.85,
   "sma50": 513.9,
   "sma200": 438.44,
   "rsi": 44.3,
   "adx": 22.9,
   "bar": "2026-11-03",
   "peg": 1.69,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 29.14,
   "ivr": 42.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 480.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.23,
    "mid": 6.65,
    "roc": 16.3,
    "capital": 48000
   },
   "putFails": [
    "ADX 22.9 not above 25",
    "RSI 44.3 too high for a put"
   ],
   "call": {
    "strike": 540.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.27,
    "mid": 6.68,
    "roc": 15.3,
    "capital": 51285
   },
   "callFails": [
    "ADX 22.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 616.33,
   "sma50": 672.27,
   "sma200": 632.01,
   "rsi": 35.4,
   "adx": 27.7,
   "bar": "2026-11-03",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 40.06,
   "ivr": 52.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 550.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.17,
    "mid": 7.22,
    "roc": 15.5,
    "capital": 55000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.21,
    "mid": 8.0,
    "roc": 15.3,
    "capital": 61633
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 278.27,
   "sma50": 336.36,
   "sma200": 340.13,
   "rsi": 21.0,
   "adx": 30.1,
   "bar": "2026-11-03",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.67,
   "ivr": 44.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.22,
    "mid": 3.7,
    "roc": 16.8,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 295.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.29,
    "mid": 4.55,
    "roc": 19.3,
    "capital": 27827
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 246.87,
   "sma50": 253.72,
   "sma200": 243.48,
   "rsi": 45.1,
   "adx": 15.0,
   "bar": "2026-11-03",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.96,
   "ivr": 37.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.22,
    "mid": 3.42,
    "roc": 17.5,
    "capital": 23000
   },
   "putFails": [
    "ADX 15.0 not above 25",
    "next earnings date unavailable",
    "RSI 45.1 too high for a put"
   ],
   "call": {
    "strike": 265.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.25,
    "mid": 3.27,
    "roc": 15.6,
    "capital": 24687
   },
   "callFails": [
    "ADX 15.0 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 402.41,
   "sma50": 371.49,
   "sma200": 384.95,
   "rsi": 61.5,
   "adx": 16.0,
   "bar": "2026-11-03",
   "peg": 4.66,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 45.19,
   "ivr": 39.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 350.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.15,
    "mid": 5.03,
    "roc": 16.9,
    "capital": 35000
   },
   "putFails": [
    "ADX 16.0 not above 25",
    "PEG 4.66 outside 0 to 2.5",
    "RSI 61.5 too high for a put"
   ],
   "call": {
    "strike": 450.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.21,
    "mid": 5.67,
    "roc": 16.6,
    "capital": 40241
   },
   "callFails": [
    "ADX 16.0 not above 25",
    "PEG 4.66 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 169.72,
   "sma50": 186.75,
   "sma200": 153.57,
   "rsi": 32.6,
   "adx": 22.2,
   "bar": "2026-11-03",
   "peg": 1.67,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 51.26,
   "ivr": 94.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.16,
    "mid": 2.56,
    "roc": 17.0,
    "capital": 14500
   },
   "putFails": [
    "ADX 22.2 not above 25"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.2,
    "mid": 2.62,
    "roc": 18.1,
    "capital": 16972
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 248.18,
   "sma50": 242.4,
   "sma200": 168.56,
   "rsi": 49.1,
   "adx": 16.2,
   "bar": "2026-11-03",
   "peg": 6.46,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.43,
   "ivr": 94.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 200.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.15,
    "mid": 5.2,
    "roc": 25.0,
    "capital": 20000
   },
   "putFails": [
    "ADX 16.2 not above 25",
    "PEG 6.46 outside 0 to 2.5",
    "RSI 49.1 too high for a put"
   ],
   "call": {
    "strike": 320.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": 0.18,
    "mid": 5.28,
    "roc": 17.2,
    "capital": 24818
   },
   "callFails": [
    "ADX 16.2 not above 25",
    "PEG 6.46 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 144.82,
   "sma50": 178.07,
   "sma200": 177.26,
   "rsi": 35.6,
   "adx": 27.5,
   "bar": "2026-11-03",
   "peg": 2.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 70.48,
   "ivr": 54.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 115.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": -0.16,
    "mid": 3.42,
    "roc": 24.2,
    "capital": 11500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.16,
    "mid": 2.28,
    "roc": 18.5,
    "capital": 14482
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 134.62,
   "sma50": 144.14,
   "sma200": 134.16,
   "rsi": 43.6,
   "adx": 17.4,
   "bar": "2026-11-03",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 75.88,
   "ivr": 30.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": -0.16,
    "mid": 3.52,
    "roc": 27.2,
    "capital": 10500
   },
   "putFails": [
    "ADX 17.4 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable",
    "RSI 43.6 too high for a put"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.46,
    "roc": 21.5,
    "capital": 13462
   },
   "callFails": [
    "ADX 17.4 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.8,
   "sma50": 10.19,
   "sma200": 10.75,
   "rsi": 31.4,
   "adx": 37.3,
   "bar": "2026-11-03",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 105.43,
   "ivr": 60.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.15,
    "mid": 0.23,
    "roc": 43.2,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.17,
    "mid": 0.17,
    "roc": 24.0,
    "capital": 680
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 84.49,
   "sma50": 107.62,
   "sma200": 92.34,
   "rsi": 29.7,
   "adx": 28.3,
   "bar": "2026-11-03",
   "peg": 1.38,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 64.53,
   "ivr": 34.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.16,
    "mid": 1.87,
    "roc": 25.7,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 104.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.16,
    "mid": 1.19,
    "roc": 16.5,
    "capital": 8449
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
