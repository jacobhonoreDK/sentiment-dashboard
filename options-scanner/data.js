window.SCANNER_DATA = {
 "generatedAt": "2026-11-05T15:28:48Z",
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
   "price": 185.68,
   "sma50": 220.72,
   "sma200": 204.68,
   "rsi": 27.0,
   "adx": 26.3,
   "bar": "2026-11-05",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 55.82,
   "ivr": 68.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 155.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.15,
    "mid": 3.45,
    "roc": 18.9,
    "capital": 15500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 218.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.21,
    "mid": 3.47,
    "roc": 15.9,
    "capital": 18568
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 417.69,
   "sma50": 547.63,
   "sma200": 415.07,
   "rsi": 31.0,
   "adx": 23.9,
   "bar": "2026-11-05",
   "peg": 0.48,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 69.64,
   "ivr": 39.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 345.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.16,
    "mid": 9.45,
    "roc": 27.8,
    "capital": 34500
   },
   "putFails": [
    "ADX 23.9 not above 25"
   ],
   "call": {
    "strike": 535.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.16,
    "mid": 6.32,
    "roc": 15.4,
    "capital": 41769
   },
   "callFails": [
    "ADX 23.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 541.04,
   "sma50": 516.24,
   "sma200": 439.48,
   "rsi": 56.7,
   "adx": 22.5,
   "bar": "2026-11-05",
   "peg": 1.54,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 28.4,
   "ivr": 29.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 515.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.26,
    "mid": 8.4,
    "roc": 16.5,
    "capital": 51500
   },
   "putFails": [
    "ADX 22.5 not above 25",
    "IV rank 29.3 not above 30",
    "RSI 56.7 too high for a put"
   ],
   "call": {
    "strike": 575.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.28,
    "mid": 7.6,
    "roc": 14.2,
    "capital": 54104
   },
   "callFails": [
    "ADX 22.5 not above 25",
    "IV rank 29.3 not above 30",
    "best ROC 14.2% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 594.23,
   "sma50": 673.92,
   "sma200": 632.07,
   "rsi": 33.1,
   "adx": 26.5,
   "bar": "2026-11-05",
   "peg": 0.81,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 42.32,
   "ivr": 44.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 530.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.17,
    "mid": 8.2,
    "roc": 15.7,
    "capital": 53000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 670.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.22,
    "mid": 8.95,
    "roc": 15.3,
    "capital": 59423
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 283.78,
   "sma50": 334.07,
   "sma200": 339.75,
   "rsi": 28.4,
   "adx": 30.1,
   "bar": "2026-11-05",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 33.28,
   "ivr": 35.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 265.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.23,
    "mid": 4.25,
    "roc": 16.3,
    "capital": 26500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.28,
    "mid": 4.83,
    "roc": 17.2,
    "capital": 28378
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 256.63,
   "sma50": 253.82,
   "sma200": 243.8,
   "rsi": 52.3,
   "adx": 14.3,
   "bar": "2026-11-05",
   "peg": 1.17,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 34.23,
   "ivr": 25.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 240.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.21,
    "mid": 3.88,
    "roc": 16.4,
    "capital": 24000
   },
   "putFails": [
    "ADX 14.3 not above 25",
    "IV rank 25.7 not above 30",
    "next earnings date unavailable",
    "RSI 52.3 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.26,
    "mid": 4.03,
    "roc": 15.9,
    "capital": 25663
   },
   "callFails": [
    "ADX 14.3 not above 25",
    "IV rank 25.7 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 348.16,
   "sma50": 372.16,
   "sma200": 384.34,
   "rsi": 37.0,
   "adx": 15.7,
   "bar": "2026-11-05",
   "peg": 4.65,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 51.3,
   "ivr": 31.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 295.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.15,
    "mid": 5.75,
    "roc": 19.8,
    "capital": 29500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.7 not above 25",
    "PEG 4.65 outside 0 to 2.5"
   ],
   "call": {
    "strike": 405.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.2,
    "mid": 5.17,
    "roc": 15.1,
    "capital": 34816
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.7 not above 25",
    "PEG 4.65 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 155.77,
   "sma50": 186.41,
   "sma200": 153.56,
   "rsi": 25.7,
   "adx": 25.3,
   "bar": "2026-11-05",
   "peg": 1.59,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 56.51,
   "ivr": 30.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.16,
    "mid": 3.15,
    "roc": 20.6,
    "capital": 13000
   },
   "putFails": [],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.19,
    "mid": 2.62,
    "roc": 17.0,
    "capital": 15577
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 216.17,
   "sma50": 243.98,
   "sma200": 169.71,
   "rsi": 35.1,
   "adx": 17.0,
   "bar": "2026-11-05",
   "peg": 6.31,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 73.71,
   "ivr": 93.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 175.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.15,
    "mid": 5.2,
    "roc": 25.2,
    "capital": 17500
   },
   "putFails": [
    "ADX 17.0 not above 25",
    "PEG 6.31 outside 0 to 2.5"
   ],
   "call": {
    "strike": 287.5,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.16,
    "mid": 4.03,
    "roc": 15.8,
    "capital": 21617
   },
   "callFails": [
    "ADX 17.0 not above 25",
    "PEG 6.31 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 137.91,
   "sma50": 176.5,
   "sma200": 176.43,
   "rsi": 34.6,
   "adx": 27.7,
   "bar": "2026-11-05",
   "peg": 0.69,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 69.63,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 115.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.18,
    "mid": 3.92,
    "roc": 29.0,
    "capital": 11500
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank unavailable",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.18,
    "mid": 2.83,
    "roc": 17.4,
    "capital": 13791
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
   "price": 129.67,
   "sma50": 144.6,
   "sma200": 133.9,
   "rsi": 41.8,
   "adx": 15.7,
   "bar": "2026-11-05",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 75.55,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 105.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.16,
    "mid": 3.35,
    "roc": 32.3,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank unavailable",
    "next earnings date unavailable",
    "RSI 41.8 too high for a put"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.48,
    "roc": 19.4,
    "capital": 12967
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank unavailable",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.03,
   "sma50": 9.99,
   "sma200": 10.71,
   "rsi": 28.9,
   "adx": 37.5,
   "bar": "2026-11-05",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 112.42,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.22,
    "mid": 0.34,
    "roc": 67.9,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank unavailable"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 26.1,
    "capital": 603
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 78.12,
   "sma50": 106.54,
   "sma200": 92.11,
   "rsi": 27.7,
   "adx": 29.3,
   "bar": "2026-11-05",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.3,
   "ivr": 29.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.17,
    "mid": 1.85,
    "roc": 28.8,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank 29.0 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 100.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.16,
    "mid": 1.22,
    "roc": 15.8,
    "capital": 7812
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank 29.0 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Cash-Secured Put",
   "strike": 130.0,
   "exp": "2026-12-18",
   "dte": 43,
   "delta": -0.16,
   "mid": 3.15,
   "roc": 20.6,
   "capital": 13000,
   "ivr": 30.3,
   "rsi": 25.7,
   "adx": 25.3,
   "price": 155.77,
   "sma50": 186.41,
   "sma200": 153.56
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 185.0,
   "exp": "2026-12-11",
   "dte": 36,
   "delta": 0.19,
   "mid": 2.62,
   "roc": 17.0,
   "capital": 15577,
   "ivr": 30.3,
   "rsi": 25.7,
   "adx": 25.3,
   "price": 155.77,
   "sma50": 186.41,
   "sma200": 153.56
  }
 ],
 "errors": []
};
