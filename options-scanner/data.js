window.SCANNER_DATA = {
 "generatedAt": "2026-11-10T23:24:35Z",
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
   "price": 168.89,
   "sma50": 218.0,
   "sma200": 204.54,
   "rsi": 23.9,
   "adx": 34.7,
   "bar": "2026-11-10",
   "peg": 0.23,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 58.92,
   "ivr": 81.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 140.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.15,
    "mid": 3.0,
    "roc": 20.6,
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
    "mid": 2.26,
    "roc": 15.8,
    "capital": 16889
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 515.21,
   "sma50": 548.56,
   "sma200": 418.54,
   "rsi": 48.6,
   "adx": 23.5,
   "bar": "2026-11-10",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 65.36,
   "ivr": 47.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 425.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.15,
    "mid": 9.32,
    "roc": 25.8,
    "capital": 42500
   },
   "putFails": [
    "ADX 23.5 not above 25",
    "RSI 48.6 too high for a put"
   ],
   "call": {
    "strike": 635.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.15,
    "mid": 6.62,
    "roc": 15.1,
    "capital": 51521
   },
   "callFails": [
    "ADX 23.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 533.16,
   "sma50": 517.8,
   "sma200": 440.56,
   "rsi": 52.3,
   "adx": 18.5,
   "bar": "2026-11-10",
   "peg": 1.57,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 27.27,
   "ivr": 30.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 505.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.25,
    "mid": 7.03,
    "roc": 16.4,
    "capital": 50500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 52.3 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.28,
    "mid": 6.85,
    "roc": 15.1,
    "capital": 53316
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 641.39,
   "sma50": 677.57,
   "sma200": 631.7,
   "rsi": 46.5,
   "adx": 25.4,
   "bar": "2026-11-10",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.8,
   "ivr": 48.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 575.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.17,
    "mid": 7.57,
    "roc": 15.5,
    "capital": 57500
   },
   "putFails": [
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 705.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.23,
    "mid": 9.03,
    "roc": 16.6,
    "capital": 64139
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 287.38,
   "sma50": 330.72,
   "sma200": 339.08,
   "rsi": 32.5,
   "adx": 30.1,
   "bar": "2026-11-10",
   "peg": 1.02,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.66,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 270.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.24,
    "mid": 4.1,
    "roc": 17.9,
    "capital": 27000
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
    "mid": 4.3,
    "roc": 17.6,
    "capital": 28738
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 270.87,
   "sma50": 254.18,
   "sma200": 244.24,
   "rsi": 61.6,
   "adx": 13.0,
   "bar": "2026-11-10",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.69,
   "ivr": 35.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.2,
    "mid": 3.4,
    "roc": 16.0,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.0 not above 25",
    "next earnings date unavailable",
    "RSI 61.6 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.25,
    "mid": 3.67,
    "roc": 16.0,
    "capital": 27087
   },
   "callFails": [
    "ADX 13.0 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 379.78,
   "sma50": 372.96,
   "sma200": 383.23,
   "rsi": 50.5,
   "adx": 16.1,
   "bar": "2026-11-10",
   "peg": 4.18,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 44.79,
   "ivr": 40.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 330.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.16,
    "mid": 5.78,
    "roc": 16.8,
    "capital": 33000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.1 not above 25",
    "PEG 4.18 outside 0 to 2.5",
    "RSI 50.5 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.21,
    "mid": 4.93,
    "roc": 15.3,
    "capital": 37978
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
   "price": 168.82,
   "sma50": 185.19,
   "sma200": 153.54,
   "rsi": 39.2,
   "adx": 28.2,
   "bar": "2026-11-10",
   "peg": 1.31,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 49.83,
   "ivr": 34.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.15,
    "mid": 2.44,
    "roc": 19.8,
    "capital": 14500
   },
   "putFails": [
    "RSI 39.2 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.21,
    "mid": 2.79,
    "roc": 15.9,
    "capital": 16882
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 225.76,
   "sma50": 243.88,
   "sma200": 171.36,
   "rsi": 41.3,
   "adx": 20.1,
   "bar": "2026-11-10",
   "peg": 5.6,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.87,
   "ivr": 88.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 182.5,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.16,
    "mid": 4.53,
    "roc": 23.8,
    "capital": 18250
   },
   "putFails": [
    "ADX 20.1 not above 25",
    "PEG 5.60 outside 0 to 2.5",
    "RSI 41.3 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.17,
    "mid": 3.93,
    "roc": 16.7,
    "capital": 22576
   },
   "callFails": [
    "ADX 20.1 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 132.13,
   "sma50": 173.38,
   "sma200": 175.18,
   "rsi": 32.8,
   "adx": 30.8,
   "bar": "2026-11-10",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 69.26,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-24",
    "dte": 44,
    "delta": -0.15,
    "mid": 3.0,
    "roc": 23.7,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.15,
    "mid": 2.27,
    "roc": 16.5,
    "capital": 13213
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 121.07,
   "sma50": 144.15,
   "sma200": 133.36,
   "rsi": 37.0,
   "adx": 16.7,
   "bar": "2026-11-10",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 76.34,
   "ivr": 20.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 95.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.15,
    "mid": 3.03,
    "roc": 30.6,
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
    "strike": 155.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.15,
    "mid": 1.9,
    "roc": 18.4,
    "capital": 12107
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
   "price": 7.34,
   "sma50": 9.73,
   "sma200": 10.66,
   "rsi": 44.8,
   "adx": 37.3,
   "bar": "2026-11-10",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 101.02,
   "ivr": 62.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-24",
    "dte": 44,
    "delta": -0.16,
    "mid": 0.28,
    "roc": 41.5,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA",
    "RSI 44.8 too high for a put"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 17.7,
    "capital": 734
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 81.33,
   "sma50": 105.08,
   "sma200": 91.74,
   "rsi": 34.1,
   "adx": 30.5,
   "bar": "2026-11-10",
   "peg": 1.35,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 65.97,
   "ivr": 37.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 69.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.18,
    "mid": 1.82,
    "roc": 31.1,
    "capital": 6900
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 100.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.16,
    "mid": 1.12,
    "roc": 16.2,
    "capital": 8133
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
   "dte": 31,
   "delta": 0.23,
   "mid": 9.03,
   "roc": 16.6,
   "capital": 64139,
   "ivr": 48.0,
   "rsi": 46.5,
   "adx": 25.4,
   "price": 641.39,
   "sma50": 677.57,
   "sma200": 631.7
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 195.0,
   "exp": "2026-12-18",
   "dte": 38,
   "delta": 0.21,
   "mid": 2.79,
   "roc": 15.9,
   "capital": 16882,
   "ivr": 34.6,
   "rsi": 39.2,
   "adx": 28.2,
   "price": 168.82,
   "sma50": 185.19,
   "sma200": 153.54
  }
 ],
 "errors": []
};
