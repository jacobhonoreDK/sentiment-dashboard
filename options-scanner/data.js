window.SCANNER_DATA = {
 "generatedAt": "2026-11-16T13:54:06Z",
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
   "iv30": 61.96,
   "ivr": 93.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": {
    "strike": 135.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": -0.19,
    "mid": 3.4,
    "roc": 28.7,
    "capital": 13500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": 0.24,
    "mid": 3.8,
    "roc": 26.6,
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
   "peg": 0.48,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 66.6,
   "ivr": 55.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": null,
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 50.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 19.7 not above 25",
    "no liquid contract in the delta and DTE window"
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
   "iv30": 27.23,
   "ivr": 34.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": null,
   "putFails": [
    "ADX 17.0 not above 25",
    "RSI 48.8 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 17.0 not above 25",
    "no liquid contract in the delta and DTE window"
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
   "peg": 0.83,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.31,
   "ivr": 49.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": null,
   "putFails": [
    "ADX 24.1 not above 25",
    "RSI 47.8 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 24.1 not above 25",
    "no liquid contract in the delta and DTE window"
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
   "iv30": 32.45,
   "ivr": 48.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 40.6 too high for a put",
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
   "price": 266.66,
   "sma50": 254.81,
   "sma200": 244.6,
   "rsi": 57.4,
   "adx": 12.9,
   "bar": "2026-11-13",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.98,
   "ivr": 37.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": null,
   "putFails": [
    "ADX 12.9 not above 25",
    "next earnings date unavailable",
    "RSI 57.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 12.9 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
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
   "peg": 4.55,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 44.9,
   "ivr": 43.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": null,
   "putFails": [
    "ADX 13.8 not above 25",
    "PEG 4.55 outside 0 to 2.5",
    "RSI 53.5 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 13.8 not above 25",
    "PEG 4.55 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
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
   "peg": 1.33,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 50.41,
   "ivr": 35.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": null,
   "putFails": [
    "RSI 39.5 too high for a put",
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
   "price": 226.61,
   "sma50": 244.92,
   "sma200": 173.05,
   "rsi": 42.1,
   "adx": 20.7,
   "bar": "2026-11-13",
   "peg": 5.85,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 72.89,
   "ivr": 94.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": -0.16,
    "mid": 5.18,
    "roc": 31.9,
    "capital": 18500
   },
   "putFails": [
    "ADX 20.7 not above 25",
    "PEG 5.85 outside 0 to 2.5",
    "RSI 42.1 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": 0.15,
    "mid": 3.35,
    "roc": 16.9,
    "capital": 22661
   },
   "callFails": [
    "ADX 20.7 not above 25",
    "PEG 5.85 outside 0 to 2.5"
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
   "peg": 0.58,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.75,
   "ivr": 45.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.5,
    "roc": 27.2,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 160.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.13,
    "roc": 19.1,
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
   "iv30": 74.97,
   "ivr": 19.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": -0.17,
    "mid": 2.9,
    "roc": 36.8,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.8 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 32,
    "delta": 0.15,
    "mid": 1.78,
    "roc": 18.2,
    "capital": 11162
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.8 not above 30",
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
   "iv30": 93.88,
   "ivr": 36.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-24",
    "dte": 38,
    "delta": -0.19,
    "mid": 0.29,
    "roc": 49.8,
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
    "dte": 32,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 22.0,
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
   "iv30": 64.76,
   "ivr": 35.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-13",
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
