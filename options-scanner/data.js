window.SCANNER_DATA = {
 "generatedAt": "2026-11-05T13:53:55Z",
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
   "price": 200.13,
   "sma50": 221.2,
   "sma200": 204.67,
   "rsi": 34.5,
   "adx": 23.7,
   "bar": "2026-11-04",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 46.42,
   "ivr": 68.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 171.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.16,
    "mid": 3.12,
    "roc": 15.5,
    "capital": 17100
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.7 not above 25"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.22,
    "mid": 3.17,
    "roc": 16.1,
    "capital": 20013
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 488.78,
   "sma50": 548.9,
   "sma200": 414.23,
   "rsi": 39.5,
   "adx": 22.5,
   "bar": "2026-11-04",
   "peg": 0.48,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 59.85,
   "ivr": 39.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 410.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.16,
    "mid": 9.23,
    "roc": 22.8,
    "capital": 41000
   },
   "putFails": [
    "ADX 22.5 not above 25",
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 590.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.18,
    "mid": 7.75,
    "roc": 16.1,
    "capital": 48878
   },
   "callFails": [
    "ADX 22.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 555.8,
   "sma50": 515.34,
   "sma200": 438.99,
   "rsi": 64.3,
   "adx": 22.8,
   "bar": "2026-11-04",
   "peg": 1.54,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 25.37,
   "ivr": 29.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 530.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.27,
    "mid": 8.3,
    "roc": 15.9,
    "capital": 53000
   },
   "putFails": [
    "ADX 22.8 not above 25",
    "IV rank 29.3 not above 30",
    "RSI 64.3 too high for a put"
   ],
   "call": {
    "strike": 585.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.29,
    "mid": 7.12,
    "roc": 13.0,
    "capital": 55580
   },
   "callFails": [
    "ADX 22.8 not above 25",
    "IV rank 29.3 not above 30",
    "best ROC 13.0% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 630.0,
   "sma50": 673.56,
   "sma200": 632.17,
   "rsi": 40.1,
   "adx": 26.4,
   "bar": "2026-11-04",
   "peg": 0.81,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 37.7,
   "ivr": 44.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 570.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.19,
    "mid": 8.68,
    "roc": 15.4,
    "capital": 57000
   },
   "putFails": [
    "below 200-day SMA",
    "RSI 40.1 too high for a put"
   ],
   "call": {
    "strike": 695.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.23,
    "mid": 9.4,
    "roc": 15.1,
    "capital": 63000
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 288.93,
   "sma50": 335.23,
   "sma200": 339.97,
   "rsi": 30.2,
   "adx": 30.1,
   "bar": "2026-11-04",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 29.86,
   "ivr": 35.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 275.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.28,
    "mid": 4.8,
    "roc": 17.7,
    "capital": 27500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.29,
    "mid": 5.12,
    "roc": 15.1,
    "capital": 28893
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 266.03,
   "sma50": 253.89,
   "sma200": 243.67,
   "rsi": 59.9,
   "adx": 15.1,
   "bar": "2026-11-04",
   "peg": 1.17,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 30.54,
   "ivr": 25.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.24,
    "mid": 4.28,
    "roc": 17.3,
    "capital": 25000
   },
   "putFails": [
    "ADX 15.1 not above 25",
    "IV rank 25.7 not above 30",
    "next earnings date unavailable",
    "RSI 59.9 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.29,
    "mid": 4.8,
    "roc": 15.3,
    "capital": 26603
   },
   "callFails": [
    "ADX 15.1 not above 25",
    "IV rank 25.7 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 385.19,
   "sma50": 372.11,
   "sma200": 384.76,
   "rsi": 51.4,
   "adx": 15.0,
   "bar": "2026-11-04",
   "peg": 4.65,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 43.65,
   "ivr": 31.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 330.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.17,
    "mid": 5.1,
    "roc": 15.7,
    "capital": 33000
   },
   "putFails": [
    "ADX 15.0 not above 25",
    "PEG 4.65 outside 0 to 2.5",
    "RSI 51.4 too high for a put"
   ],
   "call": {
    "strike": 420.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.24,
    "mid": 6.6,
    "roc": 17.4,
    "capital": 38519
   },
   "callFails": [
    "ADX 15.0 not above 25",
    "PEG 4.65 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 171.7,
   "sma50": 186.84,
   "sma200": 153.61,
   "rsi": 33.5,
   "adx": 23.5,
   "bar": "2026-11-04",
   "peg": 1.59,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 48.93,
   "ivr": 30.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.15,
    "mid": 2.66,
    "roc": 15.5,
    "capital": 14500
   },
   "putFails": [
    "ADX 23.5 not above 25"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.21,
    "mid": 3.1,
    "roc": 15.3,
    "capital": 17170
   },
   "callFails": [
    "ADX 23.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 241.0,
   "sma50": 243.44,
   "sma200": 169.19,
   "rsi": 45.3,
   "adx": 15.8,
   "bar": "2026-11-04",
   "peg": 6.31,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.48,
   "ivr": 93.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 195.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.15,
    "mid": 4.65,
    "roc": 24.2,
    "capital": 19500
   },
   "putFails": [
    "ADX 15.8 not above 25",
    "PEG 6.31 outside 0 to 2.5",
    "RSI 45.3 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.17,
    "mid": 4.28,
    "roc": 15.1,
    "capital": 24100
   },
   "callFails": [
    "ADX 15.8 not above 25",
    "PEG 6.31 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 151.5,
   "sma50": 177.37,
   "sma200": 176.88,
   "rsi": 40.7,
   "adx": 27.0,
   "bar": "2026-11-04",
   "peg": 0.67,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 65.03,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 125.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.17,
    "mid": 3.58,
    "roc": 24.3,
    "capital": 12500
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank unavailable",
    "next earnings date unavailable",
    "RSI 40.7 too high for a put"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.19,
    "mid": 3.2,
    "roc": 17.9,
    "capital": 15150
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank unavailable",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 142.54,
   "sma50": 144.47,
   "sma200": 134.08,
   "rsi": 49.7,
   "adx": 16.3,
   "bar": "2026-11-04",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 70.3,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 115.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.15,
    "mid": 2.84,
    "roc": 25.1,
    "capital": 11500
   },
   "putFails": [
    "ADX 16.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank unavailable",
    "next earnings date unavailable",
    "RSI 49.7 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.15,
    "mid": 2.29,
    "roc": 16.3,
    "capital": 14254
   },
   "callFails": [
    "ADX 16.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank unavailable",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.87,
   "sma50": 10.1,
   "sma200": 10.74,
   "rsi": 34.1,
   "adx": 36.7,
   "bar": "2026-11-04",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 102.81,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 5.5,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.2,
    "mid": 0.29,
    "roc": 54.4,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank unavailable"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.17,
    "mid": 0.17,
    "roc": 25.8,
    "capital": 687
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 87.41,
   "sma50": 107.15,
   "sma200": 92.25,
   "rsi": 34.9,
   "adx": 28.4,
   "bar": "2026-11-04",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 61.37,
   "ivr": 29.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "IV rank 29.0 not above 30",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "IV rank 29.0 not above 30",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
