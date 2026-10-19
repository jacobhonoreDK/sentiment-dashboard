window.SCANNER_DATA = {
 "generatedAt": "2026-10-19T12:51:37Z",
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
   "price": 214.13,
   "sma50": 223.08,
   "sma200": 202.97,
   "rsi": 37.5,
   "adx": 17.1,
   "bar": "2026-10-16",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 38.16,
   "ivr": 33.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": null,
   "putFails": [
    "ADX 17.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 17.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 528.75,
   "sma50": 537.14,
   "sma200": 394.25,
   "rsi": 37.8,
   "adx": 22.2,
   "bar": "2026-10-16",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.55,
   "ivr": 38.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.27,
    "mid": 18.15,
    "roc": 41.4,
    "capital": 50000
   },
   "putFails": [
    "ADX 22.2 not above 25"
   ],
   "call": null,
   "callFails": [
    "ADX 22.2 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 529.05,
   "sma50": 505.53,
   "sma200": 435.25,
   "rsi": 57.3,
   "adx": 37.7,
   "bar": "2026-10-16",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.19,
   "ivr": 51.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.26,
    "mid": 8.85,
    "roc": 20.2,
    "capital": 50000
   },
   "putFails": [
    "RSI 57.3 too high for a put"
   ],
   "call": null,
   "callFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 709.33,
   "sma50": 655.24,
   "sma200": 631.98,
   "rsi": 50.2,
   "adx": 34.5,
   "bar": "2026-10-16",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 44.59,
   "ivr": 64.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": null,
   "putFails": [
    "RSI 50.2 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 340.59,
   "sma50": 344.58,
   "sma200": 340.9,
   "rsi": 44.4,
   "adx": 16.7,
   "bar": "2026-10-16",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.64,
   "ivr": 72.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25",
    "RSI 44.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 250.0,
   "sma50": 257.08,
   "sma200": 242.73,
   "rsi": 45.0,
   "adx": 13.3,
   "bar": "2026-10-16",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 41.56,
   "ivr": 66.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": null,
   "putFails": [
    "ADX 13.3 not above 25",
    "RSI 45.0 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 13.3 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 354.72,
   "sma50": 359.46,
   "sma200": 387.99,
   "rsi": 42.2,
   "adx": 14.1,
   "bar": "2026-10-16",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 48.47,
   "ivr": 45.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 14.1 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 42.2 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 14.1 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 186.03,
   "sma50": 182.57,
   "sma200": 152.65,
   "rsi": 46.3,
   "adx": 33.2,
   "bar": "2026-10-16",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 66.9,
   "ivr": 75.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": null,
   "putFails": [
    "RSI 46.3 too high for a put",
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
   "price": 227.39,
   "sma50": 233.17,
   "sma200": 160.56,
   "rsi": 39.0,
   "adx": 22.2,
   "bar": "2026-10-16",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 56.21,
   "ivr": 59.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.17,
    "mid": 4.17,
    "roc": 24.4,
    "capital": 19500
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 39.0 too high for a put"
   ],
   "call": {
    "strike": 270.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.18,
    "mid": 3.38,
    "roc": 16.9,
    "capital": 22739
   },
   "callFails": [
    "ADX 22.2 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 173.16,
   "sma50": 177.63,
   "sma200": 182.32,
   "rsi": 45.0,
   "adx": 17.0,
   "bar": "2026-10-16",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 72.57,
   "ivr": 57.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.18,
    "mid": 4.17,
    "roc": 32.8,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25",
    "RSI 45.0 too high for a put"
   ],
   "call": {
    "strike": 220.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.17,
    "mid": 3.07,
    "roc": 20.2,
    "capital": 17316
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 136.83,
   "sma50": 134.92,
   "sma200": 135.6,
   "rsi": 42.6,
   "adx": 27.6,
   "bar": "2026-10-16",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 72.88,
   "ivr": 26.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 110.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.15,
    "mid": 3.01,
    "roc": 31.2,
    "capital": 11000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.6 not above 30",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.15,
    "mid": 2.35,
    "roc": 16.1,
    "capital": 13683
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.53,
   "sma50": 10.87,
   "sma200": 10.95,
   "rsi": 22.9,
   "adx": 23.0,
   "bar": "2026-10-16",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 92.85,
   "ivr": 36.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.19,
    "mid": 0.27,
    "roc": 51.3,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.21,
    "mid": 0.21,
    "roc": 32.6,
    "capital": 753
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 98.87,
   "sma50": 108.63,
   "sma200": 93.76,
   "rsi": 36.8,
   "adx": 14.9,
   "bar": "2026-10-16",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 70.25,
   "ivr": 46.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": null,
   "putFails": [
    "ADX 14.9 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 14.9 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
