import { OrderBy } from './interfaces/common/orderBy.type';
import { Trade } from './interfaces/common/trade.interface';
import { Depth } from './interfaces/public/depth.interface';
import { Period } from './interfaces/public/k.interface';
import { KPending } from './interfaces/public/k_pending.interface';
import { Market } from './interfaces/public/markets.interface';
import { Orderbook } from './interfaces/public/orderbook.interface';
import { SingleTicker } from './interfaces/public/ticker.interface';
import { Tickers } from './interfaces/public/tickers.interface';
export declare class Public {
    private common;
    constructor();
    depth(market: string, limit?: number): Promise<Depth>;
    k(market: string, limit?: number, period?: Period, timestamp?: number): Promise<number[][]>;
    kPending(market: string, tradeId: number, limit?: number, period?: Period, timestamp?: number): Promise<KPending>;
    markets(): Promise<Market[]>;
    orderbook(market: string, asksLimit?: number, bidsLimit?: number): Promise<Orderbook>;
    tickers(): Promise<Tickers>;
    ticker(market: string): Promise<SingleTicker>;
    trades(market: string, limit?: number, timestamp?: number, from?: number, to?: number, orderBy?: OrderBy): Promise<Trade[]>;
    timestamp(): Promise<number>;
}
