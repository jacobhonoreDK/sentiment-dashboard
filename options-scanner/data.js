window.SCANNER_DATA = {
 "generatedAt": "2026-11-24T10:56:31Z",
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
   "price": 165.05,
   "sma50": 206.08,
   "sma200": 203.24,
   "rsi": 42.9,
   "adx": 49.3,
   "bar": "2026-11-23",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "RSI 42.9 too high for a put",
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
   "ticker": "AMD",
   "price": 453.46,
   "sma50": 552.3,
   "sma200": 431.01,
   "rsi": 42.6,
   "adx": 18.4,
   "bar": "2026-11-23",
   "peg": 0.38,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "ADX 18.4 not above 25",
    "RSI 42.6 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 18.4 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 492.5,
   "sma50": 519.58,
   "sma200": 444.09,
   "rsi": 39.1,
   "adx": 18.3,
   "bar": "2026-11-23",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 80.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "ADX 18.3 not above 25",
    "RSI 39.1 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 18.3 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 597.6,
   "sma50": 675.29,
   "sma200": 628.27,
   "rsi": 41.7,
   "adx": 25.6,
   "bar": "2026-11-23",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 82.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "RSI 41.7 too high for a put",
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
   "price": 282.1,
   "sma50": 320.95,
   "sma200": 336.77,
   "rsi": 41.0,
   "adx": 22.9,
   "bar": "2026-11-23",
   "peg": 0.94,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 22.9 not above 25",
    "next earnings date unavailable",
    "RSI 41.0 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 22.9 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 255.39,
   "sma50": 255.07,
   "sma200": 245.38,
   "rsi": 48.4,
   "adx": 10.2,
   "bar": "2026-11-23",
   "peg": 1.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 83.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "ADX 10.2 not above 25",
    "next earnings date unavailable",
    "RSI 48.4 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 10.2 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 385.46,
   "sma50": 376.17,
   "sma200": 381.53,
   "rsi": 52.1,
   "adx": 11.3,
   "bar": "2026-11-23",
   "peg": 4.03,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "ADX 11.3 not above 25",
    "PEG 4.03 outside 0 to 2.5",
    "RSI 52.1 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 11.3 not above 25",
    "PEG 4.03 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 159.36,
   "sma50": 182.98,
   "sma200": 154.09,
   "rsi": 41.7,
   "adx": 29.2,
   "bar": "2026-11-23",
   "peg": 1.13,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 82.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "RSI 41.7 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "CRWD",
   "price": 208.97,
   "sma50": 246.52,
   "sma200": 176.74,
   "rsi": 37.8,
   "adx": 18.5,
   "bar": "2026-11-23",
   "peg": 5.92,
   "earnings": [
    "2026-11-23"
   ],
   "chainSource": "Yahoo",
   "ivr": 100.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "ADX 18.5 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 18.5 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 108.78,
   "sma50": 162.14,
   "sma200": 172.17,
   "rsi": 29.8,
   "adx": 42.2,
   "bar": "2026-11-23",
   "peg": 0.45,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 76.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
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
   "ticker": "MSTR",
   "price": 84.4,
   "sma50": 137.86,
   "sma200": 131.51,
   "rsi": 27.0,
   "adx": 32.1,
   "bar": "2026-11-23",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 74.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "PEG 2.85 outside 0 to 2.5",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MARA",
   "price": 5.58,
   "sma50": 8.85,
   "sma200": 10.54,
   "rsi": 35.8,
   "adx": 31.5,
   "bar": "2026-11-23",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 90.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
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
   "ticker": "HOOD",
   "price": 67.37,
   "sma50": 97.53,
   "sma200": 90.89,
   "rsi": 31.6,
   "adx": 33.7,
   "bar": "2026-11-23",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 84.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-20",
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
