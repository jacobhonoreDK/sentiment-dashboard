window.SCANNER_DATA = {
 "generatedAt": "2026-11-06T17:58:48Z",
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
   "price": 186.53,
   "sma50": 219.81,
   "sma200": 204.67,
   "rsi": 30.7,
   "adx": 28.9,
   "bar": "2026-11-06",
   "peg": 0.24,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 57.55,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 155.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.16,
    "mid": 3.42,
    "roc": 23.0,
    "capital": 15500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 215.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.2,
    "mid": 3.08,
    "roc": 17.2,
    "capital": 18653
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 437.95,
   "sma50": 546.59,
   "sma200": 415.92,
   "rsi": 36.5,
   "adx": 25.4,
   "bar": "2026-11-06",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 71.05,
   "ivr": 67.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 350.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.16,
    "mid": 10.35,
    "roc": 30.8,
    "capital": 35000
   },
   "putFails": [],
   "call": {
    "strike": 545.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.16,
    "mid": 6.55,
    "roc": 15.6,
    "capital": 43795
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "MSFT",
   "price": 533.52,
   "sma50": 516.7,
   "sma200": 439.86,
   "rsi": 53.4,
   "adx": 20.4,
   "bar": "2026-11-06",
   "peg": 1.64,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 29.72,
   "ivr": 47.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 495.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.21,
    "mid": 7.1,
    "roc": 15.0,
    "capital": 49500
   },
   "putFails": [
    "ADX 20.4 not above 25",
    "RSI 53.4 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.28,
    "mid": 7.35,
    "roc": 14.4,
    "capital": 53352
   },
   "callFails": [
    "ADX 20.4 not above 25",
    "best ROC 14.4% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 617.61,
   "sma50": 675.07,
   "sma200": 631.98,
   "rsi": 39.2,
   "adx": 27.0,
   "bar": "2026-11-06",
   "peg": 0.82,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 41.72,
   "ivr": 64.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 545.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.17,
    "mid": 8.28,
    "roc": 15.8,
    "capital": 54500
   },
   "putFails": [
    "below 200-day SMA",
    "RSI 39.2 too high for a put"
   ],
   "call": {
    "strike": 685.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.23,
    "mid": 9.32,
    "roc": 15.7,
    "capital": 61761
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 285.42,
   "sma50": 332.94,
   "sma200": 339.52,
   "rsi": 30.5,
   "adx": 30.7,
   "bar": "2026-11-06",
   "peg": 1.0,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 33.56,
   "ivr": 65.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 260.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.19,
    "mid": 3.77,
    "roc": 15.1,
    "capital": 26000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.29,
    "mid": 4.78,
    "roc": 17.4,
    "capital": 28542
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 261.31,
   "sma50": 253.99,
   "sma200": 243.95,
   "rsi": 55.7,
   "adx": 13.1,
   "bar": "2026-11-06",
   "peg": 1.21,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 34.91,
   "ivr": 53.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 240.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.21,
    "mid": 4.12,
    "roc": 17.9,
    "capital": 24000
   },
   "putFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable",
    "RSI 55.7 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.28,
    "mid": 4.25,
    "roc": 17.0,
    "capital": 26131
   },
   "callFails": [
    "ADX 13.1 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 358.71,
   "sma50": 372.15,
   "sma200": 383.87,
   "rsi": 42.6,
   "adx": 16.8,
   "bar": "2026-11-06",
   "peg": 4.49,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 51.56,
   "ivr": 92.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 305.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.16,
    "mid": 6.25,
    "roc": 21.4,
    "capital": 30500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25",
    "PEG 4.49 outside 0 to 2.5",
    "RSI 42.6 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.2,
    "mid": 5.35,
    "roc": 15.6,
    "capital": 35871
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.8 not above 25",
    "PEG 4.49 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 160.93,
   "sma50": 185.89,
   "sma200": 153.54,
   "rsi": 31.7,
   "adx": 27.2,
   "bar": "2026-11-06",
   "peg": 1.56,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 54.57,
   "ivr": 58.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 135.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.16,
    "mid": 2.78,
    "roc": 21.5,
    "capital": 13500
   },
   "putFails": [],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.22,
    "mid": 2.82,
    "roc": 18.3,
    "capital": 16093
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 219.63,
   "sma50": 243.84,
   "sma200": 170.25,
   "rsi": 37.0,
   "adx": 18.2,
   "bar": "2026-11-06",
   "peg": 6.22,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 72.34,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 172.5,
    "exp": "2026-12-18",
    "dte": 42,
    "delta": -0.15,
    "mid": 5.17,
    "roc": 26.1,
    "capital": 17250
   },
   "putFails": [
    "ADX 18.2 not above 25",
    "PEG 6.22 outside 0 to 2.5"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.16,
    "mid": 3.23,
    "roc": 15.3,
    "capital": 21963
   },
   "callFails": [
    "ADX 18.2 not above 25",
    "PEG 6.22 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 132.79,
   "sma50": 175.31,
   "sma200": 175.98,
   "rsi": 32.7,
   "adx": 29.0,
   "bar": "2026-11-06",
   "peg": 0.63,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 72.83,
   "ivr": 55.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 105.0,
    "exp": "2026-12-18",
    "dte": 42,
    "delta": -0.16,
    "mid": 3.3,
    "roc": 27.3,
    "capital": 10500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 42,
    "delta": 0.18,
    "mid": 2.69,
    "roc": 17.6,
    "capital": 13279
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 126.82,
   "sma50": 144.38,
   "sma200": 133.73,
   "rsi": 40.2,
   "adx": 16.0,
   "bar": "2026-11-06",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 77.9,
   "ivr": 28.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 100.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.16,
    "mid": 3.45,
    "roc": 36.0,
    "capital": 10000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.3 not above 30",
    "next earnings date unavailable",
    "RSI 40.2 too high for a put"
   ],
   "call": {
    "strike": 170.0,
    "exp": "2026-12-18",
    "dte": 42,
    "delta": 0.15,
    "mid": 2.29,
    "roc": 15.7,
    "capital": 12682
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 16.0 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 28.3 not above 30",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.01,
   "sma50": 9.87,
   "sma200": 10.69,
   "rsi": 29.9,
   "adx": 38.7,
   "bar": "2026-11-06",
   "peg": 0.1,
   "earnings": [
    "2026-11-09"
   ],
   "chainSource": "CBOE",
   "iv30": 111.19,
   "ivr": 76.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 4.5,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.17,
    "mid": 0.26,
    "roc": 59.1,
    "capital": 450
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 9.0,
    "exp": "2026-12-18",
    "dte": 42,
    "delta": 0.18,
    "mid": 0.15,
    "roc": 22.4,
    "capital": 601
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 78.83,
   "sma50": 105.93,
   "sma200": 91.98,
   "rsi": 28.6,
   "adx": 30.5,
   "bar": "2026-11-06",
   "peg": 1.27,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 70.46,
   "ivr": 55.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-05",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": -0.18,
    "mid": 2.05,
    "roc": 33.0,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 99.0,
    "exp": "2026-12-11",
    "dte": 35,
    "delta": 0.16,
    "mid": 1.15,
    "roc": 15.3,
    "capital": 7883
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "AMD",
   "strategy": "Cash-Secured Put",
   "strike": 350.0,
   "exp": "2026-12-11",
   "dte": 35,
   "delta": -0.16,
   "mid": 10.35,
   "roc": 30.8,
   "capital": 35000,
   "ivr": 67.5,
   "rsi": 36.5,
   "adx": 25.4,
   "price": 437.95,
   "sma50": 546.59,
   "sma200": 415.92
  },
  {
   "ticker": "PLTR",
   "strategy": "Cash-Secured Put",
   "strike": 135.0,
   "exp": "2026-12-11",
   "dte": 35,
   "delta": -0.16,
   "mid": 2.78,
   "roc": 21.5,
   "capital": 13500,
   "ivr": 58.6,
   "rsi": 31.7,
   "adx": 27.2,
   "price": 160.93,
   "sma50": 185.89,
   "sma200": 153.54
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 185.0,
   "exp": "2026-12-11",
   "dte": 35,
   "delta": 0.22,
   "mid": 2.82,
   "roc": 18.3,
   "capital": 16093,
   "ivr": 58.6,
   "rsi": 31.7,
   "adx": 27.2,
   "price": 160.93,
   "sma50": 185.89,
   "sma200": 153.54
  },
  {
   "ticker": "AMD",
   "strategy": "Covered Call",
   "strike": 545.0,
   "exp": "2026-12-11",
   "dte": 35,
   "delta": 0.16,
   "mid": 6.55,
   "roc": 15.6,
   "capital": 43795,
   "ivr": 67.5,
   "rsi": 36.5,
   "adx": 25.4,
   "price": 437.95,
   "sma50": 546.59,
   "sma200": 415.92
  }
 ],
 "errors": []
};
