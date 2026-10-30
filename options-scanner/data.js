window.SCANNER_DATA = {
 "generatedAt": "2026-10-30T07:08:44Z",
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
   "price": 213.66,
   "sma50": 221.99,
   "sma200": 204.28,
   "rsi": 42.3,
   "adx": 18.4,
   "bar": "2026-10-29",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 40.12,
   "ivr": 47.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 190.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.17,
    "mid": 2.79,
    "roc": 15.3,
    "capital": 19000
   },
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 42.3 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.24,
    "mid": 3.2,
    "roc": 15.6,
    "capital": 21366
   },
   "callFails": [
    "ADX 18.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 566.42,
   "sma50": 547.58,
   "sma200": 409.08,
   "rsi": 50.9,
   "adx": 19.7,
   "bar": "2026-10-29",
   "peg": 0.58,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.03,
   "ivr": 36.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 480.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.16,
    "mid": 9.65,
    "roc": 21.0,
    "capital": 48000
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 50.9 too high for a put"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 8.28,
    "roc": 15.2,
    "capital": 56642
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 530.14,
   "sma50": 512.1,
   "sma200": 437.61,
   "rsi": 55.4,
   "adx": 23.3,
   "bar": "2026-10-29",
   "peg": 1.72,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 25.03,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 510.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.3,
    "mid": 8.43,
    "roc": 17.2,
    "capital": 51000
   },
   "putFails": [
    "ADX 23.3 not above 25",
    "RSI 55.4 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.26,
    "mid": 6.28,
    "roc": 12.3,
    "capital": 53014
   },
   "callFails": [
    "ADX 23.3 not above 25",
    "best ROC 12.3% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 624.52,
   "sma50": 668.6,
   "sma200": 632.11,
   "rsi": 35.0,
   "adx": 27.6,
   "bar": "2026-10-29",
   "peg": 0.8,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.07,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 570.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.2,
    "mid": 8.43,
    "roc": 15.4,
    "capital": 57000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.23,
    "mid": 9.28,
    "roc": 15.5,
    "capital": 62452
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 283.82,
   "sma50": 340.29,
   "sma200": 340.94,
   "rsi": 22.3,
   "adx": 23.3,
   "bar": "2026-10-29",
   "peg": 1.14,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 29.23,
   "ivr": 85.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 270.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.27,
    "mid": 4.55,
    "roc": 17.6,
    "capital": 27000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.3 not above 25",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.26,
    "mid": 3.75,
    "roc": 13.8,
    "capital": 28382
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.3 not above 25",
    "next earnings date unavailable",
    "best ROC 13.8% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 243.79,
   "sma50": 254.67,
   "sma200": 243.38,
   "rsi": 40.7,
   "adx": 13.4,
   "bar": "2026-10-29",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 44.56,
   "ivr": 78.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 215.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.16,
    "mid": 3.09,
    "roc": 15.0,
    "capital": 21500
   },
   "putFails": [
    "ADX 13.4 not above 25",
    "RSI 40.7 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.21,
    "mid": 3.52,
    "roc": 15.1,
    "capital": 24379
   },
   "callFails": [
    "ADX 13.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 403.3,
   "sma50": 368.51,
   "sma200": 385.5,
   "rsi": 63.0,
   "adx": 15.6,
   "bar": "2026-10-29",
   "peg": 4.71,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 36.8,
   "ivr": 0.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 365.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.19,
    "mid": 5.4,
    "roc": 15.4,
    "capital": 36500
   },
   "putFails": [
    "ADX 15.6 not above 25",
    "PEG 4.71 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable",
    "RSI 63.0 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": 0.25,
    "mid": 7.33,
    "roc": 15.8,
    "capital": 40330
   },
   "callFails": [
    "ADX 15.6 not above 25",
    "PEG 4.71 outside 0 to 2.5",
    "IV rank 0.0 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 196.42,
   "sma50": 186.7,
   "sma200": 153.54,
   "rsi": 53.4,
   "adx": 20.3,
   "bar": "2026-10-29",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.35,
   "ivr": 65.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 165.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.17,
    "mid": 3.85,
    "roc": 24.3,
    "capital": 16500
   },
   "putFails": [
    "ADX 20.3 not above 25",
    "RSI 53.4 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 3.1,
    "roc": 16.5,
    "capital": 19642
   },
   "callFails": [
    "ADX 20.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 261.15,
   "sma50": 239.05,
   "sma200": 166.57,
   "rsi": 56.0,
   "adx": 19.0,
   "bar": "2026-10-29",
   "peg": 6.88,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 60.31,
   "ivr": 64.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 215.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": -0.16,
    "mid": 5.83,
    "roc": 23.5,
    "capital": 21500
   },
   "putFails": [
    "ADX 19.0 not above 25",
    "PEG 6.88 outside 0 to 2.5",
    "RSI 56.0 too high for a put"
   ],
   "call": {
    "strike": 320.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": 0.21,
    "mid": 5.65,
    "roc": 18.8,
    "capital": 26115
   },
   "callFails": [
    "ADX 19.0 not above 25",
    "PEG 6.88 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 160.59,
   "sma50": 180.32,
   "sma200": 178.81,
   "rsi": 40.2,
   "adx": 21.2,
   "bar": "2026-10-29",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 67.72,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 21.2 not above 25",
    "RSI 40.2 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": {
    "strike": 205.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.15,
    "mid": 2.4,
    "roc": 15.6,
    "capital": 16059
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 21.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 141.62,
   "sma50": 143.31,
   "sma200": 134.8,
   "rsi": 47.0,
   "adx": 18.3,
   "bar": "2026-10-29",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.36,
   "ivr": 23.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 115.0,
    "exp": "2026-12-11",
    "dte": 42,
    "delta": -0.16,
    "mid": 3.31,
    "roc": 25.0,
    "capital": 11500
   },
   "putFails": [
    "ADX 18.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 23.1 not above 30",
    "RSI 47.0 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.17,
    "mid": 2.58,
    "roc": 19.0,
    "capital": 14162
   },
   "callFails": [
    "ADX 18.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 23.1 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.17,
   "sma50": 10.46,
   "sma200": 10.82,
   "rsi": 30.1,
   "adx": 34.3,
   "bar": "2026-10-29",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 97.8,
   "ivr": 42.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.16,
    "mid": 0.24,
    "roc": 45.5,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.15,
    "mid": 0.15,
    "roc": 21.8,
    "capital": 717
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 91.59,
   "sma50": 108.69,
   "sma200": 92.76,
   "rsi": 34.7,
   "adx": 24.2,
   "bar": "2026-10-29",
   "peg": 1.55,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 54.7,
   "ivr": 14.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-28",
   "put": {
    "strike": 79.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": -0.18,
    "mid": 1.67,
    "roc": 22.1,
    "capital": 7900
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.2 not above 25",
    "IV rank 14.5 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 110.0,
    "exp": "2026-12-04",
    "dte": 35,
    "delta": 0.18,
    "mid": 1.33,
    "roc": 15.1,
    "capital": 9159
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.2 not above 25",
    "IV rank 14.5 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
