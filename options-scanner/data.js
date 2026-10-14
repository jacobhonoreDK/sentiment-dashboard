window.SCANNER_DATA = {
 "generatedAt": "2026-10-14T04:55:55Z",
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
   "price": 228.52,
   "sma50": 223.03,
   "sma200": 202.54,
   "rsi": 52.0,
   "adx": 16.1,
   "bar": "2026-10-13",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 31.28,
   "ivr": 9.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 210.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.23,
    "mid": 4.22,
    "roc": 16.7,
    "capital": 21000
   },
   "putFails": [
    "ADX 16.1 not above 25",
    "IV rank 9.0 not above 30",
    "RSI 52.0 too high for a put"
   ],
   "call": {
    "strike": 245.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.24,
    "mid": 2.72,
    "roc": 14.5,
    "capital": 22852
   },
   "callFails": [
    "ADX 16.1 not above 25",
    "IV rank 9.0 not above 30",
    "best ROC 14.5% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 605.53,
   "sma50": 533.7,
   "sma200": 389.17,
   "rsi": 55.8,
   "adx": 23.6,
   "bar": "2026-10-13",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 55.93,
   "ivr": 23.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 520.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 8.93,
    "roc": 20.9,
    "capital": 52000
   },
   "putFails": [
    "ADX 23.6 not above 25",
    "IV rank 23.8 not above 30",
    "RSI 55.8 too high for a put"
   ],
   "call": {
    "strike": 730.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.15,
    "mid": 7.45,
    "roc": 15.0,
    "capital": 60553
   },
   "callFails": [
    "ADX 23.6 not above 25",
    "IV rank 23.8 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 543.45,
   "sma50": 503.09,
   "sma200": 434.55,
   "rsi": 70.7,
   "adx": 40.8,
   "bar": "2026-10-13",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 30.2,
   "ivr": 47.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 510.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.22,
    "mid": 6.45,
    "roc": 15.4,
    "capital": 51000
   },
   "putFails": [
    "RSI 70.7 too high for a put"
   ],
   "call": {
    "strike": 580.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.26,
    "mid": 7.08,
    "roc": 15.8,
    "capital": 54345
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 762.5,
   "sma50": 646.9,
   "sma200": 631.0,
   "rsi": 66.0,
   "adx": 36.7,
   "bar": "2026-10-13",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.56,
   "ivr": 64.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 680.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.17,
    "mid": 9.18,
    "roc": 16.4,
    "capital": 68000
   },
   "putFails": [
    "RSI 66.0 too high for a put"
   ],
   "call": {
    "strike": 860.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.2,
    "mid": 10.3,
    "roc": 16.4,
    "capital": 76250
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 353.78,
   "sma50": 345.79,
   "sma200": 340.42,
   "rsi": 58.2,
   "adx": 18.5,
   "bar": "2026-10-13",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 36.31,
   "ivr": 64.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.19,
    "mid": 4.4,
    "roc": 16.5,
    "capital": 32500
   },
   "putFails": [
    "ADX 18.5 not above 25",
    "RSI 58.2 too high for a put"
   ],
   "call": {
    "strike": 385.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.24,
    "mid": 4.85,
    "roc": 16.7,
    "capital": 35378
   },
   "callFails": [
    "ADX 18.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 258.58,
   "sma50": 258.35,
   "sma200": 242.42,
   "rsi": 54.4,
   "adx": 15.1,
   "bar": "2026-10-13",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 39.47,
   "ivr": 58.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 235.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.19,
    "mid": 3.2,
    "roc": 16.6,
    "capital": 23500
   },
   "putFails": [
    "ADX 15.1 not above 25",
    "RSI 54.4 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.23,
    "mid": 3.53,
    "roc": 16.6,
    "capital": 25858
   },
   "callFails": [
    "ADX 15.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 375.23,
   "sma50": 357.14,
   "sma200": 389.52,
   "rsi": 54.5,
   "adx": 16.3,
   "bar": "2026-10-13",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 42.36,
   "ivr": 20.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 335.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 4.17,
    "roc": 15.2,
    "capital": 33500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 16.3 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 20.8 not above 30",
    "RSI 54.5 too high for a put"
   ],
   "call": {
    "strike": 420.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.21,
    "mid": 5.15,
    "roc": 16.7,
    "capital": 37523
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
   "price": 208.67,
   "sma50": 180.36,
   "sma200": 152.48,
   "rsi": 75.6,
   "adx": 37.0,
   "bar": "2026-10-13",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 57.7,
   "ivr": 51.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 177.5,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.15,
    "mid": 3.17,
    "roc": 21.8,
    "capital": 17750
   },
   "putFails": [
    "RSI 75.6 too high for a put"
   ],
   "call": {
    "strike": 250.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.76,
    "roc": 16.1,
    "capital": 20867
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 261.21,
   "sma50": 231.32,
   "sma200": 158.74,
   "rsi": 55.8,
   "adx": 24.3,
   "bar": "2026-10-13",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 51.0,
   "ivr": 43.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 222.5,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.77,
    "roc": 16.7,
    "capital": 22250
   },
   "putFails": [
    "ADX 24.3 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 55.8 too high for a put"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.18,
    "mid": 3.5,
    "roc": 16.3,
    "capital": 26121
   },
   "callFails": [
    "ADX 24.3 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 181.79,
   "sma50": 175.95,
   "sma200": 183.18,
   "rsi": 49.5,
   "adx": 18.6,
   "bar": "2026-10-13",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 65.74,
   "ivr": 38.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 155.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.19,
    "mid": 4.53,
    "roc": 28.8,
    "capital": 15500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 18.6 not above 25",
    "RSI 49.5 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": 0.18,
    "mid": 3.53,
    "roc": 19.1,
    "capital": 18179
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 18.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 152.18,
   "sma50": 132.15,
   "sma200": 135.8,
   "rsi": 53.5,
   "adx": 32.2,
   "bar": "2026-10-13",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 66.69,
   "ivr": 14.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 125.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.15,
    "mid": 2.87,
    "roc": 22.6,
    "capital": 12500
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 14.6 not above 30",
    "RSI 53.5 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.15,
    "mid": 2.23,
    "roc": 17.8,
    "capital": 15218
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 14.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 9.11,
   "sma50": 11.06,
   "sma200": 10.97,
   "rsi": 29.7,
   "adx": 18.2,
   "bar": "2026-10-13",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 79.22,
   "ivr": 3.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 7.5,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.17,
    "mid": 0.21,
    "roc": 34.1,
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
    "dte": 44,
    "delta": 0.15,
    "mid": 0.17,
    "roc": 15.5,
    "capital": 911
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
   "price": 110.52,
   "sma50": 108.09,
   "sma200": 94.0,
   "rsi": 48.1,
   "adx": 12.8,
   "bar": "2026-10-13",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 64.57,
   "ivr": 33.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-12",
   "put": {
    "strike": 95.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.18,
    "mid": 2.28,
    "roc": 29.2,
    "capital": 9500
   },
   "putFails": [
    "ADX 12.8 not above 25",
    "RSI 48.1 too high for a put"
   ],
   "call": {
    "strike": 140.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": 0.16,
    "mid": 1.81,
    "roc": 16.2,
    "capital": 11052
   },
   "callFails": [
    "ADX 12.8 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 860.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.2,
   "mid": 10.3,
   "roc": 16.4,
   "capital": 76250,
   "ivr": 64.4,
   "rsi": 66.0,
   "adx": 36.7,
   "price": 762.5,
   "sma50": 646.9,
   "sma200": 631.0
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 250.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.16,
   "mid": 2.76,
   "roc": 16.1,
   "capital": 20867,
   "ivr": 51.0,
   "rsi": 75.6,
   "adx": 37.0,
   "price": 208.67,
   "sma50": 180.36,
   "sma200": 152.48
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 580.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.26,
   "mid": 7.08,
   "roc": 15.8,
   "capital": 54345,
   "ivr": 47.5,
   "rsi": 70.7,
   "adx": 40.8,
   "price": 543.45,
   "sma50": 503.09,
   "sma200": 434.55
  }
 ],
 "errors": []
};
