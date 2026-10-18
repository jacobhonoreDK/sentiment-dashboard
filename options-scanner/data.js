window.SCANNER_DATA = {
 "generatedAt": "2026-10-18T01:04:20Z",
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
   "iv30": 36.94,
   "ivr": 28.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 41,
    "delta": -0.18,
    "mid": 3.3,
    "roc": 15.5,
    "capital": 19000
   },
   "putFails": [
    "ADX 17.1 not above 25",
    "IV rank 28.5 not above 30"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 41,
    "delta": 0.26,
    "mid": 3.83,
    "roc": 15.9,
    "capital": 21413
   },
   "callFails": [
    "ADX 17.1 not above 25",
    "IV rank 28.5 not above 30"
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
   "iv30": 59.26,
   "ivr": 35.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 440.0,
    "exp": "2026-11-27",
    "dte": 41,
    "delta": -0.15,
    "mid": 8.93,
    "roc": 18.1,
    "capital": 44000
   },
   "putFails": [
    "ADX 22.2 not above 25"
   ],
   "call": {
    "strike": 640.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.17,
    "mid": 7.42,
    "roc": 15.1,
    "capital": 52875
   },
   "callFails": [
    "ADX 22.2 not above 25"
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
   "iv30": 31.94,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 490.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.21,
    "mid": 6.93,
    "roc": 15.2,
    "capital": 49000
   },
   "putFails": [
    "RSI 57.3 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.27,
    "mid": 7.47,
    "roc": 15.2,
    "capital": 52905
   },
   "callFails": [],
   "result": "Qualifies"
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
   "iv30": 44.4,
   "ivr": 60.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 625.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.16,
    "mid": 9.1,
    "roc": 15.6,
    "capital": 62500
   },
   "putFails": [
    "RSI 50.2 too high for a put"
   ],
   "call": {
    "strike": 800.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.21,
    "mid": 10.1,
    "roc": 15.3,
    "capital": 70933
   },
   "callFails": [],
   "result": "Qualifies"
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
   "iv30": 37.43,
   "ivr": 69.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 310.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.19,
    "mid": 4.58,
    "roc": 15.8,
    "capital": 31000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25",
    "RSI 44.4 too high for a put"
   ],
   "call": {
    "strike": 370.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.26,
    "mid": 5.38,
    "roc": 16.9,
    "capital": 34059
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.7 not above 25"
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
   "iv30": 40.84,
   "ivr": 59.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.19,
    "mid": 3.58,
    "roc": 17.1,
    "capital": 22500
   },
   "putFails": [
    "ADX 13.3 not above 25",
    "RSI 45.0 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.24,
    "mid": 3.88,
    "roc": 16.6,
    "capital": 25000
   },
   "callFails": [
    "ADX 13.3 not above 25"
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
   "iv30": 47.36,
   "ivr": 33.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 310.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.16,
    "mid": 5.0,
    "roc": 17.3,
    "capital": 31000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 14.1 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 42.2 too high for a put"
   ],
   "call": {
    "strike": 405.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.2,
    "mid": 5.17,
    "roc": 15.7,
    "capital": 35472
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 14.1 not above 25",
    "PEG 4.54 outside 0 to 2.5"
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
   "iv30": 63.97,
   "ivr": 64.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 155.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.16,
    "mid": 3.45,
    "roc": 23.9,
    "capital": 15500
   },
   "putFails": [
    "RSI 46.3 too high for a put"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 41,
    "delta": 0.19,
    "mid": 3.47,
    "roc": 16.6,
    "capital": 18603
   },
   "callFails": [],
   "result": "Qualifies"
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
   "iv30": 56.48,
   "ivr": 47.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.17,
    "mid": 4.17,
    "roc": 23.0,
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
    "dte": 34,
    "delta": 0.18,
    "mid": 3.38,
    "roc": 15.9,
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
   "iv30": 72.15,
   "ivr": 49.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.18,
    "mid": 4.17,
    "roc": 30.9,
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
    "dte": 34,
    "delta": 0.17,
    "mid": 3.07,
    "roc": 19.0,
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
   "iv30": 72.81,
   "ivr": 22.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 110.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.15,
    "mid": 3.01,
    "roc": 29.4,
    "capital": 11000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.8 not above 30",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-11-27",
    "dte": 41,
    "delta": 0.15,
    "mid": 2.35,
    "roc": 15.3,
    "capital": 13683
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.8 not above 30"
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
   "iv30": 93.76,
   "ivr": 28.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": -0.19,
    "mid": 0.27,
    "roc": 48.3,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25",
    "IV rank 28.9 not above 30"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.21,
    "mid": 0.21,
    "roc": 30.7,
    "capital": 753
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.0 not above 25",
    "IV rank 28.9 not above 30"
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
   "iv30": 69.05,
   "ivr": 40.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 41,
    "delta": -0.15,
    "mid": 1.98,
    "roc": 22.0,
    "capital": 8000
   },
   "putFails": [
    "ADX 14.9 not above 25"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-11-20",
    "dte": 34,
    "delta": 0.16,
    "mid": 1.52,
    "roc": 16.4,
    "capital": 9887
   },
   "callFails": [
    "ADX 14.9 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 225.0,
   "exp": "2026-11-27",
   "dte": 41,
   "delta": 0.19,
   "mid": 3.47,
   "roc": 16.6,
   "capital": 18603,
   "ivr": 64.1,
   "rsi": 46.3,
   "adx": 33.2,
   "price": 186.03,
   "sma50": 182.57,
   "sma200": 152.65
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 800.0,
   "exp": "2026-11-20",
   "dte": 34,
   "delta": 0.21,
   "mid": 10.1,
   "roc": 15.3,
   "capital": 70933,
   "ivr": 60.3,
   "rsi": 50.2,
   "adx": 34.5,
   "price": 709.33,
   "sma50": 655.24,
   "sma200": 631.98
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-20",
   "dte": 34,
   "delta": 0.27,
   "mid": 7.47,
   "roc": 15.2,
   "capital": 52905,
   "ivr": 47.1,
   "rsi": 57.3,
   "adx": 37.7,
   "price": 529.05,
   "sma50": 505.53,
   "sma200": 435.25
  }
 ],
 "errors": []
};
