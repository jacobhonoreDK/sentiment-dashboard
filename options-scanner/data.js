window.SCANNER_DATA = {
 "generatedAt": "2026-10-26T14:17:12Z",
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
   "price": 214.6,
   "sma50": 222.27,
   "sma200": 203.81,
   "rsi": 42.6,
   "adx": 19.3,
   "bar": "2026-10-26",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 42.06,
   "ivr": 54.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 190.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.75,
    "roc": 16.5,
    "capital": 19000
   },
   "putFails": [
    "ADX 19.3 not above 25",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.25,
    "mid": 3.45,
    "roc": 18.3,
    "capital": 21460
   },
   "callFails": [
    "ADX 19.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 519.71,
   "sma50": 542.39,
   "sma200": 403.66,
   "rsi": 39.8,
   "adx": 24.2,
   "bar": "2026-10-26",
   "peg": 0.51,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 60.53,
   "ivr": 40.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 440.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.16,
    "mid": 9.0,
    "roc": 23.3,
    "capital": 44000
   },
   "putFails": [
    "ADX 24.2 not above 25",
    "RSI 39.8 too high for a put"
   ],
   "call": {
    "strike": 625.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.17,
    "mid": 7.07,
    "roc": 15.5,
    "capital": 51971
   },
   "callFails": [
    "ADX 24.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 526.69,
   "sma50": 509.05,
   "sma200": 436.76,
   "rsi": 54.0,
   "adx": 27.0,
   "bar": "2026-10-26",
   "peg": 1.7,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.13,
   "ivr": 52.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 490.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.22,
    "mid": 7.22,
    "roc": 16.8,
    "capital": 49000
   },
   "putFails": [
    "RSI 54.0 too high for a put"
   ],
   "call": {
    "strike": 560.0,
    "exp": "2026-12-04",
    "dte": 39,
    "delta": 0.28,
    "mid": 8.53,
    "roc": 15.1,
    "capital": 52669
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 636.62,
   "sma50": 664.75,
   "sma200": 632.48,
   "rsi": 34.7,
   "adx": 27.4,
   "bar": "2026-10-26",
   "peg": 0.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.08,
   "ivr": 43.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 575.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.18,
    "mid": 7.68,
    "roc": 15.2,
    "capital": 57500
   },
   "putFails": [
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 700.0,
    "exp": "2026-12-04",
    "dte": 39,
    "delta": 0.23,
    "mid": 10.45,
    "roc": 15.4,
    "capital": 63662
   },
   "callFails": [
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 320.23,
   "sma50": 342.43,
   "sma200": 341.29,
   "rsi": 31.3,
   "adx": 19.1,
   "bar": "2026-10-26",
   "peg": 1.12,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.14,
   "ivr": 74.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 295.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.23,
    "mid": 4.8,
    "roc": 18.6,
    "capital": 29500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.1 not above 25"
   ],
   "call": {
    "strike": 345.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.25,
    "mid": 4.78,
    "roc": 17.0,
    "capital": 32023
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 250.4,
   "sma50": 255.4,
   "sma200": 243.31,
   "rsi": 45.7,
   "adx": 14.3,
   "bar": "2026-10-26",
   "peg": 1.44,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 43.29,
   "ivr": 76.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 220.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.16,
    "mid": 2.9,
    "roc": 15.0,
    "capital": 22000
   },
   "putFails": [
    "ADX 14.3 not above 25",
    "RSI 45.7 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.23,
    "mid": 3.95,
    "roc": 18.0,
    "capital": 25040
   },
   "callFails": [
    "ADX 14.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 393.3,
   "sma50": 364.79,
   "sma200": 386.13,
   "rsi": 60.7,
   "adx": 12.4,
   "bar": "2026-10-26",
   "peg": 3.8,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 40.28,
   "ivr": 11.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 355.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.18,
    "mid": 5.08,
    "roc": 16.3,
    "capital": 35500
   },
   "putFails": [
    "ADX 12.4 not above 25",
    "PEG 3.80 outside 0 to 2.5",
    "IV rank 11.4 not above 30",
    "next earnings date unavailable",
    "RSI 60.7 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.23,
    "mid": 5.78,
    "roc": 16.7,
    "capital": 39330
   },
   "callFails": [
    "ADX 12.4 not above 25",
    "PEG 3.80 outside 0 to 2.5",
    "IV rank 11.4 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 196.3,
   "sma50": 185.2,
   "sma200": 153.25,
   "rsi": 54.0,
   "adx": 23.6,
   "bar": "2026-10-26",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 64.23,
   "ivr": 75.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 160.0,
    "exp": "2026-12-04",
    "dte": 39,
    "delta": -0.15,
    "mid": 3.67,
    "roc": 21.5,
    "capital": 16000
   },
   "putFails": [
    "ADX 23.6 not above 25",
    "RSI 54.0 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.17,
    "mid": 2.92,
    "roc": 17.0,
    "capital": 19630
   },
   "callFails": [
    "ADX 23.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 258.96,
   "sma50": 235.64,
   "sma200": 164.33,
   "rsi": 56.5,
   "adx": 19.4,
   "bar": "2026-10-26",
   "peg": 6.65,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 60.62,
   "ivr": 67.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 215.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.15,
    "mid": 4.08,
    "roc": 21.6,
    "capital": 21500
   },
   "putFails": [
    "ADX 19.4 not above 25",
    "PEG 6.65 outside 0 to 2.5",
    "RSI 56.5 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 19.4 not above 25",
    "PEG 6.65 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 159.35,
   "sma50": 179.77,
   "sma200": 180.07,
   "rsi": 38.9,
   "adx": 18.2,
   "bar": "2026-10-26",
   "peg": 2.4,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.98,
   "ivr": 50.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 130.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.16,
    "mid": 3.26,
    "roc": 28.6,
    "capital": 13000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25",
    "RSI 38.9 too high for a put"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.15,
    "mid": 2.23,
    "roc": 16.0,
    "capital": 15935
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 141.09,
   "sma50": 140.66,
   "sma200": 135.13,
   "rsi": 46.3,
   "adx": 21.2,
   "bar": "2026-10-26",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 73.14,
   "ivr": 24.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.17,
    "mid": 3.2,
    "roc": 31.7,
    "capital": 11500
   },
   "putFails": [
    "ADX 21.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.8 not above 30",
    "RSI 46.3 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 39,
    "delta": 0.17,
    "mid": 2.85,
    "roc": 18.9,
    "capital": 14109
   },
   "callFails": [
    "ADX 21.2 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 24.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.88,
   "sma50": 10.6,
   "sma200": 10.87,
   "rsi": 23.6,
   "adx": 32.0,
   "bar": "2026-10-26",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 94.7,
   "ivr": 38.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 5.5,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": -0.21,
    "mid": 0.26,
    "roc": 53.9,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.15,
    "mid": 0.12,
    "roc": 20.7,
    "capital": 688
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 92.68,
   "sma50": 108.81,
   "sma200": 93.14,
   "rsi": 34.4,
   "adx": 21.1,
   "bar": "2026-10-26",
   "peg": 1.61,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 69.11,
   "ivr": 45.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-23",
   "put": {
    "strike": 75.0,
    "exp": "2026-12-04",
    "dte": 39,
    "delta": -0.15,
    "mid": 1.85,
    "roc": 23.1,
    "capital": 7500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 21.1 not above 25"
   ],
   "call": {
    "strike": 116.0,
    "exp": "2026-11-27",
    "dte": 32,
    "delta": 0.15,
    "mid": 1.34,
    "roc": 16.5,
    "capital": 9268
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 21.1 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 560.0,
   "exp": "2026-12-04",
   "dte": 39,
   "delta": 0.28,
   "mid": 8.53,
   "roc": 15.1,
   "capital": 52669,
   "ivr": 52.1,
   "rsi": 54.0,
   "adx": 27.0,
   "price": 526.69,
   "sma50": 509.05,
   "sma200": 436.76
  }
 ],
 "errors": []
};
