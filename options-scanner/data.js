window.SCANNER_DATA = {
 "generatedAt": "2026-10-22T15:20:59Z",
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
   "price": 213.79,
   "sma50": 222.8,
   "sma200": 203.56,
   "rsi": 40.3,
   "adx": 18.2,
   "bar": "2026-10-22",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.67,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.18,
    "mid": 3.28,
    "roc": 17.5,
    "capital": 19000
   },
   "putFails": [
    "ADX 18.2 not above 25",
    "RSI 40.3 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.24,
    "mid": 3.47,
    "roc": 16.5,
    "capital": 21379
   },
   "callFails": [
    "ADX 18.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 511.7,
   "sma50": 541.68,
   "sma200": 400.57,
   "rsi": 37.1,
   "adx": 22.8,
   "bar": "2026-10-22",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 62.89,
   "ivr": 39.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 430.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.16,
    "mid": 9.47,
    "roc": 22.3,
    "capital": 43000
   },
   "putFails": [
    "ADX 22.8 not above 25"
   ],
   "call": {
    "strike": 625.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.17,
    "mid": 7.7,
    "roc": 15.3,
    "capital": 51170
   },
   "callFails": [
    "ADX 22.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 525.52,
   "sma50": 507.96,
   "sma200": 436.33,
   "rsi": 53.4,
   "adx": 31.1,
   "bar": "2026-10-22",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.64,
   "ivr": 50.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 490.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.22,
    "mid": 7.43,
    "roc": 15.4,
    "capital": 49000
   },
   "putFails": [
    "RSI 53.4 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.28,
    "mid": 7.8,
    "roc": 15.0,
    "capital": 52552
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 658.7,
   "sma50": 663.06,
   "sma200": 632.61,
   "rsi": 38.6,
   "adx": 27.8,
   "bar": "2026-10-22",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 37.8,
   "ivr": 67.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 595.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.19,
    "mid": 8.82,
    "roc": 15.0,
    "capital": 59500
   },
   "putFails": [
    "RSI 38.6 too high for a put"
   ],
   "call": {
    "strike": 715.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.25,
    "mid": 10.43,
    "roc": 16.0,
    "capital": 65870
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 327.38,
   "sma50": 343.53,
   "sma200": 341.34,
   "rsi": 35.2,
   "adx": 16.0,
   "bar": "2026-10-22",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.99,
   "ivr": 70.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 300.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.2,
    "mid": 4.55,
    "roc": 15.4,
    "capital": 30000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25"
   ],
   "call": {
    "strike": 355.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.25,
    "mid": 5.03,
    "roc": 15.6,
    "capital": 32738
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 252.14,
   "sma50": 256.03,
   "sma200": 243.27,
   "rsi": 46.5,
   "adx": 13.6,
   "bar": "2026-10-22",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 42.44,
   "ivr": 65.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.22,
    "mid": 4.35,
    "roc": 19.2,
    "capital": 23000
   },
   "putFails": [
    "ADX 13.6 not above 25",
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-04",
    "dte": 43,
    "delta": 0.24,
    "mid": 4.45,
    "roc": 15.0,
    "capital": 25214
   },
   "callFails": [
    "ADX 13.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 383.92,
   "sma50": 363.31,
   "sma200": 386.69,
   "rsi": 58.1,
   "adx": 12.9,
   "bar": "2026-10-22",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 39.83,
   "ivr": 24.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 350.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.21,
    "mid": 6.1,
    "roc": 17.7,
    "capital": 35000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.9 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 24.9 not above 30",
    "RSI 58.1 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.23,
    "mid": 5.8,
    "roc": 15.3,
    "capital": 38392
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 12.9 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 24.9 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 198.91,
   "sma50": 184.45,
   "sma200": 153.09,
   "rsi": 56.4,
   "adx": 26.6,
   "bar": "2026-10-22",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 63.4,
   "ivr": 67.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.15,
    "mid": 3.5,
    "roc": 21.5,
    "capital": 16500
   },
   "putFails": [
    "RSI 56.4 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.18,
    "mid": 3.33,
    "roc": 16.9,
    "capital": 19891
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 238.26,
   "sma50": 234.17,
   "sma200": 162.93,
   "rsi": 46.0,
   "adx": 20.8,
   "bar": "2026-10-22",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 55.85,
   "ivr": 55.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 205.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.19,
    "mid": 4.55,
    "roc": 22.5,
    "capital": 20500
   },
   "putFails": [
    "ADX 20.8 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 46.0 too high for a put"
   ],
   "call": {
    "strike": 270.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.27,
    "mid": 6.18,
    "roc": 26.3,
    "capital": 23826
   },
   "callFails": [
    "ADX 20.8 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 170.29,
   "sma50": 179.37,
   "sma200": 180.91,
   "rsi": 44.5,
   "adx": 16.3,
   "bar": "2026-10-22",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.29,
   "ivr": 47.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.19,
    "mid": 4.1,
    "roc": 28.7,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.3 not above 25",
    "RSI 44.5 too high for a put"
   ],
   "call": {
    "strike": 210.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.2,
    "mid": 3.7,
    "roc": 22.0,
    "capital": 17029
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 147.52,
   "sma50": 138.75,
   "sma200": 135.34,
   "rsi": 50.4,
   "adx": 23.2,
   "bar": "2026-10-22",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.85,
   "ivr": 21.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-04",
    "dte": 43,
    "delta": -0.17,
    "mid": 3.6,
    "roc": 25.5,
    "capital": 12000
   },
   "putFails": [
    "ADX 23.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.6 not above 30",
    "RSI 50.4 too high for a put"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.6,
    "roc": 17.9,
    "capital": 14752
   },
   "callFails": [
    "ADX 23.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 21.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.39,
   "sma50": 10.69,
   "sma200": 10.9,
   "rsi": 26.1,
   "adx": 28.9,
   "bar": "2026-10-22",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 94.64,
   "ivr": 37.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.2,
    "mid": 0.29,
    "roc": 48.2,
    "capital": 600
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.5,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 20.6,
    "capital": 739
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 98.05,
   "sma50": 108.98,
   "sma200": 93.37,
   "rsi": 39.1,
   "adx": 18.5,
   "bar": "2026-10-22",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 67.42,
   "ivr": 39.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-21",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": -0.21,
    "mid": 2.75,
    "roc": 32.7,
    "capital": 8500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 39.1 too high for a put"
   ],
   "call": {
    "strike": 123.0,
    "exp": "2026-11-27",
    "dte": 36,
    "delta": 0.17,
    "mid": 1.61,
    "roc": 16.6,
    "capital": 9805
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 240.0,
   "exp": "2026-11-27",
   "dte": 36,
   "delta": 0.18,
   "mid": 3.33,
   "roc": 16.9,
   "capital": 19891,
   "ivr": 67.5,
   "rsi": 56.4,
   "adx": 26.6,
   "price": 198.91,
   "sma50": 184.45,
   "sma200": 153.09
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 715.0,
   "exp": "2026-11-27",
   "dte": 36,
   "delta": 0.25,
   "mid": 10.43,
   "roc": 16.0,
   "capital": 65870,
   "ivr": 67.8,
   "rsi": 38.6,
   "adx": 27.8,
   "price": 658.7,
   "sma50": 663.06,
   "sma200": 632.61
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 560.0,
   "exp": "2026-11-27",
   "dte": 36,
   "delta": 0.28,
   "mid": 7.8,
   "roc": 15.0,
   "capital": 52552,
   "ivr": 50.9,
   "rsi": 53.4,
   "adx": 31.1,
   "price": 525.52,
   "sma50": 507.96,
   "sma200": 436.33
  }
 ],
 "errors": []
};
