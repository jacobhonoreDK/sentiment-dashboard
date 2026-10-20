window.SCANNER_DATA = {
 "generatedAt": "2026-10-20T17:09:18Z",
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
   "price": 216.86,
   "sma50": 222.93,
   "sma200": 203.26,
   "rsi": 41.3,
   "adx": 18.0,
   "bar": "2026-10-20",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 39.28,
   "ivr": 35.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 38,
    "delta": -0.19,
    "mid": 3.22,
    "roc": 15.9,
    "capital": 19500
   },
   "putFails": [
    "ADX 18.0 not above 25",
    "RSI 41.3 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 38,
    "delta": 0.28,
    "mid": 4.08,
    "roc": 18.0,
    "capital": 21686
   },
   "callFails": [
    "ADX 18.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 539.5,
   "sma50": 539.63,
   "sma200": 397.45,
   "rsi": 40.9,
   "adx": 22.3,
   "bar": "2026-10-20",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.97,
   "ivr": 35.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 460.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.16,
    "mid": 9.15,
    "roc": 23.4,
    "capital": 46000
   },
   "putFails": [
    "ADX 22.3 not above 25",
    "RSI 40.9 too high for a put"
   ],
   "call": {
    "strike": 650.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.17,
    "mid": 7.83,
    "roc": 17.1,
    "capital": 53950
   },
   "callFails": [
    "ADX 22.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 532.57,
   "sma50": 506.73,
   "sma200": 435.8,
   "rsi": 58.8,
   "adx": 34.6,
   "bar": "2026-10-20",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.76,
   "ivr": 48.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 495.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.22,
    "mid": 6.62,
    "roc": 15.8,
    "capital": 49500
   },
   "putFails": [
    "RSI 58.8 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.27,
    "mid": 7.43,
    "roc": 16.4,
    "capital": 53257
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 690.13,
   "sma50": 659.41,
   "sma200": 632.4,
   "rsi": 45.4,
   "adx": 30.4,
   "bar": "2026-10-20",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.64,
   "ivr": 64.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 610.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.16,
    "mid": 8.47,
    "roc": 16.4,
    "capital": 61000
   },
   "putFails": [
    "RSI 45.4 too high for a put"
   ],
   "call": {
    "strike": 780.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.2,
    "mid": 9.25,
    "roc": 15.8,
    "capital": 69013
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 341.08,
   "sma50": 344.05,
   "sma200": 341.19,
   "rsi": 45.3,
   "adx": 14.7,
   "bar": "2026-10-20",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.77,
   "ivr": 66.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 315.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.21,
    "mid": 4.78,
    "roc": 17.8,
    "capital": 31500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 14.7 not above 25",
    "RSI 45.3 too high for a put"
   ],
   "call": {
    "strike": 370.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.25,
    "mid": 4.92,
    "roc": 17.0,
    "capital": 34108
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 14.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 263.14,
   "sma50": 256.54,
   "sma200": 243.07,
   "rsi": 57.8,
   "adx": 14.0,
   "bar": "2026-10-20",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.04,
   "ivr": 62.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 237.5,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.18,
    "mid": 3.38,
    "roc": 16.7,
    "capital": 23750
   },
   "putFails": [
    "ADX 14.0 not above 25",
    "RSI 57.8 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.22,
    "mid": 3.5,
    "roc": 15.7,
    "capital": 26314
   },
   "callFails": [
    "ADX 14.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 373.81,
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
   "iv30": 45.47,
   "ivr": 32.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 330.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.16,
    "mid": 4.6,
    "roc": 16.4,
    "capital": 33000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.8 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 53.7 too high for a put"
   ],
   "call": {
    "strike": 420.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.22,
    "mid": 5.53,
    "roc": 17.4,
    "capital": 37381
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
   "price": 194.65,
   "sma50": 183.4,
   "sma200": 152.86,
   "rsi": 54.0,
   "adx": 28.7,
   "bar": "2026-10-20",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 63.31,
   "ivr": 70.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.17,
    "mid": 3.85,
    "roc": 27.5,
    "capital": 16500
   },
   "putFails": [
    "RSI 54.0 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.81,
    "roc": 17.0,
    "capital": 19465
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 226.39,
   "sma50": 233.47,
   "sma200": 161.68,
   "rsi": 38.7,
   "adx": 23.1,
   "bar": "2026-10-20",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 53.78,
   "ivr": 53.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.16,
    "mid": 3.45,
    "roc": 20.8,
    "capital": 19500
   },
   "putFails": [
    "ADX 23.1 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 38.7 too high for a put"
   ],
   "call": {
    "strike": 265.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.18,
    "mid": 2.97,
    "roc": 15.4,
    "capital": 22639
   },
   "callFails": [
    "ADX 23.1 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 171.71,
   "sma50": 178.39,
   "sma200": 181.71,
   "rsi": 44.8,
   "adx": 17.0,
   "bar": "2026-10-20",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.0,
   "ivr": 49.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.17,
    "mid": 3.67,
    "roc": 29.8,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25",
    "RSI 44.8 too high for a put"
   ],
   "call": {
    "strike": 215.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": 0.16,
    "mid": 2.79,
    "roc": 19.1,
    "capital": 17171
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 144.82,
   "sma50": 136.59,
   "sma200": 135.46,
   "rsi": 48.8,
   "adx": 24.8,
   "bar": "2026-10-20",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.29,
   "ivr": 21.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.87,
    "roc": 28.1,
    "capital": 12000
   },
   "putFails": [
    "ADX 24.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.6 not above 30",
    "RSI 48.8 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-11-27",
    "dte": 38,
    "delta": 0.17,
    "mid": 2.54,
    "roc": 16.9,
    "capital": 14482
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
   "price": 7.69,
   "sma50": 10.78,
   "sma200": 10.93,
   "rsi": 26.6,
   "adx": 26.4,
   "bar": "2026-10-20",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 94.92,
   "ivr": 34.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.16,
    "mid": 0.22,
    "roc": 43.2,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-11-27",
    "dte": 38,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 18.7,
    "capital": 769
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 98.71,
   "sma50": 108.78,
   "sma200": 93.6,
   "rsi": 38.2,
   "adx": 17.1,
   "bar": "2026-10-20",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.47,
   "ivr": 41.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-19",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-20",
    "dte": 31,
    "delta": -0.19,
    "mid": 2.3,
    "roc": 31.9,
    "capital": 8500
   },
   "putFails": [
    "ADX 17.1 not above 25",
    "RSI 38.2 too high for a put"
   ],
   "call": {
    "strike": 123.0,
    "exp": "2026-11-27",
    "dte": 38,
    "delta": 0.17,
    "mid": 1.7,
    "roc": 16.5,
    "capital": 9871
   },
   "callFails": [
    "ADX 17.1 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 235.0,
   "exp": "2026-11-20",
   "dte": 31,
   "delta": 0.17,
   "mid": 2.81,
   "roc": 17.0,
   "capital": 19465,
   "ivr": 70.2,
   "rsi": 54.0,
   "adx": 28.7,
   "price": 194.65,
   "sma50": 183.4,
   "sma200": 152.86
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-20",
   "dte": 31,
   "delta": 0.27,
   "mid": 7.43,
   "roc": 16.4,
   "capital": 53257,
   "ivr": 48.7,
   "rsi": 58.8,
   "adx": 34.6,
   "price": 532.57,
   "sma50": 506.73,
   "sma200": 435.8
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 780.0,
   "exp": "2026-11-20",
   "dte": 31,
   "delta": 0.2,
   "mid": 9.25,
   "roc": 15.8,
   "capital": 69013,
   "ivr": 64.8,
   "rsi": 45.4,
   "adx": 30.4,
   "price": 690.13,
   "sma50": 659.41,
   "sma200": 632.4
  }
 ],
 "errors": []
};
