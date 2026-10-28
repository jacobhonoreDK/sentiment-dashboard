window.SCANNER_DATA = {
 "generatedAt": "2026-10-28T09:41:52Z",
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
   "price": 217.94,
   "sma50": 222.16,
   "sma200": 203.99,
   "rsi": 46.3,
   "adx": 18.5,
   "bar": "2026-10-27",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 40.1,
   "ivr": 50.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.17,
    "mid": 2.72,
    "roc": 17.0,
    "capital": 19500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 46.3 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.22,
    "mid": 2.73,
    "roc": 15.2,
    "capital": 21794
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 560.26,
   "sma50": 543.7,
   "sma200": 405.5,
   "rsi": 49.8,
   "adx": 22.6,
   "bar": "2026-10-27",
   "peg": 0.53,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 60.21,
   "ivr": 40.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 475.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.15,
    "mid": 8.75,
    "roc": 22.4,
    "capital": 47500
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "RSI 49.8 too high for a put"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.16,
    "mid": 7.38,
    "roc": 16.0,
    "capital": 56026
   },
   "callFails": [
    "ADX 22.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 531.33,
   "sma50": 510.19,
   "sma200": 437.05,
   "rsi": 56.3,
   "adx": 26.2,
   "bar": "2026-10-27",
   "peg": 1.73,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 32.13,
   "ivr": 55.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 495.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.21,
    "mid": 6.5,
    "roc": 16.0,
    "capital": 49500
   },
   "putFails": [
    "RSI 56.3 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.27,
    "mid": 7.08,
    "roc": 16.2,
    "capital": 53133
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 620.19,
   "sma50": 665.65,
   "sma200": 632.29,
   "rsi": 31.9,
   "adx": 27.5,
   "bar": "2026-10-27",
   "peg": 0.82,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 38.16,
   "ivr": 46.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 565.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.18,
    "mid": 7.47,
    "roc": 16.1,
    "capital": 56500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 685.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.22,
    "mid": 7.97,
    "roc": 15.6,
    "capital": 62019
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 320.58,
   "sma50": 341.89,
   "sma200": 341.23,
   "rsi": 34.0,
   "adx": 20.1,
   "bar": "2026-10-27",
   "peg": 1.11,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.68,
   "ivr": 78.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 295.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.2,
    "mid": 4.15,
    "roc": 17.1,
    "capital": 29500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 20.1 not above 25"
   ],
   "call": {
    "strike": 350.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.24,
    "mid": 4.6,
    "roc": 17.5,
    "capital": 32058
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 20.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 253.1,
   "sma50": 255.21,
   "sma200": 243.34,
   "rsi": 48.6,
   "adx": 13.4,
   "bar": "2026-10-27",
   "peg": 1.44,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 42.89,
   "ivr": 77.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.85,
    "roc": 15.4,
    "capital": 22500
   },
   "putFails": [
    "ADX 13.4 not above 25",
    "RSI 48.6 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.23,
    "mid": 3.88,
    "roc": 18.6,
    "capital": 25310
   },
   "callFails": [
    "ADX 13.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 407.46,
   "sma50": 366.12,
   "sma200": 385.94,
   "rsi": 65.5,
   "adx": 13.5,
   "bar": "2026-10-27",
   "peg": 4.57,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.95,
   "ivr": 9.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 370.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.18,
    "mid": 5.0,
    "roc": 16.4,
    "capital": 37000
   },
   "putFails": [
    "ADX 13.5 not above 25",
    "PEG 4.57 outside 0 to 2.5",
    "IV rank 9.4 not above 30",
    "next earnings date unavailable",
    "RSI 65.5 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.24,
    "mid": 5.75,
    "roc": 17.2,
    "capital": 40746
   },
   "callFails": [
    "ADX 13.5 not above 25",
    "PEG 4.57 outside 0 to 2.5",
    "IV rank 9.4 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 198.73,
   "sma50": 185.77,
   "sma200": 153.36,
   "rsi": 56.0,
   "adx": 23.1,
   "bar": "2026-10-27",
   "peg": 1.72,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 61.73,
   "ivr": 73.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 165.0,
    "exp": "2026-12-04",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.5,
    "roc": 20.9,
    "capital": 16500
   },
   "putFails": [
    "ADX 23.1 not above 25",
    "RSI 56.0 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.76,
    "roc": 16.9,
    "capital": 19873
   },
   "callFails": [
    "ADX 23.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 268.02,
   "sma50": 236.78,
   "sma200": 165.1,
   "rsi": 60.3,
   "adx": 19.8,
   "bar": "2026-10-27",
   "peg": 6.76,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 58.2,
   "ivr": 65.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.17,
    "mid": 4.47,
    "roc": 23.7,
    "capital": 23000
   },
   "putFails": [
    "ADX 19.8 not above 25",
    "PEG 6.76 outside 0 to 2.5",
    "RSI 60.3 too high for a put"
   ],
   "call": {
    "strike": 325.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.15,
    "mid": 3.33,
    "roc": 15.1,
    "capital": 26802
   },
   "callFails": [
    "ADX 19.8 not above 25",
    "PEG 6.76 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 161.09,
   "sma50": 179.99,
   "sma200": 179.67,
   "rsi": 40.2,
   "adx": 19.3,
   "bar": "2026-10-27",
   "peg": 2.33,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.08,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 135.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.16,
    "mid": 3.04,
    "roc": 27.4,
    "capital": 13500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.3 not above 25",
    "RSI 40.2 too high for a put"
   ],
   "call": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.56,
    "roc": 19.4,
    "capital": 16109
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 141.4,
   "sma50": 141.51,
   "sma200": 135.04,
   "rsi": 46.7,
   "adx": 19.9,
   "bar": "2026-10-27",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.56,
   "ivr": 25.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 115.0,
    "exp": "2026-12-04",
    "dte": 37,
    "delta": -0.16,
    "mid": 3.25,
    "roc": 27.9,
    "capital": 11500
   },
   "putFails": [
    "ADX 19.9 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.2 not above 30",
    "RSI 46.7 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.15,
    "mid": 2.03,
    "roc": 17.5,
    "capital": 14140
   },
   "callFails": [
    "ADX 19.9 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.2 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 7.09,
   "sma50": 10.54,
   "sma200": 10.85,
   "rsi": 27.4,
   "adx": 33.0,
   "bar": "2026-10-27",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 95.45,
   "ivr": 34.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 5.5,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.15,
    "mid": 0.18,
    "roc": 40.9,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.15,
    "mid": 0.14,
    "roc": 23.2,
    "capital": 709
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 94.56,
   "sma50": 108.78,
   "sma200": 93.04,
   "rsi": 37.3,
   "adx": 21.8,
   "bar": "2026-10-27",
   "peg": 1.57,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 65.93,
   "ivr": 43.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": -0.17,
    "mid": 1.78,
    "roc": 27.1,
    "capital": 8000
   },
   "putFails": [
    "ADX 21.8 not above 25"
   ],
   "call": {
    "strike": 118.0,
    "exp": "2026-11-27",
    "dte": 30,
    "delta": 0.15,
    "mid": 1.27,
    "roc": 16.3,
    "capital": 9456
   },
   "callFails": [
    "ADX 21.8 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-27",
   "dte": 30,
   "delta": 0.27,
   "mid": 7.08,
   "roc": 16.2,
   "capital": 53133,
   "ivr": 55.2,
   "rsi": 56.3,
   "adx": 26.2,
   "price": 531.33,
   "sma50": 510.19,
   "sma200": 437.05
  }
 ],
 "errors": []
};
