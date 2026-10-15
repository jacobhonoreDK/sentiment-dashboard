window.SCANNER_DATA = {
 "generatedAt": "2026-10-15T19:10:06Z",
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
   "price": 217.81,
   "sma50": 223.19,
   "sma200": 202.84,
   "rsi": 40.7,
   "adx": 16.5,
   "bar": "2026-10-15",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 35.5,
   "ivr": 20.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.19,
    "mid": 3.47,
    "roc": 15.1,
    "capital": 19500
   },
   "putFails": [
    "ADX 16.5 not above 25",
    "IV rank 20.9 not above 30",
    "RSI 40.7 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": 0.24,
    "mid": 3.58,
    "roc": 13.9,
    "capital": 21781
   },
   "callFails": [
    "ADX 16.5 not above 25",
    "IV rank 20.9 not above 30",
    "best ROC 13.9% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 559.95,
   "sma50": 536.3,
   "sma200": 392.67,
   "rsi": 44.0,
   "adx": 22.2,
   "bar": "2026-10-15",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 58.26,
   "ivr": 35.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 470.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.16,
    "mid": 9.65,
    "roc": 20.8,
    "capital": 47000
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "RSI 44.0 too high for a put"
   ],
   "call": {
    "strike": 660.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.19,
    "mid": 8.98,
    "roc": 16.3,
    "capital": 55995
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 540.69,
   "sma50": 504.97,
   "sma200": 435.05,
   "rsi": 65.6,
   "adx": 39.3,
   "bar": "2026-10-15",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.07,
   "ivr": 47.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 505.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.23,
    "mid": 7.68,
    "roc": 15.4,
    "capital": 50500
   },
   "putFails": [
    "RSI 65.6 too high for a put"
   ],
   "call": {
    "strike": 575.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.28,
    "mid": 8.2,
    "roc": 15.4,
    "capital": 54069
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 739.64,
   "sma50": 652.91,
   "sma200": 631.77,
   "rsi": 58.6,
   "adx": 36.1,
   "bar": "2026-10-15",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.62,
   "ivr": 61.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 660.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.18,
    "mid": 10.15,
    "roc": 15.6,
    "capital": 66000
   },
   "putFails": [
    "RSI 58.6 too high for a put"
   ],
   "call": {
    "strike": 835.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.21,
    "mid": 11.18,
    "roc": 15.3,
    "capital": 73964
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 349.28,
   "sma50": 344.92,
   "sma200": 340.77,
   "rsi": 52.9,
   "adx": 17.7,
   "bar": "2026-10-15",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.09,
   "ivr": 70.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 320.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.2,
    "mid": 4.78,
    "roc": 15.1,
    "capital": 32000
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "RSI 52.9 too high for a put"
   ],
   "call": {
    "strike": 380.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.26,
    "mid": 5.65,
    "roc": 16.4,
    "capital": 34928
   },
   "callFails": [
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 254.92,
   "sma50": 257.52,
   "sma200": 242.64,
   "rsi": 50.3,
   "adx": 13.8,
   "bar": "2026-10-15",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 39.57,
   "ivr": 63.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.19,
    "mid": 3.53,
    "roc": 15.5,
    "capital": 23000
   },
   "putFails": [
    "ADX 13.8 not above 25",
    "RSI 50.3 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.24,
    "mid": 3.97,
    "roc": 15.8,
    "capital": 25492
   },
   "callFails": [
    "ADX 13.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 361.96,
   "sma50": 358.75,
   "sma200": 388.49,
   "rsi": 46.2,
   "adx": 15.0,
   "bar": "2026-10-15",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 46.37,
   "ivr": 27.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 320.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.18,
    "mid": 5.35,
    "roc": 17.0,
    "capital": 32000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 27.6 not above 30",
    "RSI 46.2 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.22,
    "mid": 5.85,
    "roc": 16.4,
    "capital": 36196
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.0 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 27.6 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 200.02,
   "sma50": 181.96,
   "sma200": 152.62,
   "rsi": 61.9,
   "adx": 35.7,
   "bar": "2026-10-15",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 60.59,
   "ivr": 63.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 170.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.88,
    "roc": 23.1,
    "capital": 17000
   },
   "putFails": [
    "RSI 61.9 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.18,
    "mid": 3.28,
    "roc": 16.6,
    "capital": 20002
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 242.34,
   "sma50": 232.73,
   "sma200": 160.0,
   "rsi": 45.5,
   "adx": 21.8,
   "bar": "2026-10-15",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 51.79,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 207.5,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.16,
    "mid": 3.78,
    "roc": 18.4,
    "capital": 20750
   },
   "putFails": [
    "ADX 21.8 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 45.5 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.19,
    "mid": 3.73,
    "roc": 15.6,
    "capital": 24234
   },
   "callFails": [
    "ADX 21.8 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 181.91,
   "sma50": 177.04,
   "sma200": 182.6,
   "rsi": 50.0,
   "adx": 17.3,
   "bar": "2026-10-15",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.97,
   "ivr": 49.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 150.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.16,
    "mid": 3.62,
    "roc": 24.5,
    "capital": 15000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.3 not above 25",
    "RSI 50.0 too high for a put"
   ],
   "call": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.18,
    "mid": 3.42,
    "roc": 19.1,
    "capital": 18191
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 149.38,
   "sma50": 134.09,
   "sma200": 135.69,
   "rsi": 51.1,
   "adx": 28.7,
   "bar": "2026-10-15",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.34,
   "ivr": 22.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 120.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.15,
    "mid": 3.22,
    "roc": 22.8,
    "capital": 12000
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.7 not above 30",
    "RSI 51.1 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.48,
    "roc": 16.8,
    "capital": 14938
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.7 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 8.14,
   "sma50": 10.93,
   "sma200": 10.96,
   "rsi": 24.7,
   "adx": 21.3,
   "bar": "2026-10-15",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 88.1,
   "ivr": 25.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 6.5,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.19,
    "mid": 0.3,
    "roc": 38.5,
    "capital": 650
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 21.3 not above 25",
    "IV rank 25.3 not above 30"
   ],
   "call": {
    "strike": 11.5,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": 0.16,
    "mid": 0.17,
    "roc": 18.2,
    "capital": 814
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 21.3 not above 25",
    "IV rank 25.3 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 103.15,
   "sma50": 108.45,
   "sma200": 93.84,
   "rsi": 40.4,
   "adx": 14.0,
   "bar": "2026-10-15",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.4,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.15,
    "mid": 1.92,
    "roc": 23.0,
    "capital": 8500
   },
   "putFails": [
    "ADX 14.0 not above 25",
    "RSI 40.4 too high for a put"
   ],
   "call": {
    "strike": 130.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.16,
    "mid": 1.65,
    "roc": 16.2,
    "capital": 10315
   },
   "callFails": [
    "ADX 14.0 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 240.0,
   "exp": "2026-11-20",
   "dte": 36,
   "delta": 0.18,
   "mid": 3.28,
   "roc": 16.6,
   "capital": 20002,
   "ivr": 63.2,
   "rsi": 61.9,
   "adx": 35.7,
   "price": 200.02,
   "sma50": 181.96,
   "sma200": 152.62
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 575.0,
   "exp": "2026-11-20",
   "dte": 36,
   "delta": 0.28,
   "mid": 8.2,
   "roc": 15.4,
   "capital": 54069,
   "ivr": 47.9,
   "rsi": 65.6,
   "adx": 39.3,
   "price": 540.69,
   "sma50": 504.97,
   "sma200": 435.05
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 835.0,
   "exp": "2026-11-20",
   "dte": 36,
   "delta": 0.21,
   "mid": 11.18,
   "roc": 15.3,
   "capital": 73964,
   "ivr": 61.9,
   "rsi": 58.6,
   "adx": 36.1,
   "price": 739.64,
   "sma50": 652.91,
   "sma200": 631.77
  }
 ],
 "errors": []
};
