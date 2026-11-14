window.SCANNER_DATA = {
 "generatedAt": "2026-11-14T18:04:09Z",
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
   "price": 162.85,
   "sma50": 214.65,
   "sma200": 204.19,
   "rsi": 24.9,
   "adx": 41.5,
   "bar": "2026-11-13",
   "peg": 0.2,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 59.31,
   "ivr": 92.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 138.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.16,
    "mid": 2.87,
    "roc": 22.3,
    "capital": 13800
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.17,
    "mid": 2.4,
    "roc": 15.8,
    "capital": 16285
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 534.06,
   "sma50": 554.55,
   "sma200": 423.12,
   "rsi": 50.4,
   "adx": 19.7,
   "bar": "2026-11-13",
   "peg": 0.53,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 66.75,
   "ivr": 49.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 440.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.16,
    "mid": 10.68,
    "roc": 26.0,
    "capital": 44000
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 50.4 too high for a put"
   ],
   "call": {
    "strike": 670.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.15,
    "mid": 7.67,
    "roc": 15.4,
    "capital": 53406
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 523.88,
   "sma50": 519.0,
   "sma200": 441.42,
   "rsi": 48.8,
   "adx": 17.0,
   "bar": "2026-11-13",
   "peg": 1.55,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 27.01,
   "ivr": 38.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 495.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.25,
    "mid": 7.42,
    "roc": 16.1,
    "capital": 49500
   },
   "putFails": [
    "ADX 17.0 not above 25",
    "RSI 48.8 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.29,
    "mid": 7.25,
    "roc": 14.9,
    "capital": 52388
   },
   "callFails": [
    "ADX 17.0 not above 25",
    "best ROC 14.9% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 641.69,
   "sma50": 679.81,
   "sma200": 630.77,
   "rsi": 47.8,
   "adx": 24.1,
   "bar": "2026-11-13",
   "peg": 0.81,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.04,
   "ivr": 47.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 580.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.19,
    "mid": 8.95,
    "roc": 16.6,
    "capital": 58000
   },
   "putFails": [
    "ADX 24.1 not above 25",
    "RSI 47.8 too high for a put"
   ],
   "call": {
    "strike": 710.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.22,
    "mid": 9.23,
    "roc": 15.4,
    "capital": 64169
   },
   "callFails": [
    "ADX 24.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 295.77,
   "sma50": 328.19,
   "sma200": 338.48,
   "rsi": 40.6,
   "adx": 26.6,
   "bar": "2026-11-13",
   "peg": 1.04,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.38,
   "ivr": 49.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 275.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.22,
    "mid": 4.17,
    "roc": 16.3,
    "capital": 27500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 40.6 too high for a put"
   ],
   "call": {
    "strike": 315.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.29,
    "mid": 5.12,
    "roc": 18.6,
    "capital": 29577
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 266.66,
   "sma50": 254.81,
   "sma200": 244.6,
   "rsi": 57.4,
   "adx": 12.9,
   "bar": "2026-11-13",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.93,
   "ivr": 34.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.25,
    "mid": 4.45,
    "roc": 19.1,
    "capital": 25000
   },
   "putFails": [
    "ADX 12.9 not above 25",
    "next earnings date unavailable",
    "RSI 57.4 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.28,
    "mid": 4.22,
    "roc": 17.0,
    "capital": 26666
   },
   "callFails": [
    "ADX 12.9 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 390.22,
   "sma50": 374.74,
   "sma200": 382.73,
   "rsi": 53.5,
   "adx": 13.8,
   "bar": "2026-11-13",
   "peg": 4.63,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 45.01,
   "ivr": 46.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 335.0,
    "exp": "2026-12-24",
    "dte": 40,
    "delta": -0.15,
    "mid": 5.5,
    "roc": 15.0,
    "capital": 33500
   },
   "putFails": [
    "ADX 13.8 not above 25",
    "PEG 4.63 outside 0 to 2.5",
    "RSI 53.5 too high for a put"
   ],
   "call": {
    "strike": 440.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.21,
    "mid": 5.9,
    "roc": 16.2,
    "capital": 39022
   },
   "callFails": [
    "ADX 13.8 not above 25",
    "PEG 4.63 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 167.99,
   "sma50": 184.79,
   "sma200": 153.72,
   "rsi": 39.5,
   "adx": 27.7,
   "bar": "2026-11-13",
   "peg": 1.41,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 50.19,
   "ivr": 32.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.17,
    "mid": 2.66,
    "roc": 19.7,
    "capital": 14500
   },
   "putFails": [
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.19,
    "mid": 2.37,
    "roc": 15.1,
    "capital": 16799
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 226.61,
   "sma50": 244.92,
   "sma200": 173.05,
   "rsi": 42.1,
   "adx": 20.7,
   "bar": "2026-11-13",
   "peg": 5.93,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 73.01,
   "ivr": 88.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.16,
    "mid": 5.18,
    "roc": 30.0,
    "capital": 18500
   },
   "putFails": [
    "ADX 20.7 not above 25",
    "PEG 5.93 outside 0 to 2.5",
    "RSI 42.1 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.15,
    "mid": 3.35,
    "roc": 15.9,
    "capital": 22661
   },
   "callFails": [
    "ADX 20.7 not above 25",
    "PEG 5.93 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 127.65,
   "sma50": 170.39,
   "sma200": 174.05,
   "rsi": 32.4,
   "adx": 32.8,
   "bar": "2026-11-13",
   "peg": 0.6,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 67.43,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.16,
    "mid": 2.5,
    "roc": 25.6,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 160.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.17,
    "mid": 2.13,
    "roc": 18.0,
    "capital": 12765
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 111.62,
   "sma50": 143.26,
   "sma200": 132.78,
   "rsi": 32.6,
   "adx": 19.8,
   "bar": "2026-11-13",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.05,
   "ivr": 19.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.17,
    "mid": 2.9,
    "roc": 34.6,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.7 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.15,
    "mid": 1.78,
    "roc": 17.1,
    "capital": 11162
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.7 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.99,
   "sma50": 9.52,
   "sma200": 10.62,
   "rsi": 42.5,
   "adx": 32.8,
   "bar": "2026-11-13",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 94.57,
   "ivr": 37.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-24",
    "dte": 40,
    "delta": -0.19,
    "mid": 0.29,
    "roc": 47.3,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 42.5 too high for a put"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 20.7,
    "capital": 699
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 77.86,
   "sma50": 103.25,
   "sma200": 91.41,
   "rsi": 33.2,
   "adx": 29.7,
   "bar": "2026-11-13",
   "peg": 1.26,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 64.0,
   "ivr": 35.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": -0.17,
    "mid": 1.62,
    "roc": 26.8,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 95.0,
    "exp": "2026-12-18",
    "dte": 34,
    "delta": 0.18,
    "mid": 1.36,
    "roc": 18.8,
    "capital": 7786
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
   "dte": 34,
   "delta": 0.19,
   "mid": 2.37,
   "roc": 15.1,
   "capital": 16799,
   "ivr": 32.6,
   "rsi": 39.5,
   "adx": 27.7,
   "price": 167.99,
   "sma50": 184.79,
   "sma200": 153.72
  }
 ],
 "errors": []
};
