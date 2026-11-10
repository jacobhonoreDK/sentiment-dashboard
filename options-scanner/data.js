window.SCANNER_DATA = {
 "generatedAt": "2026-11-10T13:54:22Z",
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
   "price": 178.67,
   "sma50": 219.04,
   "sma200": 204.63,
   "rsi": 27.4,
   "adx": 31.8,
   "bar": "2026-11-09",
   "peg": 0.23,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 56.88,
   "ivr": 81.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.15,
    "mid": 2.81,
    "roc": 22.0,
    "capital": 15000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 210.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.48,
    "roc": 16.3,
    "capital": 17867
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 508.58,
   "sma50": 547.67,
   "sma200": 417.22,
   "rsi": 47.7,
   "adx": 24.8,
   "bar": "2026-11-09",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.26,
   "ivr": 47.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 420.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.15,
    "mid": 9.1,
    "roc": 25.5,
    "capital": 42000
   },
   "putFails": [
    "ADX 24.8 not above 25",
    "RSI 47.7 too high for a put"
   ],
   "call": {
    "strike": 620.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.17,
    "mid": 7.45,
    "roc": 17.2,
    "capital": 50858
   },
   "callFails": [
    "ADX 24.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 545.18,
   "sma50": 517.28,
   "sma200": 440.24,
   "rsi": 57.5,
   "adx": 19.7,
   "bar": "2026-11-09",
   "peg": 1.57,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 25.8,
   "ivr": 30.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 520.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.26,
    "mid": 7.28,
    "roc": 16.5,
    "capital": 52000
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 57.5 too high for a put"
   ],
   "call": {
    "strike": 570.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.3,
    "mid": 7.22,
    "roc": 15.6,
    "capital": 54518
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 641.37,
   "sma50": 676.19,
   "sma200": 631.85,
   "rsi": 46.5,
   "adx": 26.2,
   "bar": "2026-11-09",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.29,
   "ivr": 48.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 575.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.17,
    "mid": 7.78,
    "roc": 15.9,
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
    "mid": 8.88,
    "roc": 16.3,
    "capital": 64137
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 288.15,
   "sma50": 331.76,
   "sma200": 339.31,
   "rsi": 32.9,
   "adx": 30.3,
   "bar": "2026-11-09",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.46,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 270.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.24,
    "mid": 4.3,
    "roc": 18.8,
    "capital": 27000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.25,
    "mid": 3.8,
    "roc": 15.5,
    "capital": 28815
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 266.93,
   "sma50": 253.96,
   "sma200": 244.08,
   "rsi": 59.2,
   "adx": 13.1,
   "bar": "2026-11-09",
   "peg": 1.2,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.7,
   "ivr": 35.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 245.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.21,
    "mid": 3.92,
    "roc": 15.4,
    "capital": 24500
   },
   "putFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "RSI 59.2 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.27,
    "mid": 3.88,
    "roc": 17.1,
    "capital": 26693
   },
   "callFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 378.05,
   "sma50": 372.72,
   "sma200": 383.51,
   "rsi": 49.9,
   "adx": 16.5,
   "bar": "2026-11-09",
   "peg": 4.18,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 45.05,
   "ivr": 40.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 330.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.16,
    "mid": 5.15,
    "roc": 18.4,
    "capital": 33000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.5 not above 25",
    "PEG 4.18 outside 0 to 2.5",
    "RSI 49.9 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.2,
    "mid": 4.95,
    "roc": 15.4,
    "capital": 37805
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.5 not above 25",
    "PEG 4.18 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 169.2,
   "sma50": 185.54,
   "sma200": 153.53,
   "rsi": 39.4,
   "adx": 27.7,
   "bar": "2026-11-09",
   "peg": 1.31,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 50.17,
   "ivr": 34.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.15,
    "mid": 2.36,
    "roc": 19.1,
    "capital": 14500
   },
   "putFails": [
    "RSI 39.4 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.21,
    "mid": 2.92,
    "roc": 16.6,
    "capital": 16920
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 228.58,
   "sma50": 243.98,
   "sma200": 170.81,
   "rsi": 42.4,
   "adx": 19.2,
   "bar": "2026-11-09",
   "peg": 5.6,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.58,
   "ivr": 88.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.16,
    "mid": 5.15,
    "roc": 26.7,
    "capital": 18500
   },
   "putFails": [
    "ADX 19.2 not above 25",
    "PEG 5.60 outside 0 to 2.5",
    "RSI 42.4 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.16,
    "mid": 3.8,
    "roc": 16.0,
    "capital": 22858
   },
   "callFails": [
    "ADX 19.2 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 136.1,
   "sma50": 174.5,
   "sma200": 175.58,
   "rsi": 34.5,
   "adx": 29.9,
   "bar": "2026-11-09",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 67.28,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.15,
    "mid": 2.86,
    "roc": 25.0,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.15,
    "mid": 2.17,
    "roc": 15.3,
    "capital": 13610
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 125.59,
   "sma50": 144.39,
   "sma200": 133.56,
   "rsi": 39.5,
   "adx": 16.2,
   "bar": "2026-11-09",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.15,
   "ivr": 20.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 100.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": -0.16,
    "mid": 3.25,
    "roc": 31.2,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.3 not above 30",
    "next earnings date unavailable",
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-18",
    "dte": 38,
    "delta": 0.15,
    "mid": 2.16,
    "roc": 16.5,
    "capital": 12559
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.3 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.64,
   "sma50": 9.8,
   "sma200": 10.67,
   "rsi": 37.4,
   "adx": 38.9,
   "bar": "2026-11-09",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 108.36,
   "ivr": 62.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.16,
    "mid": 0.23,
    "roc": 55.3,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.17,
    "mid": 0.15,
    "roc": 27.5,
    "capital": 664
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 83.32,
   "sma50": 105.55,
   "sma200": 91.87,
   "rsi": 35.8,
   "adx": 30.4,
   "bar": "2026-11-09",
   "peg": 1.31,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 65.37,
   "ivr": 37.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-09",
   "put": {
    "strike": 69.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": -0.16,
    "mid": 1.6,
    "roc": 27.3,
    "capital": 6900
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 103.0,
    "exp": "2026-12-11",
    "dte": 31,
    "delta": 0.15,
    "mid": 1.08,
    "roc": 15.2,
    "capital": 8332
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
   "strategy": "Covered Call",
   "strike": 195.0,
   "exp": "2026-12-18",
   "dte": 38,
   "delta": 0.21,
   "mid": 2.92,
   "roc": 16.6,
   "capital": 16920,
   "ivr": 34.6,
   "rsi": 39.4,
   "adx": 27.7,
   "price": 169.2,
   "sma50": 185.54,
   "sma200": 153.53
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 705.0,
   "exp": "2026-12-11",
   "dte": 31,
   "delta": 0.23,
   "mid": 8.88,
   "roc": 16.3,
   "capital": 64137,
   "ivr": 48.0,
   "rsi": 46.5,
   "adx": 26.2,
   "price": 641.37,
   "sma50": 676.19,
   "sma200": 631.85
  }
 ],
 "errors": []
};
