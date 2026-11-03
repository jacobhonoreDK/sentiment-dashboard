window.SCANNER_DATA = {
 "generatedAt": "2026-11-03T13:52:27Z",
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
   "price": 202.06,
   "sma50": 221.5,
   "sma200": 204.46,
   "rsi": 33.3,
   "adx": 21.0,
   "bar": "2026-11-02",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 48.13,
   "ivr": 76.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": -0.15,
    "mid": 3.25,
    "roc": 15.5,
    "capital": 17000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 21.0 not above 25"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.23,
    "mid": 3.23,
    "roc": 18.8,
    "capital": 20206
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 21.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 466.84,
   "sma50": 548.16,
   "sma200": 411.68,
   "rsi": 34.6,
   "adx": 21.3,
   "bar": "2026-11-02",
   "peg": 0.5,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 69.33,
   "ivr": 57.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 385.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 8.47,
    "roc": 25.9,
    "capital": 38500
   },
   "putFails": [
    "ADX 21.3 not above 25"
   ],
   "call": {
    "strike": 585.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.15,
    "mid": 6.5,
    "roc": 16.4,
    "capital": 46684
   },
   "callFails": [
    "ADX 21.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 507.12,
   "sma50": 513.39,
   "sma200": 438.18,
   "rsi": 40.1,
   "adx": 22.7,
   "bar": "2026-11-02",
   "peg": 1.69,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 29.84,
   "ivr": 42.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 475.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.23,
    "mid": 6.78,
    "roc": 16.8,
    "capital": 47500
   },
   "putFails": [
    "ADX 22.7 not above 25",
    "RSI 40.1 too high for a put"
   ],
   "call": {
    "strike": 535.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.29,
    "mid": 6.92,
    "roc": 16.1,
    "capital": 50712
   },
   "callFails": [
    "ADX 22.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 606.73,
   "sma50": 671.12,
   "sma200": 632.03,
   "rsi": 31.7,
   "adx": 27.6,
   "bar": "2026-11-02",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 40.59,
   "ivr": 52.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 540.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 7.1,
    "roc": 15.5,
    "capital": 54000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 675.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.21,
    "mid": 7.82,
    "roc": 15.2,
    "capital": 60673
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 278.99,
   "sma50": 337.76,
   "sma200": 340.39,
   "rsi": 21.2,
   "adx": 28.1,
   "bar": "2026-11-02",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.05,
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
    "strike": 300.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.27,
    "mid": 4.53,
    "roc": 15.6,
    "capital": 27899
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 245.63,
   "sma50": 254.02,
   "sma200": 243.44,
   "rsi": 43.9,
   "adx": 15.2,
   "bar": "2026-11-02",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 33.06,
   "ivr": 37.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.19,
    "mid": 2.88,
    "roc": 15.1,
    "capital": 22500
   },
   "putFails": [
    "ADX 15.2 not above 25",
    "next earnings date unavailable",
    "RSI 43.9 too high for a put"
   ],
   "call": {
    "strike": 265.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": 0.29,
    "mid": 4.67,
    "roc": 15.4,
    "capital": 24563
   },
   "callFails": [
    "ADX 15.2 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 403.82,
   "sma50": 370.42,
   "sma200": 385.12,
   "rsi": 62.5,
   "adx": 15.7,
   "bar": "2026-11-02",
   "peg": 4.66,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 44.91,
   "ivr": 39.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 350.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.16,
    "mid": 5.95,
    "roc": 16.3,
    "capital": 35000
   },
   "putFails": [
    "ADX 15.7 not above 25",
    "PEG 4.66 outside 0 to 2.5",
    "RSI 62.5 too high for a put"
   ],
   "call": {
    "strike": 455.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.2,
    "mid": 5.33,
    "roc": 15.5,
    "capital": 40382
   },
   "callFails": [
    "ADX 15.7 not above 25",
    "PEG 4.66 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 178.34,
   "sma50": 186.87,
   "sma200": 153.57,
   "rsi": 37.7,
   "adx": 20.7,
   "bar": "2026-11-02",
   "peg": 1.67,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 71.35,
   "ivr": 94.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.15,
    "mid": 3.6,
    "roc": 29.2,
    "capital": 14500
   },
   "putFails": [
    "ADX 20.7 not above 25"
   ],
   "call": {
    "strike": 220.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.84,
    "roc": 18.8,
    "capital": 17834
   },
   "callFails": [
    "ADX 20.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 241.81,
   "sma50": 241.25,
   "sma200": 167.88,
   "rsi": 45.5,
   "adx": 16.9,
   "bar": "2026-11-02",
   "peg": 6.46,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.69,
   "ivr": 94.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 192.5,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": -0.16,
    "mid": 5.95,
    "roc": 25.1,
    "capital": 19250
   },
   "putFails": [
    "ADX 16.9 not above 25",
    "PEG 6.46 outside 0 to 2.5",
    "RSI 45.5 too high for a put"
   ],
   "call": {
    "strike": 315.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.16,
    "mid": 4.1,
    "roc": 16.3,
    "capital": 24181
   },
   "callFails": [
    "ADX 16.9 not above 25",
    "PEG 6.46 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 137.83,
   "sma50": 178.77,
   "sma200": 177.74,
   "rsi": 29.7,
   "adx": 25.7,
   "bar": "2026-11-02",
   "peg": 2.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 70.61,
   "ivr": 54.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": -0.16,
    "mid": 3.5,
    "roc": 25.8,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": 0.17,
    "mid": 2.7,
    "roc": 15.9,
    "capital": 13783
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 130.76,
   "sma50": 143.9,
   "sma200": 134.35,
   "rsi": 40.3,
   "adx": 17.8,
   "bar": "2026-11-02",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 76.95,
   "ivr": 30.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.15,
    "mid": 2.97,
    "roc": 33.4,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable",
    "RSI 40.3 too high for a put"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.15,
    "mid": 2.2,
    "roc": 16.2,
    "capital": 13076
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.43,
   "sma50": 10.28,
   "sma200": 10.77,
   "rsi": 25.5,
   "adx": 36.4,
   "bar": "2026-11-02",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 108.23,
   "ivr": 60.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.18,
    "mid": 0.26,
    "roc": 60.0,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 24.7,
    "capital": 643
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 83.84,
   "sma50": 108.0,
   "sma200": 92.46,
   "rsi": 28.5,
   "adx": 27.2,
   "bar": "2026-11-02",
   "peg": 1.38,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 63.81,
   "ivr": 34.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 1.62,
    "roc": 27.2,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 103.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.16,
    "mid": 1.14,
    "roc": 16.0,
    "capital": 8384
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
