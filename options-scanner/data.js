window.SCANNER_DATA = {
 "generatedAt": "2026-11-27T21:58:45Z",
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
   "price": 150.49,
   "sma50": 202.28,
   "sma200": 202.68,
   "rsi": 38.1,
   "adx": 47.2,
   "bar": "2026-11-27",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 96.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 125.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.16,
    "mid": 3.12,
    "roc": 26.8,
    "capital": 12500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 38.1 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.19,
    "mid": 2.74,
    "roc": 19.5,
    "capital": 15049
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 424.54,
   "sma50": 545.94,
   "sma200": 434.01,
   "rsi": 40.8,
   "adx": 21.4,
   "bar": "2026-11-27",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 91.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 335.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.15,
    "mid": 10.93,
    "roc": 35.0,
    "capital": 33500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 21.4 not above 25",
    "RSI 40.8 too high for a put"
   ],
   "call": {
    "strike": 540.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.15,
    "mid": 6.65,
    "roc": 16.8,
    "capital": 42454
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 21.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 492.85,
   "sma50": 519.45,
   "sma200": 445.33,
   "rsi": 40.4,
   "adx": 19.2,
   "bar": "2026-11-27",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 62.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 450.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.19,
    "mid": 6.28,
    "roc": 15.0,
    "capital": 45000
   },
   "putFails": [
    "ADX 19.2 not above 25",
    "RSI 40.4 too high for a put"
   ],
   "call": {
    "strike": 525.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.27,
    "mid": 6.75,
    "roc": 14.7,
    "capital": 49285
   },
   "callFails": [
    "ADX 19.2 not above 25",
    "best ROC 14.7% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 628.96,
   "sma50": 671.35,
   "sma200": 627.33,
   "rsi": 50.3,
   "adx": 26.6,
   "bar": "2026-11-27",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 67.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 550.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.15,
    "mid": 8.15,
    "roc": 15.9,
    "capital": 55000
   },
   "putFails": [
    "RSI 50.3 too high for a put"
   ],
   "call": {
    "strike": 695.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.24,
    "mid": 9.52,
    "roc": 16.3,
    "capital": 62896
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "GOOGL",
   "price": 274.96,
   "sma50": 316.79,
   "sma200": 336.14,
   "rsi": 38.3,
   "adx": 22.1,
   "bar": "2026-11-27",
   "peg": 0.94,
   "earnings": [
    "2027-02-03"
   ],
   "chainSource": "Yahoo",
   "ivr": 70.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 245.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.17,
    "mid": 3.5,
    "roc": 15.3,
    "capital": 24500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 22.1 not above 25",
    "RSI 38.3 too high for a put"
   ],
   "call": {
    "strike": 295.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.29,
    "mid": 4.9,
    "roc": 19.1,
    "capital": 27496
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 254.12,
   "sma50": 255.17,
   "sma200": 246.03,
   "rsi": 48.6,
   "adx": 9.9,
   "bar": "2026-11-27",
   "peg": 1.15,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 65.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 230.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.19,
    "mid": 3.77,
    "roc": 17.6,
    "capital": 23000
   },
   "putFails": [
    "ADX 9.9 not above 25",
    "RSI 48.6 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.26,
    "mid": 3.98,
    "roc": 16.8,
    "capital": 25412
   },
   "callFails": [
    "ADX 9.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 400.0,
   "sma50": 377.84,
   "sma200": 381.0,
   "rsi": 56.4,
   "adx": 10.8,
   "bar": "2026-11-27",
   "peg": 4.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 76.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 345.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.17,
    "mid": 7.0,
    "roc": 21.8,
    "capital": 34500
   },
   "putFails": [
    "ADX 10.8 not above 25",
    "PEG 4.50 outside 0 to 2.5",
    "RSI 56.4 too high for a put"
   ],
   "call": {
    "strike": 450.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.23,
    "mid": 6.42,
    "roc": 17.2,
    "capital": 40000
   },
   "callFails": [
    "ADX 10.8 not above 25",
    "PEG 4.50 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 172.17,
   "sma50": 182.46,
   "sma200": 154.48,
   "rsi": 51.5,
   "adx": 26.4,
   "bar": "2026-11-27",
   "peg": 1.26,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 59.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 150.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.19,
    "mid": 3.77,
    "roc": 27.0,
    "capital": 15000
   },
   "putFails": [
    "RSI 51.5 too high for a put"
   ],
   "call": {
    "strike": 195.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.23,
    "mid": 2.92,
    "roc": 18.2,
    "capital": 17217
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 217.2,
   "sma50": 244.67,
   "sma200": 178.38,
   "rsi": 43.1,
   "adx": 20.0,
   "bar": "2026-11-27",
   "peg": 5.92,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 59.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 185.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.17,
    "mid": 4.58,
    "roc": 26.5,
    "capital": 18500
   },
   "putFails": [
    "ADX 20.0 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable",
    "RSI 43.1 too high for a put"
   ],
   "call": {
    "strike": 255.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.19,
    "mid": 3.45,
    "roc": 17.1,
    "capital": 21720
   },
   "callFails": [
    "ADX 20.0 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 107.04,
   "sma50": 158.19,
   "sma200": 171.32,
   "rsi": 32.0,
   "adx": 46.6,
   "bar": "2026-11-27",
   "peg": 0.45,
   "earnings": [
    "2027-02-11"
   ],
   "chainSource": "Yahoo",
   "ivr": 69.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 90.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.2,
    "mid": 3.35,
    "roc": 40.0,
    "capital": 9000
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 135.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.16,
    "mid": 1.69,
    "roc": 16.9,
    "capital": 10704
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 81.62,
   "sma50": 134.88,
   "sma200": 130.71,
   "rsi": 28.7,
   "adx": 37.3,
   "bar": "2026-11-27",
   "peg": null,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 66.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 65.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.19,
    "mid": 3.35,
    "roc": 55.3,
    "capital": 6500
   },
   "putFails": [
    "below 200-day SMA",
    "PEG unavailable"
   ],
   "call": {
    "strike": 110.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.16,
    "mid": 1.63,
    "roc": 21.4,
    "capital": 8162
   },
   "callFails": [
    "below 200-day SMA",
    "PEG unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 5.59,
   "sma50": 8.5,
   "sma200": 10.51,
   "rsi": 37.1,
   "adx": 33.1,
   "bar": "2026-11-27",
   "peg": null,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 69.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 4.5,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.21,
    "mid": 0.29,
    "roc": 70.4,
    "capital": 450
   },
   "putFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 8.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.16,
    "mid": 0.12,
    "roc": 24.0,
    "capital": 559
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
   "price": 67.92,
   "sma50": 95.02,
   "sma200": 90.64,
   "rsi": 34.3,
   "adx": 35.1,
   "bar": "2026-11-27",
   "peg": 1.09,
   "earnings": [
    "2027-02-10"
   ],
   "chainSource": "Yahoo",
   "ivr": 60.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": {
    "strike": 55.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": -0.15,
    "mid": 1.55,
    "roc": 30.3,
    "capital": 5500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 84.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.16,
    "mid": 1.02,
    "roc": 16.1,
    "capital": 6792
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
   "strike": 195.0,
   "exp": "2026-12-31",
   "dte": 34,
   "delta": 0.23,
   "mid": 2.92,
   "roc": 18.2,
   "capital": 17217,
   "ivr": 59.3,
   "rsi": 51.5,
   "adx": 26.4,
   "price": 172.17,
   "sma50": 182.46,
   "sma200": 154.48
  },
  {
   "ticker": "META",
   "strategy": "Covered Call",
   "strike": 695.0,
   "exp": "2026-12-31",
   "dte": 34,
   "delta": 0.24,
   "mid": 9.52,
   "roc": 16.3,
   "capital": 62896,
   "ivr": 67.7,
   "rsi": 50.3,
   "adx": 26.6,
   "price": 628.96,
   "sma50": 671.35,
   "sma200": 627.33
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
