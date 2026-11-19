window.SCANNER_DATA = {
 "generatedAt": "2026-11-19T13:11:04Z",
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
   "price": 150.96,
   "sma50": 210.3,
   "sma200": 203.72,
   "rsi": 21.1,
   "adx": 47.0,
   "bar": "2026-11-18",
   "peg": 0.18,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 49.31,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": -0.16,
    "mid": 2.4,
    "roc": 16.0,
    "capital": 13000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.21,
    "mid": 2.46,
    "roc": 17.0,
    "capital": 15096
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 530.14,
   "sma50": 555.22,
   "sma200": 427.18,
   "rsi": 50.3,
   "adx": 17.6,
   "bar": "2026-11-18",
   "peg": 0.45,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 71.33,
   "ivr": 78.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 425.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.15,
    "mid": 11.9,
    "roc": 29.2,
    "capital": 42500
   },
   "putFails": [
    "ADX 17.6 not above 25",
    "RSI 50.3 too high for a put"
   ],
   "call": {
    "strike": 665.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.16,
    "mid": 7.72,
    "roc": 15.2,
    "capital": 53014
   },
   "callFails": [
    "ADX 17.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 508.29,
   "sma50": 519.94,
   "sma200": 442.76,
   "rsi": 42.9,
   "adx": 18.5,
   "bar": "2026-11-18",
   "peg": 1.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 32.37,
   "ivr": 57.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 470.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.22,
    "mid": 7.5,
    "roc": 16.6,
    "capital": 47000
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 42.9 too high for a put"
   ],
   "call": {
    "strike": 540.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.28,
    "mid": 7.55,
    "roc": 15.5,
    "capital": 50829
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 616.38,
   "sma50": 679.36,
   "sma200": 629.5,
   "rsi": 41.4,
   "adx": 23.1,
   "bar": "2026-11-18",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 40.62,
   "ivr": 63.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 550.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.18,
    "mid": 8.57,
    "roc": 16.3,
    "capital": 55000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.1 not above 25",
    "RSI 41.4 too high for a put"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.23,
    "mid": 9.65,
    "roc": 16.3,
    "capital": 61638
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 282.44,
   "sma50": 324.96,
   "sma200": 337.61,
   "rsi": 34.9,
   "adx": 25.7,
   "bar": "2026-11-18",
   "peg": 1.0,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 35.09,
   "ivr": 74.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.22,
    "mid": 4.8,
    "roc": 19.3,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.28,
    "mid": 4.6,
    "roc": 14.2,
    "capital": 28244
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "best ROC 14.2% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 267.74,
   "sma50": 255.12,
   "sma200": 244.91,
   "rsi": 57.2,
   "adx": 11.4,
   "bar": "2026-11-18",
   "peg": 1.2,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 35.91,
   "ivr": 52.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 245.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.21,
    "mid": 4.05,
    "roc": 17.2,
    "capital": 24500
   },
   "putFails": [
    "ADX 11.4 not above 25",
    "next earnings date unavailable",
    "RSI 57.2 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.25,
    "mid": 3.9,
    "roc": 15.2,
    "capital": 26774
   },
   "callFails": [
    "ADX 11.4 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 383.72,
   "sma50": 375.81,
   "sma200": 382.08,
   "rsi": 51.1,
   "adx": 11.5,
   "bar": "2026-11-18",
   "peg": 4.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 48.46,
   "ivr": 76.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 330.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.16,
    "mid": 5.92,
    "roc": 18.7,
    "capital": 33000
   },
   "putFails": [
    "ADX 11.5 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "RSI 51.1 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.21,
    "mid": 6.08,
    "roc": 16.5,
    "capital": 38372
   },
   "callFails": [
    "ADX 11.5 not above 25",
    "PEG 4.43 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 156.67,
   "sma50": 183.98,
   "sma200": 153.83,
   "rsi": 33.0,
   "adx": 30.3,
   "bar": "2026-11-18",
   "peg": 1.24,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 55.44,
   "ivr": 61.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": -0.15,
    "mid": 2.73,
    "roc": 18.2,
    "capital": 13000
   },
   "putFails": [],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.22,
    "mid": 2.97,
    "roc": 19.8,
    "capital": 15667
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 237.03,
   "sma50": 245.9,
   "sma200": 174.82,
   "rsi": 50.0,
   "adx": 20.1,
   "bar": "2026-11-18",
   "peg": 5.67,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 78.48,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 190.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.16,
    "mid": 5.17,
    "roc": 28.4,
    "capital": 19000
   },
   "putFails": [
    "ADX 20.1 not above 25",
    "PEG 5.67 outside 0 to 2.5",
    "RSI 50.0 too high for a put"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.2,
    "mid": 5.9,
    "roc": 21.6,
    "capital": 23703
   },
   "callFails": [
    "ADX 20.1 not above 25",
    "PEG 5.67 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 110.51,
   "sma50": 166.53,
   "sma200": 172.97,
   "rsi": 25.8,
   "adx": 37.2,
   "bar": "2026-11-18",
   "peg": 0.53,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.09,
   "ivr": 59.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": -0.18,
    "mid": 3.16,
    "roc": 30.5,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 135.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.24,
    "mid": 3.5,
    "roc": 27.5,
    "capital": 11051
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 90.32,
   "sma50": 140.82,
   "sma200": 132.12,
   "rsi": 24.0,
   "adx": 25.7,
   "bar": "2026-11-18",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 90.08,
   "ivr": 41.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 70.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.17,
    "mid": 2.87,
    "roc": 42.7,
    "capital": 7000
   },
   "putFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.16,
    "mid": 1.8,
    "roc": 17.3,
    "capital": 9032
   },
   "callFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.56,
   "sma50": 9.21,
   "sma200": 10.58,
   "rsi": 39.9,
   "adx": 31.7,
   "bar": "2026-11-18",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 98.58,
   "ivr": 57.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.16,
    "mid": 0.23,
    "roc": 46.9,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 39.9 too high for a put"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 20.5,
    "capital": 656
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 69.17,
   "sma50": 100.37,
   "sma200": 91.08,
   "rsi": 27.2,
   "adx": 32.8,
   "bar": "2026-11-18",
   "peg": 1.12,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 70.94,
   "ivr": 56.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 55.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": -0.15,
    "mid": 1.62,
    "roc": 25.6,
    "capital": 5500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 85.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.19,
    "mid": 1.28,
    "roc": 19.4,
    "capital": 6917
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
   "strike": 180.0,
   "exp": "2026-12-24",
   "dte": 35,
   "delta": 0.22,
   "mid": 2.97,
   "roc": 19.8,
   "capital": 15667,
   "ivr": 61.0,
   "rsi": 33.0,
   "adx": 30.3,
   "price": 156.67,
   "sma50": 183.98,
   "sma200": 153.83
  },
  {
   "ticker": "PLTR",
   "strategy": "Cash-Secured Put",
   "strike": 130.0,
   "exp": "2026-12-31",
   "dte": 42,
   "delta": -0.15,
   "mid": 2.73,
   "roc": 18.2,
   "capital": 13000,
   "ivr": 61.0,
   "rsi": 33.0,
   "adx": 30.3,
   "price": 156.67,
   "sma50": 183.98,
   "sma200": 153.83
  }
 ],
 "errors": []
};
