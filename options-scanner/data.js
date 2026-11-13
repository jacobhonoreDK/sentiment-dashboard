window.SCANNER_DATA = {
 "generatedAt": "2026-11-13T14:24:36Z",
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
   "price": 166.19,
   "sma50": 215.96,
   "sma200": 204.34,
   "rsi": 26.0,
   "adx": 39.5,
   "bar": "2026-11-12",
   "peg": 0.21,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 59.41,
   "ivr": 92.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 142.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.15,
    "mid": 2.82,
    "roc": 20.7,
    "capital": 14200
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 205.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": 0.18,
    "mid": 2.85,
    "roc": 15.3,
    "capital": 16619
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 585.3,
   "sma50": 552.99,
   "sma200": 421.71,
   "rsi": 57.5,
   "adx": 21.1,
   "bar": "2026-11-12",
   "peg": 0.5,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.35,
   "ivr": 49.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 500.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.23,
    "mid": 16.55,
    "roc": 34.5,
    "capital": 50000
   },
   "putFails": [
    "ADX 21.1 not above 25",
    "RSI 57.5 too high for a put"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.18,
    "mid": 11.25,
    "roc": 20.0,
    "capital": 58530
   },
   "callFails": [
    "ADX 21.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 523.0,
   "sma50": 518.72,
   "sma200": 440.97,
   "rsi": 48.4,
   "adx": 17.2,
   "bar": "2026-11-12",
   "peg": 1.54,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 28.37,
   "ivr": 38.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 495.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.29,
    "mid": 9.9,
    "roc": 20.9,
    "capital": 49500
   },
   "putFails": [
    "ADX 17.2 not above 25",
    "RSI 48.4 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.26,
    "mid": 6.5,
    "roc": 13.0,
    "capital": 52300
   },
   "callFails": [
    "ADX 17.2 not above 25",
    "best ROC 13.0% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 623.61,
   "sma50": 679.19,
   "sma200": 631.25,
   "rsi": 42.1,
   "adx": 24.9,
   "bar": "2026-11-12",
   "peg": 0.82,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 38.64,
   "ivr": 47.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 565.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.19,
    "mid": 8.55,
    "roc": 15.8,
    "capital": 56500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.9 not above 25",
    "RSI 42.1 too high for a put"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.24,
    "mid": 9.57,
    "roc": 16.0,
    "capital": 62361
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 298.7,
   "sma50": 329.12,
   "sma200": 338.69,
   "rsi": 42.3,
   "adx": 28.1,
   "bar": "2026-11-12",
   "peg": 1.04,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.18,
   "ivr": 49.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 42.3 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": {
    "strike": 330.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.23,
    "mid": 3.55,
    "roc": 12.4,
    "capital": 29870
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "best ROC 12.4% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 267.44,
   "sma50": 254.66,
   "sma200": 244.47,
   "rsi": 58.2,
   "adx": 13.2,
   "bar": "2026-11-12",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 32.48,
   "ivr": 34.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.22,
    "mid": 3.8,
    "roc": 15.9,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.2 not above 25",
    "next earnings date unavailable",
    "RSI 58.2 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.26,
    "mid": 4.1,
    "roc": 16.0,
    "capital": 26744
   },
   "callFails": [
    "ADX 13.2 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 397.45,
   "sma50": 374.46,
   "sma200": 382.86,
   "rsi": 56.5,
   "adx": 14.3,
   "bar": "2026-11-12",
   "peg": 4.56,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 45.22,
   "ivr": 46.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 350.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.16,
    "mid": 5.58,
    "roc": 16.6,
    "capital": 35000
   },
   "putFails": [
    "ADX 14.3 not above 25",
    "PEG 4.56 outside 0 to 2.5",
    "RSI 56.5 too high for a put"
   ],
   "call": {
    "strike": 450.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.24,
    "mid": 7.15,
    "roc": 18.8,
    "capital": 39745
   },
   "callFails": [
    "ADX 14.3 not above 25",
    "PEG 4.56 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 171.58,
   "sma50": 185.08,
   "sma200": 153.64,
   "rsi": 41.9,
   "adx": 27.5,
   "bar": "2026-11-12",
   "peg": 1.41,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 48.99,
   "ivr": 32.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.17,
    "mid": 2.66,
    "roc": 18.5,
    "capital": 15000
   },
   "putFails": [
    "RSI 41.9 too high for a put"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.19,
    "mid": 2.5,
    "roc": 15.2,
    "capital": 17158
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 229.87,
   "sma50": 244.69,
   "sma200": 172.47,
   "rsi": 43.8,
   "adx": 20.7,
   "bar": "2026-11-12",
   "peg": 5.91,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 72.4,
   "ivr": 88.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": -0.15,
    "mid": 5.5,
    "roc": 26.5,
    "capital": 18500
   },
   "putFails": [
    "ADX 20.7 not above 25",
    "PEG 5.91 outside 0 to 2.5",
    "RSI 43.8 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.17,
    "mid": 3.95,
    "roc": 17.9,
    "capital": 22987
   },
   "callFails": [
    "ADX 20.7 not above 25",
    "PEG 5.91 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 130.67,
   "sma50": 171.69,
   "sma200": 174.41,
   "rsi": 33.8,
   "adx": 31.8,
   "bar": "2026-11-12",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 68.2,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.2,
    "roc": 30.3,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": 0.16,
    "mid": 2.21,
    "roc": 15.0,
    "capital": 13067
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 114.41,
   "sma50": 143.93,
   "sma200": 132.94,
   "rsi": 33.9,
   "adx": 18.4,
   "bar": "2026-11-12",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 75.45,
   "ivr": 19.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": -0.16,
    "mid": 2.85,
    "roc": 28.2,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.4 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.7 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 150.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.16,
    "mid": 1.99,
    "roc": 18.1,
    "capital": 11441
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.4 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.7 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.2,
   "sma50": 9.61,
   "sma200": 10.63,
   "rsi": 44.1,
   "adx": 33.7,
   "bar": "2026-11-12",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 95.16,
   "ivr": 37.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": -0.17,
    "mid": 0.26,
    "roc": 41.3,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 44.1 too high for a put"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": 0.16,
    "mid": 0.17,
    "roc": 20.4,
    "capital": 720
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 81.35,
   "sma50": 104.19,
   "sma200": 91.53,
   "rsi": 36.2,
   "adx": 29.4,
   "bar": "2026-11-12",
   "peg": 1.37,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 66.41,
   "ivr": 35.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": {
    "strike": 95.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.25,
    "mid": 2.17,
    "roc": 27.9,
    "capital": 8135
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
   "strike": 200.0,
   "exp": "2026-12-18",
   "dte": 35,
   "delta": 0.19,
   "mid": 2.5,
   "roc": 15.2,
   "capital": 17158,
   "ivr": 32.6,
   "rsi": 41.9,
   "adx": 27.5,
   "price": 171.58,
   "sma50": 185.08,
   "sma200": 153.64
  }
 ],
 "errors": []
};
