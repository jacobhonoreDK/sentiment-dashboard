window.SCANNER_DATA = {
 "generatedAt": "2026-10-12T14:10:07Z",
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
   "price": 225.73,
   "sma50": 222.58,
   "sma200": 202.34,
   "rsi": 48.7,
   "adx": 17.0,
   "bar": "2026-10-12",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 29.75,
   "ivr": 5.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 215.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.25,
    "mid": 3.3,
    "roc": 17.5,
    "capital": 21500
   },
   "putFails": [
    "ADX 17.0 not above 25",
    "IV rank 5.5 not above 30",
    "RSI 48.7 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.29,
    "mid": 3.45,
    "roc": 17.4,
    "capital": 22573
   },
   "callFails": [
    "ADX 17.0 not above 25",
    "IV rank 5.5 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 591.97,
   "sma50": 531.24,
   "sma200": 387.2,
   "rsi": 52.4,
   "adx": 25.4,
   "bar": "2026-10-12",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 53.54,
   "ivr": 26.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 515.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.16,
    "mid": 8.62,
    "roc": 19.1,
    "capital": 51500
   },
   "putFails": [
    "IV rank 26.3 not above 30",
    "RSI 52.4 too high for a put"
   ],
   "call": {
    "strike": 705.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.17,
    "mid": 8.28,
    "roc": 15.9,
    "capital": 59197
   },
   "callFails": [
    "IV rank 26.3 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 538.65,
   "sma50": 501.93,
   "sma200": 434.26,
   "rsi": 68.9,
   "adx": 40.0,
   "bar": "2026-10-12",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.37,
   "ivr": 49.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 505.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.23,
    "mid": 7.07,
    "roc": 16.0,
    "capital": 50500
   },
   "putFails": [
    "RSI 68.9 too high for a put"
   ],
   "call": {
    "strike": 575.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.27,
    "mid": 7.8,
    "roc": 16.5,
    "capital": 53865
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 742.78,
   "sma50": 643.45,
   "sma200": 630.52,
   "rsi": 62.2,
   "adx": 36.1,
   "bar": "2026-10-12",
   "peg": 0.98,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 45.08,
   "ivr": 62.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 660.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.16,
    "mid": 8.9,
    "roc": 15.4,
    "capital": 66000
   },
   "putFails": [
    "RSI 62.2 too high for a put"
   ],
   "call": {
    "strike": 850.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.19,
    "mid": 9.82,
    "roc": 15.1,
    "capital": 74278
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 353.3,
   "sma50": 346.19,
   "sma200": 340.22,
   "rsi": 57.7,
   "adx": 17.3,
   "bar": "2026-10-12",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.65,
   "ivr": 60.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.2,
    "mid": 4.4,
    "roc": 15.4,
    "capital": 32500
   },
   "putFails": [
    "ADX 17.3 not above 25",
    "RSI 57.7 too high for a put"
   ],
   "call": {
    "strike": 385.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.24,
    "mid": 5.17,
    "roc": 16.7,
    "capital": 35330
   },
   "callFails": [
    "ADX 17.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 260.48,
   "sma50": 258.87,
   "sma200": 242.29,
   "rsi": 56.7,
   "adx": 14.0,
   "bar": "2026-10-12",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 39.27,
   "ivr": 59.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.21,
    "mid": 3.9,
    "roc": 18.5,
    "capital": 24000
   },
   "putFails": [
    "ADX 14.0 not above 25",
    "RSI 56.7 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.25,
    "mid": 4.28,
    "roc": 18.7,
    "capital": 26048
   },
   "callFails": [
    "ADX 14.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 379.33,
   "sma50": 356.11,
   "sma200": 390.07,
   "rsi": 57.3,
   "adx": 17.1,
   "bar": "2026-10-12",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 42.82,
   "ivr": 21.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 340.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.17,
    "mid": 4.58,
    "roc": 15.3,
    "capital": 34000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.1 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 21.2 not above 30",
    "RSI 57.3 too high for a put"
   ],
   "call": {
    "strike": 430.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.2,
    "mid": 5.0,
    "roc": 15.0,
    "capital": 37933
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.1 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 21.2 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 207.1,
   "sma50": 178.66,
   "sma200": 152.4,
   "rsi": 73.1,
   "adx": 35.1,
   "bar": "2026-10-12",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 56.5,
   "ivr": 51.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 180.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.5,
    "roc": 22.2,
    "capital": 18000
   },
   "putFails": [
    "RSI 73.1 too high for a put"
   ],
   "call": {
    "strike": 250.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.83,
    "roc": 15.6,
    "capital": 20710
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 266.6,
   "sma50": 230.22,
   "sma200": 158.05,
   "rsi": 59.0,
   "adx": 24.9,
   "bar": "2026-10-12",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 50.43,
   "ivr": 41.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": -0.16,
    "mid": 4.1,
    "roc": 16.7,
    "capital": 23000
   },
   "putFails": [
    "ADX 24.9 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 59.0 too high for a put"
   ],
   "call": {
    "strike": 310.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": 0.23,
    "mid": 5.5,
    "roc": 19.3,
    "capital": 26660
   },
   "callFails": [
    "ADX 24.9 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 183.49,
   "sma50": 175.31,
   "sma200": 183.49,
   "rsi": 50.4,
   "adx": 19.3,
   "bar": "2026-10-12",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 66.34,
   "ivr": 40.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 155.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": -0.19,
    "mid": 4.43,
    "roc": 26.7,
    "capital": 15500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.3 not above 25",
    "RSI 50.4 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": 0.19,
    "mid": 3.8,
    "roc": 19.4,
    "capital": 18349
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 157.75,
   "sma50": 131.11,
   "sma200": 135.86,
   "rsi": 57.7,
   "adx": 33.4,
   "bar": "2026-10-12",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 65.25,
   "ivr": 13.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 130.0,
    "exp": "2026-11-20",
    "dte": 39,
    "delta": -0.16,
    "mid": 3.22,
    "roc": 23.2,
    "capital": 13000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 13.9 not above 30",
    "RSI 57.7 too high for a put"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.15,
    "mid": 2.37,
    "roc": 17.1,
    "capital": 15775
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 13.9 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 9.62,
   "sma50": 11.12,
   "sma200": 10.98,
   "rsi": 32.9,
   "adx": 17.3,
   "bar": "2026-10-12",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 75.8,
   "ivr": 0.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 8.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.19,
    "mid": 0.25,
    "roc": 35.6,
    "capital": 800
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.3 not above 25",
    "IV rank 0.0 not above 30"
   ],
   "call": {
    "strike": 12.5,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.17,
    "mid": 0.18,
    "roc": 21.9,
    "capital": 962
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.3 not above 25",
    "IV rank 0.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 109.48,
   "sma50": 107.69,
   "sma200": 94.05,
   "rsi": 46.5,
   "adx": 13.2,
   "bar": "2026-10-12",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 63.06,
   "ivr": 29.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-09",
   "put": {
    "strike": 95.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": -0.2,
    "mid": 2.55,
    "roc": 30.7,
    "capital": 9500
   },
   "putFails": [
    "ADX 13.2 not above 25",
    "IV rank 29.2 not above 30",
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 135.0,
    "exp": "2026-11-13",
    "dte": 32,
    "delta": 0.16,
    "mid": 1.64,
    "roc": 17.0,
    "capital": 10948
   },
   "callFails": [
    "ADX 13.2 not above 25",
    "IV rank 29.2 not above 30"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 575.0,
   "exp": "2026-11-13",
   "dte": 32,
   "delta": 0.27,
   "mid": 7.8,
   "roc": 16.5,
   "capital": 53865,
   "ivr": 49.3,
   "rsi": 68.9,
   "adx": 40.0,
   "price": 538.65,
   "sma50": 501.93,
   "sma200": 434.26
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 250.0,
   "exp": "2026-11-13",
   "dte": 32,
   "delta": 0.17,
   "mid": 2.83,
   "roc": 15.6,
   "capital": 20710,
   "ivr": 51.0,
   "rsi": 73.1,
   "adx": 35.1,
   "price": 207.1,
   "sma50": 178.66,
   "sma200": 152.4
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 850.0,
   "exp": "2026-11-13",
   "dte": 32,
   "delta": 0.19,
   "mid": 9.82,
   "roc": 15.1,
   "capital": 74278,
   "ivr": 62.0,
   "rsi": 62.2,
   "adx": 36.1,
   "price": 742.78,
   "sma50": 643.45,
   "sma200": 630.52
  }
 ],
 "errors": []
};
