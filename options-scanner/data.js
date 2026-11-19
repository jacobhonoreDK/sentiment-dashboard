window.SCANNER_DATA = {
 "generatedAt": "2026-11-19T21:37:43Z",
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
   "price": 145.98,
   "sma50": 208.86,
   "sma200": 203.58,
   "rsi": 19.6,
   "adx": 48.6,
   "bar": "2026-11-19",
   "peg": 0.18,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 53.39,
   "ivr": 59.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 125.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.17,
    "mid": 2.69,
    "roc": 22.4,
    "capital": 12500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 165.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.24,
    "mid": 2.88,
    "roc": 20.6,
    "capital": 14598
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 489.19,
   "sma50": 554.93,
   "sma200": 428.63,
   "rsi": 45.2,
   "adx": 17.3,
   "bar": "2026-11-19",
   "peg": 0.45,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 77.0,
   "ivr": 65.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 390.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.16,
    "mid": 11.47,
    "roc": 30.7,
    "capital": 39000
   },
   "putFails": [
    "ADX 17.3 not above 25",
    "RSI 45.2 too high for a put"
   ],
   "call": {
    "strike": 620.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.16,
    "mid": 7.6,
    "roc": 16.2,
    "capital": 48919
   },
   "callFails": [
    "ADX 17.3 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 498.3,
   "sma50": 520.06,
   "sma200": 443.18,
   "rsi": 39.2,
   "adx": 17.9,
   "bar": "2026-11-19",
   "peg": 1.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 33.86,
   "ivr": 54.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 455.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.2,
    "mid": 6.9,
    "roc": 15.8,
    "capital": 45500
   },
   "putFails": [
    "ADX 17.9 not above 25",
    "RSI 39.2 too high for a put"
   ],
   "call": {
    "strike": 530.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.29,
    "mid": 8.23,
    "roc": 17.2,
    "capital": 49830
   },
   "callFails": [
    "ADX 17.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 596.22,
   "sma50": 678.4,
   "sma200": 629.14,
   "rsi": 36.7,
   "adx": 23.6,
   "bar": "2026-11-19",
   "peg": 0.8,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 43.4,
   "ivr": 54.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 520.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.15,
    "mid": 7.55,
    "roc": 15.1,
    "capital": 52000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25"
   ],
   "call": {
    "strike": 660.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.23,
    "mid": 9.45,
    "roc": 16.5,
    "capital": 59622
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 272.66,
   "sma50": 323.76,
   "sma200": 337.3,
   "rsi": 30.6,
   "adx": 24.3,
   "bar": "2026-11-19",
   "peg": 1.0,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.2,
   "ivr": 62.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.22,
    "mid": 4.57,
    "roc": 19.1,
    "capital": 25000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 24.3 not above 25",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 295.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.26,
    "mid": 4.45,
    "roc": 17.0,
    "capital": 27266
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 24.3 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 257.37,
   "sma50": 255.23,
   "sma200": 245.03,
   "rsi": 49.0,
   "adx": 11.5,
   "bar": "2026-11-19",
   "peg": 1.2,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 37.85,
   "ivr": 48.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": -0.22,
    "mid": 4.72,
    "roc": 17.5,
    "capital": 23500
   },
   "putFails": [
    "ADX 11.5 not above 25",
    "next earnings date unavailable",
    "RSI 49.0 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.24,
    "mid": 3.6,
    "roc": 14.6,
    "capital": 25737
   },
   "callFails": [
    "ADX 11.5 not above 25",
    "next earnings date unavailable",
    "best ROC 14.6% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 374.41,
   "sma50": 376.03,
   "sma200": 381.92,
   "rsi": 47.2,
   "adx": 10.9,
   "bar": "2026-11-19",
   "peg": 4.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 51.06,
   "ivr": 63.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 315.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": -0.15,
    "mid": 5.45,
    "roc": 15.0,
    "capital": 31500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 10.9 not above 25",
    "PEG 4.43 outside 0 to 2.5",
    "RSI 47.2 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.22,
    "mid": 6.0,
    "roc": 16.7,
    "capital": 37441
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 10.9 not above 25",
    "PEG 4.43 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 153.68,
   "sma50": 183.73,
   "sma200": 153.9,
   "rsi": 31.3,
   "adx": 29.7,
   "bar": "2026-11-19",
   "peg": 1.24,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 57.66,
   "ivr": 54.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.17,
    "mid": 2.88,
    "roc": 23.1,
    "capital": 13000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.19,
    "mid": 2.48,
    "roc": 16.8,
    "capital": 15368
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 243.46,
   "sma50": 246.59,
   "sma200": 175.52,
   "rsi": 53.4,
   "adx": 19.5,
   "bar": "2026-11-19",
   "peg": 5.67,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 77.69,
   "ivr": 94.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 195.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": -0.16,
    "mid": 6.47,
    "roc": 28.9,
    "capital": 19500
   },
   "putFails": [
    "ADX 19.5 not above 25",
    "PEG 5.67 outside 0 to 2.5",
    "RSI 53.4 too high for a put"
   ],
   "call": {
    "strike": 305.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.19,
    "mid": 5.0,
    "roc": 21.4,
    "capital": 24346
   },
   "callFails": [
    "ADX 19.5 not above 25",
    "PEG 5.67 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 108.87,
   "sma50": 165.26,
   "sma200": 172.67,
   "rsi": 25.3,
   "adx": 38.8,
   "bar": "2026-11-19",
   "peg": 0.49,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 73.7,
   "ivr": 59.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.18,
    "mid": 2.9,
    "roc": 33.6,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 140.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.17,
    "mid": 1.92,
    "roc": 15.3,
    "capital": 10887
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 86.13,
   "sma50": 139.97,
   "sma200": 131.9,
   "rsi": 22.7,
   "adx": 27.9,
   "bar": "2026-11-19",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 93.19,
   "ivr": 46.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.15,
    "mid": 2.55,
    "roc": 40.9,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 120.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.15,
    "mid": 1.71,
    "roc": 17.3,
    "capital": 8613
   },
   "callFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.24,
   "sma50": 9.11,
   "sma200": 10.57,
   "rsi": 37.4,
   "adx": 30.9,
   "bar": "2026-11-19",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 103.64,
   "ivr": 42.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.2,
    "mid": 0.29,
    "roc": 59.4,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 9.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": 0.16,
    "mid": 0.14,
    "roc": 22.6,
    "capital": 624
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 68.65,
   "sma50": 99.47,
   "sma200": 91.02,
   "rsi": 26.8,
   "adx": 32.7,
   "bar": "2026-11-19",
   "peg": 1.12,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 72.77,
   "ivr": 50.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-18",
   "put": {
    "strike": 55.0,
    "exp": "2026-12-24",
    "dte": 35,
    "delta": -0.15,
    "mid": 1.38,
    "roc": 26.2,
    "capital": 5500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 88.0,
    "exp": "2026-12-31",
    "dte": 42,
    "delta": 0.17,
    "mid": 1.2,
    "roc": 15.2,
    "capital": 6865
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
 "errors": []
};
