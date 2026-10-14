window.SCANNER_DATA = {
 "generatedAt": "2026-10-14T15:13:57Z",
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
   "price": 223.46,
   "sma50": 223.26,
   "sma200": 202.7,
   "rsi": 46.1,
   "adx": 15.3,
   "bar": "2026-10-14",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 31.95,
   "ivr": 10.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 205.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.22,
    "mid": 4.05,
    "roc": 16.4,
    "capital": 20500
   },
   "putFails": [
    "ADX 15.3 not above 25",
    "IV rank 10.9 not above 30",
    "RSI 46.1 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.25,
    "mid": 2.76,
    "roc": 15.0,
    "capital": 22346
   },
   "callFails": [
    "ADX 15.3 not above 25",
    "IV rank 10.9 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 580.16,
   "sma50": 534.93,
   "sma200": 390.99,
   "rsi": 48.7,
   "adx": 22.1,
   "bar": "2026-10-14",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 56.55,
   "ivr": 31.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.15,
    "mid": 8.55,
    "roc": 20.8,
    "capital": 50000
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 48.7 too high for a put"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 7.53,
    "roc": 15.8,
    "capital": 58016
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 538.3,
   "sma50": 504.0,
   "sma200": 434.81,
   "rsi": 66.1,
   "adx": 40.7,
   "bar": "2026-10-14",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 30.5,
   "ivr": 45.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 505.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.22,
    "mid": 6.33,
    "roc": 15.2,
    "capital": 50500
   },
   "putFails": [
    "RSI 66.1 too high for a put"
   ],
   "call": {
    "strike": 570.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.29,
    "mid": 7.93,
    "roc": 17.9,
    "capital": 53830
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 743.19,
   "sma50": 650.01,
   "sma200": 631.4,
   "rsi": 59.7,
   "adx": 37.1,
   "bar": "2026-10-14",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 42.84,
   "ivr": 62.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 665.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 8.35,
    "roc": 15.3,
    "capital": 66500
   },
   "putFails": [
    "RSI 59.7 too high for a put"
   ],
   "call": {
    "strike": 840.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.2,
    "mid": 9.68,
    "roc": 15.8,
    "capital": 74319
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 353.53,
   "sma50": 345.31,
   "sma200": 340.62,
   "rsi": 57.9,
   "adx": 19.7,
   "bar": "2026-10-14",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.72,
   "ivr": 65.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.19,
    "mid": 4.12,
    "roc": 15.4,
    "capital": 32500
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 57.9 too high for a put"
   ],
   "call": {
    "strike": 385.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.24,
    "mid": 5.12,
    "roc": 17.6,
    "capital": 35353
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 255.25,
   "sma50": 257.9,
   "sma200": 242.53,
   "rsi": 50.6,
   "adx": 15.0,
   "bar": "2026-10-14",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 39.26,
   "ivr": 61.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 235.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.2,
    "mid": 3.58,
    "roc": 18.5,
    "capital": 23500
   },
   "putFails": [
    "ADX 15.0 not above 25",
    "RSI 50.6 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.25,
    "mid": 3.95,
    "roc": 18.8,
    "capital": 25525
   },
   "callFails": [
    "ADX 15.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 367.66,
   "sma50": 357.95,
   "sma200": 388.98,
   "rsi": 49.6,
   "adx": 15.2,
   "bar": "2026-10-14",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.21,
   "ivr": 22.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 330.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.17,
    "mid": 4.45,
    "roc": 16.4,
    "capital": 33000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.2 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 22.0 not above 30",
    "RSI 49.6 too high for a put"
   ],
   "call": {
    "strike": 415.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.2,
    "mid": 4.83,
    "roc": 16.0,
    "capital": 36766
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.2 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 22.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 205.4,
   "sma50": 181.21,
   "sma200": 152.56,
   "rsi": 69.8,
   "adx": 38.2,
   "bar": "2026-10-14",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 58.33,
   "ivr": 55.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 177.5,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 3.42,
    "roc": 23.5,
    "capital": 17750
   },
   "putFails": [
    "RSI 69.8 too high for a put"
   ],
   "call": {
    "strike": 250.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.58,
    "roc": 15.3,
    "capital": 20540
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 252.71,
   "sma50": 232.15,
   "sma200": 159.4,
   "rsi": 50.7,
   "adx": 22.6,
   "bar": "2026-10-14",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 51.34,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 220.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.16,
    "mid": 4.03,
    "roc": 18.0,
    "capital": 22000
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 50.7 too high for a put"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": 0.19,
    "mid": 4.1,
    "roc": 16.0,
    "capital": 25271
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 173.55,
   "sma50": 176.41,
   "sma200": 182.87,
   "rsi": 44.3,
   "adx": 17.4,
   "bar": "2026-10-14",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 66.31,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.25,
    "roc": 22.1,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.4 not above 25",
    "RSI 44.3 too high for a put"
   ],
   "call": {
    "strike": 220.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.69,
    "roc": 18.8,
    "capital": 17355
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 145.26,
   "sma50": 133.11,
   "sma200": 135.73,
   "rsi": 47.5,
   "adx": 30.2,
   "bar": "2026-10-14",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 66.55,
   "ivr": 18.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.15,
    "mid": 2.86,
    "roc": 23.5,
    "capital": 12000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 18.0 not above 30",
    "RSI 47.5 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.15,
    "mid": 2.12,
    "roc": 17.8,
    "capital": 14526
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 18.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 8.5,
   "sma50": 10.99,
   "sma200": 10.97,
   "rsi": 26.4,
   "adx": 19.4,
   "bar": "2026-10-14",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 82.23,
   "ivr": 10.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 7.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.17,
    "mid": 0.21,
    "roc": 35.6,
    "capital": 700
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25",
    "IV rank 10.4 not above 30"
   ],
   "call": {
    "strike": 11.5,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 21.5,
    "capital": 850
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25",
    "IV rank 10.4 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 102.81,
   "sma50": 108.28,
   "sma200": 93.92,
   "rsi": 38.9,
   "adx": 12.6,
   "bar": "2026-10-14",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 63.97,
   "ivr": 36.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 90.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.19,
    "mid": 2.13,
    "roc": 28.8,
    "capital": 9000
   },
   "putFails": [
    "ADX 12.6 not above 25",
    "RSI 38.9 too high for a put"
   ],
   "call": {
    "strike": 130.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.15,
    "mid": 1.4,
    "roc": 16.6,
    "capital": 10281
   },
   "callFails": [
    "ADX 12.6 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 570.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.29,
   "mid": 7.93,
   "roc": 17.9,
   "capital": 53830,
   "ivr": 45.3,
   "rsi": 66.1,
   "adx": 40.7,
   "price": 538.3,
   "sma50": 504.0,
   "sma200": 434.81
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 840.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.2,
   "mid": 9.68,
   "roc": 15.8,
   "capital": 74319,
   "ivr": 62.0,
   "rsi": 59.7,
   "adx": 37.1,
   "price": 743.19,
   "sma50": 650.01,
   "sma200": 631.4
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 250.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.16,
   "mid": 2.58,
   "roc": 15.3,
   "capital": 20540,
   "ivr": 55.9,
   "rsi": 69.8,
   "adx": 38.2,
   "price": 205.4,
   "sma50": 181.21,
   "sma200": 152.56
  }
 ],
 "errors": []
};
