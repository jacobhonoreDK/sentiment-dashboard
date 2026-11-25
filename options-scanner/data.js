window.SCANNER_DATA = {
 "generatedAt": "2026-11-25T04:16:37Z",
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
   "price": 155.38,
   "sma50": 204.95,
   "sma200": 203.07,
   "rsi": 39.5,
   "adx": 48.4,
   "bar": "2026-11-24",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 77.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 130.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.17,
    "mid": 3.48,
    "roc": 32.5,
    "capital": 13000
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 190.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.16,
    "mid": 2.04,
    "roc": 15.9,
    "capital": 15538
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 413.27,
   "sma50": 550.48,
   "sma200": 432.0,
   "rsi": 38.7,
   "adx": 19.4,
   "bar": "2026-11-24",
   "peg": 0.38,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 77.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 320.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": -0.15,
    "mid": 11.18,
    "roc": 34.4,
    "capital": 32000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25",
    "RSI 38.7 too high for a put"
   ],
   "call": {
    "strike": 535.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.15,
    "mid": 6.4,
    "roc": 18.8,
    "capital": 41327
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 496.13,
   "sma50": 519.56,
   "sma200": 444.5,
   "rsi": 41.0,
   "adx": 18.4,
   "bar": "2026-11-24",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 55.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 455.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.2,
    "mid": 6.3,
    "roc": 16.8,
    "capital": 45500
   },
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 41.0 too high for a put"
   ],
   "call": {
    "strike": 530.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.26,
    "mid": 5.78,
    "roc": 14.2,
    "capital": 49613
   },
   "callFails": [
    "ADX 18.4 not above 25",
    "best ROC 14.2% below 15%"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 589.82,
   "sma50": 673.69,
   "sma200": 627.84,
   "rsi": 40.2,
   "adx": 26.1,
   "bar": "2026-11-24",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 62.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 515.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.15,
    "mid": 7.53,
    "roc": 17.8,
    "capital": 51500
   },
   "putFails": [
    "below 200-day SMA",
    "RSI 40.2 too high for a put"
   ],
   "call": {
    "strike": 655.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.22,
    "mid": 7.72,
    "roc": 15.9,
    "capital": 58982
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 279.05,
   "sma50": 319.64,
   "sma200": 336.54,
   "rsi": 39.6,
   "adx": 22.1,
   "bar": "2026-11-24",
   "peg": 0.94,
   "earnings": [
    "2027-02-03"
   ],
   "chainSource": "Yahoo",
   "ivr": 60.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 250.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.18,
    "mid": 3.42,
    "roc": 16.6,
    "capital": 25000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 22.1 not above 25",
    "RSI 39.6 too high for a put"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.27,
    "mid": 4.17,
    "roc": 18.2,
    "capital": 27905
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 22.1 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 252.29,
   "sma50": 255.15,
   "sma200": 245.59,
   "rsi": 46.5,
   "adx": 9.5,
   "bar": "2026-11-24",
   "peg": 1.15,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 52.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 225.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.16,
    "mid": 2.96,
    "roc": 16.0,
    "capital": 22500
   },
   "putFails": [
    "ADX 9.5 not above 25",
    "RSI 46.5 too high for a put"
   ],
   "call": {
    "strike": 275.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": 0.26,
    "mid": 3.83,
    "roc": 15.0,
    "capital": 25229
   },
   "callFails": [
    "ADX 9.5 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 384.68,
   "sma50": 376.73,
   "sma200": 381.37,
   "rsi": 51.8,
   "adx": 10.9,
   "bar": "2026-11-24",
   "peg": 4.03,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 51.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 330.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.16,
    "mid": 6.4,
    "roc": 23.6,
    "capital": 33000
   },
   "putFails": [
    "ADX 10.9 not above 25",
    "PEG 4.03 outside 0 to 2.5",
    "RSI 51.8 too high for a put"
   ],
   "call": {
    "strike": 440.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.2,
    "mid": 5.12,
    "roc": 16.2,
    "capital": 38468
   },
   "callFails": [
    "ADX 10.9 not above 25",
    "PEG 4.03 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 161.18,
   "sma50": 182.75,
   "sma200": 154.18,
   "rsi": 43.2,
   "adx": 28.2,
   "bar": "2026-11-24",
   "peg": 1.13,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 56.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 135.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": -0.16,
    "mid": 3.13,
    "roc": 22.9,
    "capital": 13500
   },
   "putFails": [
    "RSI 43.2 too high for a put"
   ],
   "call": {
    "strike": 185.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.2,
    "mid": 2.46,
    "roc": 18.6,
    "capital": 16118
   },
   "callFails": [],
   "result": "Qualifies"
  },
  {
   "ticker": "CRWD",
   "price": 210.86,
   "sma50": 245.88,
   "sma200": 177.29,
   "rsi": 38.9,
   "adx": 18.8,
   "bar": "2026-11-24",
   "peg": 5.92,
   "earnings": [
    "2026-11-23"
   ],
   "chainSource": "Yahoo",
   "ivr": 67.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 175.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": -0.16,
    "mid": 4.17,
    "roc": 23.5,
    "capital": 17500
   },
   "putFails": [
    "ADX 18.8 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "RSI 38.9 too high for a put"
   ],
   "call": {
    "strike": 250.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.19,
    "mid": 3.38,
    "roc": 19.5,
    "capital": 21086
   },
   "callFails": [
    "ADX 18.8 not above 25",
    "PEG 5.92 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 102.35,
   "sma50": 160.74,
   "sma200": 171.84,
   "rsi": 27.3,
   "adx": 43.9,
   "bar": "2026-11-24",
   "peg": 0.45,
   "earnings": [
    "2027-02-11"
   ],
   "chainSource": "Yahoo",
   "ivr": 63.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 85.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.19,
    "mid": 3.01,
    "roc": 43.1,
    "capital": 8500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 130.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": 0.16,
    "mid": 1.65,
    "roc": 19.6,
    "capital": 10235
   },
   "callFails": [
    "below 200-day SMA"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSTR",
   "price": 77.55,
   "sma50": 136.82,
   "sma200": 131.2,
   "rsi": 24.6,
   "adx": 33.9,
   "bar": "2026-11-24",
   "peg": 2.85,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 52.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 60.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.17,
    "mid": 2.67,
    "roc": 54.2,
    "capital": 6000
   },
   "putFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5"
   ],
   "call": {
    "strike": 105.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": 0.19,
    "mid": 2.04,
    "roc": 25.9,
    "capital": 7755
   },
   "callFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 5.41,
   "sma50": 8.74,
   "sma200": 10.53,
   "rsi": 34.8,
   "adx": 32.1,
   "bar": "2026-11-24",
   "peg": null,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 67.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 4.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": -0.16,
    "mid": 0.21,
    "roc": 53.0,
    "capital": 400
   },
   "putFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "next earnings date unavailable"
   ],
   "call": {
    "strike": 8.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": 0.16,
    "mid": 0.12,
    "roc": 22.8,
    "capital": 541
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
   "price": 65.65,
   "sma50": 96.63,
   "sma200": 90.78,
   "rsi": 30.4,
   "adx": 34.3,
   "bar": "2026-11-24",
   "peg": 1.01,
   "earnings": [
    "2027-02-10"
   ],
   "chainSource": "Yahoo",
   "ivr": 56.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-23",
   "put": {
    "strike": 55.0,
    "exp": "2026-12-24",
    "dte": 30,
    "delta": -0.19,
    "mid": 1.96,
    "roc": 43.5,
    "capital": 5500
   },
   "putFails": [
    "below 200-day SMA"
   ],
   "call": {
    "strike": 83.0,
    "exp": "2026-12-31",
    "dte": 37,
    "delta": 0.16,
    "mid": 1.06,
    "roc": 16.0,
    "capital": 6565
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
   "strike": 185.0,
   "exp": "2026-12-24",
   "dte": 30,
   "delta": 0.2,
   "mid": 2.46,
   "roc": 18.6,
   "capital": 16118,
   "ivr": 56.7,
   "rsi": 43.2,
   "adx": 28.2,
   "price": 161.18,
   "sma50": 182.75,
   "sma200": 154.18
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
