window.SCANNER_DATA = {
 "generatedAt": "2026-11-25T15:37:41Z",
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
   "price": 144.11,
   "sma50": 203.55,
   "sma200": 202.85,
   "rsi": 35.9,
   "adx": 47.9,
   "bar": "2026-11-25",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 86.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 120.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.19,
    "mid": 4.4,
    "roc": 37.2,
    "capital": 12000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.17,
    "mid": 2.47,
    "roc": 17.4,
    "capital": 14411
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 379.0,
   "sma50": 547.81,
   "sma200": 432.82,
   "rsi": 35.7,
   "adx": 20.7,
   "bar": "2026-11-25",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 90.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 290.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.15,
    "mid": 11.43,
    "roc": 39.9,
    "capital": 29000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 20.7 not above 25"
   ],
   "call": {
    "strike": 505.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.16,
    "mid": 7.53,
    "roc": 20.1,
    "capital": 37900
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 20.7 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 481.53,
   "sma50": 519.38,
   "sma200": 444.84,
   "rsi": 36.1,
   "adx": 19.1,
   "bar": "2026-11-25",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 57.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 430.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.18,
    "mid": 6.6,
    "roc": 15.6,
    "capital": 43000
   },
   "putFails": [
    "ADX 19.1 not above 25"
   ],
   "call": {
    "strike": 520.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.27,
    "mid": 7.7,
    "roc": 16.2,
    "capital": 48153
   },
   "callFails": [
    "ADX 19.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 578.89,
   "sma50": 671.8,
   "sma200": 627.38,
   "rsi": 38.1,
   "adx": 27.1,
   "bar": "2026-11-25",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 65.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 495.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.15,
    "mid": 8.98,
    "roc": 18.4,
    "capital": 49500
   },
   "putFails": [
    "below 200-day SMA",
    "RSI 38.1 too high for a put"
   ],
   "call": {
    "strike": 650.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.23,
    "mid": 8.88,
    "roc": 15.5,
    "capital": 57889
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 267.1,
   "sma50": 318.12,
   "sma200": 336.29,
   "rsi": 34.6,
   "adx": 22.5,
   "bar": "2026-11-25",
   "peg": 0.94,
   "earnings": [
    "2027-02-03"
   ],
   "chainSource": "Yahoo",
   "ivr": 63.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.8,
    "roc": 16.4,
    "capital": 23500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 22.5 not above 25"
   ],
   "call": {
    "strike": 290.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.28,
    "mid": 5.08,
    "roc": 19.3,
    "capital": 26710
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 22.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 238.35,
   "sma50": 254.99,
   "sma200": 245.75,
   "rsi": 39.0,
   "adx": 10.1,
   "bar": "2026-11-25",
   "peg": 1.15,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 57.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 210.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.5,
    "roc": 16.9,
    "capital": 21000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 10.1 not above 25",
    "RSI 39.0 too high for a put"
   ],
   "call": {
    "strike": 265.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.23,
    "mid": 3.58,
    "roc": 15.2,
    "capital": 23835
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 10.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 365.61,
   "sma50": 376.88,
   "sma200": 381.07,
   "rsi": 46.0,
   "adx": 11.3,
   "bar": "2026-11-25",
   "peg": 4.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 65.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 305.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.16,
    "mid": 7.83,
    "roc": 26.0,
    "capital": 30500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 11.3 not above 25",
    "PEG 4.50 outside 0 to 2.5",
    "RSI 46.0 too high for a put"
   ],
   "call": {
    "strike": 425.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.2,
    "mid": 5.8,
    "roc": 16.1,
    "capital": 36561
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 11.3 not above 25",
    "PEG 4.50 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 154.86,
   "sma50": 182.36,
   "sma200": 154.25,
   "rsi": 39.5,
   "adx": 27.8,
   "bar": "2026-11-25",
   "peg": 1.26,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 57.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.17,
    "mid": 3.45,
    "roc": 26.9,
    "capital": 13000
   },
   "putFails": [
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.22,
    "mid": 3.15,
    "roc": 20.6,
    "capital": 15486
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 198.22,
   "sma50": 245.02,
   "sma200": 177.76,
   "rsi": 34.6,
   "adx": 19.8,
   "bar": "2026-11-25",
   "peg": 5.92,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 58.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 165.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.18,
    "mid": 5.3,
    "roc": 32.6,
    "capital": 16500
   },
   "putFails": [
    "ADX 19.8 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 235.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.23,
    "mid": 4.78,
    "roc": 24.4,
    "capital": 19822
   },
   "callFails": [
    "ADX 19.8 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 97.28,
   "sma50": 159.4,
   "sma200": 171.52,
   "rsi": 25.5,
   "adx": 45.8,
   "bar": "2026-11-25",
   "peg": 0.45,
   "earnings": [
    "2027-02-11"
   ],
   "chainSource": "Yahoo",
   "ivr": 69.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 80.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.2,
    "mid": 3.83,
    "roc": 48.5,
    "capital": 8000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 125.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.17,
    "mid": 1.94,
    "roc": 20.2,
    "capital": 9728
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 71.96,
   "sma50": 135.73,
   "sma200": 130.9,
   "rsi": 22.9,
   "adx": 36.0,
   "bar": "2026-11-25",
   "peg": null,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 61.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 60.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.25,
    "mid": 5.15,
    "roc": 87.0,
    "capital": 6000
   },
   "putFails": [
    "below 200-day SMA",
    "PEG unavailable"
   ],
   "call": {
    "strike": 100.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.17,
    "mid": 1.81,
    "roc": 25.4,
    "capital": 7196
   },
   "callFails": [
    "below 200-day SMA",
    "PEG unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 5.26,
   "sma50": 8.62,
   "sma200": 10.52,
   "rsi": 33.8,
   "adx": 32.7,
   "bar": "2026-11-25",
   "peg": null,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 70.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 4.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.18,
    "mid": 0.27,
    "roc": 67.2,
    "capital": 400
   },
   "putFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 7.5,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.2,
    "mid": 0.17,
    "roc": 33.7,
    "capital": 526
   },
   "callFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "HOOD",
   "price": 62.71,
   "sma50": 95.8,
   "sma200": 90.67,
   "rsi": 28.4,
   "adx": 35.1,
   "bar": "2026-11-25",
   "peg": 1.09,
   "earnings": [
    "2027-02-10"
   ],
   "chainSource": "Yahoo",
   "ivr": 64.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 50.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.17,
    "mid": 1.84,
    "roc": 37.4,
    "capital": 5000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 80.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.16,
    "mid": 1.06,
    "roc": 17.2,
    "capital": 6271
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  }
 ],
 "trades": [
  {
   "ticker": "PLTR",
   "strategy": "Covered Call",
   "strike": 180.0,
   "exp": "2026-12-31",
   "dte": 36,
   "delta": 0.22,
   "mid": 3.15,
   "roc": 20.6,
   "capital": 15486,
   "ivr": 57.8,
   "rsi": 39.5,
   "adx": 27.8,
   "price": 154.86,
   "sma50": 182.36,
   "sma200": 154.25
  }
 ],
 "errors": [
  "NVDA: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/NVDA.json)",
  "AMD: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/AMD.json)",
  "MSFT: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/MSFT.json)",
  "META: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/META.json)",
  "GOOGL: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/GOOGL.json)",
  "AMZN: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/AMZN.json)",
  "TSLA: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/TSLA.json)",
  "PLTR: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/PLTR.json)",
  "CRWD: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/CRWD.json)",
  "COIN: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/COIN.json)",
  "MSTR: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/MSTR.json)",
  "MARA: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/MARA.json)",
  "HOOD: CBOE chain (403 Client Error: Forbidden for url: https://cdn-api.cboe.com/api/global/delayed_quotes/options/HOOD.json)"
 ]
};
