export interface Tickers {
  [pair: string]: TickerPair;
}

export interface TickerPair {
  name: string;
  base_unit: string;
  quote_unit: string;
  at: number;
  ticker: Ticker;
}

export interface Ticker {
  buy: string;
  sell: string;
  open: string;
  low: string;
  high: string;
  last: string;
  vol: string;
}
