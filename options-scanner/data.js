window.SCANNER_DATA = {
 "generatedAt": "2026-11-18T13:53:37Z",
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
   "price": 155.46,
   "sma50": 211.76,
   "sma200": 203.87,
   "rsi": 22.5,
   "adx": 45.4,
   "bar": "2026-11-17",
   "peg": 0.19,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 65.55,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 503.41,
   "sma50": 555.04,
   "sma200": 425.74,
   "rsi": 46.6,
   "adx": 18.4,
   "bar": "2026-11-17",
   "peg": 0.45,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 77.45,
   "ivr": 78.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 400.0,
    "exp": "2026-12-24",
    "dte": 36,
    "delta": -0.16,
    "mid": 12.6,
    "roc": 31.9,
    "capital": 40000
   },
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 46.6 too high for a put"
   ],
   "call": {
    "strike": 640.0,
    "exp": "2026-12-24",
    "dte": 36,
    "delta": 0.16,
    "mid": 8.0,
    "roc": 16.1,
    "capital": 50341
   },
   "callFails": [
    "ADX 18.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 506.24,
   "sma50": 519.61,
   "sma200": 442.27,
   "rsi": 41.9,
   "adx": 17.7,
   "bar": "2026-11-17",
   "peg": 1.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 34.37,
   "ivr": 57.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 460.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.19,
    "mid": 6.4,
    "roc": 16.9,
    "capital": 46000
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "RSI 41.9 too high for a put"
   ],
   "call": {
    "strike": 540.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.26,
    "mid": 6.72,
    "roc": 16.2,
    "capital": 50624
   },
   "callFails": [
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 618.87,
   "sma50": 680.11,
   "sma200": 629.88,
   "rsi": 42.0,
   "adx": 23.3,
   "bar": "2026-11-17",
   "peg": 0.81,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 44.27,
   "ivr": 63.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 540.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.15,
    "mid": 7.25,
    "roc": 16.3,
    "capital": 54000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.3 not above 25",
    "RSI 42.0 too high for a put"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.21,
    "mid": 8.1,
    "roc": 15.9,
    "capital": 61887
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 280.2,
   "sma50": 325.93,
   "sma200": 337.89,
   "rsi": 32.9,
   "adx": 25.9,
   "bar": "2026-11-17",
   "peg": 0.99,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.34,
   "ivr": 74.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.16,
    "mid": 3.2,
    "roc": 15.6,
    "capital": 25000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.23,
    "mid": 3.5,
    "roc": 15.2,
    "capital": 28020
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 257.89,
   "sma50": 254.81,
   "sma200": 244.76,
   "rsi": 49.7,
   "adx": 11.8,
   "bar": "2026-11-17",
   "peg": 1.2,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.78,
   "ivr": 52.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 230.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.98,
    "roc": 15.7,
    "capital": 23000
   },
   "putFails": [
    "ADX 11.8 not above 25",
    "next earnings date unavailable",
    "RSI 49.7 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.24,
    "mid": 3.45,
    "roc": 16.3,
    "capital": 25789
   },
   "callFails": [
    "ADX 11.8 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 380.11,
   "sma50": 375.49,
   "sma200": 382.27,
   "rsi": 49.6,
   "adx": 12.2,
   "bar": "2026-11-17",
   "peg": 4.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 51.21,
   "ivr": 76.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 325.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.16,
    "mid": 5.78,
    "roc": 21.6,
    "capital": 32500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.2 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "RSI 49.6 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.19,
    "mid": 5.05,
    "roc": 16.2,
    "capital": 38011
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 12.2 not above 25",
    "PEG 4.43 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 156.56,
   "sma50": 184.24,
   "sma200": 153.84,
   "rsi": 32.8,
   "adx": 29.3,
   "bar": "2026-11-17",
   "peg": 1.27,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 58.09,
   "ivr": 61.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-24",
    "dte": 36,
    "delta": -0.15,
    "mid": 2.78,
    "roc": 21.7,
    "capital": 13000
   },
   "putFails": [],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-24",
    "dte": 36,
    "delta": 0.19,
    "mid": 2.46,
    "roc": 16.0,
    "capital": 15656
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 219.58,
   "sma50": 245.31,
   "sma200": 174.16,
   "rsi": 38.7,
   "adx": 21.2,
   "bar": "2026-11-17",
   "peg": 5.76,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 81.56,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 175.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.15,
    "mid": 4.97,
    "roc": 34.6,
    "capital": 17500
   },
   "putFails": [
    "ADX 21.2 not above 25",
    "PEG 5.76 outside 0 to 2.5",
    "RSI 38.7 too high for a put"
   ],
   "call": {
    "strike": 282.5,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.15,
    "mid": 3.72,
    "roc": 20.6,
    "capital": 21958
   },
   "callFails": [
    "ADX 21.2 not above 25",
    "PEG 5.76 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 115.02,
   "sma50": 167.81,
   "sma200": 173.31,
   "rsi": 27.4,
   "adx": 35.6,
   "bar": "2026-11-17",
   "peg": 0.55,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 74.43,
   "ivr": 59.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 95.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.17,
    "mid": 2.64,
    "roc": 33.8,
    "capital": 9500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 145.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.8,
    "roc": 19.0,
    "capital": 11502
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 96.5,
   "sma50": 141.67,
   "sma200": 132.33,
   "rsi": 26.2,
   "adx": 23.5,
   "bar": "2026-11-17",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 87.08,
   "ivr": 41.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 75.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.76,
    "roc": 44.9,
    "capital": 7500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.71,
    "roc": 21.6,
    "capital": 9650
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.42,
   "sma50": 9.32,
   "sma200": 10.59,
   "rsi": 38.2,
   "adx": 32.0,
   "bar": "2026-11-17",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 102.05,
   "ivr": 57.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": -0.18,
    "mid": 0.23,
    "roc": 56.0,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 38.2 too high for a put"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-12-31",
    "dte": 43,
    "delta": 0.15,
    "mid": 0.15,
    "roc": 19.2,
    "capital": 642
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 69.19,
   "sma50": 101.29,
   "sma200": 91.17,
   "rsi": 27.2,
   "adx": 31.7,
   "bar": "2026-11-17",
   "peg": 1.17,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 73.68,
   "ivr": 56.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-17",
   "put": {
    "strike": 55.0,
    "exp": "2026-12-24",
    "dte": 36,
    "delta": -0.15,
    "mid": 1.65,
    "roc": 30.3,
    "capital": 5500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 85.0,
    "exp": "2026-12-18",
    "dte": 30,
    "delta": 0.18,
    "mid": 1.23,
    "roc": 21.6,
    "capital": 6919
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
   "strike": 130.0,
   "exp": "2026-12-24",
   "dte": 36,
   "delta": -0.15,
   "mid": 2.78,
   "roc": 21.7,
   "capital": 13000,
   "ivr": 61.0,
   "rsi": 32.8,
   "adx": 29.3,
   "price": 156.56,
   "sma50": 184.24,
   "sma200": 153.84
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 185.0,
   "exp": "2026-12-24",
   "dte": 36,
   "delta": 0.19,
   "mid": 2.46,
   "roc": 16.0,
   "capital": 15656,
   "ivr": 61.0,
   "rsi": 32.8,
   "adx": 29.3,
   "price": 156.56,
   "sma50": 184.24,
   "sma200": 153.84
  }
 ],
 "errors": []
};
