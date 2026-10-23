window.SCANNER_DATA = {
 "generatedAt": "2026-10-23T19:15:08Z",
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
   "price": 211.97,
   "sma50": 222.5,
   "sma200": 203.67,
   "rsi": 38.9,
   "adx": 19.1,
   "bar": "2026-10-23",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.91,
   "ivr": 55.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.2,
    "mid": 3.45,
    "roc": 18.9,
    "capital": 19000
   },
   "putFails": [
    "ADX 19.1 not above 25",
    "RSI 38.9 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.28,
    "mid": 4.17,
    "roc": 20.5,
    "capital": 21197
   },
   "callFails": [
    "ADX 19.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 517.42,
   "sma50": 542.29,
   "sma200": 402.09,
   "rsi": 39.1,
   "adx": 23.7,
   "bar": "2026-10-23",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 61.12,
   "ivr": 45.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 435.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.16,
    "mid": 8.7,
    "roc": 20.9,
    "capital": 43500
   },
   "putFails": [
    "ADX 23.7 not above 25",
    "RSI 39.1 too high for a put"
   ],
   "call": {
    "strike": 625.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.17,
    "mid": 7.8,
    "roc": 15.7,
    "capital": 51742
   },
   "callFails": [
    "ADX 23.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 523.74,
   "sma50": 508.41,
   "sma200": 436.51,
   "rsi": 52.2,
   "adx": 29.0,
   "bar": "2026-10-23",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.39,
   "ivr": 54.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 490.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.24,
    "mid": 7.62,
    "roc": 16.2,
    "capital": 49000
   },
   "putFails": [
    "RSI 52.2 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.29,
    "mid": 8.45,
    "roc": 16.8,
    "capital": 52374
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 645.55,
   "sma50": 663.87,
   "sma200": 632.54,
   "rsi": 36.2,
   "adx": 27.7,
   "bar": "2026-10-23",
   "peg": 0.92,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 36.92,
   "ivr": 44.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 590.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.2,
    "mid": 8.85,
    "roc": 15.6,
    "capital": 59000
   },
   "putFails": [
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 705.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.24,
    "mid": 9.55,
    "roc": 15.4,
    "capital": 64555
   },
   "callFails": [
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 321.91,
   "sma50": 342.98,
   "sma200": 341.32,
   "rsi": 32.2,
   "adx": 17.7,
   "bar": "2026-10-23",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.03,
   "ivr": 78.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 295.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.2,
    "mid": 4.28,
    "roc": 15.1,
    "capital": 29500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.7 not above 25"
   ],
   "call": {
    "strike": 350.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.25,
    "mid": 4.85,
    "roc": 15.7,
    "capital": 32191
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 248.57,
   "sma50": 255.66,
   "sma200": 243.3,
   "rsi": 43.6,
   "adx": 14.2,
   "bar": "2026-10-23",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 43.57,
   "ivr": 72.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.21,
    "mid": 4.03,
    "roc": 18.7,
    "capital": 22500
   },
   "putFails": [
    "ADX 14.2 not above 25",
    "RSI 43.6 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.23,
    "mid": 3.97,
    "roc": 16.7,
    "capital": 24857
   },
   "callFails": [
    "ADX 14.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 372.16,
   "sma50": 363.77,
   "sma200": 386.35,
   "rsi": 51.5,
   "adx": 12.0,
   "bar": "2026-10-23",
   "peg": 4.28,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 39.63,
   "ivr": 13.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 335.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.19,
    "mid": 5.1,
    "roc": 15.9,
    "capital": 33500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.0 not above 25",
    "PEG 4.28 outside 0 to 2.5",
    "IV rank 13.3 not above 30",
    "next earnings date unavailable",
    "RSI 51.5 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.23,
    "mid": 5.53,
    "roc": 15.5,
    "capital": 37216
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 12.0 not above 25",
    "PEG 4.28 outside 0 to 2.5",
    "IV rank 13.3 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 195.45,
   "sma50": 184.73,
   "sma200": 153.14,
   "rsi": 53.3,
   "adx": 25.0,
   "bar": "2026-10-23",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.84,
   "ivr": 76.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 160.0,
    "exp": "2026-12-04",
    "dte": 42,
    "delta": -0.15,
    "mid": 3.65,
    "roc": 19.8,
    "capital": 16000
   },
   "putFails": [
    "ADX 25.0 not above 25",
    "RSI 53.3 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.16,
    "mid": 2.8,
    "roc": 15.0,
    "capital": 19545
   },
   "callFails": [
    "ADX 25.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 254.94,
   "sma50": 234.75,
   "sma200": 163.6,
   "rsi": 54.8,
   "adx": 19.8,
   "bar": "2026-10-23",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 58.82,
   "ivr": 63.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 215.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.16,
    "mid": 4.58,
    "roc": 22.2,
    "capital": 21500
   },
   "putFails": [
    "ADX 19.8 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 54.8 too high for a put"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.18,
    "mid": 4.17,
    "roc": 17.1,
    "capital": 25494
   },
   "callFails": [
    "ADX 19.8 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 164.5,
   "sma50": 179.55,
   "sma200": 180.5,
   "rsi": 41.5,
   "adx": 16.9,
   "bar": "2026-10-23",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.16,
   "ivr": 52.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 135.0,
    "exp": "2026-12-04",
    "dte": 42,
    "delta": -0.16,
    "mid": 3.47,
    "roc": 22.4,
    "capital": 13500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.9 not above 25",
    "RSI 41.5 too high for a put"
   ],
   "call": {
    "strike": 210.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.17,
    "mid": 2.9,
    "roc": 18.4,
    "capital": 16450
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 147.04,
   "sma50": 139.72,
   "sma200": 135.26,
   "rsi": 50.2,
   "adx": 22.6,
   "bar": "2026-10-23",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.45,
   "ivr": 25.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.15,
    "mid": 2.96,
    "roc": 25.7,
    "capital": 12000
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.6 not above 30",
    "RSI 50.2 too high for a put"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.16,
    "mid": 2.45,
    "roc": 17.4,
    "capital": 14704
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.18,
   "sma50": 10.65,
   "sma200": 10.89,
   "rsi": 25.1,
   "adx": 30.3,
   "bar": "2026-10-23",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 94.3,
   "ivr": 42.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 5.5,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.15,
    "mid": 0.2,
    "roc": 37.9,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-12-04",
    "dte": 42,
    "delta": 0.16,
    "mid": 0.16,
    "roc": 19.4,
    "capital": 718
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 95.22,
   "sma50": 108.87,
   "sma200": 93.25,
   "rsi": 36.6,
   "adx": 19.7,
   "bar": "2026-10-23",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 68.51,
   "ivr": 46.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.18,
    "mid": 2.1,
    "roc": 27.4,
    "capital": 8000
   },
   "putFails": [
    "ADX 19.7 not above 25"
   ],
   "call": {
    "strike": 120.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.16,
    "mid": 1.47,
    "roc": 16.1,
    "capital": 9522
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
   "delta": 0.29,
   "mid": 8.45,
   "roc": 16.8,
   "capital": 52374,
   "ivr": 54.7,
   "rsi": 52.2,
   "adx": 29.0,
   "price": 523.74,
   "sma50": 508.41,
   "sma200": 436.51
  }
 ],
 "errors": []
};
