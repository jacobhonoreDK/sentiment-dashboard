window.SCANNER_DATA = {
 "generatedAt": "2026-10-23T12:53:22Z",
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
   "price": 212.21,
   "sma50": 222.77,
   "sma200": 203.56,
   "rsi": 39.1,
   "adx": 18.4,
   "bar": "2026-10-22",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.56,
   "ivr": 55.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.19,
    "mid": 3.42,
    "roc": 18.8,
    "capital": 19000
   },
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 39.1 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.23,
    "mid": 3.12,
    "roc": 15.4,
    "capital": 21221
   },
   "callFails": [
    "ADX 18.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 507.93,
   "sma50": 541.6,
   "sma200": 400.55,
   "rsi": 36.5,
   "adx": 22.9,
   "bar": "2026-10-22",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 62.26,
   "ivr": 45.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 425.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.16,
    "mid": 9.05,
    "roc": 22.2,
    "capital": 42500
   },
   "putFails": [
    "ADX 22.9 not above 25"
   ],
   "call": {
    "strike": 620.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.17,
    "mid": 7.47,
    "roc": 15.3,
    "capital": 50793
   },
   "callFails": [
    "ADX 22.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 521.08,
   "sma50": 507.88,
   "sma200": 436.31,
   "rsi": 50.5,
   "adx": 30.9,
   "bar": "2026-10-22",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.56,
   "ivr": 54.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 490.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.25,
    "mid": 7.95,
    "roc": 16.9,
    "capital": 49000
   },
   "putFails": [
    "RSI 50.5 too high for a put"
   ],
   "call": {
    "strike": 555.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.28,
    "mid": 7.67,
    "roc": 15.4,
    "capital": 52108
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 648.85,
   "sma50": 662.86,
   "sma200": 632.56,
   "rsi": 36.8,
   "adx": 28.1,
   "bar": "2026-10-22",
   "peg": 0.98,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.55,
   "ivr": 44.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 590.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.19,
    "mid": 8.53,
    "roc": 15.1,
    "capital": 59000
   },
   "putFails": [
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 710.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.25,
    "mid": 10.25,
    "roc": 16.5,
    "capital": 64885
   },
   "callFails": [
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 324.22,
   "sma50": 343.47,
   "sma200": 341.32,
   "rsi": 33.5,
   "adx": 16.4,
   "bar": "2026-10-22",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.17,
   "ivr": 78.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 300.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.23,
    "mid": 5.28,
    "roc": 18.3,
    "capital": 30000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.4 not above 25"
   ],
   "call": {
    "strike": 350.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.28,
    "mid": 5.45,
    "roc": 17.5,
    "capital": 32422
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 250.38,
   "sma50": 255.99,
   "sma200": 243.26,
   "rsi": 45.1,
   "adx": 14.1,
   "bar": "2026-10-22",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 42.33,
   "ivr": 72.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.18,
    "mid": 3.62,
    "roc": 16.8,
    "capital": 22500
   },
   "putFails": [
    "ADX 14.1 not above 25",
    "RSI 45.1 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.25,
    "mid": 4.2,
    "roc": 17.5,
    "capital": 25038
   },
   "callFails": [
    "ADX 14.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 374.58,
   "sma50": 363.12,
   "sma200": 386.64,
   "rsi": 52.8,
   "adx": 12.9,
   "bar": "2026-10-22",
   "peg": 4.54,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 39.85,
   "ivr": 13.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 335.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.17,
    "mid": 4.88,
    "roc": 15.2,
    "capital": 33500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.9 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 13.3 not above 30",
    "next earnings date unavailable",
    "RSI 52.8 too high for a put"
   ],
   "call": {
    "strike": 415.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.23,
    "mid": 5.67,
    "roc": 15.8,
    "capital": 37458
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 12.9 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 13.3 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 196.19,
   "sma50": 184.4,
   "sma200": 153.07,
   "rsi": 54.0,
   "adx": 26.6,
   "bar": "2026-10-22",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.72,
   "ivr": 76.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.17,
    "mid": 4.1,
    "roc": 25.9,
    "capital": 16500
   },
   "putFails": [
    "RSI 54.0 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.17,
    "mid": 3.0,
    "roc": 15.9,
    "capital": 19619
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 237.94,
   "sma50": 234.16,
   "sma200": 162.93,
   "rsi": 45.8,
   "adx": 20.8,
   "bar": "2026-10-22",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 58.09,
   "ivr": 63.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": null,
   "putFails": [
    "ADX 20.8 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 45.8 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 20.8 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 169.09,
   "sma50": 179.34,
   "sma200": 180.91,
   "rsi": 43.9,
   "adx": 16.5,
   "bar": "2026-10-22",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.76,
   "ivr": 52.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.16,
    "mid": 3.5,
    "roc": 26.1,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.5 not above 25",
    "RSI 43.9 too high for a put"
   ],
   "call": {
    "strike": 210.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.19,
    "mid": 3.38,
    "roc": 20.8,
    "capital": 16909
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 145.8,
   "sma50": 138.72,
   "sma200": 135.34,
   "rsi": 49.4,
   "adx": 23.1,
   "bar": "2026-10-22",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.67,
   "ivr": 25.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.17,
    "mid": 3.48,
    "roc": 30.2,
    "capital": 12000
   },
   "putFails": [
    "ADX 23.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.6 not above 30",
    "RSI 49.4 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.18,
    "mid": 2.54,
    "roc": 18.1,
    "capital": 14580
   },
   "callFails": [
    "ADX 23.1 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.25,
   "sma50": 10.69,
   "sma200": 10.9,
   "rsi": 25.4,
   "adx": 29.0,
   "bar": "2026-10-22",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 95.7,
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
    "delta": 0.17,
    "mid": 0.17,
    "roc": 21.0,
    "capital": 725
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 96.58,
   "sma50": 108.95,
   "sma200": 93.36,
   "rsi": 37.8,
   "adx": 18.7,
   "bar": "2026-10-22",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 68.5,
   "ivr": 46.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-22",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": -0.16,
    "mid": 1.94,
    "roc": 25.3,
    "capital": 8000
   },
   "putFails": [
    "ADX 18.7 not above 25"
   ],
   "call": {
    "strike": 123.0,
    "exp": "2026-11-27",
    "dte": 35,
    "delta": 0.15,
    "mid": 1.46,
    "roc": 15.7,
    "capital": 9658
   },
   "callFails": [
    "ADX 18.7 not above 25"
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
   "dte": 35,
   "delta": 0.17,
   "mid": 3.0,
   "roc": 15.9,
   "capital": 19619,
   "ivr": 76.5,
   "rsi": 54.0,
   "adx": 26.6,
   "price": 196.19,
   "sma50": 184.4,
   "sma200": 153.07
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 555.0,
   "exp": "2026-11-27",
   "dte": 35,
   "delta": 0.28,
   "mid": 7.67,
   "roc": 15.4,
   "capital": 52108,
   "ivr": 54.7,
   "rsi": 50.5,
   "adx": 30.9,
   "price": 521.08,
   "sma50": 507.88,
   "sma200": 436.31
  }
 ],
 "errors": []
};
