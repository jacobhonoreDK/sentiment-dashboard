window.SCANNER_DATA = {
 "generatedAt": "2026-11-23T12:46:05Z",
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
   "price": 125.53,
   "sma50": 207.0,
   "sma200": 203.35,
   "rsi": 15.0,
   "adx": 50.6,
   "bar": "2026-11-20",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 63.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
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
   "ticker": "AMD",
   "price": 424.39,
   "sma50": 553.1,
   "sma200": 429.79,
   "rsi": 38.4,
   "adx": 17.9,
   "bar": "2026-11-20",
   "peg": 0.38,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 77.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": {
    "strike": 380.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": -0.28,
    "mid": 20.9,
    "roc": 52.8,
    "capital": 38000
   },
   "putFails": [
    "below 200-day SMA",
    "ADX 17.9 not above 25",
    "RSI 38.4 too high for a put"
   ],
   "call": {
    "strike": 510.0,
    "exp": "2026-12-31",
    "dte": 38,
    "delta": 0.3,
    "mid": 19.15,
    "roc": 43.3,
    "capital": 42439
   },
   "callFails": [
    "below 200-day SMA",
    "ADX 17.9 not above 25"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 484.52,
   "sma50": 519.84,
   "sma200": 443.63,
   "rsi": 34.8,
   "adx": 18.3,
   "bar": "2026-11-20",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 58.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "ADX 18.3 not above 25",
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
   "price": 560.84,
   "sma50": 676.65,
   "sma200": 628.59,
   "rsi": 30.3,
   "adx": 25.0,
   "bar": "2026-11-20",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 60.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 25.0 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 25.0 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "GOOGL",
   "price": 265.29,
   "sma50": 322.3,
   "sma200": 336.97,
   "rsi": 27.8,
   "adx": 23.6,
   "bar": "2026-11-20",
   "peg": 0.94,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 77.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 23.6 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 246.82,
   "sma50": 255.03,
   "sma200": 245.15,
   "rsi": 42.3,
   "adx": 11.0,
   "bar": "2026-11-20",
   "peg": 1.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 55.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "ADX 11.0 not above 25",
    "next earnings date unavailable",
    "RSI 42.3 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 11.0 not above 25",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 345.82,
   "sma50": 375.64,
   "sma200": 381.66,
   "rsi": 37.8,
   "adx": 11.7,
   "bar": "2026-11-20",
   "peg": 4.03,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 73.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 11.7 not above 25",
    "PEG 4.03 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 11.7 not above 25",
    "PEG 4.03 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 143.49,
   "sma50": 183.26,
   "sma200": 153.97,
   "rsi": 26.4,
   "adx": 30.1,
   "bar": "2026-11-20",
   "peg": 1.13,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 59.0,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
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
   "ticker": "CRWD",
   "price": 229.44,
   "sma50": 247.04,
   "sma200": 176.19,
   "rsi": 46.1,
   "adx": 18.2,
   "bar": "2026-11-20",
   "peg": 5.92,
   "earnings": [
    "2026-12-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 93.1,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
   "put": null,
   "putFails": [
    "ADX 18.2 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "RSI 46.1 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 18.2 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 101.97,
   "sma50": 163.79,
   "sma200": 172.45,
   "rsi": 22.9,
   "adx": 40.6,
   "bar": "2026-11-20",
   "peg": 0.45,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 58.4,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
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
   "price": 77.8,
   "sma50": 138.91,
   "sma200": 131.76,
   "rsi": 20.2,
   "adx": 30.4,
   "bar": "2026-11-20",
   "peg": 2.85,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 50.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
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
   "price": 5.09,
   "sma50": 8.97,
   "sma200": 10.56,
   "rsi": 30.1,
   "adx": 31.4,
   "bar": "2026-11-20",
   "peg": 0.1,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 54.9,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
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
   "price": 62.17,
   "sma50": 98.47,
   "sma200": 90.97,
   "rsi": 22.8,
   "adx": 33.4,
   "bar": "2026-11-20",
   "peg": 1.01,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 55.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-19",
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
