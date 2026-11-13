window.SCANNER_DATA = {
 "generatedAt": "2026-11-13T00:26:37Z",
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
   "price": 166.19,
   "sma50": 215.96,
   "sma200": 204.34,
   "rsi": 26.0,
   "adx": 39.5,
   "bar": "2026-11-12",
   "peg": 0.21,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 60.04,
   "ivr": 78.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 140.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.16,
    "mid": 3.05,
    "roc": 22.1,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.18,
    "mid": 2.56,
    "roc": 15.6,
    "capital": 16619
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 585.3,
   "sma50": 552.99,
   "sma200": 421.71,
   "rsi": 57.5,
   "adx": 21.1,
   "bar": "2026-11-12",
   "peg": 0.46,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.45,
   "ivr": 43.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 480.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.16,
    "mid": 12.45,
    "roc": 22.5,
    "capital": 48000
   },
   "putFails": [
    "ADX 21.1 not above 25",
    "RSI 57.5 too high for a put"
   ],
   "call": {
    "strike": 730.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.16,
    "mid": 8.8,
    "roc": 15.2,
    "capital": 58530
   },
   "callFails": [
    "ADX 21.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 523.0,
   "sma50": 518.72,
   "sma200": 440.97,
   "rsi": 48.4,
   "adx": 17.2,
   "bar": "2026-11-12",
   "peg": 1.58,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 28.29,
   "ivr": 35.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 490.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.23,
    "mid": 7.25,
    "roc": 15.0,
    "capital": 49000
   },
   "putFails": [
    "ADX 17.2 not above 25",
    "RSI 48.4 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": 0.28,
    "mid": 8.07,
    "roc": 13.4,
    "capital": 52300
   },
   "callFails": [
    "ADX 17.2 not above 25",
    "best ROC 13.4% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 623.61,
   "sma50": 679.19,
   "sma200": 631.25,
   "rsi": 42.1,
   "adx": 24.9,
   "bar": "2026-11-12",
   "peg": 0.83,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 38.74,
   "ivr": 45.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 560.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.18,
    "mid": 8.35,
    "roc": 15.1,
    "capital": 56000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.9 not above 25",
    "RSI 42.1 too high for a put"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.23,
    "mid": 9.25,
    "roc": 15.0,
    "capital": 62361
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 298.7,
   "sma50": 329.12,
   "sma200": 338.69,
   "rsi": 42.3,
   "adx": 28.1,
   "bar": "2026-11-12",
   "peg": 1.04,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.74,
   "ivr": 38.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 280.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.25,
    "mid": 4.85,
    "roc": 17.6,
    "capital": 28000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 42.3 too high for a put"
   ],
   "call": {
    "strike": 320.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.28,
    "mid": 5.05,
    "roc": 17.1,
    "capital": 29870
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 267.44,
   "sma50": 254.66,
   "sma200": 244.47,
   "rsi": 58.2,
   "adx": 13.2,
   "bar": "2026-11-12",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.78,
   "ivr": 31.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.24,
    "mid": 4.42,
    "roc": 17.9,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.2 not above 25",
    "next earnings date unavailable",
    "RSI 58.2 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.29,
    "mid": 4.67,
    "roc": 17.7,
    "capital": 26744
   },
   "callFails": [
    "ADX 13.2 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 397.45,
   "sma50": 374.46,
   "sma200": 382.86,
   "rsi": 56.5,
   "adx": 14.3,
   "bar": "2026-11-12",
   "peg": 4.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 45.31,
   "ivr": 28.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 345.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.16,
    "mid": 5.47,
    "roc": 16.1,
    "capital": 34500
   },
   "putFails": [
    "ADX 14.3 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "IV rank 28.4 not above 30",
    "RSI 56.5 too high for a put"
   ],
   "call": {
    "strike": 450.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.21,
    "mid": 6.05,
    "roc": 15.4,
    "capital": 39745
   },
   "callFails": [
    "ADX 14.3 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "IV rank 28.4 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 171.58,
   "sma50": 185.08,
   "sma200": 153.64,
   "rsi": 41.9,
   "adx": 27.5,
   "bar": "2026-11-12",
   "peg": 1.38,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 48.66,
   "ivr": 24.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.18,
    "mid": 2.95,
    "roc": 19.9,
    "capital": 15000
   },
   "putFails": [
    "IV rank 24.8 not above 30",
    "RSI 41.9 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.22,
    "mid": 3.02,
    "roc": 17.8,
    "capital": 17158
   },
   "callFails": [
    "IV rank 24.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 229.87,
   "sma50": 244.69,
   "sma200": 172.47,
   "rsi": 43.8,
   "adx": 20.7,
   "bar": "2026-11-12",
   "peg": 5.83,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 72.56,
   "ivr": 89.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.15,
    "mid": 5.5,
    "roc": 25.8,
    "capital": 18500
   },
   "putFails": [
    "ADX 20.7 not above 25",
    "PEG 5.83 outside 0 to 2.5",
    "RSI 43.8 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.17,
    "mid": 3.95,
    "roc": 17.4,
    "capital": 22987
   },
   "callFails": [
    "ADX 20.7 not above 25",
    "PEG 5.83 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 130.67,
   "sma50": 171.69,
   "sma200": 174.41,
   "rsi": 33.8,
   "adx": 31.8,
   "bar": "2026-11-12",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.13,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.18,
    "mid": 3.2,
    "roc": 29.5,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.17,
    "mid": 2.23,
    "roc": 17.3,
    "capital": 13067
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 114.41,
   "sma50": 143.93,
   "sma200": 132.94,
   "rsi": 33.9,
   "adx": 18.4,
   "bar": "2026-11-12",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 75.38,
   "ivr": 20.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.16,
    "mid": 2.85,
    "roc": 27.5,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.4 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.1 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 150.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.16,
    "mid": 1.99,
    "roc": 17.6,
    "capital": 11441
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
   "price": 7.2,
   "sma50": 9.61,
   "sma200": 10.63,
   "rsi": 44.1,
   "adx": 33.7,
   "bar": "2026-11-12",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 95.22,
   "ivr": 34.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.17,
    "mid": 0.26,
    "roc": 40.3,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 44.1 too high for a put"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": 0.16,
    "mid": 0.17,
    "roc": 19.9,
    "capital": 720
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 81.35,
   "sma50": 104.19,
   "sma200": 91.53,
   "rsi": 36.2,
   "adx": 29.4,
   "bar": "2026-11-12",
   "peg": 1.37,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 64.57,
   "ivr": 33.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-11",
   "put": {
    "strike": 68.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.18,
    "mid": 2.0,
    "roc": 25.6,
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
    "delta": 0.18,
    "mid": 1.46,
    "roc": 18.3,
    "capital": 8135
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
