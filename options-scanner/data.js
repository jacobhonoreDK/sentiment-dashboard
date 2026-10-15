window.SCANNER_DATA = {
 "generatedAt": "2026-10-15T15:03:07Z",
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
   "price": 216.34,
   "sma50": 223.16,
   "sma200": 202.83,
   "rsi": 39.4,
   "adx": 16.5,
   "bar": "2026-10-15",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 36.25,
   "ivr": 20.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 195.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.2,
    "mid": 3.7,
    "roc": 16.1,
    "capital": 19500
   },
   "putFails": [
    "ADX 16.5 not above 25",
    "IV rank 20.9 not above 30",
    "RSI 39.4 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": 0.24,
    "mid": 3.62,
    "roc": 14.2,
    "capital": 21634
   },
   "callFails": [
    "ADX 16.5 not above 25",
    "IV rank 20.9 not above 30",
    "best ROC 14.2% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 544.16,
   "sma50": 535.99,
   "sma200": 392.59,
   "rsi": 40.9,
   "adx": 22.2,
   "bar": "2026-10-15",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.5,
   "ivr": 35.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 455.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.15,
    "mid": 10.28,
    "roc": 19.2,
    "capital": 45500
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "RSI 40.9 too high for a put"
   ],
   "call": {
    "strike": 660.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.18,
    "mid": 8.52,
    "roc": 15.9,
    "capital": 54416
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 536.8,
   "sma50": 504.9,
   "sma200": 435.03,
   "rsi": 63.9,
   "adx": 39.3,
   "bar": "2026-10-15",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.39,
   "ivr": 47.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.23,
    "mid": 7.5,
    "roc": 15.2,
    "capital": 50000
   },
   "putFails": [
    "RSI 63.9 too high for a put"
   ],
   "call": {
    "strike": 570.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.29,
    "mid": 8.5,
    "roc": 16.1,
    "capital": 53680
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 731.85,
   "sma50": 652.75,
   "sma200": 631.74,
   "rsi": 56.4,
   "adx": 36.1,
   "bar": "2026-10-15",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.95,
   "ivr": 61.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 650.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.17,
    "mid": 9.97,
    "roc": 15.6,
    "capital": 65000
   },
   "putFails": [
    "RSI 56.4 too high for a put"
   ],
   "call": {
    "strike": 825.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.21,
    "mid": 11.22,
    "roc": 15.6,
    "capital": 73185
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 349.24,
   "sma50": 344.92,
   "sma200": 340.77,
   "rsi": 52.8,
   "adx": 17.7,
   "bar": "2026-10-15",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.82,
   "ivr": 70.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 320.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.21,
    "mid": 5.0,
    "roc": 15.8,
    "capital": 32000
   },
   "putFails": [
    "ADX 17.7 not above 25",
    "RSI 52.8 too high for a put"
   ],
   "call": {
    "strike": 380.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.26,
    "mid": 5.75,
    "roc": 16.7,
    "capital": 34924
   },
   "callFails": [
    "ADX 17.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 253.29,
   "sma50": 257.49,
   "sma200": 242.63,
   "rsi": 48.5,
   "adx": 13.8,
   "bar": "2026-10-15",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.29,
   "ivr": 63.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.21,
    "mid": 3.97,
    "roc": 17.5,
    "capital": 23000
   },
   "putFails": [
    "ADX 13.8 not above 25",
    "RSI 48.5 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.27,
    "mid": 4.75,
    "roc": 19.0,
    "capital": 25329
   },
   "callFails": [
    "ADX 13.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 361.3,
   "sma50": 358.74,
   "sma200": 388.48,
   "rsi": 45.8,
   "adx": 15.0,
   "bar": "2026-10-15",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 45.4,
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
    "RSI 45.8 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.21,
    "mid": 5.58,
    "roc": 15.6,
    "capital": 36130
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
   "price": 198.05,
   "sma50": 181.92,
   "sma200": 152.61,
   "rsi": 59.3,
   "adx": 35.8,
   "bar": "2026-10-15",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 61.15,
   "ivr": 63.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 165.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.16,
    "mid": 3.62,
    "roc": 22.3,
    "capital": 16500
   },
   "putFails": [
    "RSI 59.3 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": 0.2,
    "mid": 3.77,
    "roc": 16.2,
    "capital": 19805
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 243.11,
   "sma50": 232.74,
   "sma200": 160.01,
   "rsi": 45.8,
   "adx": 21.8,
   "bar": "2026-10-15",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 52.87,
   "ivr": 49.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 207.5,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.16,
    "mid": 4.05,
    "roc": 19.8,
    "capital": 20750
   },
   "putFails": [
    "ADX 21.8 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 45.8 too high for a put"
   ],
   "call": {
    "strike": 285.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.19,
    "mid": 3.77,
    "roc": 15.7,
    "capital": 24311
   },
   "callFails": [
    "ADX 21.8 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 174.9,
   "sma50": 176.9,
   "sma200": 182.57,
   "rsi": 45.4,
   "adx": 17.3,
   "bar": "2026-10-15",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.8,
   "ivr": 49.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.72,
    "roc": 26.0,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.3 not above 25",
    "RSI 45.4 too high for a put"
   ],
   "call": {
    "strike": 220.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.17,
    "mid": 3.23,
    "roc": 18.7,
    "capital": 17490
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 144.35,
   "sma50": 133.98,
   "sma200": 135.66,
   "rsi": 47.0,
   "adx": 28.7,
   "bar": "2026-10-15",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 71.26,
   "ivr": 22.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.16,
    "mid": 3.33,
    "roc": 24.5,
    "capital": 11500
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.7 not above 30",
    "RSI 47.0 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.16,
    "mid": 2.52,
    "roc": 17.7,
    "capital": 14435
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 22.7 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 8.02,
   "sma50": 10.92,
   "sma200": 10.96,
   "rsi": 24.2,
   "adx": 21.3,
   "bar": "2026-10-15",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 90.34,
   "ivr": 25.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 6.0,
    "exp": "2026-11-27",
    "dte": 43,
    "delta": -0.15,
    "mid": 0.22,
    "roc": 31.1,
    "capital": 600
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
    "delta": 0.15,
    "mid": 0.16,
    "roc": 16.9,
    "capital": 802
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
   "price": 99.71,
   "sma50": 108.38,
   "sma200": 93.82,
   "rsi": 36.0,
   "adx": 14.0,
   "bar": "2026-10-15",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.7,
   "ivr": 40.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-14",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": -0.2,
    "mid": 2.59,
    "roc": 31.0,
    "capital": 8500
   },
   "putFails": [
    "ADX 14.0 not above 25"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-11-20",
    "dte": 36,
    "delta": 0.16,
    "mid": 1.6,
    "roc": 16.3,
    "capital": 9971
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
   "strike": 235.0,
   "exp": "2026-11-27",
   "dte": 43,
   "delta": 0.2,
   "mid": 3.77,
   "roc": 16.2,
   "capital": 19805,
   "ivr": 63.2,
   "rsi": 59.3,
   "adx": 35.8,
   "price": 198.05,
   "sma50": 181.92,
   "sma200": 152.61
  },
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 570.0,
   "exp": "2026-11-20",
   "dte": 36,
   "delta": 0.29,
   "mid": 8.5,
   "roc": 16.1,
   "capital": 53680,
   "ivr": 47.9,
   "rsi": 63.9,
   "adx": 39.3,
   "price": 536.8,
   "sma50": 504.9,
   "sma200": 435.03
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 825.0,
   "exp": "2026-11-20",
   "dte": 36,
   "delta": 0.21,
   "mid": 11.22,
   "roc": 15.6,
   "capital": 73185,
   "ivr": 61.9,
   "rsi": 56.4,
   "adx": 36.1,
   "price": 731.85,
   "sma50": 652.75,
   "sma200": 631.74
  }
 ],
 "errors": []
};
