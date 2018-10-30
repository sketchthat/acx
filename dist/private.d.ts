import { OrderBy } from './interfaces/common/orderBy.type';
import { Trade } from './interfaces/common/trade.interface';
import { DepositAddress } from './interfaces/private/depositAddress.interface';
import { Deposit } from './interfaces/private/deposits.interface';
import { Members } from './interfaces/private/members.interface';
import { Order, OrdType, Side } from './interfaces/private/orders.interface';
import { Withdraw } from './interfaces/private/withdraw.interface';
export declare class Private {
    private common;
    constructor(accessKey?: string, secret?: string);
    deposit(txid: string): Promise<Deposit>;
    deposits(currency?: string, limit?: number, state?: string): Promise<Deposit>;
    depositAddress(currency: string): Promise<DepositAddress>;
    members(): Promise<Members>;
    getOrder(id: number): Promise<Trade>;
    getOrders(market: string, state?: string, limit?: number, page?: number, orderBy?: OrderBy): Promise<Trade[]>;
    postOrder(market: string, side: Side, volume: number, price?: number, ordType?: OrdType): Promise<Trade>;
    postOrders(market: string, orders: Order[]): Promise<Trade>;
    clearOrders(side?: Side, market?: string): Promise<Trade[]>;
    deleteOrder(id: string): Promise<Trade>;
    deleteOrders(ids: string[]): Promise<number[]>;
    trades(market: string, limit?: number, timestamp?: number, from?: number, to?: number, orderBy?: OrderBy): Promise<Trade[]>;
    getWithdraws(currency?: string, limit?: number, state?: string): Promise<Withdraw[]>;
    getWithdraw(id: string): Promise<Withdraw>;
    postWithdraw(currency: string, sum: number, address: string): Promise<Withdraw>;
}
