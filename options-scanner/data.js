window.SCANNER_DATA = {
 "generatedAt": "2026-11-09T13:53:29Z",
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
   "price": 186.64,
   "sma50": 219.81,
   "sma200": 204.67,
   "rsi": 30.8,
   "adx": 28.9,
   "bar": "2026-11-06",
   "peg": 0.23,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 57.01,
   "ivr": 84.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 449.04,
   "sma50": 546.81,
   "sma200": 415.98,
   "rsi": 38.4,
   "adx": 25.4,
   "bar": "2026-11-06",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 69.05,
   "ivr": 58.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "RSI 38.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 530.61,
   "sma50": 516.65,
   "sma200": 439.85,
   "rsi": 52.1,
   "adx": 20.4,
   "bar": "2026-11-06",
   "peg": 1.57,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 29.64,
   "ivr": 41.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "ADX 20.4 not above 25",
    "RSI 52.1 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 20.4 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 610.15,
   "sma50": 674.92,
   "sma200": 631.94,
   "rsi": 36.7,
   "adx": 27.0,
   "bar": "2026-11-06",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 41.94,
   "ivr": 55.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 284.78,
   "sma50": 332.93,
   "sma200": 339.51,
   "rsi": 29.9,
   "adx": 30.7,
   "bar": "2026-11-06",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 33.92,
   "ivr": 54.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 259.3,
   "sma50": 253.95,
   "sma200": 243.94,
   "rsi": 54.2,
   "adx": 13.1,
   "bar": "2026-11-06",
   "peg": 1.2,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 35.1,
   "ivr": 42.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "RSI 54.2 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 358.22,
   "sma50": 372.14,
   "sma200": 383.87,
   "rsi": 42.4,
   "adx": 16.8,
   "bar": "2026-11-06",
   "peg": 4.18,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 51.91,
   "ivr": 66.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25",
    "PEG 4.18 outside 0 to 2.5",
    "RSI 42.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25",
    "PEG 4.18 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 160.38,
   "sma50": 185.88,
   "sma200": 153.53,
   "rsi": 31.2,
   "adx": 27.2,
   "bar": "2026-11-06",
   "peg": 1.31,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 55.69,
   "ivr": 48.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 216.9,
   "sma50": 243.78,
   "sma200": 170.24,
   "rsi": 35.3,
   "adx": 18.2,
   "bar": "2026-11-06",
   "peg": 5.6,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 75.04,
   "ivr": 95.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.15,
    "mid": 5.1,
    "roc": 28.1,
    "capital": 17000
   },
   "putFails": [
    "ADX 18.2 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": 0.16,
    "mid": 3.8,
    "roc": 16.4,
    "capital": 21690
   },
   "callFails": [
    "ADX 18.2 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 134.76,
   "sma50": 175.35,
   "sma200": 175.99,
   "rsi": 33.4,
   "adx": 29.0,
   "bar": "2026-11-06",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 70.11,
   "ivr": 51.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.95,
    "roc": 30.5,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.16,
    "mid": 2.2,
    "roc": 18.6,
    "capital": 13476
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 128.93,
   "sma50": 144.43,
   "sma200": 133.74,
   "rsi": 41.4,
   "adx": 16.0,
   "bar": "2026-11-06",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 75.46,
   "ivr": 20.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 100.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.15,
    "mid": 3.48,
    "roc": 32.5,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.9 not above 30",
    "next earnings date unavailable",
    "RSI 41.4 too high for a put"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.16,
    "mid": 2.23,
    "roc": 19.7,
    "capital": 12893
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 20.9 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.35,
   "sma50": 9.88,
   "sma200": 10.69,
   "rsi": 34.0,
   "adx": 38.7,
   "bar": "2026-11-06",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 108.34,
   "ivr": 61.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.2,
    "mid": 0.3,
    "roc": 69.6,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 9.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.18,
    "mid": 0.17,
    "roc": 29.6,
    "capital": 635
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 80.91,
   "sma50": 105.97,
   "sma200": 91.99,
   "rsi": 32.0,
   "adx": 30.5,
   "bar": "2026-11-06",
   "peg": 1.31,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.25,
   "ivr": 42.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-06",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
