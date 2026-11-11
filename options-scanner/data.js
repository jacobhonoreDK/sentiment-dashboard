window.SCANNER_DATA = {
 "generatedAt": "2026-11-11T15:15:17Z",
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
   "price": 172.45,
   "sma50": 217.1,
   "sma200": 204.46,
   "rsi": 27.5,
   "adx": 37.3,
   "bar": "2026-11-11",
   "peg": 0.22,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 55.66,
   "ivr": 92.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 37,
    "delta": -0.15,
    "mid": 2.95,
    "roc": 20.1,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.2,
    "mid": 2.77,
    "roc": 19.5,
    "capital": 17245
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 536.93,
   "sma50": 550.11,
   "sma200": 419.97,
   "rsi": 51.6,
   "adx": 22.2,
   "bar": "2026-11-11",
   "peg": 0.46,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 63.02,
   "ivr": 51.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 445.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": -0.15,
    "mid": 9.32,
    "roc": 25.5,
    "capital": 44500
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "RSI 51.6 too high for a put"
   ],
   "call": {
    "strike": 645.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.17,
    "mid": 6.8,
    "roc": 15.4,
    "capital": 53693
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 523.98,
   "sma50": 518.26,
   "sma200": 440.77,
   "rsi": 48.7,
   "adx": 17.5,
   "bar": "2026-11-11",
   "peg": 1.61,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 26.84,
   "ivr": 35.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 500.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": -0.24,
    "mid": 6.28,
    "roc": 15.3,
    "capital": 50000
   },
   "putFails": [
    "ADX 17.5 not above 25",
    "RSI 48.7 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.27,
    "mid": 6.78,
    "roc": 15.7,
    "capital": 52398
   },
   "callFails": [
    "ADX 17.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 639.34,
   "sma50": 678.78,
   "sma200": 631.53,
   "rsi": 46.0,
   "adx": 24.7,
   "bar": "2026-11-11",
   "peg": 0.83,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 38.3,
   "ivr": 50.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 580.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": -0.18,
    "mid": 7.85,
    "roc": 16.5,
    "capital": 58000
   },
   "putFails": [
    "ADX 24.7 not above 25",
    "RSI 46.0 too high for a put"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.23,
    "mid": 8.38,
    "roc": 15.9,
    "capital": 63934
   },
   "callFails": [
    "ADX 24.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 290.97,
   "sma50": 329.84,
   "sma200": 338.87,
   "rsi": 35.9,
   "adx": 29.9,
   "bar": "2026-11-11",
   "peg": 1.02,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.3,
   "ivr": 46.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 270.0,
    "exp": "2026-12-18",
    "dte": 37,
    "delta": -0.22,
    "mid": 4.15,
    "roc": 15.2,
    "capital": 27000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.26,
    "mid": 3.8,
    "roc": 15.9,
    "capital": 29097
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 269.29,
   "sma50": 254.47,
   "sma200": 244.36,
   "rsi": 60.1,
   "adx": 13.1,
   "bar": "2026-11-11",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.55,
   "ivr": 35.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": -0.21,
    "mid": 3.45,
    "roc": 16.8,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "RSI 60.1 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.28,
    "mid": 3.88,
    "roc": 17.5,
    "capital": 26929
   },
   "callFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 392.97,
   "sma50": 373.7,
   "sma200": 383.04,
   "rsi": 55.0,
   "adx": 15.0,
   "bar": "2026-11-11",
   "peg": 4.41,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 43.08,
   "ivr": 39.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 340.0,
    "exp": "2026-12-18",
    "dte": 37,
    "delta": -0.16,
    "mid": 5.47,
    "roc": 15.9,
    "capital": 34000
   },
   "putFails": [
    "ADX 15.0 not above 25",
    "PEG 4.41 outside 0 to 2.5",
    "RSI 55.0 too high for a put"
   ],
   "call": {
    "strike": 430.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.23,
    "mid": 5.58,
    "roc": 17.3,
    "capital": 39297
   },
   "callFails": [
    "ADX 15.0 not above 25",
    "PEG 4.41 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 171.77,
   "sma50": 185.03,
   "sma200": 153.57,
   "rsi": 41.9,
   "adx": 27.7,
   "bar": "2026-11-11",
   "peg": 1.39,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 48.74,
   "ivr": 35.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-24",
    "dte": 43,
    "delta": -0.16,
    "mid": 2.74,
    "roc": 16.0,
    "capital": 14500
   },
   "putFails": [
    "RSI 41.9 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.2,
    "mid": 2.47,
    "roc": 17.5,
    "capital": 17177
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 232.61,
   "sma50": 244.23,
   "sma200": 171.92,
   "rsi": 45.2,
   "adx": 20.1,
   "bar": "2026-11-11",
   "peg": 5.9,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.08,
   "ivr": 91.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 190.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": -0.15,
    "mid": 4.5,
    "roc": 28.8,
    "capital": 19000
   },
   "putFails": [
    "ADX 20.1 not above 25",
    "PEG 5.90 outside 0 to 2.5",
    "RSI 45.2 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 37,
    "delta": 0.18,
    "mid": 4.12,
    "roc": 17.5,
    "capital": 23261
   },
   "callFails": [
    "ADX 20.1 not above 25",
    "PEG 5.90 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 134.41,
   "sma50": 172.54,
   "sma200": 174.79,
   "rsi": 34.8,
   "adx": 31.7,
   "bar": "2026-11-11",
   "peg": 0.6,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 67.95,
   "ivr": 49.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-18",
    "dte": 37,
    "delta": -0.16,
    "mid": 2.97,
    "roc": 26.7,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 37,
    "delta": 0.16,
    "mid": 2.25,
    "roc": 16.5,
    "capital": 13441
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 121.18,
   "sma50": 144.08,
   "sma200": 133.16,
   "rsi": 37.1,
   "adx": 17.2,
   "bar": "2026-11-11",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 75.78,
   "ivr": 24.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 95.0,
    "exp": "2026-12-24",
    "dte": 43,
    "delta": -0.16,
    "mid": 3.16,
    "roc": 28.2,
    "capital": 9500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.1 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 155.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.15,
    "mid": 1.88,
    "roc": 18.9,
    "capital": 12118
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.1 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.57,
   "sma50": 9.68,
   "sma200": 10.65,
   "rsi": 47.1,
   "adx": 35.3,
   "bar": "2026-11-11",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 94.88,
   "ivr": 50.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 6.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": -0.17,
    "mid": 0.23,
    "roc": 45.6,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 47.1 too high for a put"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.15,
    "mid": 0.15,
    "roc": 23.3,
    "capital": 757
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 83.11,
   "sma50": 104.67,
   "sma200": 91.63,
   "rsi": 36.9,
   "adx": 30.2,
   "bar": "2026-11-11",
   "peg": 1.32,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 64.61,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 69.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": -0.16,
    "mid": 1.48,
    "roc": 26.2,
    "capital": 6900
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 101.0,
    "exp": "2026-12-11",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.19,
    "roc": 17.3,
    "capital": 8311
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 195.0,
   "exp": "2026-12-11",
   "dte": 30,
   "delta": 0.2,
   "mid": 2.47,
   "roc": 17.5,
   "capital": 17177,
   "ivr": 35.9,
   "rsi": 41.9,
   "adx": 27.7,
   "price": 171.77,
   "sma50": 185.03,
   "sma200": 153.57
  }
 ],
 "errors": []
};
