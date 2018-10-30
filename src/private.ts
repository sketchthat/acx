import { Common } from './common';

import { OrderBy } from './interfaces/common/orderBy.type';
import { Trade } from './interfaces/common/trade.interface';
import { DepositAddress } from './interfaces/private/depositAddress.interface';
import { Deposit } from './interfaces/private/deposits.interface';
import { Members } from './interfaces/private/members.interface';
import { Order, OrdType, Side  } from './interfaces/private/orders.interface';
import { Withdraw } from './interfaces/private/withdraw.interface';

export class Private {
  private common: Common;

  constructor(
    accessKey?: string,
    secret?: string,
  ) {
    this.common = new Common(accessKey, secret);
  }

  public async deposit(txid: string): Promise<Deposit> {
    const qs = {
      txid,
    };

    return this.common.request(true, 'GET', 'deposit.json', qs);
  }

  public async deposits(currency?: string, limit?: number, state?: string): Promise<Deposit> {
    const qs = {
      currency,
      limit,
      state,
    };

    return this.common.request(true, 'GET', 'deposits.json', qs);
  }

  public async depositAddress(currency: string): Promise<DepositAddress> {
    const qs = {
      currency,
    };

    return this.common.request(true, 'GET', 'deposit_address.json', qs);
  }

  public async members(): Promise<Members> {
    return this.common.request(true, 'GET', 'members/me.json');
  }

  public async getOrder(id: number): Promise<Trade> {
    const qs = {
      id,
    };

    return this.common.request(true, 'GET', 'order.json', qs);
  }

  public async getOrders(market: string, state?: string, limit?: number, page?: number, orderBy?: OrderBy): Promise<Trade[]> {
    const qs = {
      market,
      state,
      limit,
      page,
      order_by: orderBy,
    };

    return this.common.request(true, 'GET', 'orders.json', qs);
  }

  public async postOrder(market: string, side: Side, volume: number, price?: number, ordType?: OrdType): Promise<Trade> {
    const body = {
      market,
      side,
      volume,
      price,
      ord_type: ordType,
    };

    return this.common.request(true, 'POST', 'orders.json', null, body);
  }

  public async postOrders(market: string, orders: Order[]): Promise<Trade> {
    const body = {
      market,
      orders,
    };

    return this.common.request(true, 'POST', 'orders/multi.json', null, body);
  }

  public async clearOrders(side?: Side, market?: string): Promise<Trade[]> {
    const body = {
      side,
      market,
    };

    return this.common.request(true, 'POST', 'orders/clear.json', null, body);
  }

  public async deleteOrder(id: string): Promise<Trade> {
    const body = {
      id,
    };

    return this.common.request(true, 'POST', 'order/delete.json', null, body);
  }

  public async deleteOrders(ids: string[]): Promise<number[]> {
    const body = {
      ids: ids.join(','),
    };

    return this.common.request(true, 'POST', 'orders/delete.json', null, body);
  }

  public async trades(market: string, limit?: number, timestamp?: number, from?: number, to?: number, orderBy?: OrderBy): Promise<Trade[]> {
    const qs = {
      market,
      limit,
      timestamp,
      from,
      to,
      order_by: orderBy,
    };

    return this.common.request(true, 'GET', 'trades/my.json', qs);
  }

  public async getWithdraws(currency?: string, limit?: number, state?: string): Promise<Withdraw[]> {
    const qs = {
      currency,
      limit,
      state,
    };

    return this.common.request(true, 'GET', 'withdraws.json', qs);
  }

  public async getWithdraw(id: string): Promise<Withdraw> {
    const qs = {
      id,
    };

    return this.common.request(true, 'GET', 'withdraw.json', qs);
  }

  public async postWithdraw(currency: string, sum: number, address: string): Promise<Withdraw> {
    const body = {
      currency,
      sum,
      address,
    };

    return this.common.request(true, 'POST', 'withdraw.json', null, body);
  }
}
