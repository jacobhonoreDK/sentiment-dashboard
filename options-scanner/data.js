window.SCANNER_DATA = {
 "generatedAt": "2026-11-09T06:33:35Z",
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
   "price": 186.64,
   "sma50": 219.81,
   "sma200": 204.67,
   "rsi": 30.8,
   "adx": 28.9,
   "bar": "2026-11-06",
   "peg": 0.23,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 57.28,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 155.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.15,
    "mid": 3.35,
    "roc": 24.7,
    "capital": 15500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 218.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": 0.2,
    "mid": 3.12,
    "roc": 15.7,
    "capital": 18664
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 449.04,
   "sma50": 546.81,
   "sma200": 415.98,
   "rsi": 38.4,
   "adx": 25.4,
   "bar": "2026-11-06",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 69.07,
   "ivr": 67.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 360.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.15,
    "mid": 10.03,
    "roc": 31.8,
    "capital": 36000
   },
   "putFails": [
    "RSI 38.4 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.15,
    "mid": 6.08,
    "roc": 15.4,
    "capital": 44904
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "MSFT",
   "price": 530.61,
   "sma50": 516.65,
   "sma200": 439.85,
   "rsi": 52.1,
   "adx": 20.4,
   "bar": "2026-11-06",
   "peg": 1.57,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 29.57,
   "ivr": 47.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 490.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.22,
    "mid": 7.9,
    "roc": 15.1,
    "capital": 49000
   },
   "putFails": [
    "ADX 20.4 not above 25",
    "RSI 52.1 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.29,
    "mid": 8.02,
    "roc": 17.3,
    "capital": 53061
   },
   "callFails": [
    "ADX 20.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 610.15,
   "sma50": 674.92,
   "sma200": 631.94,
   "rsi": 36.7,
   "adx": 27.0,
   "bar": "2026-11-06",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 41.86,
   "ivr": 64.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 535.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.16,
    "mid": 7.83,
    "roc": 16.7,
    "capital": 53500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.22,
    "mid": 8.62,
    "roc": 16.1,
    "capital": 61015
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 284.78,
   "sma50": 332.93,
   "sma200": 339.51,
   "rsi": 29.9,
   "adx": 30.7,
   "bar": "2026-11-06",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 33.83,
   "ivr": 65.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.2,
    "mid": 3.85,
    "roc": 16.9,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-24",
    "dte": 45,
    "delta": 0.27,
    "mid": 5.38,
    "roc": 15.3,
    "capital": 28478
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 259.3,
   "sma50": 253.95,
   "sma200": 243.94,
   "rsi": 54.2,
   "adx": 13.1,
   "bar": "2026-11-06",
   "peg": 1.2,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 34.97,
   "ivr": 53.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.21,
    "mid": 4.3,
    "roc": 17.1,
    "capital": 23500
   },
   "putFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "RSI 54.2 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.25,
    "mid": 3.7,
    "roc": 16.3,
    "capital": 25930
   },
   "callFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 358.22,
   "sma50": 372.14,
   "sma200": 383.87,
   "rsi": 42.4,
   "adx": 16.8,
   "bar": "2026-11-06",
   "peg": 4.18,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 51.78,
   "ivr": 92.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 300.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.16,
    "mid": 6.65,
    "roc": 20.7,
    "capital": 30000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25",
    "PEG 4.18 outside 0 to 2.5",
    "RSI 42.4 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.2,
    "mid": 5.47,
    "roc": 17.4,
    "capital": 35822
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25",
    "PEG 4.18 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 160.38,
   "sma50": 185.88,
   "sma200": 153.53,
   "rsi": 31.2,
   "adx": 27.2,
   "bar": "2026-11-06",
   "peg": 1.31,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 55.42,
   "ivr": 58.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 135.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.82,
    "roc": 23.8,
    "capital": 13500
   },
   "putFails": [],
   "call": {
    "strike": 190.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": 0.19,
    "mid": 2.7,
    "roc": 15.8,
    "capital": 16038
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 216.9,
   "sma50": 243.78,
   "sma200": 170.24,
   "rsi": 35.3,
   "adx": 18.2,
   "bar": "2026-11-06",
   "peg": 5.6,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 74.35,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.15,
    "mid": 5.1,
    "roc": 28.1,
    "capital": 17000
   },
   "putFails": [
    "ADX 18.2 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": 0.16,
    "mid": 3.8,
    "roc": 16.4,
    "capital": 21690
   },
   "callFails": [
    "ADX 18.2 not above 25",
    "PEG 5.60 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 134.76,
   "sma50": 175.35,
   "sma200": 175.99,
   "rsi": 33.4,
   "adx": 29.0,
   "bar": "2026-11-06",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 69.23,
   "ivr": 55.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.95,
    "roc": 30.5,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.16,
    "mid": 2.2,
    "roc": 18.6,
    "capital": 13476
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 128.93,
   "sma50": 144.43,
   "sma200": 133.74,
   "rsi": 41.4,
   "adx": 16.0,
   "bar": "2026-11-06",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.52,
   "ivr": 28.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 100.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.15,
    "mid": 3.48,
    "roc": 32.5,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.3 not above 30",
    "next earnings date unavailable",
    "RSI 41.4 too high for a put"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.16,
    "mid": 2.23,
    "roc": 19.7,
    "capital": 12893
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.3 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.35,
   "sma50": 9.88,
   "sma200": 10.69,
   "rsi": 34.0,
   "adx": 38.7,
   "bar": "2026-11-06",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 108.92,
   "ivr": 76.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": -0.2,
    "mid": 0.3,
    "roc": 69.6,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 9.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.18,
    "mid": 0.17,
    "roc": 29.6,
    "capital": 635
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 80.91,
   "sma50": 105.97,
   "sma200": 91.99,
   "rsi": 32.0,
   "adx": 30.5,
   "bar": "2026-11-06",
   "peg": 1.31,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 67.34,
   "ivr": 55.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-18",
    "dte": 39,
    "delta": -0.16,
    "mid": 1.96,
    "roc": 28.3,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 101.0,
    "exp": "2026-12-11",
    "dte": 32,
    "delta": 0.15,
    "mid": 1.15,
    "roc": 16.2,
    "capital": 8091
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
   "strategy": "Cash-Secured Put",
   "strike": 135.0,
   "exp": "2026-12-11",
   "dte": 32,
   "delta": -0.16,
   "mid": 2.82,
   "roc": 23.8,
   "capital": 13500,
   "ivr": 58.6,
   "rsi": 31.2,
   "adx": 27.2,
   "price": 160.38,
   "sma50": 185.88,
   "sma200": 153.53
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 190.0,
   "exp": "2026-12-18",
   "dte": 39,
   "delta": 0.19,
   "mid": 2.7,
   "roc": 15.8,
   "capital": 16038,
   "ivr": 58.6,
   "rsi": 31.2,
   "adx": 27.2,
   "price": 160.38,
   "sma50": 185.88,
   "sma200": 153.53
  },
  {
   "ticker": "AMD",
   "strategy": "Covered Call",
   "strike": 560.0,
   "exp": "2026-12-11",
   "dte": 32,
   "delta": 0.15,
   "mid": 6.08,
   "roc": 15.4,
   "capital": 44904,
   "ivr": 67.5,
   "rsi": 38.4,
   "adx": 25.4,
   "price": 449.04,
   "sma50": 546.81,
   "sma200": 415.98
  }
 ],
 "errors": []
};
