export interface Tickers {
  [market: string]: Ticker;
}

export interface Ticker {
  name: string;
  base_unit: string;
  quote_unit: string;
  at: number;
  ticker: {
    buy: string;
    sell: string;
    open: string;
    low: string;
    high: string;
    last: string;
    vol: string;
  };
}
