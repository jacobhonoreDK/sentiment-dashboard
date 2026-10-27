window.SCANNER_DATA = {
 "generatedAt": "2026-10-27T18:44:19Z",
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
   "price": 217.52,
   "sma50": 222.15,
   "sma200": 203.98,
   "rsi": 45.8,
   "adx": 18.5,
   "bar": "2026-10-27",
   "peg": 0.26,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 40.41,
   "ivr": 50.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.18,
    "mid": 2.83,
    "roc": 17.1,
    "capital": 19500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 45.8 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.27,
    "mid": 3.83,
    "roc": 20.7,
    "capital": 21752
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 559.75,
   "sma50": 543.69,
   "sma200": 405.5,
   "rsi": 49.7,
   "adx": 22.7,
   "bar": "2026-10-27",
   "peg": 0.51,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 60.0,
   "ivr": 40.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 475.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.15,
    "mid": 8.68,
    "roc": 21.5,
    "capital": 47500
   },
   "putFails": [
    "ADX 22.7 not above 25",
    "RSI 49.7 too high for a put"
   ],
   "call": {
    "strike": 680.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.16,
    "mid": 7.25,
    "roc": 15.3,
    "capital": 55975
   },
   "callFails": [
    "ADX 22.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 530.83,
   "sma50": 510.18,
   "sma200": 437.04,
   "rsi": 56.0,
   "adx": 26.2,
   "bar": "2026-10-27",
   "peg": 1.7,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.91,
   "ivr": 55.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.24,
    "mid": 7.5,
    "roc": 17.7,
    "capital": 50000
   },
   "putFails": [
    "RSI 56.0 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.27,
    "mid": 7.4,
    "roc": 16.4,
    "capital": 53083
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 622.73,
   "sma50": 665.7,
   "sma200": 632.3,
   "rsi": 32.3,
   "adx": 27.4,
   "bar": "2026-10-27",
   "peg": 0.82,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.9,
   "ivr": 46.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 570.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.2,
    "mid": 7.97,
    "roc": 16.5,
    "capital": 57000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 685.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.22,
    "mid": 8.38,
    "roc": 15.8,
    "capital": 62273
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 321.88,
   "sma50": 341.92,
   "sma200": 341.24,
   "rsi": 35.3,
   "adx": 20.2,
   "bar": "2026-10-27",
   "peg": 1.12,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.73,
   "ivr": 78.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 295.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.19,
    "mid": 3.77,
    "roc": 15.1,
    "capital": 29500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 20.2 not above 25"
   ],
   "call": {
    "strike": 350.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.24,
    "mid": 4.6,
    "roc": 16.8,
    "capital": 32188
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 20.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 254.24,
   "sma50": 255.24,
   "sma200": 243.34,
   "rsi": 49.7,
   "adx": 13.5,
   "bar": "2026-10-27",
   "peg": 1.44,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 42.87,
   "ivr": 77.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.2,
    "mid": 3.78,
    "roc": 19.3,
    "capital": 23000
   },
   "putFails": [
    "ADX 13.5 not above 25",
    "RSI 49.7 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.24,
    "mid": 4.0,
    "roc": 18.5,
    "capital": 25424
   },
   "callFails": [
    "ADX 13.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 406.55,
   "sma50": 366.1,
   "sma200": 385.93,
   "rsi": 65.2,
   "adx": 13.5,
   "bar": "2026-10-27",
   "peg": 4.57,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 38.02,
   "ivr": 9.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 370.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.19,
    "mid": 5.35,
    "roc": 17.0,
    "capital": 37000
   },
   "putFails": [
    "ADX 13.5 not above 25",
    "PEG 4.57 outside 0 to 2.5",
    "IV rank 9.4 not above 30",
    "next earnings date unavailable",
    "RSI 65.2 too high for a put"
   ],
   "call": {
    "strike": 445.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.22,
    "mid": 5.3,
    "roc": 15.3,
    "capital": 40655
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
   "price": 199.54,
   "sma50": 185.79,
   "sma200": 153.37,
   "rsi": 56.7,
   "adx": 23.1,
   "bar": "2026-10-27",
   "peg": 1.7,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 61.94,
   "ivr": 73.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 170.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.17,
    "mid": 3.72,
    "roc": 25.8,
    "capital": 17000
   },
   "putFails": [
    "ADX 23.1 not above 25",
    "RSI 56.7 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.17,
    "mid": 2.95,
    "roc": 17.4,
    "capital": 19954
   },
   "callFails": [
    "ADX 23.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 267.63,
   "sma50": 236.78,
   "sma200": 165.09,
   "rsi": 60.2,
   "adx": 19.8,
   "bar": "2026-10-27",
   "peg": 6.65,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 59.08,
   "ivr": 65.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.17,
    "mid": 4.6,
    "roc": 23.5,
    "capital": 23000
   },
   "putFails": [
    "ADX 19.8 not above 25",
    "PEG 6.65 outside 0 to 2.5",
    "RSI 60.2 too high for a put"
   ],
   "call": {
    "strike": 315.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.2,
    "mid": 4.78,
    "roc": 21.0,
    "capital": 26763
   },
   "callFails": [
    "ADX 19.8 not above 25",
    "PEG 6.65 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 161.04,
   "sma50": 179.99,
   "sma200": 179.67,
   "rsi": 40.2,
   "adx": 19.3,
   "bar": "2026-10-27",
   "peg": 2.4,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.88,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 135.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.17,
    "mid": 3.2,
    "roc": 27.9,
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
    "dte": 31,
    "delta": 0.17,
    "mid": 2.71,
    "roc": 19.9,
    "capital": 16104
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 140.27,
   "sma50": 141.48,
   "sma200": 135.04,
   "rsi": 45.9,
   "adx": 19.9,
   "bar": "2026-10-27",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.36,
   "ivr": 25.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.15,
    "mid": 2.73,
    "roc": 28.0,
    "capital": 11500
   },
   "putFails": [
    "ADX 19.9 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 25.2 not above 30",
    "RSI 45.9 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-04",
    "dte": 38,
    "delta": 0.17,
    "mid": 2.73,
    "roc": 18.7,
    "capital": 14027
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
   "price": 7.03,
   "sma50": 10.54,
   "sma200": 10.85,
   "rsi": 26.4,
   "adx": 33.0,
   "bar": "2026-10-27",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 95.66,
   "ivr": 34.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 5.5,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.16,
    "mid": 0.2,
    "roc": 41.7,
    "capital": 550
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 10.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.15,
    "mid": 0.13,
    "roc": 21.8,
    "capital": 703
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 96.07,
   "sma50": 108.81,
   "sma200": 93.05,
   "rsi": 39.5,
   "adx": 21.8,
   "bar": "2026-10-27",
   "peg": 1.61,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.24,
   "ivr": 43.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-26",
   "put": {
    "strike": 80.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": -0.15,
    "mid": 1.65,
    "roc": 24.3,
    "capital": 8000
   },
   "putFails": [
    "ADX 21.8 not above 25",
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 119.0,
    "exp": "2026-11-27",
    "dte": 31,
    "delta": 0.16,
    "mid": 1.4,
    "roc": 17.2,
    "capital": 9607
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
   "dte": 31,
   "delta": 0.27,
   "mid": 7.4,
   "roc": 16.4,
   "capital": 53083,
   "ivr": 55.2,
   "rsi": 56.0,
   "adx": 26.2,
   "price": 530.83,
   "sma50": 510.18,
   "sma200": 437.04
  }
 ],
 "errors": []
};
