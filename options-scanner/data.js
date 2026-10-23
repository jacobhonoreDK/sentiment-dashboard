window.SCANNER_DATA = {
 "generatedAt": "2026-10-23T15:06:14Z",
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
   "price": 212.79,
   "sma50": 222.52,
   "sma200": 203.67,
   "rsi": 39.8,
   "adx": 19.1,
   "bar": "2026-10-23",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.05,
   "ivr": 55.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.17,
    "roc": 17.4,
    "capital": 19000
   },
   "putFails": [
    "ADX 19.1 not above 25",
    "RSI 39.8 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.23,
    "mid": 3.22,
    "roc": 15.8,
    "capital": 21279
   },
   "callFails": [
    "ADX 19.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 519.53,
   "sma50": 542.33,
   "sma200": 402.1,
   "rsi": 39.7,
   "adx": 23.7,
   "bar": "2026-10-23",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 60.81,
   "ivr": 45.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 435.0,
    "exp": "2026-12-04",
    "dte": 42,
    "delta": -0.16,
    "mid": 11.07,
    "roc": 22.1,
    "capital": 43500
   },
   "putFails": [
    "ADX 23.7 not above 25",
    "RSI 39.7 too high for a put"
   ],
   "call": {
    "strike": 630.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.18,
    "mid": 7.95,
    "roc": 16.0,
    "capital": 51953
   },
   "callFails": [
    "ADX 23.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 525.12,
   "sma50": 508.44,
   "sma200": 436.52,
   "rsi": 53.0,
   "adx": 29.0,
   "bar": "2026-10-23",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.51,
   "ivr": 54.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 490.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.23,
    "mid": 8.0,
    "roc": 17.0,
    "capital": 49000
   },
   "putFails": [
    "RSI 53.0 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.3,
    "mid": 8.57,
    "roc": 17.0,
    "capital": 52512
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 646.13,
   "sma50": 663.88,
   "sma200": 632.55,
   "rsi": 36.3,
   "adx": 27.7,
   "bar": "2026-10-23",
   "peg": 0.98,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 36.59,
   "ivr": 44.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 595.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.21,
    "mid": 9.22,
    "roc": 16.2,
    "capital": 59500
   },
   "putFails": [
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 705.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.25,
    "mid": 10.02,
    "roc": 16.2,
    "capital": 64613
   },
   "callFails": [
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 323.6,
   "sma50": 343.01,
   "sma200": 341.33,
   "rsi": 33.1,
   "adx": 17.7,
   "bar": "2026-10-23",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.44,
   "ivr": 78.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 300.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.22,
    "mid": 5.28,
    "roc": 18.3,
    "capital": 30000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.7 not above 25"
   ],
   "call": {
    "strike": 350.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.28,
    "mid": 5.45,
    "roc": 17.6,
    "capital": 32360
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 248.86,
   "sma50": 255.66,
   "sma200": 243.3,
   "rsi": 43.8,
   "adx": 14.2,
   "bar": "2026-10-23",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 43.11,
   "ivr": 72.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.2,
    "mid": 3.98,
    "roc": 18.4,
    "capital": 22500
   },
   "putFails": [
    "ADX 14.2 not above 25",
    "RSI 43.8 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.24,
    "mid": 4.0,
    "roc": 16.8,
    "capital": 24886
   },
   "callFails": [
    "ADX 14.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 374.92,
   "sma50": 363.82,
   "sma200": 386.36,
   "rsi": 53.0,
   "adx": 12.0,
   "bar": "2026-10-23",
   "peg": 4.54,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 40.06,
   "ivr": 13.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 335.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.18,
    "mid": 4.88,
    "roc": 15.2,
    "capital": 33500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 13.3 not above 30",
    "next earnings date unavailable",
    "RSI 53.0 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.25,
    "mid": 6.28,
    "roc": 17.5,
    "capital": 37492
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 12.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 13.3 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 196.85,
   "sma50": 184.75,
   "sma200": 153.15,
   "rsi": 54.5,
   "adx": 25.0,
   "bar": "2026-10-23",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.69,
   "ivr": 76.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.17,
    "mid": 3.95,
    "roc": 25.0,
    "capital": 16500
   },
   "putFails": [
    "ADX 25.0 not above 25",
    "RSI 54.5 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.17,
    "mid": 3.05,
    "roc": 16.2,
    "capital": 19685
   },
   "callFails": [
    "ADX 25.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 250.4,
   "sma50": 234.66,
   "sma200": 163.58,
   "rsi": 52.7,
   "adx": 19.6,
   "bar": "2026-10-23",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 59.82,
   "ivr": 63.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 210.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.16,
    "mid": 4.4,
    "roc": 21.9,
    "capital": 21000
   },
   "putFails": [
    "ADX 19.6 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 52.7 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 19.6 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 166.69,
   "sma50": 179.6,
   "sma200": 180.51,
   "rsi": 42.6,
   "adx": 16.9,
   "bar": "2026-10-23",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.55,
   "ivr": 52.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.17,
    "mid": 3.98,
    "roc": 29.6,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.9 not above 25",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 215.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.15,
    "mid": 2.43,
    "roc": 15.2,
    "capital": 16669
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 147.46,
   "sma50": 139.73,
   "sma200": 135.26,
   "rsi": 50.5,
   "adx": 22.3,
   "bar": "2026-10-23",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.38,
   "ivr": 25.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-04",
    "dte": 42,
    "delta": -0.16,
    "mid": 3.75,
    "roc": 27.2,
    "capital": 12000
   },
   "putFails": [
    "ADX 22.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.6 not above 30",
    "RSI 50.5 too high for a put"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.16,
    "mid": 2.54,
    "roc": 17.9,
    "capital": 14746
   },
   "callFails": [
    "ADX 22.3 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.3,
   "sma50": 10.65,
   "sma200": 10.89,
   "rsi": 26.1,
   "adx": 30.3,
   "bar": "2026-10-23",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 96.89,
   "ivr": 42.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 5.5,
    "exp": "2026-12-04",
    "dte": 42,
    "delta": -0.15,
    "mid": 0.24,
    "roc": 37.9,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 20.0,
    "capital": 730
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 96.09,
   "sma50": 108.89,
   "sma200": 93.26,
   "rsi": 37.3,
   "adx": 19.7,
   "bar": "2026-10-23",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 67.2,
   "ivr": 46.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.16,
    "mid": 1.83,
    "roc": 23.8,
    "capital": 8000
   },
   "putFails": [
    "ADX 19.7 not above 25"
   ],
   "call": {
    "strike": 122.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.15,
    "mid": 1.42,
    "roc": 15.4,
    "capital": 9609
   },
   "callFails": [
    "ADX 19.7 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 555.0,
   "exp": "2026-11-27",
   "dte": 35,
   "delta": 0.3,
   "mid": 8.57,
   "roc": 17.0,
   "capital": 52512,
   "ivr": 54.7,
   "rsi": 53.0,
   "adx": 29.0,
   "price": 525.12,
   "sma50": 508.44,
   "sma200": 436.52
  }
 ],
 "errors": []
};
