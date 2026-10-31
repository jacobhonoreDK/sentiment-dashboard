window.SCANNER_DATA = {
 "generatedAt": "2026-10-31T12:33:46Z",
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
   "price": 204.64,
   "sma50": 221.75,
   "sma200": 204.38,
   "rsi": 35.1,
   "adx": 19.8,
   "bar": "2026-10-30",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 43.98,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.17,
    "mid": 3.0,
    "roc": 17.9,
    "capital": 18000
   },
   "putFails": [
    "ADX 19.8 not above 25"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.25,
    "mid": 3.52,
    "roc": 18.5,
    "capital": 20464
   },
   "callFails": [
    "ADX 19.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 504.8,
   "sma50": 548.29,
   "sma200": 410.49,
   "rsi": 39.7,
   "adx": 20.2,
   "bar": "2026-10-30",
   "peg": 0.56,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 63.54,
   "ivr": 37.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 420.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.16,
    "mid": 8.43,
    "roc": 21.5,
    "capital": 42000
   },
   "putFails": [
    "ADX 20.2 not above 25",
    "RSI 39.7 too high for a put"
   ],
   "call": {
    "strike": 620.0,
    "exp": "2026-12-11",
    "dte": 41,
    "delta": 0.19,
    "mid": 8.78,
    "roc": 15.5,
    "capital": 50480
   },
   "callFails": [
    "ADX 20.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 521.91,
   "sma50": 512.91,
   "sma200": 437.93,
   "rsi": 49.0,
   "adx": 22.6,
   "bar": "2026-10-30",
   "peg": 1.72,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 27.3,
   "ivr": 26.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 495.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.26,
    "mid": 7.4,
    "roc": 16.0,
    "capital": 49500
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "IV rank 26.7 not above 30",
    "RSI 49.0 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.29,
    "mid": 6.83,
    "roc": 14.0,
    "capital": 52191
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "IV rank 26.7 not above 30",
    "best ROC 14.0% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 614.99,
   "sma50": 669.98,
   "sma200": 632.1,
   "rsi": 33.2,
   "adx": 27.5,
   "bar": "2026-10-30",
   "peg": 0.82,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 38.51,
   "ivr": 42.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 555.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.19,
    "mid": 8.4,
    "roc": 16.2,
    "capital": 55500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.22,
    "mid": 8.65,
    "roc": 15.1,
    "capital": 61499
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 279.84,
   "sma50": 339.07,
   "sma200": 340.66,
   "rsi": 21.4,
   "adx": 26.1,
   "bar": "2026-10-30",
   "peg": 0.98,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 30.93,
   "ivr": 31.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 265.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.26,
    "mid": 4.3,
    "roc": 17.4,
    "capital": 26500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.26,
    "mid": 4.12,
    "roc": 15.8,
    "capital": 27984
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 240.35,
   "sma50": 254.28,
   "sma200": 243.4,
   "rsi": 38.3,
   "adx": 15.3,
   "bar": "2026-10-30",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.93,
   "ivr": 81.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 225.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.24,
    "mid": 3.77,
    "roc": 18.0,
    "capital": 22500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25",
    "next earnings date unavailable",
    "RSI 38.3 too high for a put"
   ],
   "call": {
    "strike": 260.0,
    "exp": "2026-12-11",
    "dte": 41,
    "delta": 0.26,
    "mid": 3.33,
    "roc": 12.3,
    "capital": 24035
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25",
    "next earnings date unavailable",
    "best ROC 12.3% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 399.81,
   "sma50": 369.6,
   "sma200": 385.3,
   "rsi": 60.9,
   "adx": 15.3,
   "bar": "2026-10-30",
   "peg": 4.7,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 41.35,
   "ivr": 0.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 350.0,
    "exp": "2026-12-11",
    "dte": 41,
    "delta": -0.17,
    "mid": 5.97,
    "roc": 15.2,
    "capital": 35000
   },
   "putFails": [
    "ADX 15.3 not above 25",
    "PEG 4.70 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable",
    "RSI 60.9 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.22,
    "mid": 5.83,
    "roc": 15.6,
    "capital": 39981
   },
   "callFails": [
    "ADX 15.3 not above 25",
    "PEG 4.70 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 184.11,
   "sma50": 186.9,
   "sma200": 153.57,
   "rsi": 41.9,
   "adx": 20.4,
   "bar": "2026-10-30",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 71.36,
   "ivr": 74.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.16,
    "mid": 3.85,
    "roc": 27.6,
    "capital": 15000
   },
   "putFails": [
    "ADX 20.4 not above 25",
    "RSI 41.9 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.16,
    "mid": 2.75,
    "roc": 16.1,
    "capital": 18411
   },
   "callFails": [
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 250.43,
   "sma50": 240.25,
   "sma200": 167.24,
   "rsi": 49.9,
   "adx": 17.7,
   "bar": "2026-10-30",
   "peg": 6.74,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 65.89,
   "ivr": 67.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": null,
   "putFails": [
    "ADX 17.7 not above 25",
    "PEG 6.74 outside 0 to 2.5",
    "RSI 49.9 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 17.7 not above 25",
    "PEG 6.74 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 143.54,
   "sma50": 179.74,
   "sma200": 178.25,
   "rsi": 31.9,
   "adx": 23.5,
   "bar": "2026-10-30",
   "peg": 2.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 66.86,
   "ivr": 47.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-11",
    "dte": 41,
    "delta": -0.19,
    "mid": 4.03,
    "roc": 29.9,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25",
    "next earnings date unavailable"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 130.51,
   "sma50": 143.67,
   "sma200": 134.56,
   "rsi": 40.1,
   "adx": 18.2,
   "bar": "2026-10-30",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 75.05,
   "ivr": 17.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": -0.16,
    "mid": 3.15,
    "roc": 32.2,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 17.1 not above 30",
    "next earnings date unavailable",
    "RSI 40.1 too high for a put"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.15,
    "mid": 2.03,
    "roc": 16.7,
    "capital": 13051
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 17.1 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.77,
   "sma50": 10.37,
   "sma200": 10.8,
   "rsi": 27.5,
   "adx": 35.3,
   "bar": "2026-10-30",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 105.08,
   "ivr": 43.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 41,
    "delta": -0.16,
    "mid": 0.24,
    "roc": 42.7,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 23.8,
    "capital": 677
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 84.99,
   "sma50": 108.49,
   "sma200": 92.59,
   "rsi": 29.3,
   "adx": 26.0,
   "bar": "2026-10-30",
   "peg": 1.38,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 59.37,
   "ivr": 12.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-29",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-11",
    "dte": 41,
    "delta": -0.16,
    "mid": 1.8,
    "roc": 22.9,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank 12.8 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 103.0,
    "exp": "2026-12-04",
    "dte": 34,
    "delta": 0.17,
    "mid": 1.21,
    "roc": 15.3,
    "capital": 8499
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank 12.8 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
