window.SCANNER_DATA = {
 "generatedAt": "2026-10-19T21:04:35Z",
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
   "sma50": 222.94,
   "sma200": 203.12,
   "rsi": 41.5,
   "adx": 17.4,
   "bar": "2026-10-19",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 37.8,
   "ivr": 33.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": -0.19,
    "mid": 3.17,
    "roc": 15.2,
    "capital": 19500
   },
   "putFails": [
    "ADX 17.4 not above 25",
    "RSI 41.5 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.28,
    "mid": 4.12,
    "roc": 17.8,
    "capital": 21709
   },
   "callFails": [
    "ADX 17.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 538.05,
   "sma50": 538.23,
   "sma200": 395.87,
   "rsi": 40.5,
   "adx": 22.1,
   "bar": "2026-10-19",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 58.77,
   "ivr": 38.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 455.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": -0.16,
    "mid": 9.72,
    "roc": 20.0,
    "capital": 45500
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 40.5 too high for a put"
   ],
   "call": {
    "strike": 640.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.18,
    "mid": 8.38,
    "roc": 17.8,
    "capital": 53805
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 533.52,
   "sma50": 506.2,
   "sma200": 435.5,
   "rsi": 59.6,
   "adx": 36.2,
   "bar": "2026-10-19",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.49,
   "ivr": 51.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.23,
    "mid": 7.53,
    "roc": 17.2,
    "capital": 50000
   },
   "putFails": [
    "RSI 59.6 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.29,
    "mid": 7.95,
    "roc": 17.0,
    "capital": 53352
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 705.44,
   "sma50": 657.51,
   "sma200": 632.2,
   "rsi": 49.2,
   "adx": 32.5,
   "bar": "2026-10-19",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 44.52,
   "ivr": 64.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 625.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 8.53,
    "roc": 15.6,
    "capital": 62500
   },
   "putFails": [
    "RSI 49.2 too high for a put"
   ],
   "call": {
    "strike": 795.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.2,
    "mid": 9.45,
    "roc": 15.3,
    "capital": 70544
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 344.18,
   "sma50": 344.38,
   "sma200": 341.06,
   "rsi": 48.1,
   "adx": 15.8,
   "bar": "2026-10-19",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.53,
   "ivr": 72.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 315.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.19,
    "mid": 4.22,
    "roc": 15.3,
    "capital": 31500
   },
   "putFails": [
    "ADX 15.8 not above 25",
    "RSI 48.1 too high for a put"
   ],
   "call": {
    "strike": 375.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.23,
    "mid": 4.62,
    "roc": 15.3,
    "capital": 34418
   },
   "callFails": [
    "ADX 15.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 262.45,
   "sma50": 256.84,
   "sma200": 242.89,
   "rsi": 57.3,
   "adx": 13.5,
   "bar": "2026-10-19",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.42,
   "ivr": 66.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 237.5,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.19,
    "mid": 3.5,
    "roc": 16.8,
    "capital": 23750
   },
   "putFails": [
    "ADX 13.5 not above 25",
    "RSI 57.3 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.22,
    "mid": 3.5,
    "roc": 15.2,
    "capital": 26245
   },
   "callFails": [
    "ADX 13.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 368.06,
   "sma50": 360.25,
   "sma200": 387.58,
   "rsi": 50.6,
   "adx": 13.2,
   "bar": "2026-10-19",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 44.95,
   "ivr": 45.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 4.65,
    "roc": 16.3,
    "capital": 32500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 13.2 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 50.6 too high for a put"
   ],
   "call": {
    "strike": 415.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.21,
    "mid": 5.15,
    "roc": 16.0,
    "capital": 36806
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 13.2 not above 25",
    "PEG 4.54 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 194.15,
   "sma50": 183.01,
   "sma200": 152.73,
   "rsi": 53.6,
   "adx": 30.9,
   "bar": "2026-10-19",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 62.9,
   "ivr": 75.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.18,
    "mid": 3.97,
    "roc": 27.5,
    "capital": 16500
   },
   "putFails": [
    "RSI 53.6 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.75,
    "roc": 16.2,
    "capital": 19415
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 228.1,
   "sma50": 233.45,
   "sma200": 161.11,
   "rsi": 39.4,
   "adx": 22.5,
   "bar": "2026-10-19",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 54.1,
   "ivr": 59.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.15,
    "mid": 3.38,
    "roc": 19.7,
    "capital": 19500
   },
   "putFails": [
    "ADX 22.5 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 39.4 too high for a put"
   ],
   "call": {
    "strike": 267.5,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.18,
    "mid": 3.13,
    "roc": 15.7,
    "capital": 22810
   },
   "callFails": [
    "ADX 22.5 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 168.45,
   "sma50": 177.93,
   "sma200": 182.03,
   "rsi": 42.6,
   "adx": 16.9,
   "bar": "2026-10-19",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.91,
   "ivr": 57.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.16,
    "mid": 3.15,
    "roc": 25.7,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.9 not above 25",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 210.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.72,
    "roc": 18.5,
    "capital": 16845
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 136.02,
   "sma50": 135.64,
   "sma200": 135.53,
   "rsi": 42.1,
   "adx": 26.6,
   "bar": "2026-10-19",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.14,
   "ivr": 26.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 110.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": -0.15,
    "mid": 2.76,
    "roc": 23.5,
    "capital": 11000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.6 not above 30",
    "RSI 42.1 too high for a put"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.16,
    "mid": 2.21,
    "roc": 15.2,
    "capital": 13602
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.38,
   "sma50": 10.81,
   "sma200": 10.94,
   "rsi": 22.2,
   "adx": 24.7,
   "bar": "2026-10-19",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 92.5,
   "ivr": 36.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.19,
    "mid": 0.27,
    "roc": 50.4,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.7 not above 25"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-11-27",
    "dte": 39,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 19.0,
    "capital": 738
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 96.52,
   "sma50": 108.69,
   "sma200": 93.68,
   "rsi": 34.8,
   "adx": 16.0,
   "bar": "2026-10-19",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.83,
   "ivr": 46.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-16",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": -0.15,
    "mid": 1.73,
    "roc": 24.6,
    "capital": 8000
   },
   "putFails": [
    "ADX 16.0 not above 25"
   ],
   "call": {
    "strike": 120.0,
    "exp": "2026-11-20",
    "dte": 32,
    "delta": 0.16,
    "mid": 1.45,
    "roc": 17.1,
    "capital": 9652
   },
   "callFails": [
    "ADX 16.0 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-20",
   "dte": 32,
   "delta": 0.29,
   "mid": 7.95,
   "roc": 17.0,
   "capital": 53352,
   "ivr": 51.3,
   "rsi": 59.6,
   "adx": 36.2,
   "price": 533.52,
   "sma50": 506.2,
   "sma200": 435.5
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 235.0,
   "exp": "2026-11-20",
   "dte": 32,
   "delta": 0.17,
   "mid": 2.75,
   "roc": 16.2,
   "capital": 19415,
   "ivr": 75.5,
   "rsi": 53.6,
   "adx": 30.9,
   "price": 194.15,
   "sma50": 183.01,
   "sma200": 152.73
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 795.0,
   "exp": "2026-11-20",
   "dte": 32,
   "delta": 0.2,
   "mid": 9.45,
   "roc": 15.3,
   "capital": 70544,
   "ivr": 64.7,
   "rsi": 49.2,
   "adx": 32.5,
   "price": 705.44,
   "sma50": 657.51,
   "sma200": 632.2
  }
 ],
 "errors": []
};
