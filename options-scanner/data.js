window.SCANNER_DATA = {
 "generatedAt": "2026-11-12T18:59:07Z",
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
   "price": 164.75,
   "sma50": 215.93,
   "sma200": 204.33,
   "rsi": 25.5,
   "adx": 39.5,
   "bar": "2026-11-12",
   "peg": 0.21,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 60.44,
   "ivr": 78.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 138.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.15,
    "mid": 2.83,
    "roc": 20.8,
    "capital": 13800
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.17,
    "mid": 2.44,
    "roc": 15.0,
    "capital": 16475
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 578.08,
   "sma50": 552.85,
   "sma200": 421.67,
   "rsi": 56.7,
   "adx": 21.1,
   "bar": "2026-11-12",
   "peg": 0.46,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.24,
   "ivr": 43.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 480.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.15,
    "mid": 10.82,
    "roc": 22.9,
    "capital": 48000
   },
   "putFails": [
    "ADX 21.1 not above 25",
    "RSI 56.7 too high for a put"
   ],
   "call": {
    "strike": 730.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.16,
    "mid": 8.6,
    "roc": 15.1,
    "capital": 57808
   },
   "callFails": [
    "ADX 21.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 524.29,
   "sma50": 518.75,
   "sma200": 440.97,
   "rsi": 49.0,
   "adx": 17.2,
   "bar": "2026-11-12",
   "peg": 1.58,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 26.66,
   "ivr": 35.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 500.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.26,
    "mid": 7.9,
    "roc": 16.0,
    "capital": 50000
   },
   "putFails": [
    "ADX 17.2 not above 25",
    "RSI 49.0 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.28,
    "mid": 7.08,
    "roc": 13.7,
    "capital": 52429
   },
   "callFails": [
    "ADX 17.2 not above 25",
    "best ROC 13.7% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 623.9,
   "sma50": 679.19,
   "sma200": 631.25,
   "rsi": 42.2,
   "adx": 24.9,
   "bar": "2026-11-12",
   "peg": 0.83,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 38.54,
   "ivr": 45.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 565.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.19,
    "mid": 8.62,
    "roc": 15.5,
    "capital": 56500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.9 not above 25",
    "RSI 42.2 too high for a put"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.24,
    "mid": 9.85,
    "roc": 16.0,
    "capital": 62390
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 300.91,
   "sma50": 329.16,
   "sma200": 338.7,
   "rsi": 43.9,
   "adx": 28.1,
   "bar": "2026-11-12",
   "peg": 1.04,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.21,
   "ivr": 38.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.26,
    "mid": 5.3,
    "roc": 18.9,
    "capital": 28500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 43.9 too high for a put"
   ],
   "call": {
    "strike": 325.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.27,
    "mid": 4.7,
    "roc": 15.8,
    "capital": 30091
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 269.27,
   "sma50": 254.69,
   "sma200": 244.48,
   "rsi": 59.3,
   "adx": 13.2,
   "bar": "2026-11-12",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.75,
   "ivr": 31.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.22,
    "mid": 3.78,
    "roc": 15.3,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.2 not above 25",
    "next earnings date unavailable",
    "RSI 59.3 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.26,
    "mid": 3.88,
    "roc": 14.6,
    "capital": 26927
   },
   "callFails": [
    "ADX 13.2 not above 25",
    "next earnings date unavailable",
    "best ROC 14.6% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 391.13,
   "sma50": 374.34,
   "sma200": 382.83,
   "rsi": 54.5,
   "adx": 14.0,
   "bar": "2026-11-12",
   "peg": 4.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 42.78,
   "ivr": 28.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 345.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.17,
    "mid": 5.7,
    "roc": 16.8,
    "capital": 34500
   },
   "putFails": [
    "ADX 14.0 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "IV rank 28.4 not above 30",
    "RSI 54.5 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.24,
    "mid": 6.62,
    "roc": 17.2,
    "capital": 39113
   },
   "callFails": [
    "ADX 14.0 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "IV rank 28.4 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 172.18,
   "sma50": 185.09,
   "sma200": 153.65,
   "rsi": 42.3,
   "adx": 27.5,
   "bar": "2026-11-12",
   "peg": 1.38,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 47.75,
   "ivr": 24.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.17,
    "mid": 2.73,
    "roc": 18.5,
    "capital": 15000
   },
   "putFails": [
    "IV rank 24.8 not above 30",
    "RSI 42.3 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.23,
    "mid": 3.1,
    "roc": 18.3,
    "capital": 17218
   },
   "callFails": [
    "IV rank 24.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 227.07,
   "sma50": 244.63,
   "sma200": 172.45,
   "rsi": 42.3,
   "adx": 20.7,
   "bar": "2026-11-12",
   "peg": 5.83,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.3,
   "ivr": 89.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.16,
    "mid": 4.72,
    "roc": 25.9,
    "capital": 18500
   },
   "putFails": [
    "ADX 20.7 not above 25",
    "PEG 5.83 outside 0 to 2.5",
    "RSI 42.3 too high for a put"
   ],
   "call": {
    "strike": 287.5,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.16,
    "mid": 3.58,
    "roc": 16.0,
    "capital": 22707
   },
   "callFails": [
    "ADX 20.7 not above 25",
    "PEG 5.83 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 132.37,
   "sma50": 171.72,
   "sma200": 174.42,
   "rsi": 34.5,
   "adx": 31.8,
   "bar": "2026-11-12",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 66.77,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.16,
    "mid": 2.75,
    "roc": 25.3,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.15,
    "mid": 1.98,
    "roc": 15.2,
    "capital": 13237
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 116.05,
   "sma50": 143.96,
   "sma200": 132.95,
   "rsi": 34.7,
   "adx": 18.4,
   "bar": "2026-11-12",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.93,
   "ivr": 20.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 95.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.1,
    "roc": 33.1,
    "capital": 9500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.4 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.1 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 155.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": 0.17,
    "mid": 2.32,
    "roc": 17.3,
    "capital": 11605
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.4 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.1 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.49,
   "sma50": 9.62,
   "sma200": 10.63,
   "rsi": 46.5,
   "adx": 33.7,
   "bar": "2026-11-12",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 94.16,
   "ivr": 34.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 6.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.19,
    "mid": 0.28,
    "roc": 46.5,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.15,
    "mid": 0.15,
    "roc": 19.6,
    "capital": 749
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 82.94,
   "sma50": 104.22,
   "sma200": 91.53,
   "rsi": 37.6,
   "adx": 29.4,
   "bar": "2026-11-12",
   "peg": 1.37,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 63.22,
   "ivr": 33.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 68.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.15,
    "mid": 1.62,
    "roc": 20.7,
    "capital": 6800
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 100.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.21,
    "mid": 1.77,
    "roc": 21.6,
    "capital": 8294
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
