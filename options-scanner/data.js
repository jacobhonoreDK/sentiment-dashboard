window.SCANNER_DATA = {
 "generatedAt": "2026-10-16T01:22:32Z",
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
   "price": 217.23,
   "sma50": 223.17,
   "sma200": 202.84,
   "rsi": 40.2,
   "adx": 16.5,
   "bar": "2026-10-15",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 35.46,
   "ivr": 20.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.19,
    "mid": 3.47,
    "roc": 15.1,
    "capital": 19500
   },
   "putFails": [
    "ADX 16.5 not above 25",
    "IV rank 20.9 not above 30",
    "RSI 40.2 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": 0.24,
    "mid": 3.58,
    "roc": 14.0,
    "capital": 21723
   },
   "callFails": [
    "ADX 16.5 not above 25",
    "IV rank 20.9 not above 30",
    "best ROC 14.0% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 562.23,
   "sma50": 536.35,
   "sma200": 392.68,
   "rsi": 44.5,
   "adx": 22.2,
   "bar": "2026-10-15",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 58.26,
   "ivr": 35.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 470.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.15,
    "mid": 9.15,
    "roc": 16.5,
    "capital": 47000
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "RSI 44.5 too high for a put"
   ],
   "call": {
    "strike": 670.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.19,
    "mid": 9.45,
    "roc": 17.0,
    "capital": 56223
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 539.44,
   "sma50": 504.95,
   "sma200": 435.04,
   "rsi": 65.0,
   "adx": 39.3,
   "bar": "2026-10-15",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 30.87,
   "ivr": 47.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 505.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.23,
    "mid": 7.6,
    "roc": 15.3,
    "capital": 50500
   },
   "putFails": [
    "RSI 65.0 too high for a put"
   ],
   "call": {
    "strike": 575.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.27,
    "mid": 7.95,
    "roc": 14.9,
    "capital": 53944
   },
   "callFails": [
    "best ROC 14.9% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": null,
   "sma50": null,
   "sma200": null,
   "rsi": 58.1,
   "adx": 36.1,
   "bar": "2026-10-15",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 42.98,
   "ivr": 61.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": null,
   "putFails": [
    "price or 200-day SMA unavailable",
    "RSI 58.1 too high for a put"
   ],
   "call": null,
   "callFails": [
    "price or 200-day SMA unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 349.22,
   "sma50": 344.92,
   "sma200": 340.77,
   "rsi": 52.8,
   "adx": 17.7,
   "bar": "2026-10-15",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.92,
   "ivr": 70.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 320.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.2,
    "mid": 4.78,
    "roc": 15.1,
    "capital": 32000
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "RSI 52.8 too high for a put"
   ],
   "call": {
    "strike": 380.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.25,
    "mid": 5.65,
    "roc": 16.4,
    "capital": 34922
   },
   "callFails": [
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 254.76,
   "sma50": 257.52,
   "sma200": 242.64,
   "rsi": 50.1,
   "adx": 13.8,
   "bar": "2026-10-15",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 39.48,
   "ivr": 63.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.18,
    "mid": 3.4,
    "roc": 15.0,
    "capital": 23000
   },
   "putFails": [
    "ADX 13.8 not above 25",
    "RSI 50.1 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.24,
    "mid": 4.08,
    "roc": 16.2,
    "capital": 25476
   },
   "callFails": [
    "ADX 13.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 362.44,
   "sma50": 358.76,
   "sma200": 388.49,
   "rsi": 46.5,
   "adx": 15.0,
   "bar": "2026-10-15",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.32,
   "ivr": 27.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 320.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.16,
    "mid": 4.78,
    "roc": 15.1,
    "capital": 32000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 27.6 not above 30",
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.22,
    "mid": 5.85,
    "roc": 16.4,
    "capital": 36244
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 27.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": null,
   "sma50": null,
   "sma200": null,
   "rsi": 63.3,
   "adx": 35.7,
   "bar": "2026-10-15",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 60.9,
   "ivr": 63.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": null,
   "putFails": [
    "price or 200-day SMA unavailable",
    "RSI 63.3 too high for a put"
   ],
   "call": null,
   "callFails": [
    "price or 200-day SMA unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": null,
   "sma50": null,
   "sma200": null,
   "rsi": 49.0,
   "adx": 21.8,
   "bar": "2026-10-15",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 51.81,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": null,
   "putFails": [
    "price or 200-day SMA unavailable",
    "ADX 21.8 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 49.0 too high for a put"
   ],
   "call": null,
   "callFails": [
    "price or 200-day SMA unavailable",
    "ADX 21.8 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": null,
   "sma50": null,
   "sma200": null,
   "rsi": 43.9,
   "adx": 17.3,
   "bar": "2026-10-15",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.32,
   "ivr": 49.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": null,
   "putFails": [
    "price or 200-day SMA unavailable",
    "ADX 17.3 not above 25",
    "RSI 43.9 too high for a put"
   ],
   "call": null,
   "callFails": [
    "price or 200-day SMA unavailable",
    "ADX 17.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 151.29,
   "sma50": 134.12,
   "sma200": 135.7,
   "rsi": 52.4,
   "adx": 28.7,
   "bar": "2026-10-15",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.68,
   "ivr": 22.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 125.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.25,
    "roc": 26.4,
    "capital": 12500
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.7 not above 30",
    "RSI 52.4 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.62,
    "roc": 17.5,
    "capital": 15129
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.7 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": null,
   "sma50": null,
   "sma200": null,
   "rsi": 25.1,
   "adx": 21.3,
   "bar": "2026-10-15",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 89.51,
   "ivr": 25.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": null,
   "putFails": [
    "price or 200-day SMA unavailable",
    "ADX 21.3 not above 25",
    "IV rank 25.3 not above 30"
   ],
   "call": null,
   "callFails": [
    "price or 200-day SMA unavailable",
    "ADX 21.3 not above 25",
    "IV rank 25.3 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": null,
   "sma50": null,
   "sma200": null,
   "rsi": 37.3,
   "adx": 14.0,
   "bar": "2026-10-15",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.32,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": null,
   "putFails": [
    "price or 200-day SMA unavailable",
    "ADX 14.0 not above 25"
   ],
   "call": null,
   "callFails": [
    "price or 200-day SMA unavailable",
    "ADX 14.0 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
