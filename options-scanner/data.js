window.SCANNER_DATA = {
 "generatedAt": "2026-11-10T17:51:56Z",
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
   "price": 167.04,
   "sma50": 217.96,
   "sma200": 204.53,
   "rsi": 23.4,
   "adx": 34.7,
   "bar": "2026-11-10",
   "peg": 0.23,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 62.94,
   "ivr": 81.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 140.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.16,
    "mid": 3.17,
    "roc": 26.7,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.48,
    "roc": 17.4,
    "capital": 16704
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 505.41,
   "sma50": 548.37,
   "sma200": 418.49,
   "rsi": 47.3,
   "adx": 23.5,
   "bar": "2026-11-10",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 65.93,
   "ivr": 47.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 415.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.15,
    "mid": 8.9,
    "roc": 25.3,
    "capital": 41500
   },
   "putFails": [
    "ADX 23.5 not above 25",
    "RSI 47.3 too high for a put"
   ],
   "call": {
    "strike": 620.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.16,
    "mid": 7.53,
    "roc": 17.5,
    "capital": 50541
   },
   "callFails": [
    "ADX 23.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 528.8,
   "sma50": 517.71,
   "sma200": 440.54,
   "rsi": 50.6,
   "adx": 18.5,
   "bar": "2026-11-10",
   "peg": 1.57,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 27.81,
   "ivr": 30.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 505.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.25,
    "mid": 6.88,
    "roc": 16.0,
    "capital": 50500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 50.6 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.28,
    "mid": 7.53,
    "roc": 16.8,
    "capital": 52880
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 639.75,
   "sma50": 677.53,
   "sma200": 631.69,
   "rsi": 46.1,
   "adx": 25.4,
   "bar": "2026-11-10",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.41,
   "ivr": 48.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 575.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.17,
    "mid": 7.83,
    "roc": 16.0,
    "capital": 57500
   },
   "putFails": [
    "RSI 46.1 too high for a put"
   ],
   "call": {
    "strike": 705.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.22,
    "mid": 8.48,
    "roc": 15.6,
    "capital": 63975
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 286.1,
   "sma50": 330.69,
   "sma200": 339.08,
   "rsi": 32.0,
   "adx": 30.1,
   "bar": "2026-11-10",
   "peg": 1.02,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.46,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 265.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.2,
    "mid": 3.4,
    "roc": 15.1,
    "capital": 26500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.28,
    "mid": 4.35,
    "roc": 17.9,
    "capital": 28610
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 268.23,
   "sma50": 254.13,
   "sma200": 244.23,
   "rsi": 60.0,
   "adx": 13.0,
   "bar": "2026-11-10",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.74,
   "ivr": 35.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.22,
    "mid": 3.7,
    "roc": 17.4,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.0 not above 25",
    "next earnings date unavailable",
    "RSI 60.0 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.29,
    "mid": 4.22,
    "roc": 18.5,
    "capital": 26823
   },
   "callFails": [
    "ADX 13.0 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 375.51,
   "sma50": 372.87,
   "sma200": 383.21,
   "rsi": 49.0,
   "adx": 16.1,
   "bar": "2026-11-10",
   "peg": 4.18,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 45.26,
   "ivr": 40.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 325.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.16,
    "mid": 5.7,
    "roc": 16.8,
    "capital": 32500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.1 not above 25",
    "PEG 4.18 outside 0 to 2.5",
    "RSI 49.0 too high for a put"
   ],
   "call": {
    "strike": 420.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.21,
    "mid": 5.3,
    "roc": 16.6,
    "capital": 37551
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.1 not above 25",
    "PEG 4.18 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 164.82,
   "sma50": 185.11,
   "sma200": 153.52,
   "rsi": 37.0,
   "adx": 28.2,
   "bar": "2026-11-10",
   "peg": 1.31,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 50.71,
   "ivr": 34.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 140.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.16,
    "mid": 2.66,
    "roc": 18.2,
    "capital": 14000
   },
   "putFails": [],
   "call": {
    "strike": 190.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.18,
    "mid": 2.21,
    "roc": 15.8,
    "capital": 16482
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 221.09,
   "sma50": 243.79,
   "sma200": 171.33,
   "rsi": 39.5,
   "adx": 20.1,
   "bar": "2026-11-10",
   "peg": 5.6,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 72.29,
   "ivr": 88.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.16,
    "mid": 4.7,
    "roc": 25.1,
    "capital": 18000
   },
   "putFails": [
    "ADX 20.1 not above 25",
    "PEG 5.60 outside 0 to 2.5",
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 282.5,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.16,
    "mid": 3.5,
    "roc": 15.2,
    "capital": 22109
   },
   "callFails": [
    "ADX 20.1 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 130.22,
   "sma50": 173.35,
   "sma200": 175.17,
   "rsi": 32.1,
   "adx": 30.8,
   "bar": "2026-11-10",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 69.57,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.15,
    "mid": 2.8,
    "roc": 25.6,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.17,
    "mid": 2.41,
    "roc": 17.8,
    "capital": 13022
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 119.47,
   "sma50": 144.12,
   "sma200": 133.35,
   "rsi": 36.2,
   "adx": 16.7,
   "bar": "2026-11-10",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 78.18,
   "ivr": 20.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 95.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.15,
    "mid": 2.69,
    "roc": 33.4,
    "capital": 9500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.3 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 160.0,
    "exp": "2026-12-24",
    "dte": 44,
    "delta": 0.16,
    "mid": 2.51,
    "roc": 17.4,
    "capital": 11947
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.3 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.99,
   "sma50": 9.72,
   "sma200": 10.66,
   "rsi": 41.4,
   "adx": 37.3,
   "bar": "2026-11-10",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 101.73,
   "ivr": 62.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.19,
    "mid": 0.27,
    "roc": 57.8,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA",
    "RSI 41.4 too high for a put"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-24",
    "dte": 44,
    "delta": 0.15,
    "mid": 0.15,
    "roc": 18.4,
    "capital": 699
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 80.33,
   "sma50": 105.06,
   "sma200": 91.73,
   "rsi": 33.3,
   "adx": 30.5,
   "bar": "2026-11-10",
   "peg": 1.35,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 66.96,
   "ivr": 37.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.15,
    "mid": 1.63,
    "roc": 24.1,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 99.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.16,
    "mid": 1.15,
    "roc": 16.8,
    "capital": 8033
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
   "ticker": "PLTR",
   "strategy": "Cash-Secured Put",
   "strike": 140.0,
   "exp": "2026-12-18",
   "dte": 38,
   "delta": -0.16,
   "mid": 2.66,
   "roc": 18.2,
   "capital": 14000,
   "ivr": 34.6,
   "rsi": 37.0,
   "adx": 28.2,
   "price": 164.82,
   "sma50": 185.11,
   "sma200": 153.52
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 190.0,
   "exp": "2026-12-11",
   "dte": 31,
   "delta": 0.18,
   "mid": 2.21,
   "roc": 15.8,
   "capital": 16482,
   "ivr": 34.6,
   "rsi": 37.0,
   "adx": 28.2,
   "price": 164.82,
   "sma50": 185.11,
   "sma200": 153.52
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 705.0,
   "exp": "2026-12-11",
   "dte": 31,
   "delta": 0.22,
   "mid": 8.48,
   "roc": 15.6,
   "capital": 63975,
   "ivr": 48.0,
   "rsi": 46.1,
   "adx": 25.4,
   "price": 639.75,
   "sma50": 677.53,
   "sma200": 631.69
  }
 ],
 "errors": []
};
