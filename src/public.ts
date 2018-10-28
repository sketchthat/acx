import { Common } from './common';

import { Depth } from './interfaces/public/depth.interface';
import { Period } from './interfaces/public/k.interface';
import { KPending } from './interfaces/public/k_pending.interface';
import { Market } from './interfaces/public/markets.interface';
import { SingleTicker } from './interfaces/public/ticker.interface';
import { Tickers } from './interfaces/public/tickers.interface';
import { OrderBy, Trade } from './interfaces/public/trades.interface';
import { Orderbook } from './interfaces/public/orderbook.interface';

export class Public {
  private common: Common;

  constructor() {
    this.common = new Common();
  }

  public async depth(market: string, limit?: number): Promise<Depth> {
    const qs = {
      market,
      limit,
    };

    return this.common.request(false, 'GET', 'depth.json', qs);
  }

  public async k(market: string, limit?: number, period?: Period, timestamp?: number): Promise<number[][]> {
    const qs = {
      market,
      limit,
      period,
      timestamp,
    };

    return this.common.request(false, 'GET', 'k.json', qs);
  }

  public async kPending(market: string, tradeId: number, limit?: number, period?: Period, timestamp?: number): Promise<KPending> {
    const qs = {
      market,
      trade_id: tradeId,
      limit,
      period,
      timestamp,
    };

    return this.common.request(false, 'GET', 'k_with_pending_trades.json', qs);
  }

  public async markets(): Promise<Market[]> {
    return this.common.request(false, 'GET', 'markets.json');
  }

  public async orderbook(market: string, asksLimit?: number, bidsLimit?: number): Promise<Orderbook> {
    const qs = {
      market,
      asks_limit: asksLimit,
      bids_limit: bidsLimit,
    };

    return this.common.request(false, 'GET', 'order_book.json', qs);
  }

  public async tickers(): Promise<Tickers> {
    return this.common.request(false, 'GET', 'tickers.json');
  }

  public async ticker(market: string): Promise<SingleTicker> {
    return this.common.request(false, 'GET', `tickers/${market}.json`);
  }

  public async trades(market: string, limit?: number, timestamp?: number, from?: number, to?: number, orderBy?: OrderBy): Promise<Trade[]> {
    const qs = {
      market,
      limit,
      timestamp,
      from,
      to,
      orderBy,
    };

    return this.common.request(false, 'GET', 'trades.json', qs);
  }

  public async timestamp(): Promise<number> {
    return this.common.request(false, 'GET', 'timestamp.json');
  }
}
