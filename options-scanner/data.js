window.SCANNER_DATA = {
 "generatedAt": "2026-10-27T13:13:39Z",
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
   "price": 216.0,
   "sma50": 222.3,
   "sma200": 203.82,
   "rsi": 44.1,
   "adx": 18.9,
   "bar": "2026-10-26",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 40.74,
   "ivr": 50.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.17,
    "mid": 2.68,
    "roc": 16.2,
    "capital": 19500
   },
   "putFails": [
    "ADX 18.9 not above 25",
    "RSI 44.1 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.23,
    "mid": 2.87,
    "roc": 15.6,
    "capital": 21600
   },
   "callFails": [
    "ADX 18.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 531.28,
   "sma50": 542.62,
   "sma200": 403.72,
   "rsi": 42.9,
   "adx": 23.8,
   "bar": "2026-10-26",
   "peg": 0.51,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 60.14,
   "ivr": 40.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.29,
    "mid": 19.6,
    "roc": 46.2,
    "capital": 50000
   },
   "putFails": [
    "ADX 23.8 not above 25",
    "RSI 42.9 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 23.8 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 532.6,
   "sma50": 509.17,
   "sma200": 436.79,
   "rsi": 57.2,
   "adx": 27.4,
   "bar": "2026-10-26",
   "peg": 1.7,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.47,
   "ivr": 55.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": null,
   "putFails": [
    "RSI 57.2 too high for a put",
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
   "price": 630.56,
   "sma50": 664.63,
   "sma200": 632.45,
   "rsi": 33.6,
   "adx": 27.4,
   "bar": "2026-10-26",
   "peg": 0.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 38.74,
   "ivr": 46.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 570.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.18,
    "mid": 7.88,
    "roc": 16.3,
    "capital": 57000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.23,
    "mid": 8.65,
    "roc": 16.2,
    "capital": 63056
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 316.8,
   "sma50": 342.36,
   "sma200": 341.27,
   "rsi": 29.5,
   "adx": 19.1,
   "bar": "2026-10-26",
   "peg": 1.12,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.12,
   "ivr": 78.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 19.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 19.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 249.09,
   "sma50": 255.38,
   "sma200": 243.31,
   "rsi": 44.3,
   "adx": 14.2,
   "bar": "2026-10-26",
   "peg": 1.44,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 44.11,
   "ivr": 77.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": null,
   "putFails": [
    "ADX 14.2 not above 25",
    "RSI 44.3 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.26,
    "mid": 4.55,
    "roc": 21.5,
    "capital": 24909
   },
   "callFails": [
    "ADX 14.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 391.62,
   "sma50": 364.76,
   "sma200": 386.13,
   "rsi": 60.1,
   "adx": 12.5,
   "bar": "2026-10-26",
   "peg": 3.8,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 38.86,
   "ivr": 9.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 360.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.19,
    "mid": 5.33,
    "roc": 17.4,
    "capital": 36000
   },
   "putFails": [
    "ADX 12.5 not above 25",
    "PEG 3.80 outside 0 to 2.5",
    "IV rank 9.4 not above 30",
    "next earnings date unavailable",
    "RSI 60.1 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.23,
    "mid": 5.47,
    "roc": 16.5,
    "capital": 39162
   },
   "callFails": [
    "ADX 12.5 not above 25",
    "PEG 3.80 outside 0 to 2.5",
    "IV rank 9.4 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 198.84,
   "sma50": 185.25,
   "sma200": 153.26,
   "rsi": 56.1,
   "adx": 23.9,
   "bar": "2026-10-26",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 63.57,
   "ivr": 73.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": null,
   "putFails": [
    "ADX 23.9 not above 25",
    "RSI 56.1 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 23.9 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 261.83,
   "sma50": 235.7,
   "sma200": 164.34,
   "rsi": 57.8,
   "adx": 19.7,
   "bar": "2026-10-26",
   "peg": 6.65,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 59.64,
   "ivr": 65.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.18,
    "mid": 5.0,
    "roc": 26.2,
    "capital": 22500
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "PEG 6.65 outside 0 to 2.5",
    "RSI 57.8 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.2,
    "mid": 4.65,
    "roc": 20.9,
    "capital": 26183
   },
   "callFails": [
    "ADX 19.7 not above 25",
    "PEG 6.65 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 159.6,
   "sma50": 179.78,
   "sma200": 180.07,
   "rsi": 39.1,
   "adx": 18.2,
   "bar": "2026-10-26",
   "peg": 2.4,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.07,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.23,
    "mid": 4.72,
    "roc": 39.7,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "RSI 39.1 too high for a put"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.92,
    "roc": 21.6,
    "capital": 15960
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 139.82,
   "sma50": 140.63,
   "sma200": 135.12,
   "rsi": 45.5,
   "adx": 21.2,
   "bar": "2026-10-26",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.61,
   "ivr": 25.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.92,
    "roc": 29.8,
    "capital": 11500
   },
   "putFails": [
    "ADX 21.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.2 not above 30",
    "RSI 45.5 too high for a put"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.18,
    "mid": 2.56,
    "roc": 21.6,
    "capital": 13982
   },
   "callFails": [
    "ADX 21.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.2 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.84,
   "sma50": 10.6,
   "sma200": 10.87,
   "rsi": 23.4,
   "adx": 32.0,
   "bar": "2026-10-26",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 93.17,
   "ivr": 34.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 5.5,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.18,
    "mid": 0.23,
    "roc": 48.2,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-04",
    "dte": 38,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 19.7,
    "capital": 684
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 92.84,
   "sma50": 108.81,
   "sma200": 93.14,
   "rsi": 34.5,
   "adx": 21.1,
   "bar": "2026-10-26",
   "peg": 1.61,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 68.93,
   "ivr": 43.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 21.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 21.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
