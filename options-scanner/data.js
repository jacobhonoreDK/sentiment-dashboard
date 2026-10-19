window.SCANNER_DATA = {
 "generatedAt": "2026-10-19T15:38:01Z",
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
   "price": 219.29,
   "sma50": 222.98,
   "sma200": 203.13,
   "rsi": 44.1,
   "adx": 17.5,
   "bar": "2026-10-19",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 37.5,
   "ivr": 33.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": -0.22,
    "mid": 3.97,
    "roc": 18.6,
    "capital": 20000
   },
   "putFails": [
    "ADX 17.5 not above 25",
    "RSI 44.1 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.24,
    "mid": 3.25,
    "roc": 13.9,
    "capital": 21929
   },
   "callFails": [
    "ADX 17.5 not above 25",
    "best ROC 13.9% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 553.91,
   "sma50": 538.55,
   "sma200": 395.95,
   "rsi": 44.6,
   "adx": 22.1,
   "bar": "2026-10-19",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 57.35,
   "ivr": 38.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 465.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": -0.15,
    "mid": 8.98,
    "roc": 18.1,
    "capital": 46500
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 44.6 too high for a put"
   ],
   "call": {
    "strike": 660.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.17,
    "mid": 7.7,
    "roc": 15.9,
    "capital": 55391
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 535.26,
   "sma50": 506.24,
   "sma200": 435.51,
   "rsi": 60.4,
   "adx": 36.2,
   "bar": "2026-10-19",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.16,
   "ivr": 51.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.23,
    "mid": 7.3,
    "roc": 16.7,
    "capital": 50000
   },
   "putFails": [
    "RSI 60.4 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.29,
    "mid": 8.18,
    "roc": 17.4,
    "capital": 53526
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 705.12,
   "sma50": 657.5,
   "sma200": 632.2,
   "rsi": 49.2,
   "adx": 32.5,
   "bar": "2026-10-19",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.61,
   "ivr": 64.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 620.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 8.5,
    "roc": 15.6,
    "capital": 62000
   },
   "putFails": [
    "RSI 49.2 too high for a put"
   ],
   "call": {
    "strike": 795.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.21,
    "mid": 9.93,
    "roc": 16.1,
    "capital": 70512
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 345.92,
   "sma50": 344.41,
   "sma200": 341.07,
   "rsi": 49.7,
   "adx": 15.8,
   "bar": "2026-10-19",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.71,
   "ivr": 72.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 315.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.18,
    "mid": 4.15,
    "roc": 15.0,
    "capital": 31500
   },
   "putFails": [
    "ADX 15.8 not above 25",
    "RSI 49.7 too high for a put"
   ],
   "call": {
    "strike": 375.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.25,
    "mid": 5.03,
    "roc": 16.6,
    "capital": 34592
   },
   "callFails": [
    "ADX 15.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 263.25,
   "sma50": 256.85,
   "sma200": 242.89,
   "rsi": 57.9,
   "adx": 13.4,
   "bar": "2026-10-19",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.49,
   "ivr": 66.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 235.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.15,
    "roc": 15.3,
    "capital": 23500
   },
   "putFails": [
    "ADX 13.4 not above 25",
    "RSI 57.9 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.26,
    "mid": 4.5,
    "roc": 19.5,
    "capital": 26325
   },
   "callFails": [
    "ADX 13.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 367.77,
   "sma50": 360.25,
   "sma200": 387.58,
   "rsi": 50.5,
   "adx": 13.2,
   "bar": "2026-10-19",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.17,
   "ivr": 45.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 4.72,
    "roc": 16.6,
    "capital": 32500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 13.2 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 50.5 too high for a put"
   ],
   "call": {
    "strike": 415.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.21,
    "mid": 5.15,
    "roc": 16.0,
    "capital": 36777
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
   "price": 196.49,
   "sma50": 183.06,
   "sma200": 152.74,
   "rsi": 55.3,
   "adx": 30.9,
   "bar": "2026-10-19",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 62.34,
   "ivr": 75.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.75,
    "roc": 25.9,
    "capital": 16500
   },
   "putFails": [
    "RSI 55.3 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.92,
    "roc": 17.0,
    "capital": 19649
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 230.55,
   "sma50": 233.5,
   "sma200": 161.12,
   "rsi": 40.9,
   "adx": 22.5,
   "bar": "2026-10-19",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 53.06,
   "ivr": 59.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 197.5,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 3.48,
    "roc": 20.1,
    "capital": 19750
   },
   "putFails": [
    "ADX 22.5 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 40.9 too high for a put"
   ],
   "call": {
    "strike": 267.5,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.18,
    "mid": 3.2,
    "roc": 15.8,
    "capital": 23055
   },
   "callFails": [
    "ADX 22.5 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 172.23,
   "sma50": 178.0,
   "sma200": 182.05,
   "rsi": 44.5,
   "adx": 16.8,
   "bar": "2026-10-19",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.88,
   "ivr": 57.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.75,
    "roc": 29.5,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25",
    "RSI 44.5 too high for a put"
   ],
   "call": {
    "strike": 220.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.17,
    "mid": 3.02,
    "roc": 16.4,
    "capital": 17223
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 139.25,
   "sma50": 135.71,
   "sma200": 135.54,
   "rsi": 44.5,
   "adx": 26.6,
   "bar": "2026-10-19",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.56,
   "ivr": 26.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.8,
    "roc": 27.8,
    "capital": 11500
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.6 not above 30",
    "RSI 44.5 too high for a put"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.44,
    "roc": 20.0,
    "capital": 13925
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.72,
   "sma50": 10.82,
   "sma200": 10.94,
   "rsi": 25.4,
   "adx": 24.7,
   "bar": "2026-10-19",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 91.5,
   "ivr": 36.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 0.21,
    "roc": 39.9,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.7 not above 25"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.15,
    "mid": 0.15,
    "roc": 18.8,
    "capital": 772
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 99.38,
   "sma50": 108.75,
   "sma200": 93.69,
   "rsi": 37.6,
   "adx": 15.8,
   "bar": "2026-10-19",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.42,
   "ivr": 46.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.19,
    "mid": 2.29,
    "roc": 30.7,
    "capital": 8500
   },
   "putFails": [
    "ADX 15.8 not above 25"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.17,
    "mid": 1.61,
    "roc": 15.2,
    "capital": 9938
   },
   "callFails": [
    "ADX 15.8 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-20",
   "dte": 32,
   "delta": 0.29,
   "mid": 8.18,
   "roc": 17.4,
   "capital": 53526,
   "ivr": 51.3,
   "rsi": 60.4,
   "adx": 36.2,
   "price": 535.26,
   "sma50": 506.24,
   "sma200": 435.51
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 235.0,
   "exp": "2026-11-20",
   "dte": 32,
   "delta": 0.17,
   "mid": 2.92,
   "roc": 17.0,
   "capital": 19649,
   "ivr": 75.5,
   "rsi": 55.3,
   "adx": 30.9,
   "price": 196.49,
   "sma50": 183.06,
   "sma200": 152.74
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 795.0,
   "exp": "2026-11-20",
   "dte": 32,
   "delta": 0.21,
   "mid": 9.93,
   "roc": 16.1,
   "capital": 70512,
   "ivr": 64.7,
   "rsi": 49.2,
   "adx": 32.5,
   "price": 705.12,
   "sma50": 657.5,
   "sma200": 632.2
  }
 ],
 "errors": []
};
