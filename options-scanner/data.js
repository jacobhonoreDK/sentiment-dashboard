window.SCANNER_DATA = {
 "generatedAt": "2026-11-12T11:14:49Z",
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
   "price": 173.73,
   "sma50": 217.12,
   "sma200": 204.47,
   "rsi": 28.7,
   "adx": 36.8,
   "bar": "2026-11-11",
   "peg": 0.21,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 55.29,
   "ivr": 92.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 146.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.15,
    "mid": 2.85,
    "roc": 19.8,
    "capital": 14600
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.22,
    "mid": 3.3,
    "roc": 19.3,
    "capital": 17373
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 552.9,
   "sma50": 550.43,
   "sma200": 420.05,
   "rsi": 53.6,
   "adx": 22.0,
   "bar": "2026-11-11",
   "peg": 0.46,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 62.09,
   "ivr": 51.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 460.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.16,
    "mid": 10.62,
    "roc": 23.4,
    "capital": 46000
   },
   "putFails": [
    "ADX 22.0 not above 25",
    "RSI 53.6 too high for a put"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.17,
    "mid": 8.78,
    "roc": 16.1,
    "capital": 55290
   },
   "callFails": [
    "ADX 22.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 521.13,
   "sma50": 518.2,
   "sma200": 440.76,
   "rsi": 47.7,
   "adx": 17.8,
   "bar": "2026-11-11",
   "peg": 1.58,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 27.28,
   "ivr": 35.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 495.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.27,
    "mid": 8.25,
    "roc": 16.9,
    "capital": 49500
   },
   "putFails": [
    "ADX 17.8 not above 25",
    "RSI 47.7 too high for a put"
   ],
   "call": {
    "strike": 550.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.28,
    "mid": 7.17,
    "roc": 14.0,
    "capital": 52113
   },
   "callFails": [
    "ADX 17.8 not above 25",
    "best ROC 14.0% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 628.77,
   "sma50": 678.57,
   "sma200": 631.48,
   "rsi": 43.4,
   "adx": 25.0,
   "bar": "2026-11-11",
   "peg": 0.83,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 38.49,
   "ivr": 50.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 565.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.18,
    "mid": 8.55,
    "roc": 15.3,
    "capital": 56500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 25.0 not above 25",
    "RSI 43.4 too high for a put"
   ],
   "call": {
    "strike": 695.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.23,
    "mid": 9.75,
    "roc": 15.7,
    "capital": 62877
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 25.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 293.45,
   "sma50": 329.89,
   "sma200": 338.88,
   "rsi": 38.0,
   "adx": 29.4,
   "bar": "2026-11-11",
   "peg": 1.02,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.17,
   "ivr": 46.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 275.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.24,
    "mid": 4.5,
    "roc": 16.6,
    "capital": 27500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 315.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.27,
    "mid": 4.47,
    "roc": 15.5,
    "capital": 29345
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 266.17,
   "sma50": 254.41,
   "sma200": 244.35,
   "rsi": 57.3,
   "adx": 13.1,
   "bar": "2026-11-11",
   "peg": 1.26,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 31.75,
   "ivr": 35.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.25,
    "mid": 4.53,
    "roc": 18.4,
    "capital": 25000
   },
   "putFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "RSI 57.3 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.28,
    "mid": 4.12,
    "roc": 15.7,
    "capital": 26617
   },
   "callFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 390.84,
   "sma50": 373.65,
   "sma200": 383.03,
   "rsi": 54.4,
   "adx": 15.0,
   "bar": "2026-11-11",
   "peg": 4.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 42.31,
   "ivr": 39.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 345.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.18,
    "mid": 5.78,
    "roc": 17.0,
    "capital": 34500
   },
   "putFails": [
    "ADX 15.0 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "RSI 54.4 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.23,
    "mid": 6.38,
    "roc": 16.5,
    "capital": 39084
   },
   "callFails": [
    "ADX 15.0 not above 25",
    "PEG 4.43 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 172.4,
   "sma50": 185.04,
   "sma200": 153.57,
   "rsi": 42.4,
   "adx": 27.7,
   "bar": "2026-11-11",
   "peg": 1.38,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 47.43,
   "ivr": 35.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.17,
    "mid": 2.79,
    "roc": 18.9,
    "capital": 15000
   },
   "putFails": [
    "RSI 42.4 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.23,
    "mid": 3.25,
    "roc": 19.1,
    "capital": 17240
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 229.06,
   "sma50": 244.16,
   "sma200": 171.91,
   "rsi": 43.3,
   "adx": 20.1,
   "bar": "2026-11-11",
   "peg": 5.83,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 71.28,
   "ivr": 91.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 190.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.17,
    "mid": 5.47,
    "roc": 29.2,
    "capital": 19000
   },
   "putFails": [
    "ADX 20.1 not above 25",
    "PEG 5.83 outside 0 to 2.5",
    "RSI 43.3 too high for a put"
   ],
   "call": {
    "strike": 287.5,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.17,
    "mid": 3.88,
    "roc": 17.2,
    "capital": 22906
   },
   "callFails": [
    "ADX 20.1 not above 25",
    "PEG 5.83 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 136.27,
   "sma50": 172.57,
   "sma200": 174.8,
   "rsi": 36.3,
   "adx": 31.2,
   "bar": "2026-11-11",
   "peg": 0.6,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 67.49,
   "ivr": 49.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 110.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.15,
    "mid": 2.92,
    "roc": 23.1,
    "capital": 11000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": 0.17,
    "mid": 2.48,
    "roc": 15.8,
    "capital": 13627
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 122.35,
   "sma50": 144.1,
   "sma200": 133.16,
   "rsi": 38.2,
   "adx": 17.2,
   "bar": "2026-11-11",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 73.91,
   "ivr": 24.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 100.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.18,
    "mid": 3.35,
    "roc": 34.0,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.1 not above 30",
    "next earnings date unavailable",
    "RSI 38.2 too high for a put"
   ],
   "call": {
    "strike": 160.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.02,
    "roc": 16.8,
    "capital": 12235
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
   "price": 7.66,
   "sma50": 9.68,
   "sma200": 10.65,
   "rsi": 47.9,
   "adx": 35.1,
   "bar": "2026-11-11",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 92.62,
   "ivr": 50.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 6.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": -0.18,
    "mid": 0.26,
    "roc": 43.1,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 47.9 too high for a put"
   ],
   "call": {
    "strike": 11.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 19.2,
    "capital": 766
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 84.58,
   "sma50": 104.7,
   "sma200": 91.64,
   "rsi": 39.1,
   "adx": 29.8,
   "bar": "2026-11-11",
   "peg": 1.32,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 63.15,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-10",
   "put": {
    "strike": 69.0,
    "exp": "2026-12-24",
    "dte": 42,
    "delta": -0.15,
    "mid": 1.67,
    "roc": 21.1,
    "capital": 6900
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 39.1 too high for a put"
   ],
   "call": {
    "strike": 105.0,
    "exp": "2026-12-18",
    "dte": 36,
    "delta": 0.17,
    "mid": 1.35,
    "roc": 16.2,
    "capital": 8458
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
   "exp": "2026-12-18",
   "dte": 36,
   "delta": 0.23,
   "mid": 3.25,
   "roc": 19.1,
   "capital": 17240,
   "ivr": 35.9,
   "rsi": 42.4,
   "adx": 27.7,
   "price": 172.4,
   "sma50": 185.04,
   "sma200": 153.57
  }
 ],
 "errors": []
};
