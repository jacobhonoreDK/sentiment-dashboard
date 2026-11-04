window.SCANNER_DATA = {
 "generatedAt": "2026-11-04T13:52:55Z",
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
   "price": 206.69,
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
   "iv30": 46.36,
   "ivr": 71.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.86,
    "roc": 19.3,
    "capital": 18000
   },
   "putFails": [
    "ADX 22.1 not above 25",
    "RSI 39.2 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.22,
    "mid": 2.99,
    "roc": 17.6,
    "capital": 20669
   },
   "callFails": [
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 483.9,
   "sma50": 548.7,
   "sma200": 412.94,
   "rsi": 38.4,
   "adx": 22.3,
   "bar": "2026-11-03",
   "peg": 0.46,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 65.7,
   "ivr": 50.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 405.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.16,
    "mid": 8.77,
    "roc": 26.4,
    "capital": 40500
   },
   "putFails": [
    "ADX 22.3 not above 25",
    "RSI 38.4 too high for a put"
   ],
   "call": {
    "strike": 595.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.16,
    "mid": 6.7,
    "roc": 16.8,
    "capital": 48390
   },
   "callFails": [
    "ADX 22.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 520.99,
   "sma50": 514.06,
   "sma200": 438.48,
   "rsi": 49.4,
   "adx": 22.9,
   "bar": "2026-11-03",
   "peg": 1.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 28.45,
   "ivr": 38.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 490.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.23,
    "mid": 6.05,
    "roc": 15.0,
    "capital": 49000
   },
   "putFails": [
    "ADX 22.9 not above 25",
    "RSI 49.4 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.26,
    "mid": 6.5,
    "roc": 15.2,
    "capital": 52099
   },
   "callFails": [
    "ADX 22.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 621.03,
   "sma50": 672.36,
   "sma200": 632.04,
   "rsi": 37.0,
   "adx": 27.6,
   "bar": "2026-11-03",
   "peg": 0.79,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.39,
   "ivr": 49.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 560.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.18,
    "mid": 7.47,
    "roc": 16.2,
    "capital": 56000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 685.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.22,
    "mid": 8.07,
    "roc": 15.8,
    "capital": 62103
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 280.03,
   "sma50": 336.39,
   "sma200": 340.14,
   "rsi": 22.2,
   "adx": 30.1,
   "bar": "2026-11-03",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 30.99,
   "ivr": 41.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": -0.24,
    "mid": 4.75,
    "roc": 15.2,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.25,
    "mid": 3.5,
    "roc": 15.2,
    "capital": 28003
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
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
   "peg": 1.17,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.53,
   "ivr": 35.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.24,
    "mid": 3.42,
    "roc": 17.7,
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
    "dte": 37,
    "delta": 0.26,
    "mid": 3.85,
    "roc": 15.2,
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
   "peg": 4.71,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 44.12,
   "ivr": 35.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 345.0,
    "exp": "2026-12-11",
    "dte": 37,
    "delta": -0.15,
    "mid": 5.38,
    "roc": 15.4,
    "capital": 34500
   },
   "putFails": [
    "ADX 15.9 not above 25",
    "PEG 4.71 outside 0 to 2.5",
    "RSI 59.0 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.21,
    "mid": 5.55,
    "roc": 16.9,
    "capital": 39850
   },
   "callFails": [
    "ADX 15.9 not above 25",
    "PEG 4.71 outside 0 to 2.5"
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
   "peg": 1.62,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 51.7,
   "ivr": 38.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-11",
    "dte": 37,
    "delta": -0.16,
    "mid": 2.81,
    "roc": 18.5,
    "capital": 15000
   },
   "putFails": [
    "ADX 22.2 not above 25"
   ],
   "call": {
    "strike": 205.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.25,
    "roc": 15.6,
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
   "peg": 6.24,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 70.42,
   "ivr": 91.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": -0.15,
    "mid": 5.57,
    "roc": 23.7,
    "capital": 19500
   },
   "putFails": [
    "ADX 16.2 not above 25",
    "PEG 6.24 outside 0 to 2.5",
    "RSI 47.2 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": 0.19,
    "mid": 5.15,
    "roc": 17.5,
    "capital": 24468
   },
   "callFails": [
    "ADX 16.2 not above 25",
    "PEG 6.24 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 145.45,
   "sma50": 178.09,
   "sma200": 177.26,
   "rsi": 36.1,
   "adx": 26.6,
   "bar": "2026-11-03",
   "peg": 2.02,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.63,
   "ivr": 50.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.15,
    "mid": 2.7,
    "roc": 27.4,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": 0.16,
    "mid": 2.63,
    "roc": 15.0,
    "capital": 14545
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
   "iv30": 74.56,
   "ivr": 26.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.87,
    "roc": 31.7,
    "capital": 11000
   },
   "putFails": [
    "ADX 17.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.8 not above 30",
    "next earnings date unavailable",
    "RSI 44.4 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": 0.17,
    "mid": 2.91,
    "roc": 17.8,
    "capital": 13563
   },
   "callFails": [
    "ADX 17.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 26.8 not above 30",
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
   "iv30": 106.84,
   "ivr": 61.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": -0.17,
    "mid": 0.24,
    "roc": 54.2,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-12-18",
    "dte": 44,
    "delta": 0.16,
    "mid": 0.18,
    "roc": 20.9,
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
   "iv30": 64.74,
   "ivr": 37.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-03",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-11",
    "dte": 37,
    "delta": -0.15,
    "mid": 1.7,
    "roc": 24.0,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 105.0,
    "exp": "2026-12-04",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.19,
    "roc": 16.9,
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
