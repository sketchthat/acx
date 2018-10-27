import { Common } from './common';
import { Market } from './interfaces/public/markets.interface';
import { Tickers } from './interfaces/public/tickers.interface';

export class Public {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async markets(): Promise<Market[]> {
    return this.common.request(false, 'GET', 'markets.json');
  }

  public async tickers(): Promise<Tickers> {
    return this.common.request(false, 'GET', 'tickers.json');
  }

  public async ticker(market: string) {
    return this.common.request(false, 'GET', `tickers/${market}.json`);
  }
}
