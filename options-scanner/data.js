window.SCANNER_DATA = {
 "generatedAt": "2026-10-14T19:28:19Z",
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
   "price": 221.07,
   "sma50": 223.21,
   "sma200": 202.69,
   "rsi": 43.7,
   "adx": 15.9,
   "bar": "2026-10-14",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 34.41,
   "ivr": 10.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.22,
    "mid": 4.1,
    "roc": 17.0,
    "capital": 20000
   },
   "putFails": [
    "ADX 15.9 not above 25",
    "IV rank 10.9 not above 30",
    "RSI 43.7 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.27,
    "mid": 3.25,
    "roc": 17.9,
    "capital": 22107
   },
   "callFails": [
    "ADX 15.9 not above 25",
    "IV rank 10.9 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 571.55,
   "sma50": 534.76,
   "sma200": 390.95,
   "rsi": 46.7,
   "adx": 22.2,
   "bar": "2026-10-14",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 59.14,
   "ivr": 31.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 475.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.15,
    "mid": 9.73,
    "roc": 17.0,
    "capital": 47500
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "RSI 46.7 too high for a put"
   ],
   "call": {
    "strike": 690.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 7.07,
    "roc": 15.1,
    "capital": 57155
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 534.2,
   "sma50": 503.92,
   "sma200": 434.78,
   "rsi": 62.8,
   "adx": 40.1,
   "bar": "2026-10-14",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.05,
   "ivr": 45.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.23,
    "mid": 6.8,
    "roc": 16.5,
    "capital": 50000
   },
   "putFails": [
    "RSI 62.8 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.28,
    "mid": 7.72,
    "roc": 17.6,
    "capital": 53420
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 738.59,
   "sma50": 649.91,
   "sma200": 631.38,
   "rsi": 58.4,
   "adx": 37.1,
   "bar": "2026-10-14",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.71,
   "ivr": 62.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 655.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 8.57,
    "roc": 15.9,
    "capital": 65500
   },
   "putFails": [
    "RSI 58.4 too high for a put"
   ],
   "call": {
    "strike": 830.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.2,
    "mid": 9.52,
    "roc": 15.7,
    "capital": 73859
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 347.88,
   "sma50": 345.19,
   "sma200": 340.59,
   "rsi": 51.5,
   "adx": 18.6,
   "bar": "2026-10-14",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.09,
   "ivr": 65.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 320.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.2,
    "mid": 4.62,
    "roc": 17.6,
    "capital": 32000
   },
   "putFails": [
    "ADX 18.6 not above 25",
    "RSI 51.5 too high for a put"
   ],
   "call": {
    "strike": 380.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.23,
    "mid": 4.65,
    "roc": 16.3,
    "capital": 34788
   },
   "callFails": [
    "ADX 18.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 253.78,
   "sma50": 257.87,
   "sma200": 242.53,
   "rsi": 49.0,
   "adx": 14.5,
   "bar": "2026-10-14",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.3,
   "ivr": 61.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.19,
    "mid": 3.4,
    "roc": 18.0,
    "capital": 23000
   },
   "putFails": [
    "ADX 14.5 not above 25",
    "RSI 49.0 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.22,
    "mid": 3.35,
    "roc": 16.1,
    "capital": 25378
   },
   "callFails": [
    "ADX 14.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 365.73,
   "sma50": 357.91,
   "sma200": 388.97,
   "rsi": 48.4,
   "adx": 15.3,
   "bar": "2026-10-14",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 44.32,
   "ivr": 22.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.17,
    "mid": 4.55,
    "roc": 17.0,
    "capital": 32500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 22.0 not above 30",
    "RSI 48.4 too high for a put"
   ],
   "call": {
    "strike": 410.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.21,
    "mid": 5.0,
    "roc": 16.6,
    "capital": 36573
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 22.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 200.62,
   "sma50": 181.12,
   "sma200": 152.54,
   "rsi": 62.8,
   "adx": 37.1,
   "bar": "2026-10-14",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 60.28,
   "ivr": 55.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 170.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 3.35,
    "roc": 24.0,
    "capital": 17000
   },
   "putFails": [
    "RSI 62.8 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.83,
    "roc": 17.1,
    "capital": 20062
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 250.1,
   "sma50": 232.1,
   "sma200": 159.39,
   "rsi": 49.4,
   "adx": 22.6,
   "bar": "2026-10-14",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 52.57,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 212.5,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.15,
    "mid": 3.78,
    "roc": 17.5,
    "capital": 21250
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 49.4 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.19,
    "mid": 3.6,
    "roc": 17.5,
    "capital": 25010
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 172.15,
   "sma50": 176.38,
   "sma200": 182.86,
   "rsi": 43.5,
   "adx": 17.6,
   "bar": "2026-10-14",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.55,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 140.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.15,
    "mid": 3.52,
    "roc": 20.9,
    "capital": 14000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.6 not above 25",
    "RSI 43.5 too high for a put"
   ],
   "call": {
    "strike": 225.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": 0.16,
    "mid": 3.15,
    "roc": 15.2,
    "capital": 17215
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 142.54,
   "sma50": 133.05,
   "sma200": 135.72,
   "rsi": 45.5,
   "adx": 30.0,
   "bar": "2026-10-14",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 70.13,
   "ivr": 18.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.16,
    "mid": 3.3,
    "roc": 23.8,
    "capital": 11500
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 18.0 not above 30",
    "RSI 45.5 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.3,
    "roc": 19.6,
    "capital": 14254
   },
   "callFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 18.0 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 8.23,
   "sma50": 10.99,
   "sma200": 10.97,
   "rsi": 25.2,
   "adx": 19.6,
   "bar": "2026-10-14",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 87.97,
   "ivr": 10.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 6.5,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.15,
    "mid": 0.19,
    "roc": 35.6,
    "capital": 650
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.6 not above 25",
    "IV rank 10.4 not above 30"
   ],
   "call": {
    "strike": 12.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": 0.15,
    "mid": 0.17,
    "roc": 17.6,
    "capital": 823
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.6 not above 25",
    "IV rank 10.4 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 100.77,
   "sma50": 108.24,
   "sma200": 93.91,
   "rsi": 37.0,
   "adx": 12.9,
   "bar": "2026-10-14",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.31,
   "ivr": 36.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 1.89,
    "roc": 27.0,
    "capital": 8500
   },
   "putFails": [
    "ADX 12.9 not above 25"
   ],
   "call": {
    "strike": 126.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.15,
    "mid": 1.37,
    "roc": 16.5,
    "capital": 10077
   },
   "callFails": [
    "ADX 12.9 not above 25"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "MSFT",
   "strategy": "Covered Call",
   "strike": 565.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.28,
   "mid": 7.72,
   "roc": 17.6,
   "capital": 53420,
   "ivr": 45.3,
   "rsi": 62.8,
   "adx": 40.1,
   "price": 534.2,
   "sma50": 503.92,
   "sma200": 434.78
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 240.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.17,
   "mid": 2.83,
   "roc": 17.1,
   "capital": 20062,
   "ivr": 55.9,
   "rsi": 62.8,
   "adx": 37.1,
   "price": 200.62,
   "sma50": 181.12,
   "sma200": 152.54
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 830.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.2,
   "mid": 9.52,
   "roc": 15.7,
   "capital": 73859,
   "ivr": 62.0,
   "rsi": 58.4,
   "adx": 37.1,
   "price": 738.59,
   "sma50": 649.91,
   "sma200": 631.38
  }
 ],
 "errors": []
};
