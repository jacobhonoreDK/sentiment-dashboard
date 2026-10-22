window.SCANNER_DATA = {
 "generatedAt": "2026-10-22T10:13:11Z",
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
   "price": 221.97,
   "sma50": 223.01,
   "sma200": 203.43,
   "rsi": 47.9,
   "adx": 17.7,
   "bar": "2026-10-21",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 38.22,
   "ivr": 41.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.18,
    "mid": 3.0,
    "roc": 15.2,
    "capital": 20000
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "RSI 47.9 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.27,
    "mid": 3.92,
    "roc": 17.9,
    "capital": 22197
   },
   "callFails": [
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 552.72,
   "sma50": 541.1,
   "sma200": 399.08,
   "rsi": 45.1,
   "adx": 22.1,
   "bar": "2026-10-21",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.97,
   "ivr": 39.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 465.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.15,
    "mid": 8.88,
    "roc": 19.4,
    "capital": 46500
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 45.1 too high for a put"
   ],
   "call": {
    "strike": 670.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.17,
    "mid": 8.68,
    "roc": 15.9,
    "capital": 55272
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 532.95,
   "sma50": 507.3,
   "sma200": 436.1,
   "rsi": 58.9,
   "adx": 33.0,
   "bar": "2026-10-21",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.54,
   "ivr": 50.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.24,
    "mid": 7.85,
    "roc": 15.9,
    "capital": 50000
   },
   "putFails": [
    "RSI 58.9 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.29,
    "mid": 8.35,
    "roc": 15.9,
    "capital": 53295
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 697.52,
   "sma50": 661.46,
   "sma200": 632.62,
   "rsi": 47.4,
   "adx": 28.8,
   "bar": "2026-10-21",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.52,
   "ivr": 67.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 620.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.18,
    "mid": 9.45,
    "roc": 15.5,
    "capital": 62000
   },
   "putFails": [
    "RSI 47.4 too high for a put"
   ],
   "call": {
    "strike": 775.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.25,
    "mid": 13.12,
    "roc": 19.1,
    "capital": 69752
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 334.76,
   "sma50": 343.85,
   "sma200": 341.27,
   "rsi": 40.3,
   "adx": 15.3,
   "bar": "2026-10-21",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.07,
   "ivr": 72.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 310.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.22,
    "mid": 4.88,
    "roc": 15.9,
    "capital": 31000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25",
    "RSI 40.3 too high for a put"
   ],
   "call": {
    "strike": 360.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.28,
    "mid": 6.1,
    "roc": 18.5,
    "capital": 33476
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 262.37,
   "sma50": 256.33,
   "sma200": 243.21,
   "rsi": 57.1,
   "adx": 14.2,
   "bar": "2026-10-21",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.62,
   "ivr": 62.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.21,
    "mid": 4.35,
    "roc": 18.4,
    "capital": 24000
   },
   "putFails": [
    "ADX 14.2 not above 25",
    "RSI 57.1 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.23,
    "mid": 3.92,
    "roc": 15.2,
    "capital": 26237
   },
   "callFails": [
    "ADX 14.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 386.47,
   "sma50": 362.18,
   "sma200": 386.94,
   "rsi": 59.8,
   "adx": 13.2,
   "bar": "2026-10-21",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 42.87,
   "ivr": 36.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 345.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.18,
    "mid": 5.35,
    "roc": 15.7,
    "capital": 34500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 13.2 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 59.8 too high for a put"
   ],
   "call": {
    "strike": 430.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.23,
    "mid": 6.3,
    "roc": 16.5,
    "capital": 38647
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 13.2 not above 25",
    "PEG 4.54 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 201.72,
   "sma50": 183.89,
   "sma200": 152.99,
   "rsi": 59.2,
   "adx": 27.6,
   "bar": "2026-10-21",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 61.55,
   "ivr": 72.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 170.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.16,
    "mid": 3.78,
    "roc": 22.5,
    "capital": 17000
   },
   "putFails": [
    "RSI 59.2 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.2,
    "mid": 3.62,
    "roc": 18.2,
    "capital": 20172
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 239.34,
   "sma50": 233.84,
   "sma200": 162.31,
   "rsi": 46.5,
   "adx": 22.1,
   "bar": "2026-10-21",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 54.88,
   "ivr": 52.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 210.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.2,
    "mid": 5.12,
    "roc": 24.7,
    "capital": 21000
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.22,
    "mid": 5.12,
    "roc": 21.7,
    "capital": 23934
   },
   "callFails": [
    "ADX 22.1 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 177.08,
   "sma50": 178.94,
   "sma200": 181.32,
   "rsi": 48.4,
   "adx": 16.4,
   "bar": "2026-10-21",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.13,
   "ivr": 48.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 150.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.18,
    "mid": 4.07,
    "roc": 27.5,
    "capital": 15000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.4 not above 25",
    "RSI 48.4 too high for a put"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.16,
    "mid": 3.12,
    "roc": 17.9,
    "capital": 17708
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 153.48,
   "sma50": 137.7,
   "sma200": 135.4,
   "rsi": 54.5,
   "adx": 23.9,
   "bar": "2026-10-21",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.84,
   "ivr": 21.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 130.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.19,
    "mid": 3.85,
    "roc": 30.0,
    "capital": 13000
   },
   "putFails": [
    "ADX 23.9 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.4 not above 30",
    "RSI 54.5 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.17,
    "mid": 2.75,
    "roc": 18.1,
    "capital": 15348
   },
   "callFails": [
    "ADX 23.9 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.4 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.79,
   "sma50": 10.73,
   "sma200": 10.92,
   "rsi": 28.3,
   "adx": 27.6,
   "bar": "2026-10-21",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 94.57,
   "ivr": 36.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.15,
    "mid": 0.21,
    "roc": 35.5,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.17,
    "mid": 0.18,
    "roc": 23.4,
    "capital": 779
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 101.93,
   "sma50": 108.92,
   "sma200": 93.49,
   "rsi": 42.9,
   "adx": 17.7,
   "bar": "2026-10-21",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 65.75,
   "ivr": 40.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.16,
    "mid": 1.96,
    "roc": 23.4,
    "capital": 8500
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "RSI 42.9 too high for a put"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.19,
    "mid": 1.95,
    "roc": 19.4,
    "capital": 10193
   },
   "callFails": [
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 775.0,
   "exp": "2026-11-27",
   "dte": 36,
   "delta": 0.25,
   "mid": 13.12,
   "roc": 19.1,
   "capital": 69752,
   "ivr": 67.5,
   "rsi": 47.4,
   "adx": 28.8,
   "price": 697.52,
   "sma50": 661.46,
   "sma200": 632.62
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 240.0,
   "exp": "2026-11-27",
   "dte": 36,
   "delta": 0.2,
   "mid": 3.62,
   "roc": 18.2,
   "capital": 20172,
   "ivr": 72.3,
   "rsi": 59.2,
   "adx": 27.6,
   "price": 201.72,
   "sma50": 183.89,
   "sma200": 152.99
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-27",
   "dte": 36,
   "delta": 0.29,
   "mid": 8.35,
   "roc": 15.9,
   "capital": 53295,
   "ivr": 50.2,
   "rsi": 58.9,
   "adx": 33.0,
   "price": 532.95,
   "sma50": 507.3,
   "sma200": 436.1
  }
 ],
 "errors": []
};
