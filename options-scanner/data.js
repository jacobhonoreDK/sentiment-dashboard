window.SCANNER_DATA = {
 "generatedAt": "2026-11-09T17:31:47Z",
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
   "price": 177.99,
   "sma50": 219.02,
   "sma200": 204.62,
   "rsi": 27.2,
   "adx": 31.8,
   "bar": "2026-11-09",
   "peg": 0.23,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 59.05,
   "ivr": 84.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.16,
    "mid": 3.2,
    "roc": 24.3,
    "capital": 15000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 210.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.18,
    "mid": 2.48,
    "roc": 15.9,
    "capital": 17799
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 502.73,
   "sma50": 547.56,
   "sma200": 417.19,
   "rsi": 46.9,
   "adx": 25.0,
   "bar": "2026-11-09",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.75,
   "ivr": 58.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 405.0,
    "exp": "2026-12-24",
    "dte": 45,
    "delta": -0.15,
    "mid": 11.3,
    "roc": 22.6,
    "capital": 40500
   },
   "putFails": [
    "ADX 25.0 not above 25",
    "RSI 46.9 too high for a put"
   ],
   "call": {
    "strike": 610.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.17,
    "mid": 7.22,
    "roc": 16.4,
    "capital": 50273
   },
   "callFails": [
    "ADX 25.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 544.45,
   "sma50": 517.26,
   "sma200": 440.24,
   "rsi": 57.2,
   "adx": 19.7,
   "bar": "2026-11-09",
   "peg": 1.57,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 26.17,
   "ivr": 41.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 515.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.24,
    "mid": 7.3,
    "roc": 16.2,
    "capital": 51500
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 57.2 too high for a put"
   ],
   "call": {
    "strike": 570.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.28,
    "mid": 6.47,
    "roc": 13.6,
    "capital": 54445
   },
   "callFails": [
    "ADX 19.7 not above 25",
    "best ROC 13.6% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 641.77,
   "sma50": 676.19,
   "sma200": 631.85,
   "rsi": 46.6,
   "adx": 26.3,
   "bar": "2026-11-09",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.1,
   "ivr": 55.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 575.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.17,
    "mid": 7.7,
    "roc": 15.3,
    "capital": 57500
   },
   "putFails": [
    "RSI 46.6 too high for a put"
   ],
   "call": {
    "strike": 705.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.23,
    "mid": 9.0,
    "roc": 16.0,
    "capital": 64177
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 291.67,
   "sma50": 331.83,
   "sma200": 339.33,
   "rsi": 35.7,
   "adx": 30.3,
   "bar": "2026-11-09",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.98,
   "ivr": 54.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 270.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.2,
    "mid": 3.58,
    "roc": 15.1,
    "capital": 27000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.29,
    "mid": 4.5,
    "roc": 17.6,
    "capital": 29167
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 269.03,
   "sma50": 254.0,
   "sma200": 244.09,
   "rsi": 60.4,
   "adx": 13.1,
   "bar": "2026-11-09",
   "peg": 1.2,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.56,
   "ivr": 42.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.23,
    "mid": 3.92,
    "roc": 17.9,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "RSI 60.4 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.29,
    "mid": 4.33,
    "roc": 18.3,
    "capital": 26903
   },
   "callFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 377.82,
   "sma50": 372.72,
   "sma200": 383.51,
   "rsi": 49.9,
   "adx": 16.6,
   "bar": "2026-11-09",
   "peg": 4.18,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 45.9,
   "ivr": 66.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 320.0,
    "exp": "2026-12-24",
    "dte": 45,
    "delta": -0.15,
    "mid": 5.93,
    "roc": 15.0,
    "capital": 32000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.6 not above 25",
    "PEG 4.18 outside 0 to 2.5",
    "RSI 49.9 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.21,
    "mid": 5.15,
    "roc": 15.5,
    "capital": 37782
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.6 not above 25",
    "PEG 4.18 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 169.4,
   "sma50": 185.54,
   "sma200": 153.53,
   "rsi": 39.6,
   "adx": 27.8,
   "bar": "2026-11-09",
   "peg": 1.31,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 51.16,
   "ivr": 48.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.15,
    "mid": 2.45,
    "roc": 19.3,
    "capital": 14500
   },
   "putFails": [
    "RSI 39.6 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.19,
    "mid": 2.34,
    "roc": 15.8,
    "capital": 16940
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 224.66,
   "sma50": 243.91,
   "sma200": 170.79,
   "rsi": 40.2,
   "adx": 19.3,
   "bar": "2026-11-09",
   "peg": 5.6,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.58,
   "ivr": 95.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.15,
    "mid": 5.0,
    "roc": 26.0,
    "capital": 18000
   },
   "putFails": [
    "ADX 19.3 not above 25",
    "PEG 5.60 outside 0 to 2.5",
    "RSI 40.2 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.16,
    "mid": 3.2,
    "roc": 16.2,
    "capital": 22466
   },
   "callFails": [
    "ADX 19.3 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 137.16,
   "sma50": 174.52,
   "sma200": 175.59,
   "rsi": 35.3,
   "adx": 29.9,
   "bar": "2026-11-09",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.14,
   "ivr": 51.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-24",
    "dte": 45,
    "delta": -0.15,
    "mid": 3.29,
    "roc": 24.3,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": 0.17,
    "mid": 2.35,
    "roc": 16.1,
    "capital": 13716
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 125.9,
   "sma50": 144.4,
   "sma200": 133.56,
   "rsi": 39.6,
   "adx": 16.2,
   "bar": "2026-11-09",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.49,
   "ivr": 20.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 100.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.16,
    "mid": 3.25,
    "roc": 30.4,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.9 not above 30",
    "next earnings date unavailable",
    "RSI 39.6 too high for a put"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": 0.16,
    "mid": 2.2,
    "roc": 16.4,
    "capital": 12590
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.9 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.59,
   "sma50": 9.8,
   "sma200": 10.67,
   "rsi": 36.9,
   "adx": 38.9,
   "bar": "2026-11-09",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 107.2,
   "ivr": 61.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.16,
    "mid": 0.23,
    "roc": 51.3,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 20.6,
    "capital": 659
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 84.18,
   "sma50": 105.57,
   "sma200": 91.87,
   "rsi": 37.0,
   "adx": 30.4,
   "bar": "2026-11-09",
   "peg": 1.31,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 64.81,
   "ivr": 42.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.16,
    "mid": 1.68,
    "roc": 27.4,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 103.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.16,
    "mid": 1.2,
    "roc": 16.3,
    "capital": 8418
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
   "strike": 705.0,
   "exp": "2026-12-11",
   "dte": 32,
   "delta": 0.23,
   "mid": 9.0,
   "roc": 16.0,
   "capital": 64177,
   "ivr": 55.4,
   "rsi": 46.6,
   "adx": 26.3,
   "price": 641.77,
   "sma50": 676.19,
   "sma200": 631.85
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 195.0,
   "exp": "2026-12-11",
   "dte": 32,
   "delta": 0.19,
   "mid": 2.34,
   "roc": 15.8,
   "capital": 16940,
   "ivr": 48.3,
   "rsi": 39.6,
   "adx": 27.8,
   "price": 169.4,
   "sma50": 185.54,
   "sma200": 153.53
  }
 ],
 "errors": []
};
