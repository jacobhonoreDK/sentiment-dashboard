window.SCANNER_DATA = {
 "generatedAt": "2026-11-13T16:26:13Z",
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
   "price": 159.96,
   "sma50": 214.59,
   "sma200": 204.18,
   "rsi": 24.0,
   "adx": 41.5,
   "bar": "2026-11-13",
   "peg": 0.21,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 61.95,
   "ivr": 92.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 134.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.16,
    "mid": 3.05,
    "roc": 23.7,
    "capital": 13400
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 194.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.17,
    "mid": 2.34,
    "roc": 15.3,
    "capital": 15996
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 526.29,
   "sma50": 554.4,
   "sma200": 423.08,
   "rsi": 49.4,
   "adx": 19.7,
   "bar": "2026-11-13",
   "peg": 0.5,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 69.1,
   "ivr": 49.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 430.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.15,
    "mid": 10.6,
    "roc": 25.7,
    "capital": 43000
   },
   "putFails": [
    "ADX 19.7 not above 25",
    "RSI 49.4 too high for a put"
   ],
   "call": {
    "strike": 670.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.15,
    "mid": 7.8,
    "roc": 15.5,
    "capital": 52629
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 522.29,
   "sma50": 518.97,
   "sma200": 441.41,
   "rsi": 48.2,
   "adx": 17.0,
   "bar": "2026-11-13",
   "peg": 1.54,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 28.25,
   "ivr": 38.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 490.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.23,
    "mid": 7.15,
    "roc": 15.2,
    "capital": 49000
   },
   "putFails": [
    "ADX 17.0 not above 25",
    "RSI 48.2 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": 0.29,
    "mid": 8.15,
    "roc": 13.9,
    "capital": 52229
   },
   "callFails": [
    "ADX 17.0 not above 25",
    "best ROC 13.9% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 631.52,
   "sma50": 679.6,
   "sma200": 630.72,
   "rsi": 44.7,
   "adx": 24.4,
   "bar": "2026-11-13",
   "peg": 0.82,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 39.57,
   "ivr": 47.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 565.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.17,
    "mid": 8.15,
    "roc": 15.0,
    "capital": 56500
   },
   "putFails": [
    "ADX 24.4 not above 25",
    "RSI 44.7 too high for a put"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.23,
    "mid": 9.32,
    "roc": 15.4,
    "capital": 63152
   },
   "callFails": [
    "ADX 24.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 294.52,
   "sma50": 328.16,
   "sma200": 338.47,
   "rsi": 39.9,
   "adx": 26.6,
   "bar": "2026-11-13",
   "peg": 1.04,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 33.12,
   "ivr": 49.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 275.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.23,
    "mid": 4.53,
    "roc": 17.2,
    "capital": 27500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 39.9 too high for a put"
   ],
   "call": {
    "strike": 315.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.29,
    "mid": 5.2,
    "roc": 18.4,
    "capital": 29452
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 265.04,
   "sma50": 254.78,
   "sma200": 244.59,
   "rsi": 55.9,
   "adx": 12.9,
   "bar": "2026-11-13",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 33.14,
   "ivr": 34.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 245.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.21,
    "mid": 3.77,
    "roc": 16.1,
    "capital": 24500
   },
   "putFails": [
    "ADX 12.9 not above 25",
    "next earnings date unavailable",
    "RSI 55.9 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.27,
    "mid": 4.12,
    "roc": 16.2,
    "capital": 26504
   },
   "callFails": [
    "ADX 12.9 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 389.21,
   "sma50": 374.72,
   "sma200": 382.73,
   "rsi": 53.1,
   "adx": 13.8,
   "bar": "2026-11-13",
   "peg": 4.56,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 46.44,
   "ivr": 46.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 335.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": -0.16,
    "mid": 6.15,
    "roc": 16.3,
    "capital": 33500
   },
   "putFails": [
    "ADX 13.8 not above 25",
    "PEG 4.56 outside 0 to 2.5",
    "RSI 53.1 too high for a put"
   ],
   "call": {
    "strike": 440.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.22,
    "mid": 6.25,
    "roc": 16.7,
    "capital": 38921
   },
   "callFails": [
    "ADX 13.8 not above 25",
    "PEG 4.56 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 167.12,
   "sma50": 184.77,
   "sma200": 153.72,
   "rsi": 38.9,
   "adx": 27.7,
   "bar": "2026-11-13",
   "peg": 1.41,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 50.78,
   "ivr": 32.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.17,
    "mid": 2.83,
    "roc": 20.4,
    "capital": 14500
   },
   "putFails": [
    "RSI 38.9 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": 0.21,
    "mid": 2.83,
    "roc": 15.1,
    "capital": 16712
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 221.2,
   "sma50": 244.81,
   "sma200": 173.02,
   "rsi": 39.7,
   "adx": 20.7,
   "bar": "2026-11-13",
   "peg": 5.91,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 73.86,
   "ivr": 88.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.15,
    "mid": 4.8,
    "roc": 27.8,
    "capital": 18000
   },
   "putFails": [
    "ADX 20.7 not above 25",
    "PEG 5.91 outside 0 to 2.5",
    "RSI 39.7 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.15,
    "mid": 3.38,
    "roc": 15.9,
    "capital": 22120
   },
   "callFails": [
    "ADX 20.7 not above 25",
    "PEG 5.91 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 126.94,
   "sma50": 170.37,
   "sma200": 174.05,
   "rsi": 32.1,
   "adx": 32.8,
   "bar": "2026-11-13",
   "peg": 0.62,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 69.18,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.16,
    "mid": 2.77,
    "roc": 27.5,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": 0.16,
    "mid": 2.23,
    "roc": 15.6,
    "capital": 12694
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 109.89,
   "sma50": 143.23,
   "sma200": 132.77,
   "rsi": 31.8,
   "adx": 19.8,
   "bar": "2026-11-13",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 77.1,
   "ivr": 19.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.28,
    "roc": 37.9,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.7 not above 30",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 145.0,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": 0.17,
    "mid": 2.06,
    "roc": 16.7,
    "capital": 10989
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.8 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 19.7 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.89,
   "sma50": 9.52,
   "sma200": 10.62,
   "rsi": 41.8,
   "adx": 32.8,
   "bar": "2026-11-13",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 96.69,
   "ivr": 37.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-24",
    "dte": 41,
    "delta": -0.2,
    "mid": 0.3,
    "roc": 49.4,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 41.8 too high for a put"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 20.4,
    "capital": 689
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 77.32,
   "sma50": 103.24,
   "sma200": 91.41,
   "rsi": 32.8,
   "adx": 29.7,
   "bar": "2026-11-13",
   "peg": 1.32,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 65.96,
   "ivr": 35.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-12",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": -0.17,
    "mid": 1.77,
    "roc": 28.3,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 95.0,
    "exp": "2026-12-18",
    "dte": 35,
    "delta": 0.19,
    "mid": 1.42,
    "roc": 19.2,
    "capital": 7732
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
   "exp": "2026-12-24",
   "dte": 41,
   "delta": 0.21,
   "mid": 2.83,
   "roc": 15.1,
   "capital": 16712,
   "ivr": 32.6,
   "rsi": 38.9,
   "adx": 27.7,
   "price": 167.12,
   "sma50": 184.77,
   "sma200": 153.72
  }
 ],
 "errors": []
};
