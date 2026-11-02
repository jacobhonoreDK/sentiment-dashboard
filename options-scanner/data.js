window.SCANNER_DATA = {
 "generatedAt": "2026-11-02T15:56:50Z",
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
   "price": 207.16,
   "sma50": 221.6,
   "sma200": 204.49,
   "rsi": 38.2,
   "adx": 21.0,
   "bar": "2026-11-02",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.59,
   "ivr": 64.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.17,
    "mid": 2.93,
    "roc": 18.1,
    "capital": 18500
   },
   "putFails": [
    "ADX 21.0 not above 25",
    "RSI 38.2 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.23,
    "mid": 3.0,
    "roc": 16.5,
    "capital": 20716
   },
   "callFails": [
    "ADX 21.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 493.34,
   "sma50": 548.69,
   "sma200": 411.82,
   "rsi": 38.0,
   "adx": 20.8,
   "bar": "2026-11-02",
   "peg": 0.5,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 63.22,
   "ivr": 48.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 420.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.15,
    "mid": 8.25,
    "roc": 22.4,
    "capital": 42000
   },
   "putFails": [
    "ADX 20.8 not above 25"
   ],
   "call": {
    "strike": 615.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.16,
    "mid": 6.97,
    "roc": 16.1,
    "capital": 49334
   },
   "callFails": [
    "ADX 20.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 527.29,
   "sma50": 513.79,
   "sma200": 438.28,
   "rsi": 52.8,
   "adx": 21.4,
   "bar": "2026-11-02",
   "peg": 1.69,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 26.77,
   "ivr": 35.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 500.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.25,
    "mid": 6.65,
    "roc": 15.2,
    "capital": 50000
   },
   "putFails": [
    "ADX 21.4 not above 25",
    "RSI 52.8 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.28,
    "mid": 6.38,
    "roc": 13.8,
    "capital": 52729
   },
   "callFails": [
    "ADX 21.4 not above 25",
    "best ROC 13.8% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 616.47,
   "sma50": 671.31,
   "sma200": 632.08,
   "rsi": 33.8,
   "adx": 27.5,
   "bar": "2026-11-02",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 38.22,
   "ivr": 47.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 560.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.18,
    "mid": 7.8,
    "roc": 15.9,
    "capital": 56000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.23,
    "mid": 8.4,
    "roc": 15.5,
    "capital": 61647
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 284.48,
   "sma50": 337.86,
   "sma200": 340.41,
   "rsi": 25.3,
   "adx": 28.1,
   "bar": "2026-11-02",
   "peg": 0.98,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 29.59,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 270.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.24,
    "mid": 4.0,
    "roc": 16.9,
    "capital": 27000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": 0.28,
    "mid": 4.65,
    "roc": 15.3,
    "capital": 28448
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 252.82,
   "sma50": 254.16,
   "sma200": 243.47,
   "rsi": 50.0,
   "adx": 15.2,
   "bar": "2026-11-02",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.41,
   "ivr": 34.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 240.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.26,
    "mid": 4.12,
    "roc": 19.6,
    "capital": 24000
   },
   "putFails": [
    "ADX 15.2 not above 25",
    "next earnings date unavailable",
    "RSI 50.0 too high for a put"
   ],
   "call": {
    "strike": 270.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.27,
    "mid": 3.62,
    "roc": 16.4,
    "capital": 25282
   },
   "callFails": [
    "ADX 15.2 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 413.83,
   "sma50": 370.62,
   "sma200": 385.17,
   "rsi": 65.9,
   "adx": 15.7,
   "bar": "2026-11-02",
   "peg": 4.66,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 42.59,
   "ivr": 24.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 360.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": -0.16,
    "mid": 5.8,
    "roc": 15.1,
    "capital": 36000
   },
   "putFails": [
    "ADX 15.7 not above 25",
    "PEG 4.66 outside 0 to 2.5",
    "IV rank 24.2 not above 30",
    "RSI 65.9 too high for a put"
   ],
   "call": {
    "strike": 460.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.21,
    "mid": 5.47,
    "roc": 15.1,
    "capital": 41383
   },
   "callFails": [
    "ADX 15.7 not above 25",
    "PEG 4.66 outside 0 to 2.5",
    "IV rank 24.2 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 185.13,
   "sma50": 187.01,
   "sma200": 153.61,
   "rsi": 43.0,
   "adx": 20.4,
   "bar": "2026-11-02",
   "peg": 1.67,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 68.8,
   "ivr": 93.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 155.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.17,
    "mid": 4.03,
    "roc": 29.6,
    "capital": 15500
   },
   "putFails": [
    "ADX 20.4 not above 25",
    "RSI 43.0 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.16,
    "mid": 2.59,
    "roc": 16.0,
    "capital": 18513
   },
   "callFails": [
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 249.4,
   "sma50": 241.4,
   "sma200": 167.92,
   "rsi": 49.3,
   "adx": 16.9,
   "bar": "2026-11-02",
   "peg": 6.46,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 67.42,
   "ivr": 81.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 205.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": -0.18,
    "mid": 5.67,
    "roc": 25.9,
    "capital": 20500
   },
   "putFails": [
    "ADX 16.9 not above 25",
    "PEG 6.46 outside 0 to 2.5",
    "RSI 49.3 too high for a put"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": 0.23,
    "mid": 6.78,
    "roc": 25.4,
    "capital": 24940
   },
   "callFails": [
    "ADX 16.9 not above 25",
    "PEG 6.46 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 140.98,
   "sma50": 178.83,
   "sma200": 177.76,
   "rsi": 30.9,
   "adx": 25.6,
   "bar": "2026-11-02",
   "peg": 2.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.38,
   "ivr": 46.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.18,
    "mid": 3.28,
    "roc": 31.1,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.18,
    "mid": 2.57,
    "roc": 20.8,
    "capital": 14098
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 134.93,
   "sma50": 143.98,
   "sma200": 134.38,
   "rsi": 43.6,
   "adx": 17.8,
   "bar": "2026-11-02",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 73.9,
   "ivr": 28.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.95,
    "roc": 30.5,
    "capital": 11000
   },
   "putFails": [
    "ADX 17.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.1 not above 30",
    "next earnings date unavailable",
    "RSI 43.6 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": 0.15,
    "mid": 2.29,
    "roc": 15.8,
    "capital": 13493
   },
   "callFails": [
    "ADX 17.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.1 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.72,
   "sma50": 10.28,
   "sma200": 10.78,
   "rsi": 27.2,
   "adx": 36.1,
   "bar": "2026-11-02",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 103.8,
   "ivr": 55.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.2,
    "mid": 0.29,
    "roc": 60.1,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-11",
    "dte": 39,
    "delta": 0.17,
    "mid": 0.17,
    "roc": 24.4,
    "capital": 672
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 86.4,
   "sma50": 108.05,
   "sma200": 92.47,
   "rsi": 31.8,
   "adx": 27.2,
   "bar": "2026-11-02",
   "peg": 1.38,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 59.4,
   "ivr": 25.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-30",
   "put": {
    "strike": 75.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": -0.19,
    "mid": 1.88,
    "roc": 28.5,
    "capital": 7500
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank 25.4 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 105.0,
    "exp": "2026-12-04",
    "dte": 32,
    "delta": 0.16,
    "mid": 1.19,
    "roc": 15.8,
    "capital": 8640
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
