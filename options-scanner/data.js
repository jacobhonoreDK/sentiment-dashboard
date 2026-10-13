window.SCANNER_DATA = {
 "generatedAt": "2026-10-13T18:19:47Z",
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
   "price": 227.4,
   "sma50": 223.0,
   "sma200": 202.53,
   "rsi": 50.7,
   "adx": 16.1,
   "bar": "2026-10-13",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 31.72,
   "ivr": 9.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 210.0,
    "exp": "2026-11-27",
    "dte": 45,
    "delta": -0.24,
    "mid": 4.6,
    "roc": 17.8,
    "capital": 21000
   },
   "putFails": [
    "ADX 16.1 not above 25",
    "IV rank 9.0 not above 30",
    "RSI 50.7 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.3,
    "mid": 3.65,
    "roc": 18.9,
    "capital": 22740
   },
   "callFails": [
    "ADX 16.1 not above 25",
    "IV rank 9.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 598.15,
   "sma50": 533.55,
   "sma200": 389.13,
   "rsi": 54.0,
   "adx": 23.6,
   "bar": "2026-10-13",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 56.84,
   "ivr": 23.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 510.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.15,
    "mid": 8.88,
    "roc": 20.5,
    "capital": 51000
   },
   "putFails": [
    "ADX 23.6 not above 25",
    "IV rank 23.8 not above 30",
    "RSI 54.0 too high for a put"
   ],
   "call": {
    "strike": 715.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.17,
    "mid": 8.0,
    "roc": 15.7,
    "capital": 59815
   },
   "callFails": [
    "ADX 23.6 not above 25",
    "IV rank 23.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 546.39,
   "sma50": 503.15,
   "sma200": 434.57,
   "rsi": 71.8,
   "adx": 40.8,
   "bar": "2026-10-13",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 30.7,
   "ivr": 47.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 515.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.24,
    "mid": 7.12,
    "roc": 16.3,
    "capital": 51500
   },
   "putFails": [
    "RSI 71.8 too high for a put"
   ],
   "call": {
    "strike": 580.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.28,
    "mid": 7.92,
    "roc": 17.1,
    "capital": 54639
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 763.22,
   "sma50": 646.92,
   "sma200": 631.0,
   "rsi": 66.1,
   "adx": 36.7,
   "bar": "2026-10-13",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 44.2,
   "ivr": 64.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 675.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.16,
    "mid": 8.85,
    "roc": 15.4,
    "capital": 67500
   },
   "putFails": [
    "RSI 66.1 too high for a put"
   ],
   "call": {
    "strike": 860.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.21,
    "mid": 10.6,
    "roc": 16.4,
    "capital": 76322
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 354.34,
   "sma50": 345.8,
   "sma200": 340.42,
   "rsi": 58.7,
   "adx": 18.5,
   "bar": "2026-10-13",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.24,
   "ivr": 64.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.2,
    "mid": 4.4,
    "roc": 15.9,
    "capital": 32500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 58.7 too high for a put"
   ],
   "call": {
    "strike": 385.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.25,
    "mid": 5.42,
    "roc": 18.0,
    "capital": 35434
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 259.13,
   "sma50": 258.36,
   "sma200": 242.42,
   "rsi": 55.1,
   "adx": 15.3,
   "bar": "2026-10-13",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 39.82,
   "ivr": 58.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 235.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.18,
    "mid": 3.17,
    "roc": 15.9,
    "capital": 23500
   },
   "putFails": [
    "ADX 15.3 not above 25",
    "RSI 55.1 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.24,
    "mid": 3.95,
    "roc": 17.9,
    "capital": 25913
   },
   "callFails": [
    "ADX 15.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 373.86,
   "sma50": 357.12,
   "sma200": 389.51,
   "rsi": 53.6,
   "adx": 16.3,
   "bar": "2026-10-13",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.05,
   "ivr": 20.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 335.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.17,
    "mid": 4.47,
    "roc": 15.7,
    "capital": 33500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.3 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 20.8 not above 30",
    "RSI 53.6 too high for a put"
   ],
   "call": {
    "strike": 420.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.21,
    "mid": 5.25,
    "roc": 16.5,
    "capital": 37386
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.3 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 20.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 208.92,
   "sma50": 180.36,
   "sma200": 152.48,
   "rsi": 76.1,
   "adx": 37.0,
   "bar": "2026-10-13",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 57.6,
   "ivr": 51.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 177.5,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.16,
    "mid": 3.22,
    "roc": 21.4,
    "capital": 17750
   },
   "putFails": [
    "RSI 76.1 too high for a put"
   ],
   "call": {
    "strike": 250.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.16,
    "mid": 2.73,
    "roc": 15.4,
    "capital": 20892
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 262.14,
   "sma50": 231.34,
   "sma200": 158.75,
   "rsi": 56.3,
   "adx": 24.3,
   "bar": "2026-10-13",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 51.23,
   "ivr": 43.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-20",
    "dte": 38,
    "delta": -0.16,
    "mid": 4.08,
    "roc": 17.4,
    "capital": 22500
   },
   "putFails": [
    "ADX 24.3 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 56.3 too high for a put"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.19,
    "mid": 4.1,
    "roc": 18.4,
    "capital": 26214
   },
   "callFails": [
    "ADX 24.3 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 180.81,
   "sma50": 175.93,
   "sma200": 183.18,
   "rsi": 48.8,
   "adx": 18.6,
   "bar": "2026-10-13",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 65.65,
   "ivr": 38.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 150.0,
    "exp": "2026-11-20",
    "dte": 38,
    "delta": -0.16,
    "mid": 3.45,
    "roc": 22.1,
    "capital": 15000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.6 not above 25",
    "RSI 48.8 too high for a put"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.17,
    "mid": 3.05,
    "roc": 19.9,
    "capital": 18081
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 151.99,
   "sma50": 132.15,
   "sma200": 135.8,
   "rsi": 53.3,
   "adx": 32.2,
   "bar": "2026-10-13",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 67.02,
   "ivr": 14.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 125.0,
    "exp": "2026-11-20",
    "dte": 38,
    "delta": -0.16,
    "mid": 3.0,
    "roc": 23.0,
    "capital": 12500
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 14.6 not above 30",
    "RSI 53.3 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": 0.15,
    "mid": 2.33,
    "roc": 18.1,
    "capital": 15199
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 14.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 9.2,
   "sma50": 11.06,
   "sma200": 10.97,
   "rsi": 30.3,
   "adx": 18.2,
   "bar": "2026-10-13",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 78.22,
   "ivr": 3.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 7.5,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.16,
    "mid": 0.2,
    "roc": 31.4,
    "capital": 750
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "IV rank 3.3 not above 30"
   ],
   "call": {
    "strike": 13.0,
    "exp": "2026-11-27",
    "dte": 45,
    "delta": 0.15,
    "mid": 0.17,
    "roc": 15.4,
    "capital": 920
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "IV rank 3.3 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 110.91,
   "sma50": 108.1,
   "sma200": 94.0,
   "rsi": 48.7,
   "adx": 12.8,
   "bar": "2026-10-13",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 65.12,
   "ivr": 33.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 95.0,
    "exp": "2026-11-13",
    "dte": 31,
    "delta": -0.18,
    "mid": 2.23,
    "roc": 27.6,
    "capital": 9500
   },
   "putFails": [
    "ADX 12.8 not above 25",
    "RSI 48.7 too high for a put"
   ],
   "call": {
    "strike": 140.0,
    "exp": "2026-11-20",
    "dte": 38,
    "delta": 0.17,
    "mid": 1.89,
    "roc": 16.3,
    "capital": 11091
   },
   "callFails": [
    "ADX 12.8 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 580.0,
   "exp": "2026-11-13",
   "dte": 31,
   "delta": 0.28,
   "mid": 7.92,
   "roc": 17.1,
   "capital": 54639,
   "ivr": 47.5,
   "rsi": 71.8,
   "adx": 40.8,
   "price": 546.39,
   "sma50": 503.15,
   "sma200": 434.57
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 860.0,
   "exp": "2026-11-13",
   "dte": 31,
   "delta": 0.21,
   "mid": 10.6,
   "roc": 16.4,
   "capital": 76322,
   "ivr": 64.4,
   "rsi": 66.1,
   "adx": 36.7,
   "price": 763.22,
   "sma50": 646.92,
   "sma200": 631.0
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 250.0,
   "exp": "2026-11-13",
   "dte": 31,
   "delta": 0.16,
   "mid": 2.73,
   "roc": 15.4,
   "capital": 20892,
   "ivr": 51.0,
   "rsi": 76.1,
   "adx": 37.0,
   "price": 208.92,
   "sma50": 180.36,
   "sma200": 152.48
  }
 ],
 "errors": []
};
