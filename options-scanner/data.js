window.SCANNER_DATA = {
 "generatedAt": "2026-10-21T10:11:04Z",
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
   "price": 216.47,
   "sma50": 222.92,
   "sma200": 203.26,
   "rsi": 40.9,
   "adx": 18.0,
   "bar": "2026-10-20",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 39.77,
   "ivr": 35.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.19,
    "mid": 3.28,
    "roc": 16.6,
    "capital": 19500
   },
   "putFails": [
    "ADX 18.0 not above 25",
    "RSI 40.9 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": 0.27,
    "mid": 3.95,
    "roc": 18.0,
    "capital": 21647
   },
   "callFails": [
    "ADX 18.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 534.74,
   "sma50": 539.54,
   "sma200": 397.42,
   "rsi": 39.8,
   "adx": 22.3,
   "bar": "2026-10-20",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 60.03,
   "ivr": 35.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 450.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.16,
    "mid": 8.88,
    "roc": 19.5,
    "capital": 45000
   },
   "putFails": [
    "ADX 22.3 not above 25",
    "RSI 39.8 too high for a put"
   ],
   "call": {
    "strike": 650.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.16,
    "mid": 6.95,
    "roc": 15.8,
    "capital": 53474
   },
   "callFails": [
    "ADX 22.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 531.87,
   "sma50": 506.72,
   "sma200": 435.8,
   "rsi": 58.3,
   "adx": 34.6,
   "bar": "2026-10-20",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.51,
   "ivr": 48.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 495.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.21,
    "mid": 6.43,
    "roc": 15.8,
    "capital": 49500
   },
   "putFails": [
    "RSI 58.3 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.27,
    "mid": 7.43,
    "roc": 17.0,
    "capital": 53187
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 694.25,
   "sma50": 659.49,
   "sma200": 632.42,
   "rsi": 46.4,
   "adx": 30.4,
   "bar": "2026-10-20",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.33,
   "ivr": 64.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 610.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.15,
    "mid": 7.85,
    "roc": 15.7,
    "capital": 61000
   },
   "putFails": [
    "RSI 46.4 too high for a put"
   ],
   "call": {
    "strike": 785.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.2,
    "mid": 8.95,
    "roc": 15.7,
    "capital": 69425
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 340.28,
   "sma50": 344.03,
   "sma200": 341.18,
   "rsi": 44.7,
   "adx": 15.0,
   "bar": "2026-10-20",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.61,
   "ivr": 66.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 310.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.18,
    "mid": 3.88,
    "roc": 15.2,
    "capital": 31000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.0 not above 25",
    "RSI 44.7 too high for a put"
   ],
   "call": {
    "strike": 370.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.24,
    "mid": 4.7,
    "roc": 16.8,
    "capital": 34028
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 262.63,
   "sma50": 256.53,
   "sma200": 243.07,
   "rsi": 57.4,
   "adx": 14.0,
   "bar": "2026-10-20",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.0,
   "ivr": 62.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 235.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.94,
    "roc": 15.2,
    "capital": 23500
   },
   "putFails": [
    "ADX 14.0 not above 25",
    "RSI 57.4 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.22,
    "mid": 3.45,
    "roc": 16.0,
    "capital": 26263
   },
   "callFails": [
    "ADX 14.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 373.71,
   "sma50": 361.11,
   "sma200": 387.26,
   "rsi": 53.7,
   "adx": 12.8,
   "bar": "2026-10-20",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.75,
   "ivr": 32.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 330.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.16,
    "mid": 4.67,
    "roc": 17.2,
    "capital": 33000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.8 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 53.7 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.19,
    "mid": 4.7,
    "roc": 15.3,
    "capital": 37371
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 12.8 not above 25",
    "PEG 4.54 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 192.6,
   "sma50": 183.36,
   "sma200": 152.85,
   "rsi": 52.1,
   "adx": 28.7,
   "bar": "2026-10-20",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 63.24,
   "ivr": 70.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 160.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.16,
    "mid": 3.53,
    "roc": 21.7,
    "capital": 16000
   },
   "putFails": [
    "RSI 52.1 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.53,
    "roc": 16.0,
    "capital": 19260
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 227.37,
   "sma50": 233.49,
   "sma200": 161.68,
   "rsi": 39.1,
   "adx": 23.1,
   "bar": "2026-10-20",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 53.81,
   "ivr": 53.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.16,
    "mid": 3.3,
    "roc": 20.6,
    "capital": 19500
   },
   "putFails": [
    "ADX 23.1 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 39.1 too high for a put"
   ],
   "call": {
    "strike": 267.5,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.96,
    "roc": 15.8,
    "capital": 22737
   },
   "callFails": [
    "ADX 23.1 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 170.85,
   "sma50": 178.37,
   "sma200": 181.7,
   "rsi": 44.3,
   "adx": 17.0,
   "bar": "2026-10-20",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.3,
   "ivr": 49.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.25,
    "roc": 22.9,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25",
    "RSI 44.3 too high for a put"
   ],
   "call": {
    "strike": 220.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": 0.15,
    "mid": 2.85,
    "roc": 16.5,
    "capital": 17085
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 142.72,
   "sma50": 136.55,
   "sma200": 135.45,
   "rsi": 47.4,
   "adx": 24.8,
   "bar": "2026-10-20",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.94,
   "ivr": 21.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.17,
    "mid": 3.05,
    "roc": 30.9,
    "capital": 12000
   },
   "putFails": [
    "ADX 24.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.6 not above 30",
    "RSI 47.4 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.16,
    "roc": 18.4,
    "capital": 14272
   },
   "callFails": [
    "ADX 24.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.48,
   "sma50": 10.77,
   "sma200": 10.93,
   "rsi": 23.7,
   "adx": 26.4,
   "bar": "2026-10-20",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 92.93,
   "ivr": 34.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.18,
    "mid": 0.23,
    "roc": 47.7,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 22.0,
    "capital": 748
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 98.21,
   "sma50": 108.77,
   "sma200": 93.6,
   "rsi": 37.4,
   "adx": 17.1,
   "bar": "2026-10-20",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 65.91,
   "ivr": 41.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.2,
    "mid": 2.36,
    "roc": 33.8,
    "capital": 8500
   },
   "putFails": [
    "ADX 17.1 not above 25"
   ],
   "call": {
    "strike": 123.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": 0.17,
    "mid": 1.63,
    "roc": 16.4,
    "capital": 9821
   },
   "callFails": [
    "ADX 17.1 not above 25"
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
   "dte": 30,
   "delta": 0.27,
   "mid": 7.43,
   "roc": 17.0,
   "capital": 53187,
   "ivr": 48.7,
   "rsi": 58.3,
   "adx": 34.6,
   "price": 531.87,
   "sma50": 506.72,
   "sma200": 435.8
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 235.0,
   "exp": "2026-11-20",
   "dte": 30,
   "delta": 0.16,
   "mid": 2.53,
   "roc": 16.0,
   "capital": 19260,
   "ivr": 70.2,
   "rsi": 52.1,
   "adx": 28.7,
   "price": 192.6,
   "sma50": 183.36,
   "sma200": 152.85
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 785.0,
   "exp": "2026-11-20",
   "dte": 30,
   "delta": 0.2,
   "mid": 8.95,
   "roc": 15.7,
   "capital": 69425,
   "ivr": 64.8,
   "rsi": 46.4,
   "adx": 30.4,
   "price": 694.25,
   "sma50": 659.49,
   "sma200": 632.42
  }
 ],
 "errors": []
};
