window.SCANNER_DATA = {
 "generatedAt": "2026-10-28T16:39:01Z",
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
   "price": 217.09,
   "sma50": 222.11,
   "sma200": 204.15,
   "rsi": 45.5,
   "adx": 17.9,
   "bar": "2026-10-28",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 40.3,
   "ivr": 44.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.18,
    "mid": 2.79,
    "roc": 17.4,
    "capital": 19500
   },
   "putFails": [
    "ADX 17.9 not above 25",
    "RSI 45.5 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.27,
    "mid": 3.6,
    "roc": 20.2,
    "capital": 21709
   },
   "callFails": [
    "ADX 17.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 567.51,
   "sma50": 545.36,
   "sma200": 407.3,
   "rsi": 51.4,
   "adx": 21.1,
   "bar": "2026-10-28",
   "peg": 0.53,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.54,
   "ivr": 39.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 485.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 8.8,
    "roc": 22.1,
    "capital": 48500
   },
   "putFails": [
    "ADX 21.1 not above 25",
    "RSI 51.4 too high for a put"
   ],
   "call": {
    "strike": 685.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.16,
    "mid": 7.5,
    "roc": 16.1,
    "capital": 56751
   },
   "callFails": [
    "ADX 21.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 527.57,
   "sma50": 511.11,
   "sma200": 437.3,
   "rsi": 53.5,
   "adx": 24.9,
   "bar": "2026-10-28",
   "peg": 1.73,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.5,
   "ivr": 51.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 495.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.23,
    "mid": 6.57,
    "roc": 16.2,
    "capital": 49500
   },
   "putFails": [
    "ADX 24.9 not above 25",
    "RSI 53.5 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.28,
    "mid": 7.47,
    "roc": 17.2,
    "capital": 52757
   },
   "callFails": [
    "ADX 24.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 613.26,
   "sma50": 667.05,
   "sma200": 632.14,
   "rsi": 30.8,
   "adx": 27.7,
   "bar": "2026-10-28",
   "peg": 0.81,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 38.03,
   "ivr": 44.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 560.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.19,
    "mid": 7.33,
    "roc": 15.9,
    "capital": 56000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 675.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.22,
    "mid": 8.05,
    "roc": 16.0,
    "capital": 61326
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 323.5,
   "sma50": 341.48,
   "sma200": 341.19,
   "rsi": 37.2,
   "adx": 20.4,
   "bar": "2026-10-28",
   "peg": 1.11,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.42,
   "ivr": 75.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 300.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.21,
    "mid": 4.35,
    "roc": 17.6,
    "capital": 30000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25"
   ],
   "call": {
    "strike": 350.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.26,
    "mid": 4.92,
    "roc": 18.5,
    "capital": 32350
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 252.82,
   "sma50": 255.08,
   "sma200": 243.37,
   "rsi": 48.3,
   "adx": 12.6,
   "bar": "2026-10-28",
   "peg": 1.44,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 43.44,
   "ivr": 74.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 3.03,
    "roc": 16.4,
    "capital": 22500
   },
   "putFails": [
    "ADX 12.6 not above 25",
    "RSI 48.3 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.23,
    "mid": 3.75,
    "roc": 18.0,
    "capital": 25282
   },
   "callFails": [
    "ADX 12.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 400.86,
   "sma50": 367.4,
   "sma200": 385.7,
   "rsi": 61.7,
   "adx": 14.6,
   "bar": "2026-10-28",
   "peg": 4.75,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.41,
   "ivr": 4.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 365.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.18,
    "mid": 4.78,
    "roc": 15.9,
    "capital": 36500
   },
   "putFails": [
    "ADX 14.6 not above 25",
    "PEG 4.75 outside 0 to 2.5",
    "IV rank 4.6 not above 30",
    "next earnings date unavailable",
    "RSI 61.7 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.25,
    "mid": 5.88,
    "roc": 17.8,
    "capital": 40086
   },
   "callFails": [
    "ADX 14.6 not above 25",
    "PEG 4.75 outside 0 to 2.5",
    "IV rank 4.6 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 193.9,
   "sma50": 186.22,
   "sma200": 153.44,
   "rsi": 51.0,
   "adx": 21.7,
   "bar": "2026-10-28",
   "peg": 1.72,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 62.19,
   "ivr": 68.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.17,
    "mid": 3.5,
    "roc": 25.8,
    "capital": 16500
   },
   "putFails": [
    "ADX 21.7 not above 25",
    "RSI 51.0 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.67,
    "roc": 16.7,
    "capital": 19390
   },
   "callFails": [
    "ADX 21.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 265.26,
   "sma50": 237.83,
   "sma200": 165.84,
   "rsi": 58.6,
   "adx": 20.1,
   "bar": "2026-10-28",
   "peg": 6.76,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 58.53,
   "ivr": 63.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.18,
    "mid": 4.8,
    "roc": 25.4,
    "capital": 23000
   },
   "putFails": [
    "ADX 20.1 not above 25",
    "PEG 6.76 outside 0 to 2.5",
    "RSI 58.6 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.21,
    "mid": 4.7,
    "roc": 21.6,
    "capital": 26526
   },
   "callFails": [
    "ADX 20.1 not above 25",
    "PEG 6.76 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 158.53,
   "sma50": 180.23,
   "sma200": 179.25,
   "rsi": 38.9,
   "adx": 20.4,
   "bar": "2026-10-28",
   "peg": 2.33,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.65,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-04",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.01,
    "roc": 22.8,
    "capital": 13000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25",
    "RSI 38.9 too high for a put"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.15,
    "mid": 2.24,
    "roc": 17.2,
    "capital": 15853
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 139.22,
   "sma50": 142.44,
   "sma200": 134.93,
   "rsi": 45.2,
   "adx": 18.7,
   "bar": "2026-10-28",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.82,
   "ivr": 24.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.67,
    "roc": 28.2,
    "capital": 11500
   },
   "putFails": [
    "ADX 18.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.0 not above 30",
    "RSI 45.2 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 37,
    "delta": 0.16,
    "mid": 2.46,
    "roc": 17.4,
    "capital": 13922
   },
   "callFails": [
    "ADX 18.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.02,
   "sma50": 10.5,
   "sma200": 10.83,
   "rsi": 27.0,
   "adx": 33.9,
   "bar": "2026-10-28",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 95.19,
   "ivr": 38.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 5.5,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 0.18,
    "roc": 40.9,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-04",
    "dte": 37,
    "delta": 0.17,
    "mid": 0.17,
    "roc": 23.9,
    "capital": 702
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 90.71,
   "sma50": 108.76,
   "sma200": 92.9,
   "rsi": 33.9,
   "adx": 23.0,
   "bar": "2026-10-28",
   "peg": 1.57,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 56.51,
   "ivr": 39.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-27",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.2,
    "mid": 1.81,
    "roc": 27.5,
    "capital": 8000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25"
   ],
   "call": {
    "strike": 109.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.13,
    "roc": 15.2,
    "capital": 9071
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
