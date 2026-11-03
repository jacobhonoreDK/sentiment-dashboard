window.SCANNER_DATA = {
 "generatedAt": "2026-11-03T21:00:29Z",
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
   "price": 206.72,
   "sma50": 221.46,
   "sma200": 204.56,
   "rsi": 39.2,
   "adx": 22.1,
   "bar": "2026-11-03",
   "peg": 0.25,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 46.3,
   "ivr": 76.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.86,
    "roc": 18.7,
    "capital": 18000
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 39.2 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.23,
    "mid": 3.1,
    "roc": 17.7,
    "capital": 20672
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 483.99,
   "sma50": 548.71,
   "sma200": 412.94,
   "rsi": 38.4,
   "adx": 22.3,
   "bar": "2026-11-03",
   "peg": 0.5,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 65.25,
   "ivr": 57.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 410.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 9.0,
    "roc": 25.8,
    "capital": 41000
   },
   "putFails": [
    "ADX 22.3 not above 25",
    "RSI 38.4 too high for a put"
   ],
   "call": {
    "strike": 600.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.15,
    "mid": 6.57,
    "roc": 16.0,
    "capital": 48399
   },
   "callFails": [
    "ADX 22.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 520.82,
   "sma50": 514.06,
   "sma200": 438.48,
   "rsi": 49.3,
   "adx": 22.9,
   "bar": "2026-11-03",
   "peg": 1.69,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 28.37,
   "ivr": 42.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 490.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.23,
    "mid": 6.3,
    "roc": 15.1,
    "capital": 49000
   },
   "putFails": [
    "ADX 22.9 not above 25",
    "RSI 49.3 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.3,
    "mid": 8.05,
    "roc": 14.8,
    "capital": 52082
   },
   "callFails": [
    "ADX 22.9 not above 25",
    "best ROC 14.8% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 620.91,
   "sma50": 672.36,
   "sma200": 632.04,
   "rsi": 37.0,
   "adx": 27.6,
   "bar": "2026-11-03",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.39,
   "ivr": 52.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 560.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.18,
    "mid": 7.9,
    "roc": 16.6,
    "capital": 56000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.23,
    "mid": 8.68,
    "roc": 16.5,
    "capital": 62091
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 279.89,
   "sma50": 336.39,
   "sma200": 340.14,
   "rsi": 22.0,
   "adx": 30.1,
   "bar": "2026-11-03",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.24,
   "ivr": 44.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.21,
    "mid": 3.38,
    "roc": 15.3,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": 0.29,
    "mid": 5.15,
    "roc": 14.9,
    "capital": 27989
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "best ROC 14.9% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 250.69,
   "sma50": 253.79,
   "sma200": 243.5,
   "rsi": 48.7,
   "adx": 15.0,
   "bar": "2026-11-03",
   "peg": 1.39,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.47,
   "ivr": 37.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.22,
    "mid": 3.55,
    "roc": 17.8,
    "capital": 23500
   },
   "putFails": [
    "ADX 15.0 not above 25",
    "next earnings date unavailable",
    "RSI 48.7 too high for a put"
   ],
   "call": {
    "strike": 270.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.28,
    "mid": 4.03,
    "roc": 15.4,
    "capital": 25069
   },
   "callFails": [
    "ADX 15.0 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 398.5,
   "sma50": 371.41,
   "sma200": 384.93,
   "rsi": 59.0,
   "adx": 15.9,
   "bar": "2026-11-03",
   "peg": 4.66,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 43.97,
   "ivr": 39.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 350.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 5.22,
    "roc": 17.6,
    "capital": 35000
   },
   "putFails": [
    "ADX 15.9 not above 25",
    "PEG 4.66 outside 0 to 2.5",
    "RSI 59.0 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.2,
    "mid": 5.17,
    "roc": 15.3,
    "capital": 39850
   },
   "callFails": [
    "ADX 15.9 not above 25",
    "PEG 4.66 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 175.4,
   "sma50": 186.86,
   "sma200": 153.6,
   "rsi": 35.8,
   "adx": 22.2,
   "bar": "2026-11-03",
   "peg": 1.67,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 51.81,
   "ivr": 94.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.16,
    "mid": 2.87,
    "roc": 18.3,
    "capital": 15000
   },
   "putFails": [
    "ADX 22.2 not above 25"
   ],
   "call": {
    "strike": 205.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.2,
    "mid": 2.9,
    "roc": 15.9,
    "capital": 17540
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 244.68,
   "sma50": 242.33,
   "sma200": 168.54,
   "rsi": 47.2,
   "adx": 16.2,
   "bar": "2026-11-03",
   "peg": 6.46,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 70.05,
   "ivr": 94.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": -0.15,
    "mid": 5.75,
    "roc": 23.9,
    "capital": 19500
   },
   "putFails": [
    "ADX 16.2 not above 25",
    "PEG 6.46 outside 0 to 2.5",
    "RSI 47.2 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-18",
    "dte": 45,
    "delta": 0.19,
    "mid": 5.1,
    "roc": 16.9,
    "capital": 24468
   },
   "callFails": [
    "ADX 16.2 not above 25",
    "PEG 6.46 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 145.56,
   "sma50": 178.09,
   "sma200": 177.26,
   "rsi": 36.1,
   "adx": 26.6,
   "bar": "2026-11-03",
   "peg": 2.02,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.94,
   "ivr": 54.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.15,
    "mid": 2.67,
    "roc": 26.1,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.3,
    "roc": 18.6,
    "capital": 14556
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 135.63,
   "sma50": 144.16,
   "sma200": 134.16,
   "rsi": 44.4,
   "adx": 17.2,
   "bar": "2026-11-03",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.62,
   "ivr": 30.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.93,
    "roc": 31.4,
    "capital": 11000
   },
   "putFails": [
    "ADX 17.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable",
    "RSI 44.4 too high for a put"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.17,
    "mid": 2.66,
    "roc": 18.8,
    "capital": 13563
   },
   "callFails": [
    "ADX 17.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.16,
   "sma50": 10.2,
   "sma200": 10.75,
   "rsi": 36.2,
   "adx": 36.5,
   "bar": "2026-11-03",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 106.93,
   "ivr": 60.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": -0.17,
    "mid": 0.26,
    "roc": 54.6,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": 0.17,
    "mid": 0.17,
    "roc": 23.5,
    "capital": 716
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 85.68,
   "sma50": 107.64,
   "sma200": 92.34,
   "rsi": 31.8,
   "adx": 28.3,
   "bar": "2026-11-03",
   "peg": 1.36,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 64.86,
   "ivr": 34.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-02",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-11",
    "dte": 38,
    "delta": -0.16,
    "mid": 1.75,
    "roc": 23.9,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 105.0,
    "exp": "2026-12-04",
    "dte": 31,
    "delta": 0.16,
    "mid": 1.16,
    "roc": 15.9,
    "capital": 8568
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
