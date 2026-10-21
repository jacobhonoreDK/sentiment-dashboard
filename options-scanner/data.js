window.SCANNER_DATA = {
 "generatedAt": "2026-10-21T15:18:03Z",
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
   "price": 220.09,
   "sma50": 222.97,
   "sma200": 203.42,
   "rsi": 45.7,
   "adx": 17.7,
   "bar": "2026-10-21",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 39.11,
   "ivr": 41.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.2,
    "mid": 3.42,
    "roc": 16.9,
    "capital": 20000
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "RSI 45.7 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": 0.25,
    "mid": 3.55,
    "roc": 15.9,
    "capital": 22009
   },
   "callFails": [
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 545.71,
   "sma50": 540.96,
   "sma200": 399.05,
   "rsi": 43.1,
   "adx": 22.3,
   "bar": "2026-10-21",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 60.1,
   "ivr": 39.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 460.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.16,
    "mid": 9.22,
    "roc": 19.8,
    "capital": 46000
   },
   "putFails": [
    "ADX 22.3 not above 25",
    "RSI 43.1 too high for a put"
   ],
   "call": {
    "strike": 660.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.16,
    "mid": 7.22,
    "roc": 16.1,
    "capital": 54571
   },
   "callFails": [
    "ADX 22.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 530.39,
   "sma50": 507.25,
   "sma200": 436.08,
   "rsi": 57.2,
   "adx": 33.0,
   "bar": "2026-10-21",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.8,
   "ivr": 50.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 495.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.22,
    "mid": 6.58,
    "roc": 16.2,
    "capital": 49500
   },
   "putFails": [
    "RSI 57.2 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.26,
    "mid": 7.03,
    "roc": 16.1,
    "capital": 53039
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 708.82,
   "sma50": 661.69,
   "sma200": 632.67,
   "rsi": 50.4,
   "adx": 28.7,
   "bar": "2026-10-21",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 44.94,
   "ivr": 67.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 630.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.16,
    "mid": 8.55,
    "roc": 16.5,
    "capital": 63000
   },
   "putFails": [
    "RSI 50.4 too high for a put"
   ],
   "call": {
    "strike": 800.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.2,
    "mid": 9.2,
    "roc": 15.8,
    "capital": 70882
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 332.43,
   "sma50": 343.81,
   "sma200": 341.26,
   "rsi": 38.6,
   "adx": 15.3,
   "bar": "2026-10-21",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.08,
   "ivr": 72.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 305.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.2,
    "mid": 4.22,
    "roc": 16.9,
    "capital": 30500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25",
    "RSI 38.6 too high for a put"
   ],
   "call": {
    "strike": 362.5,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.23,
    "mid": 4.42,
    "roc": 16.2,
    "capital": 33243
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 261.48,
   "sma50": 256.31,
   "sma200": 243.21,
   "rsi": 56.1,
   "adx": 14.2,
   "bar": "2026-10-21",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.59,
   "ivr": 62.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 235.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.17,
    "mid": 3.08,
    "roc": 15.9,
    "capital": 23500
   },
   "putFails": [
    "ADX 14.2 not above 25",
    "RSI 56.1 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.21,
    "mid": 3.33,
    "roc": 15.5,
    "capital": 26148
   },
   "callFails": [
    "ADX 14.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 385.76,
   "sma50": 362.17,
   "sma200": 386.93,
   "rsi": 59.5,
   "adx": 13.2,
   "bar": "2026-10-21",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 44.32,
   "ivr": 36.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 340.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.15,
    "mid": 4.3,
    "roc": 15.4,
    "capital": 34000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 13.2 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 59.5 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.19,
    "mid": 4.83,
    "roc": 15.2,
    "capital": 38576
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
   "price": 198.96,
   "sma50": 183.84,
   "sma200": 152.98,
   "rsi": 57.3,
   "adx": 27.2,
   "bar": "2026-10-21",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 62.4,
   "ivr": 72.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.42,
    "roc": 20.5,
    "capital": 16500
   },
   "putFails": [
    "RSI 57.3 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.76,
    "roc": 16.9,
    "capital": 19896
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 236.51,
   "sma50": 233.78,
   "sma200": 162.29,
   "rsi": 45.0,
   "adx": 22.5,
   "bar": "2026-10-21",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 53.96,
   "ivr": 52.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 202.5,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.15,
    "mid": 3.35,
    "roc": 20.1,
    "capital": 20250
   },
   "putFails": [
    "ADX 22.5 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 45.0 too high for a put"
   ],
   "call": {
    "strike": 277.5,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.17,
    "mid": 3.04,
    "roc": 15.6,
    "capital": 23651
   },
   "callFails": [
    "ADX 22.5 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 178.05,
   "sma50": 178.96,
   "sma200": 181.32,
   "rsi": 49.0,
   "adx": 16.7,
   "bar": "2026-10-21",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.84,
   "ivr": 48.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.38,
    "roc": 23.0,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25",
    "RSI 49.0 too high for a put"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.15,
    "mid": 2.56,
    "roc": 17.5,
    "capital": 17805
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 152.66,
   "sma50": 137.68,
   "sma200": 135.39,
   "rsi": 54.0,
   "adx": 23.7,
   "bar": "2026-10-21",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.87,
   "ivr": 21.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 125.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": -0.16,
    "mid": 3.27,
    "roc": 25.8,
    "capital": 12500
   },
   "putFails": [
    "ADX 23.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.4 not above 30",
    "RSI 54.0 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": 0.16,
    "mid": 2.71,
    "roc": 17.5,
    "capital": 15266
   },
   "callFails": [
    "ADX 23.7 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.4 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.8,
   "sma50": 10.73,
   "sma200": 10.92,
   "rsi": 28.4,
   "adx": 27.9,
   "bar": "2026-10-21",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 95.29,
   "ivr": 36.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.15,
    "mid": 0.19,
    "roc": 38.5,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-11-27",
    "dte": 37,
    "delta": 0.16,
    "mid": 0.17,
    "roc": 21.5,
    "capital": 780
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 101.67,
   "sma50": 108.91,
   "sma200": 93.49,
   "rsi": 42.5,
   "adx": 18.0,
   "bar": "2026-10-21",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.3,
   "ivr": 40.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-20",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": -0.17,
    "mid": 1.96,
    "roc": 28.1,
    "capital": 8500
   },
   "putFails": [
    "ADX 18.0 not above 25",
    "RSI 42.5 too high for a put"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-11-20",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.47,
    "roc": 17.6,
    "capital": 10167
   },
   "callFails": [
    "ADX 18.0 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 240.0,
   "exp": "2026-11-20",
   "dte": 30,
   "delta": 0.17,
   "mid": 2.76,
   "roc": 16.9,
   "capital": 19896,
   "ivr": 72.3,
   "rsi": 57.3,
   "adx": 27.2,
   "price": 198.96,
   "sma50": 183.84,
   "sma200": 152.98
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-20",
   "dte": 30,
   "delta": 0.26,
   "mid": 7.03,
   "roc": 16.1,
   "capital": 53039,
   "ivr": 50.2,
   "rsi": 57.2,
   "adx": 33.0,
   "price": 530.39,
   "sma50": 507.25,
   "sma200": 436.08
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 800.0,
   "exp": "2026-11-20",
   "dte": 30,
   "delta": 0.2,
   "mid": 9.2,
   "roc": 15.8,
   "capital": 70882,
   "ivr": 67.5,
   "rsi": 50.4,
   "adx": 28.7,
   "price": 708.82,
   "sma50": 661.69,
   "sma200": 632.67
  }
 ],
 "errors": []
};
