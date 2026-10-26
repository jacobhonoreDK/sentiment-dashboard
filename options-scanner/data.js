window.SCANNER_DATA = {
 "generatedAt": "2026-10-26T12:59:40Z",
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
   "price": 210.96,
   "sma50": 222.48,
   "sma200": 203.67,
   "rsi": 38.1,
   "adx": 19.1,
   "bar": "2026-10-23",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 41.98,
   "ivr": 54.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "ADX 19.1 not above 25",
    "RSI 38.1 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 19.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 516.79,
   "sma50": 542.28,
   "sma200": 402.08,
   "rsi": 39.0,
   "adx": 23.7,
   "bar": "2026-10-23",
   "peg": 0.51,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.87,
   "ivr": 40.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "ADX 23.7 not above 25",
    "RSI 39.0 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 23.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 524.51,
   "sma50": 508.43,
   "sma200": 436.51,
   "rsi": 52.6,
   "adx": 29.0,
   "bar": "2026-10-23",
   "peg": 1.7,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.51,
   "ivr": 52.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "RSI 52.6 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 642.62,
   "sma50": 663.81,
   "sma200": 632.53,
   "rsi": 35.7,
   "adx": 27.7,
   "bar": "2026-10-23",
   "peg": 0.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 36.9,
   "ivr": 43.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 320.21,
   "sma50": 342.94,
   "sma200": 341.31,
   "rsi": 31.3,
   "adx": 17.7,
   "bar": "2026-10-23",
   "peg": 1.12,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.44,
   "ivr": 74.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 17.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 17.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 248.0,
   "sma50": 255.65,
   "sma200": 243.29,
   "rsi": 43.2,
   "adx": 14.2,
   "bar": "2026-10-23",
   "peg": 1.44,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 42.86,
   "ivr": 76.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "ADX 14.2 not above 25",
    "RSI 43.2 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 14.2 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 372.22,
   "sma50": 363.77,
   "sma200": 386.35,
   "rsi": 51.5,
   "adx": 12.0,
   "bar": "2026-10-23",
   "peg": 3.8,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 39.04,
   "ivr": 11.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 12.0 not above 25",
    "PEG 3.80 outside 0 to 2.5",
    "IV rank 11.4 not above 30",
    "next earnings date unavailable",
    "RSI 51.5 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 12.0 not above 25",
    "PEG 3.80 outside 0 to 2.5",
    "IV rank 11.4 not above 30",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 196.75,
   "sma50": 184.75,
   "sma200": 153.15,
   "rsi": 54.4,
   "adx": 25.0,
   "bar": "2026-10-23",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 63.49,
   "ivr": 75.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "ADX 25.0 not above 25",
    "RSI 54.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 25.0 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 257.57,
   "sma50": 234.8,
   "sma200": 163.61,
   "rsi": 55.9,
   "adx": 20.0,
   "bar": "2026-10-23",
   "peg": 6.65,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 60.32,
   "ivr": 67.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "ADX 20.0 not above 25",
    "PEG 6.65 outside 0 to 2.5",
    "RSI 55.9 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.23,
    "mid": 5.55,
    "roc": 24.6,
    "capital": 25757
   },
   "callFails": [
    "ADX 20.0 not above 25",
    "PEG 6.65 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 164.45,
   "sma50": 179.55,
   "sma200": 180.5,
   "rsi": 41.5,
   "adx": 17.0,
   "bar": "2026-10-23",
   "peg": 2.4,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.89,
   "ivr": 50.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.19,
    "mid": 4.42,
    "roc": 36.1,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25",
    "RSI 41.5 too high for a put"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.29,
    "mid": 5.72,
    "roc": 39.7,
    "capital": 16445
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 146.01,
   "sma50": 139.7,
   "sma200": 135.26,
   "rsi": 49.5,
   "adx": 22.6,
   "bar": "2026-10-23",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.2,
   "ivr": 24.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.16,
    "mid": 3.27,
    "roc": 31.1,
    "capital": 12000
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.8 not above 30",
    "RSI 49.5 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.18,
    "mid": 2.5,
    "roc": 19.6,
    "capital": 14601
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.02,
   "sma50": 10.64,
   "sma200": 10.89,
   "rsi": 24.3,
   "adx": 30.4,
   "bar": "2026-10-23",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 92.85,
   "ivr": 38.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 5.5,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.17,
    "mid": 0.21,
    "roc": 43.6,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 21.9,
    "capital": 702
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 95.07,
   "sma50": 108.87,
   "sma200": 93.25,
   "rsi": 36.5,
   "adx": 19.7,
   "bar": "2026-10-23",
   "peg": 1.61,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 67.28,
   "ivr": 45.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": null,
   "putFails": [
    "ADX 19.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 19.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
