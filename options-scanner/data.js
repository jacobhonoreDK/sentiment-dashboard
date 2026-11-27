window.SCANNER_DATA = {
 "generatedAt": "2026-11-27T13:52:35Z",
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
   "price": 149.3,
   "sma50": 203.65,
   "sma200": 202.87,
   "rsi": 37.5,
   "adx": 47.9,
   "bar": "2026-11-25",
   "peg": 0.15,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 96.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "call": {
    "strike": 175.0,
    "exp": "2026-12-31",
    "dte": 34,
    "delta": 0.27,
    "mid": 4.75,
    "roc": 34.2,
    "capital": 14930
   },
   "callFails": [
    "below 200-day SMA",
    "next earnings date unavailable"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMD",
   "price": 406.03,
   "sma50": 548.35,
   "sma200": 432.96,
   "rsi": 38.0,
   "adx": 20.7,
   "bar": "2026-11-25",
   "peg": 0.4,
   "earnings": [
    "2027-02-02"
   ],
   "chainSource": "Yahoo",
   "ivr": 91.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 20.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 20.7 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "MSFT",
   "price": 489.93,
   "sma50": 519.55,
   "sma200": 444.89,
   "rsi": 38.7,
   "adx": 19.1,
   "bar": "2026-11-25",
   "peg": 1.43,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 62.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "ADX 19.1 not above 25",
    "RSI 38.7 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 19.1 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "META",
   "price": 609.89,
   "sma50": 672.42,
   "sma200": 627.53,
   "rsi": 45.7,
   "adx": 27.1,
   "bar": "2026-11-25",
   "peg": 0.73,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 67.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "RSI 45.7 too high for a put",
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
   "price": 273.1,
   "sma50": 318.24,
   "sma200": 336.32,
   "rsi": 36.9,
   "adx": 22.5,
   "bar": "2026-11-25",
   "peg": 0.94,
   "earnings": [
    "2027-02-03"
   ],
   "chainSource": "Yahoo",
   "ivr": 70.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 22.5 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 22.5 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "AMZN",
   "price": 244.43,
   "sma50": 255.12,
   "sma200": 245.78,
   "rsi": 42.0,
   "adx": 10.2,
   "bar": "2026-11-25",
   "peg": 1.15,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 65.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 10.2 not above 25",
    "RSI 42.0 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 10.2 not above 25",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "TSLA",
   "price": 380.14,
   "sma50": 377.17,
   "sma200": 381.15,
   "rsi": 50.3,
   "adx": 11.3,
   "bar": "2026-11-25",
   "peg": 4.5,
   "earnings": [
    "2027-01-27"
   ],
   "chainSource": "Yahoo",
   "ivr": 76.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "below 200-day SMA",
    "ADX 11.3 not above 25",
    "PEG 4.50 outside 0 to 2.5",
    "RSI 50.3 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "below 200-day SMA",
    "ADX 11.3 not above 25",
    "PEG 4.50 outside 0 to 2.5",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "PLTR",
   "price": 163.59,
   "sma50": 182.54,
   "sma200": 154.3,
   "rsi": 45.1,
   "adx": 27.8,
   "bar": "2026-11-25",
   "peg": 1.26,
   "earnings": [
    "2027-02-01"
   ],
   "chainSource": "Yahoo",
   "ivr": 59.3,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "RSI 45.1 too high for a put",
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
   "price": 209.3,
   "sma50": 245.24,
   "sma200": 177.82,
   "rsi": 38.3,
   "adx": 19.8,
   "bar": "2026-11-25",
   "peg": 5.92,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 59.8,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
   "put": null,
   "putFails": [
    "ADX 19.8 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable",
    "RSI 38.3 too high for a put",
    "no liquid contract in the delta and DTE window"
   ],
   "call": null,
   "callFails": [
    "ADX 19.8 not above 25",
    "PEG 5.92 outside 0 to 2.5",
    "next earnings date unavailable",
    "no liquid contract in the delta and DTE window"
   ],
   "result": "Fail"
  },
  {
   "ticker": "COIN",
   "price": 103.72,
   "sma50": 159.53,
   "sma200": 171.55,
   "rsi": 28.7,
   "adx": 45.8,
   "bar": "2026-11-25",
   "peg": 0.45,
   "earnings": [
    "2027-02-11"
   ],
   "chainSource": "Yahoo",
   "ivr": 69.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
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
   "price": 79.96,
   "sma50": 135.89,
   "sma200": 130.94,
   "rsi": 27.0,
   "adx": 36.0,
   "bar": "2026-11-25",
   "peg": null,
   "earnings": [
    "2027-02-04"
   ],
   "chainSource": "Yahoo",
   "ivr": 66.6,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
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
   "price": 5.42,
   "sma50": 8.62,
   "sma200": 10.52,
   "rsi": 34.9,
   "adx": 32.7,
   "bar": "2026-11-25",
   "peg": null,
   "earnings": [],
   "chainSource": "Yahoo",
   "ivr": 69.2,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
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
   "price": 65.78,
   "sma50": 95.86,
   "sma200": 90.69,
   "rsi": 30.6,
   "adx": 35.1,
   "bar": "2026-11-25",
   "peg": 1.09,
   "earnings": [
    "2027-02-10"
   ],
   "chainSource": "Yahoo",
   "ivr": 60.7,
   "ivrSource": "optionsanalysissuite.com, as of 2026-11-25",
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
