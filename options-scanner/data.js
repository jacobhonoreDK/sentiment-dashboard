window.SCANNER_DATA = {
 "generatedAt": "2026-11-25T13:52:05Z",
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
   "ivr": 86.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 125.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.17,
    "mid": 4.83,
    "roc": 39.1,
    "capital": 12500
   },
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 39.5 too high for a put"
   ],
   "call": {
    "strike": 180.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.21,
    "mid": 2.62,
    "roc": 17.1,
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
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 90.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 340.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.22,
    "mid": 22.1,
    "roc": 65.9,
    "capital": 34000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25",
    "RSI 38.7 too high for a put"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 19.4 not above 25",
    "no liquid contract in the delta and DTE window"
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
   "ivr": 57.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 455.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.25,
    "mid": 11.57,
    "roc": 25.8,
    "capital": 45500
   },
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 41.0 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 18.4 not above 25",
    "no liquid contract in the delta and DTE window"
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
   "ivr": 65.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "RSI 40.2 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
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
   "ivr": 63.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 255.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.26,
    "mid": 8.1,
    "roc": 32.2,
    "capital": 25500
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 22.1 not above 25",
    "RSI 39.6 too high for a put"
   ],
   "call": {
    "strike": 300.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": 0.26,
    "mid": 3.35,
    "roc": 12.2,
    "capital": 27905
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 22.1 not above 25",
    "best ROC 12.2% below 15%"
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
   "ivr": 57.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 235.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.29,
    "mid": 7.3,
    "roc": 31.5,
    "capital": 23500
   },
   "putFails": [
    "ADX 9.5 not above 25",
    "RSI 46.5 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 9.5 not above 25",
    "no liquid contract in the delta and DTE window"
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
   "peg": 4.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 65.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 340.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.23,
    "mid": 12.3,
    "roc": 36.7,
    "capital": 34000
   },
   "putFails": [
    "ADX 10.9 not above 25",
    "PEG 4.50 outside 0 to 2.5",
    "RSI 51.8 too high for a put"
   ],
   "call": null,
   "callFails": [
    "ADX 10.9 not above 25",
    "PEG 4.50 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
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
   "peg": 1.26,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 57.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": {
    "strike": 145.0,
    "exp": "2026-12-31",
    "dte": 36,
    "delta": -0.27,
    "mid": 7.18,
    "roc": 50.2,
    "capital": 14500
   },
   "putFails": [
    "RSI 43.2 too high for a put"
   ],
   "call": null,
   "callFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
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
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 58.5,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": null,
   "putFails": [
    "ADX 18.8 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable",
    "RSI 38.9 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 18.8 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
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
   "ivr": 69.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
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
   "peg": null,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 61.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "no liquid contract in the delta and DTE window"
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
   "ivr": 70.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "PEG unavailable",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
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
   "peg": 1.09,
   "earnings": [
    "2027-02-10"
   ],
   "chainSource": "Yahoo",
   "ivr": 64.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-24",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  }
 ],
 "trades": [],
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
