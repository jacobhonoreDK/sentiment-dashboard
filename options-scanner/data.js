window.SCANNER_DATA = {
 "generatedAt": "2026-11-17T14:26:24Z",
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
   "price": 156.14,
   "sma50": 213.16,
   "sma200": 204.02,
   "rsi": 22.7,
   "adx": 43.5,
   "bar": "2026-11-16",
   "peg": 0.2,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 63.02,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 132.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.16,
    "mid": 2.79,
    "roc": 24.9,
    "capital": 13200
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 193.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.15,
    "mid": 2.04,
    "roc": 15.3,
    "capital": 15614
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 504.28,
   "sma50": 555.09,
   "sma200": 424.46,
   "rsi": 46.7,
   "adx": 18.8,
   "bar": "2026-11-16",
   "peg": 0.48,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "CBOE",
   "iv30": 73.02,
   "ivr": 70.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 430.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.18,
    "mid": 13.7,
    "roc": 37.5,
    "capital": 43000
   },
   "putFails": [
    "ADX 18.8 not above 25",
    "RSI 46.7 too high for a put"
   ],
   "call": {
    "strike": 610.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.24,
    "mid": 13.18,
    "roc": 30.8,
    "capital": 50428
   },
   "callFails": [
    "ADX 18.8 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 517.99,
   "sma50": 519.36,
   "sma200": 441.86,
   "rsi": 46.4,
   "adx": 16.7,
   "bar": "2026-11-16",
   "peg": 1.55,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 30.46,
   "ivr": 45.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 480.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.23,
    "mid": 7.75,
    "roc": 19.0,
    "capital": 48000
   },
   "putFails": [
    "ADX 16.7 not above 25",
    "RSI 46.4 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 16.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 626.41,
   "sma50": 680.0,
   "sma200": 630.32,
   "rsi": 43.9,
   "adx": 23.5,
   "bar": "2026-11-16",
   "peg": 0.83,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 42.66,
   "ivr": 58.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 545.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.15,
    "mid": 6.92,
    "roc": 15.0,
    "capital": 54500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25",
    "RSI 43.9 too high for a put"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.21,
    "mid": 8.4,
    "roc": 15.8,
    "capital": 62641
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 23.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 283.72,
   "sma50": 327.09,
   "sma200": 338.21,
   "rsi": 34.5,
   "adx": 26.1,
   "bar": "2026-11-16",
   "peg": 1.04,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 35.84,
   "ivr": 66.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 257.75,
   "sma50": 254.8,
   "sma200": 244.69,
   "rsi": 49.6,
   "adx": 12.2,
   "bar": "2026-11-16",
   "peg": 1.24,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 36.16,
   "ivr": 47.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.18,
    "mid": 3.32,
    "roc": 16.6,
    "capital": 23500
   },
   "putFails": [
    "ADX 12.2 not above 25",
    "next earnings date unavailable",
    "RSI 49.6 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.25,
    "mid": 3.54,
    "roc": 16.1,
    "capital": 25775
   },
   "callFails": [
    "ADX 12.2 not above 25",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 379.74,
   "sma50": 375.25,
   "sma200": 382.48,
   "rsi": 49.5,
   "adx": 12.9,
   "bar": "2026-11-16",
   "peg": 4.55,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "CBOE",
   "iv30": 49.61,
   "ivr": 69.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 330.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.16,
    "mid": 5.8,
    "roc": 20.7,
    "capital": 33000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 12.9 not above 25",
    "PEG 4.55 outside 0 to 2.5",
    "RSI 49.5 too high for a put"
   ],
   "call": {
    "strike": 435.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.2,
    "mid": 5.12,
    "roc": 15.9,
    "capital": 37974
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 12.9 not above 25",
    "PEG 4.55 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 160.39,
   "sma50": 184.51,
   "sma200": 153.79,
   "rsi": 34.9,
   "adx": 28.4,
   "bar": "2026-11-16",
   "peg": 1.33,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "CBOE",
   "iv30": 55.74,
   "ivr": 53.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 140.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.19,
    "mid": 3.11,
    "roc": 26.2,
    "capital": 14000
   },
   "putFails": [],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.21,
    "mid": 2.63,
    "roc": 19.3,
    "capital": 16039
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 223.21,
   "sma50": 245.12,
   "sma200": 173.61,
   "rsi": 40.5,
   "adx": 20.8,
   "bar": "2026-11-16",
   "peg": 5.85,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 79.19,
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 180.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.16,
    "mid": 5.07,
    "roc": 33.2,
    "capital": 18000
   },
   "putFails": [
    "ADX 20.8 not above 25",
    "PEG 5.85 outside 0 to 2.5",
    "RSI 40.5 too high for a put"
   ],
   "call": {
    "strike": 287.5,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.15,
    "mid": 3.4,
    "roc": 17.9,
    "capital": 22321
   },
   "callFails": [
    "ADX 20.8 not above 25",
    "PEG 5.85 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 119.84,
   "sma50": 169.09,
   "sma200": 173.68,
   "rsi": 29.2,
   "adx": 34.1,
   "bar": "2026-11-16",
   "peg": 0.58,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 72.93,
   "ivr": 57.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 95.0,
    "exp": "2026-12-31",
    "dte": 44,
    "delta": -0.16,
    "mid": 2.96,
    "roc": 25.8,
    "capital": 9500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 155.0,
    "exp": "2026-12-24",
    "dte": 37,
    "delta": 0.16,
    "mid": 2.19,
    "roc": 18.0,
    "capital": 11984
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 103.03,
   "sma50": 142.47,
   "sma200": 132.55,
   "rsi": 28.7,
   "adx": 21.6,
   "bar": "2026-11-16",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 82.31,
   "ivr": 32.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 80.0,
    "exp": "2026-12-24",
    "dte": 37,
    "delta": -0.16,
    "mid": 2.96,
    "roc": 36.4,
    "capital": 8000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 21.6 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 135.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.15,
    "mid": 1.68,
    "roc": 19.1,
    "capital": 10303
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 21.6 not above 25",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 6.64,
   "sma50": 9.43,
   "sma200": 10.6,
   "rsi": 39.8,
   "adx": 32.3,
   "bar": "2026-11-16",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 100.23,
   "ivr": 48.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": {
    "strike": 5.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": -0.15,
    "mid": 0.2,
    "roc": 45.9,
    "capital": 500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 39.8 too high for a put"
   ],
   "call": {
    "strike": 9.5,
    "exp": "2026-12-24",
    "dte": 37,
    "delta": 0.16,
    "mid": 0.15,
    "roc": 21.5,
    "capital": 664
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 72.06,
   "sma50": 102.25,
   "sma200": 91.27,
   "rsi": 29.0,
   "adx": 30.5,
   "bar": "2026-11-16",
   "peg": 1.26,
   "earnings": [],
   "chainSource": "CBOE",
   "iv30": 70.52,
   "ivr": 54.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-16",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": {
    "strike": 90.0,
    "exp": "2026-12-18",
    "dte": 31,
    "delta": 0.17,
    "mid": 1.12,
    "roc": 18.4,
    "capital": 7206
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
   "ticker": "PLTR",
   "strategy": "Cash-Secured Put",
   "strike": 140.0,
   "exp": "2026-12-18",
   "dte": 31,
   "delta": -0.19,
   "mid": 3.11,
   "roc": 26.2,
   "capital": 14000,
   "ivr": 53.7,
   "rsi": 34.9,
   "adx": 28.4,
   "price": 160.39,
   "sma50": 184.51,
   "sma200": 153.79
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 185.0,
   "exp": "2026-12-18",
   "dte": 31,
   "delta": 0.21,
   "mid": 2.63,
   "roc": 19.3,
   "capital": 16039,
   "ivr": 53.7,
   "rsi": 34.9,
   "adx": 28.4,
   "price": 160.39,
   "sma50": 184.51,
   "sma200": 153.79
  }
 ],
 "errors": []
};
