window.SCANNER_DATA = {
 "generatedAt": "2026-10-14T23:15:49Z",
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
   "price": 221.3,
   "sma50": 223.21,
   "sma200": 202.69,
   "rsi": 43.9,
   "adx": 15.9,
   "bar": "2026-10-14",
   "peg": 0.48,
   "earnings": [
    "2026-11-17"
   ],
   "chainSource": "CBOE",
   "iv30": 33.58,
   "ivr": 10.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 200.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.2,
    "mid": 3.7,
    "roc": 15.3,
    "capital": 20000
   },
   "putFails": [
    "ADX 15.9 not above 25",
    "IV rank 10.9 not above 30",
    "RSI 43.9 too high for a put"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.29,
    "mid": 3.47,
    "roc": 19.1,
    "capital": 22130
   },
   "callFails": [
    "ADX 15.9 not above 25",
    "IV rank 10.9 not above 30"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 570.82,
   "sma50": 534.75,
   "sma200": 390.95,
   "rsi": 46.5,
   "adx": 22.2,
   "bar": "2026-10-14",
   "peg": 0.63,
   "earnings": [
    "2026-11-03"
   ],
   "chainSource": "CBOE",
   "iv30": 58.12,
   "ivr": 31.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 480.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.15,
    "mid": 9.27,
    "roc": 19.1,
    "capital": 48000
   },
   "putFails": [
    "ADX 22.2 not above 25",
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 685.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.16,
    "mid": 7.55,
    "roc": 16.1,
    "capital": 57082
   },
   "callFails": [
    "ADX 22.2 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 533.69,
   "sma50": 503.91,
   "sma200": 434.78,
   "rsi": 62.4,
   "adx": 40.1,
   "bar": "2026-10-14",
   "peg": 1.62,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 31.18,
   "ivr": 45.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 500.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.22,
    "mid": 6.45,
    "roc": 15.7,
    "capital": 50000
   },
   "putFails": [
    "RSI 62.4 too high for a put"
   ],
   "call": {
    "strike": 565.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.29,
    "mid": 7.68,
    "roc": 17.5,
    "capital": 53369
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "META",
   "price": 737.54,
   "sma50": 649.89,
   "sma200": 631.37,
   "rsi": 58.1,
   "adx": 37.1,
   "bar": "2026-10-14",
   "peg": 0.98,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.73,
   "ivr": 62.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 655.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 8.53,
    "roc": 15.8,
    "capital": 65500
   },
   "putFails": [
    "RSI 58.1 too high for a put"
   ],
   "call": {
    "strike": 835.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.19,
    "mid": 9.07,
    "roc": 15.0,
    "capital": 73754
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 347.64,
   "sma50": 345.19,
   "sma200": 340.59,
   "rsi": 51.2,
   "adx": 18.6,
   "bar": "2026-10-14",
   "peg": 1.25,
   "earnings": [
    "2026-10-28"
   ],
   "chainSource": "CBOE",
   "iv30": 37.18,
   "ivr": 65.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 320.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.2,
    "mid": 4.42,
    "roc": 16.8,
    "capital": 32000
   },
   "putFails": [
    "ADX 18.6 not above 25",
    "RSI 51.2 too high for a put"
   ],
   "call": {
    "strike": 380.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.23,
    "mid": 4.93,
    "roc": 17.2,
    "capital": 34764
   },
   "callFails": [
    "ADX 18.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 254.08,
   "sma50": 257.88,
   "sma200": 242.53,
   "rsi": 49.3,
   "adx": 14.4,
   "bar": "2026-10-14",
   "peg": 1.48,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 40.38,
   "ivr": 61.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 230.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.18,
    "mid": 3.27,
    "roc": 17.3,
    "capital": 23000
   },
   "putFails": [
    "ADX 14.4 not above 25",
    "RSI 49.3 too high for a put"
   ],
   "call": {
    "strike": 280.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.23,
    "mid": 3.47,
    "roc": 16.6,
    "capital": 25408
   },
   "callFails": [
    "ADX 14.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 367.16,
   "sma50": 357.94,
   "sma200": 388.98,
   "rsi": 49.3,
   "adx": 15.3,
   "bar": "2026-10-14",
   "peg": 4.54,
   "earnings": [
    "2026-10-21"
   ],
   "chainSource": "CBOE",
   "iv30": 43.72,
   "ivr": 22.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 325.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.15,
    "mid": 4.0,
    "roc": 15.0,
    "capital": 32500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 15.3 not above 25",
    "PEG 4.54 outside 0 to 2.5",
    "IV rank 22.0 not above 30",
    "RSI 49.3 too high for a put"
   ],
   "call": {
    "strike": 415.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.19,
    "mid": 4.58,
    "roc": 15.2,
    "capital": 36716
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
   "price": 200.97,
   "sma50": 181.12,
   "sma200": 152.54,
   "rsi": 63.3,
   "adx": 37.1,
   "bar": "2026-10-14",
   "peg": 1.85,
   "earnings": [
    "2026-11-02"
   ],
   "chainSource": "CBOE",
   "iv30": 60.19,
   "ivr": 55.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 170.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 3.3,
    "roc": 23.6,
    "capital": 17000
   },
   "putFails": [
    "RSI 63.3 too high for a put"
   ],
   "call": {
    "strike": 240.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.17,
    "mid": 2.84,
    "roc": 17.2,
    "capital": 20097
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 249.29,
   "sma50": 232.08,
   "sma200": 159.39,
   "rsi": 49.0,
   "adx": 22.6,
   "bar": "2026-10-14",
   "peg": 8.4,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "CBOE",
   "iv30": 52.27,
   "ivr": 47.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 215.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.17,
    "mid": 4.32,
    "roc": 19.8,
    "capital": 21500
   },
   "putFails": [
    "ADX 22.6 not above 25",
    "PEG 8.40 outside 0 to 2.5",
    "RSI 49.0 too high for a put"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.19,
    "mid": 3.4,
    "roc": 16.6,
    "capital": 24929
   },
   "callFails": [
    "ADX 22.6 not above 25",
    "PEG 8.40 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 172.89,
   "sma50": 176.4,
   "sma200": 182.86,
   "rsi": 43.9,
   "adx": 17.6,
   "bar": "2026-10-14",
   "peg": 2.37,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 68.75,
   "ivr": 44.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 145.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": -0.17,
    "mid": 3.83,
    "roc": 26.0,
    "capital": 14500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.6 not above 25",
    "RSI 43.9 too high for a put"
   ],
   "call": {
    "strike": 220.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": 0.17,
    "mid": 3.23,
    "roc": 18.4,
    "capital": 17289
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.6 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 143.24,
   "sma50": 133.07,
   "sma200": 135.72,
   "rsi": 46.0,
   "adx": 30.0,
   "bar": "2026-10-14",
   "peg": 2.85,
   "earnings": [
    "2026-10-29"
   ],
   "chainSource": "CBOE",
   "iv30": 69.89,
   "ivr": 18.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 115.0,
    "exp": "2026-11-27",
    "dte": 44,
    "delta": -0.15,
    "mid": 3.3,
    "roc": 23.8,
    "capital": 11500
   },
   "putFails": [
    "PEG 2.85 outside 0 to 2.5",
    "IV rank 18.0 not above 30",
    "RSI 46.0 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-11-20",
    "dte": 37,
    "delta": 0.16,
    "mid": 2.54,
    "roc": 17.5,
    "capital": 14324
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
   "rsi": 25.1,
   "adx": 19.6,
   "bar": "2026-10-14",
   "peg": 0.1,
   "earnings": [
    "2026-11-04"
   ],
   "chainSource": "CBOE",
   "iv30": 87.25,
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
    "mid": 0.16,
    "roc": 16.6,
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
   "price": 101.08,
   "sma50": 108.24,
   "sma200": 93.91,
   "rsi": 37.3,
   "adx": 13.0,
   "bar": "2026-10-14",
   "peg": 2.14,
   "earnings": [
    "2026-10-27"
   ],
   "chainSource": "CBOE",
   "iv30": 66.07,
   "ivr": 36.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-10-13",
   "put": {
    "strike": 85.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": -0.16,
    "mid": 1.77,
    "roc": 25.3,
    "capital": 8500
   },
   "putFails": [
    "ADX 13.0 not above 25"
   ],
   "call": {
    "strike": 126.0,
    "exp": "2026-11-13",
    "dte": 30,
    "delta": 0.15,
    "mid": 1.36,
    "roc": 16.4,
    "capital": 10108
   },
   "callFails": [
    "ADX 13.0 not above 25"
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
   "delta": 0.29,
   "mid": 7.68,
   "roc": 17.5,
   "capital": 53369,
   "ivr": 45.3,
   "rsi": 62.4,
   "adx": 40.1,
   "price": 533.69,
   "sma50": 503.91,
   "sma200": 434.78
  },
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 240.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.17,
   "mid": 2.84,
   "roc": 17.2,
   "capital": 20097,
   "ivr": 55.9,
   "rsi": 63.3,
   "adx": 37.1,
   "price": 200.97,
   "sma50": 181.12,
   "sma200": 152.54
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 835.0,
   "exp": "2026-11-13",
   "dte": 30,
   "delta": 0.19,
   "mid": 9.07,
   "roc": 15.0,
   "capital": 73754,
   "ivr": 62.0,
   "rsi": 58.1,
   "adx": 37.1,
   "price": 737.54,
   "sma50": 649.89,
   "sma200": 631.37
  }
 ],
 "errors": []
};
