window.SCANNER_DATA = {
 "generatedAt": "2026-11-06T02:28:32Z",
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
   "price": 181.6,
   "sma50": 220.64,
   "sma200": 204.66,
   "rsi": 25.4,
   "adx": 26.4,
   "bar": "2026-11-05",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 62.0,
   "ivr": 68.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 148.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.15,
    "mid": 3.75,
    "roc": 21.5,
    "capital": 14800
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 215.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.19,
    "mid": 2.92,
    "roc": 16.3,
    "capital": 18160
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 404.4,
   "sma50": 547.37,
   "sma200": 415.0,
   "rsi": 29.7,
   "adx": 24.0,
   "bar": "2026-11-05",
   "peg": 0.48,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 74.54,
   "ivr": 39.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 320.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.16,
    "mid": 10.97,
    "roc": 29.1,
    "capital": 32000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.0 not above 25"
   ],
   "call": {
    "strike": 510.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.16,
    "mid": 6.38,
    "roc": 16.0,
    "capital": 40440
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 535.93,
   "sma50": 516.13,
   "sma200": 439.45,
   "rsi": 54.4,
   "adx": 21.9,
   "bar": "2026-11-05",
   "peg": 1.54,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 31.03,
   "ivr": 29.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 495.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.23,
    "mid": 9.07,
    "roc": 15.6,
    "capital": 49500
   },
   "putFails": [
    "ADX 21.9 not above 25",
    "IV rank 29.3 not above 30",
    "RSI 54.4 too high for a put"
   ],
   "call": {
    "strike": 570.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.29,
    "mid": 8.72,
    "roc": 13.8,
    "capital": 53593
   },
   "callFails": [
    "ADX 21.9 not above 25",
    "IV rank 29.3 not above 30",
    "best ROC 13.8% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 605.08,
   "sma50": 674.14,
   "sma200": 632.13,
   "rsi": 34.9,
   "adx": 26.7,
   "bar": "2026-11-05",
   "peg": 0.81,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 44.31,
   "ivr": 44.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 525.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.15,
    "mid": 8.12,
    "roc": 15.7,
    "capital": 52500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 675.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.23,
    "mid": 9.55,
    "roc": 16.0,
    "capital": 60508
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 282.57,
   "sma50": 334.05,
   "sma200": 339.74,
   "rsi": 28.0,
   "adx": 30.4,
   "bar": "2026-11-05",
   "peg": 1.0,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 35.98,
   "ivr": 35.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.22,
    "mid": 4.7,
    "roc": 18.3,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.27,
    "mid": 4.72,
    "roc": 17.0,
    "capital": 28257
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 260.21,
   "sma50": 253.89,
   "sma200": 243.82,
   "rsi": 55.0,
   "adx": 14.1,
   "bar": "2026-11-05",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.55,
   "ivr": 25.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.19,
    "mid": 3.93,
    "roc": 16.9,
    "capital": 23500
   },
   "putFails": [
    "ADX 14.1 not above 25",
    "IV rank 25.7 not above 30",
    "next earnings date unavailable",
    "RSI 55.0 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.29,
    "mid": 4.53,
    "roc": 17.6,
    "capital": 26021
   },
   "callFails": [
    "ADX 14.1 not above 25",
    "IV rank 25.7 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 343.69,
   "sma50": 372.07,
   "sma200": 384.32,
   "rsi": 35.8,
   "adx": 16.0,
   "bar": "2026-11-05",
   "peg": 4.65,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 56.88,
   "ivr": 31.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 285.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.15,
    "mid": 6.25,
    "roc": 22.2,
    "capital": 28500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 4.65 outside 0 to 2.5"
   ],
   "call": {
    "strike": 400.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.2,
    "mid": 5.33,
    "roc": 15.7,
    "capital": 34369
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 4.65 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 154.99,
   "sma50": 186.39,
   "sma200": 153.56,
   "rsi": 25.4,
   "adx": 25.4,
   "bar": "2026-11-05",
   "peg": 1.59,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 59.03,
   "ivr": 30.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.17,
    "roc": 24.7,
    "capital": 13000
   },
   "putFails": [],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.18,
    "mid": 2.33,
    "roc": 15.2,
    "capital": 15499
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 217.2,
   "sma50": 244.0,
   "sma200": 169.72,
   "rsi": 35.4,
   "adx": 17.1,
   "bar": "2026-11-05",
   "peg": 6.31,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 77.05,
   "ivr": 93.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.16,
    "mid": 5.68,
    "roc": 28.3,
    "capital": 17000
   },
   "putFails": [
    "ADX 17.1 not above 25",
    "PEG 6.31 outside 0 to 2.5"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.15,
    "mid": 3.65,
    "roc": 17.0,
    "capital": 21720
   },
   "callFails": [
    "ADX 17.1 not above 25",
    "PEG 6.31 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 136.82,
   "sma50": 176.47,
   "sma200": 176.43,
   "rsi": 34.2,
   "adx": 28.0,
   "bar": "2026-11-05",
   "peg": 0.69,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 72.48,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 110.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.17,
    "mid": 3.52,
    "roc": 27.2,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank unavailable",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.18,
    "mid": 2.76,
    "roc": 17.2,
    "capital": 13682
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
   "price": 129.3,
   "sma50": 144.6,
   "sma200": 133.9,
   "rsi": 41.6,
   "adx": 16.1,
   "bar": "2026-11-05",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 79.3,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 100.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": -0.16,
    "mid": 3.72,
    "roc": 31.6,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank unavailable",
    "next earnings date unavailable",
    "RSI 41.6 too high for a put"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.15,
    "mid": 2.16,
    "roc": 16.9,
    "capital": 12930
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank unavailable",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 5.88,
   "sma50": 9.99,
   "sma200": 10.71,
   "rsi": 28.1,
   "adx": 37.7,
   "bar": "2026-11-05",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 117.03,
   "ivr": null,
   "ivrSource": null,
   "put": {
    "strike": 4.5,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.19,
    "mid": 0.29,
    "roc": 66.5,
    "capital": 450
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank unavailable"
   ],
   "call": {
    "strike": 9.0,
    "exp": "2026-12-18",
    "dte": 43,
    "delta": 0.17,
    "mid": 0.15,
    "roc": 22.4,
    "capital": 588
   },
   "callFails": [
    "below 200-day SMA",
    "IV rank unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 78.39,
   "sma50": 106.55,
   "sma200": 92.11,
   "rsi": 27.8,
   "adx": 29.5,
   "bar": "2026-11-05",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 72.11,
   "ivr": 29.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-04",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": -0.19,
    "mid": 2.27,
    "roc": 35.4,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "IV rank 29.0 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 99.0,
    "exp": "2026-12-11",
    "dte": 36,
    "delta": 0.16,
    "mid": 1.21,
    "roc": 15.7,
    "capital": 7839
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
   "exp": "2026-12-11",
   "dte": 36,
   "delta": -0.17,
   "mid": 3.17,
   "roc": 24.7,
   "capital": 13000,
   "ivr": 30.3,
   "rsi": 25.4,
   "adx": 25.4,
   "price": 154.99,
   "sma50": 186.39,
   "sma200": 153.56
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 185.0,
   "exp": "2026-12-11",
   "dte": 36,
   "delta": 0.18,
   "mid": 2.33,
   "roc": 15.2,
   "capital": 15499,
   "ivr": 30.3,
   "rsi": 25.4,
   "adx": 25.4,
   "price": 154.99,
   "sma50": 186.39,
   "sma200": 153.56
  }
 ],
 "errors": []
};
