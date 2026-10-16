window.SCANNER_DATA = {
 "generatedAt": "2026-10-16T17:26:04Z",
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
   "price": 215.18,
   "sma50": 223.1,
   "sma200": 202.98,
   "rsi": 38.4,
   "adx": 17.1,
   "bar": "2026-10-16",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 36.66,
   "ivr": 28.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 42,
    "delta": -0.21,
    "mid": 3.8,
    "roc": 16.9,
    "capital": 19500
   },
   "putFails": [
    "ADX 17.1 not above 25",
    "IV rank 28.5 not above 30",
    "RSI 38.4 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 42,
    "delta": 0.28,
    "mid": 4.22,
    "roc": 17.1,
    "capital": 21518
   },
   "callFails": [
    "ADX 17.1 not above 25",
    "IV rank 28.5 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 533.47,
   "sma50": 537.23,
   "sma200": 394.27,
   "rsi": 38.6,
   "adx": 22.1,
   "bar": "2026-10-16",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 58.35,
   "ivr": 35.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 455.0,
    "exp": "2026-11-27",
    "dte": 42,
    "delta": -0.16,
    "mid": 9.38,
    "roc": 17.9,
    "capital": 45500
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 38.6 too high for a put"
   ],
   "call": {
    "strike": 650.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.17,
    "mid": 7.9,
    "roc": 15.4,
    "capital": 53347
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 525.09,
   "sma50": 505.45,
   "sma200": 435.23,
   "rsi": 54.8,
   "adx": 37.7,
   "bar": "2026-10-16",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.57,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 490.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.23,
    "mid": 7.47,
    "roc": 15.9,
    "capital": 49000
   },
   "putFails": [
    "RSI 54.8 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.28,
    "mid": 8.22,
    "roc": 16.3,
    "capital": 52509
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 709.75,
   "sma50": 655.25,
   "sma200": 631.98,
   "rsi": 50.3,
   "adx": 34.8,
   "bar": "2026-10-16",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.55,
   "ivr": 60.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 635.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.17,
    "mid": 9.32,
    "roc": 15.3,
    "capital": 63500
   },
   "putFails": [
    "RSI 50.3 too high for a put"
   ],
   "call": {
    "strike": 805.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.21,
    "mid": 10.5,
    "roc": 15.4,
    "capital": 70975
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 341.35,
   "sma50": 344.6,
   "sma200": 340.9,
   "rsi": 45.1,
   "adx": 17.0,
   "bar": "2026-10-16",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.18,
   "ivr": 69.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 315.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.22,
    "mid": 5.53,
    "roc": 18.3,
    "capital": 31500
   },
   "putFails": [
    "ADX 17.0 not above 25",
    "RSI 45.1 too high for a put"
   ],
   "call": {
    "strike": 370.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.27,
    "mid": 5.75,
    "roc": 17.6,
    "capital": 34135
   },
   "callFails": [
    "ADX 17.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 249.65,
   "sma50": 257.07,
   "sma200": 242.73,
   "rsi": 44.7,
   "adx": 13.3,
   "bar": "2026-10-16",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.98,
   "ivr": 59.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.42,
    "roc": 15.9,
    "capital": 22500
   },
   "putFails": [
    "ADX 13.3 not above 25",
    "RSI 44.7 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.25,
    "mid": 4.15,
    "roc": 17.3,
    "capital": 24965
   },
   "callFails": [
    "ADX 13.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 351.57,
   "sma50": 359.4,
   "sma200": 387.98,
   "rsi": 40.7,
   "adx": 14.1,
   "bar": "2026-10-16",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 47.67,
   "ivr": 33.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 310.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.17,
    "mid": 5.03,
    "roc": 16.9,
    "capital": 31000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 14.1 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "RSI 40.7 too high for a put"
   ],
   "call": {
    "strike": 405.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.2,
    "mid": 5.1,
    "roc": 15.1,
    "capital": 35157
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
   "price": 185.23,
   "sma50": 182.55,
   "sma200": 152.64,
   "rsi": 45.6,
   "adx": 33.3,
   "bar": "2026-10-16",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.62,
   "ivr": 64.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 155.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.16,
    "mid": 3.53,
    "roc": 23.7,
    "capital": 15500
   },
   "putFails": [
    "RSI 45.6 too high for a put"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 42,
    "delta": 0.2,
    "mid": 3.62,
    "roc": 17.0,
    "capital": 18523
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 225.8,
   "sma50": 233.14,
   "sma200": 160.55,
   "rsi": 38.4,
   "adx": 22.2,
   "bar": "2026-10-16",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 56.09,
   "ivr": 47.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 192.5,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.16,
    "mid": 3.83,
    "roc": 20.7,
    "capital": 19250
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 38.4 too high for a put"
   ],
   "call": {
    "strike": 270.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.18,
    "mid": 3.4,
    "roc": 15.7,
    "capital": 22580
   },
   "callFails": [
    "ADX 22.2 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 175.37,
   "sma50": 177.67,
   "sma200": 182.33,
   "rsi": 46.2,
   "adx": 17.0,
   "bar": "2026-10-16",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.93,
   "ivr": 49.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.15,
    "mid": 3.27,
    "roc": 23.6,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25",
    "RSI 46.2 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 42,
    "delta": 0.16,
    "mid": 3.04,
    "roc": 15.1,
    "capital": 17537
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 136.91,
   "sma50": 134.92,
   "sma200": 135.61,
   "rsi": 42.7,
   "adx": 27.5,
   "bar": "2026-10-16",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.46,
   "ivr": 22.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 110.0,
    "exp": "2026-11-27",
    "dte": 42,
    "delta": -0.15,
    "mid": 3.02,
    "roc": 23.9,
    "capital": 11000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.8 not above 30",
    "RSI 42.7 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-11-27",
    "dte": 42,
    "delta": 0.16,
    "mid": 2.53,
    "roc": 16.1,
    "capital": 13691
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.68,
   "sma50": 10.87,
   "sma200": 10.95,
   "rsi": 23.5,
   "adx": 22.9,
   "bar": "2026-10-16",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 88.42,
   "ivr": 28.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.15,
    "mid": 0.2,
    "roc": 33.9,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 22.9 not above 25",
    "IV rank 28.9 not above 30"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.15,
    "mid": 0.15,
    "roc": 19.7,
    "capital": 768
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 22.9 not above 25",
    "IV rank 28.9 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 99.25,
   "sma50": 108.64,
   "sma200": 93.77,
   "rsi": 37.1,
   "adx": 14.9,
   "bar": "2026-10-16",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 67.98,
   "ivr": 40.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-15",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": -0.19,
    "mid": 2.54,
    "roc": 31.2,
    "capital": 8500
   },
   "putFails": [
    "ADX 14.9 not above 25"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-11-20",
    "dte": 35,
    "delta": 0.17,
    "mid": 1.64,
    "roc": 17.2,
    "capital": 9925
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
   "dte": 42,
   "delta": 0.2,
   "mid": 3.62,
   "roc": 17.0,
   "capital": 18523,
   "ivr": 64.1,
   "rsi": 45.6,
   "adx": 33.3,
   "price": 185.23,
   "sma50": 182.55,
   "sma200": 152.64
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 560.0,
   "exp": "2026-11-20",
   "dte": 35,
   "delta": 0.28,
   "mid": 8.22,
   "roc": 16.3,
   "capital": 52509,
   "ivr": 47.1,
   "rsi": 54.8,
   "adx": 37.7,
   "price": 525.09,
   "sma50": 505.45,
   "sma200": 435.23
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 805.0,
   "exp": "2026-11-20",
   "dte": 35,
   "delta": 0.21,
   "mid": 10.5,
   "roc": 15.4,
   "capital": 70975,
   "ivr": 60.3,
   "rsi": 50.3,
   "adx": 34.8,
   "price": 709.75,
   "sma50": 655.25,
   "sma200": 631.98
  }
 ],
 "errors": []
};
