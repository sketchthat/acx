'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Private } from './private';
import { Order } from './interfaces/private/orders.interface';

describe('Private', () => {
  let privateClass: Private;
  let commonStub: SinonStub;

  before(() => {
    privateClass = new Private('accessKey', 'secret');

    commonStub = stub(Common.prototype, 'request');
  });

  beforeEach(() => {
    commonStub.reset();
  });

  after(() => {
    commonStub.restore();
  });

  it('should call deposit', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.deposit('112233');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'deposit.json',
        {
          txid: '112233',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call deposits without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.deposits('btc');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'deposits.json',
        {
          currency: 'btc',
          limit: undefined,
          state: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call deposits with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.deposits('btc', 5, 'done');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'deposits.json',
        {
          currency: 'btc',
          limit: 5,
          state: 'done',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call depositAddress', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.depositAddress('btc');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'deposit_address.json',
        {
          currency: 'btc',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call members', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.members();

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'members/me.json',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call getOrder', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.getOrder(112233);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'order.json',
        {
          id: 112233,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call getOrders without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.getOrders('btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'orders.json',
        {
          market: 'btcaud',
          state: undefined,
          limit: undefined,
          page: undefined,
          order_by: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call getOrders with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.getOrders('btcaud', 'done', 5, 10, 'asc');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'orders.json',
        {
          market: 'btcaud',
          state: 'done',
          limit: 5,
          page: 10,
          order_by: 'asc',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call postOrder without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.postOrder('btcaud', 'sell', 0.5);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'orders.json',
        null,
        {
          market: 'btcaud',
          side: 'sell',
          volume: 0.5,
          price: undefined,
          ord_type: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call postOrder with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.postOrder('btcaud', 'sell', 0.5, 8500.11, 'limit');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'orders.json',
        null,
        {
          market: 'btcaud',
          side: 'sell',
          volume: 0.5,
          price: 8500.11,
          ord_type: 'limit',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call postOrders', async () => {
    commonStub.returns({
      response: true,
    });

    const orders: Order[] = [
      {
        side: 'sell',
        volume: '0.55',
      },
      {
        side: 'buy',
        volume: '1.41',
        price: '8501.22',
        ord_type: 'limit',
      },
      {
        side: 'sell',
        volume: '0.112',
        ord_type: 'market',
      },
    ];

    const resp: any = await privateClass.postOrders('btcaud', orders);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'orders/multi.json',
        null,
        {
          market: 'btcaud',
          orders: [
            {
              side: 'sell',
              volume: '0.55',
            },
            {
              side: 'buy',
              volume: '1.41',
              price: '8501.22',
              ord_type: 'limit',
            },
            {
              side: 'sell',
              volume: '0.112',
              ord_type: 'market',
            },
          ],
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call clearOrders without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.clearOrders();

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'orders/clear.json',
        null,
        {
          side: undefined,
          market: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call clearOrders with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.clearOrders('sell', 'btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'orders/clear.json',
        null,
        {
          side: 'sell',
          market: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call deleteOrder', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.deleteOrder('112233');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'order/delete.json',
        null,
        {
          id: '112233',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call deleteOrders', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.deleteOrders(['112233', '445566']);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'orders/delete.json',
        null,
        {
          ids: '112233,445566',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call trades without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.trades('btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'trades/my.json',
        {
          market: 'btcaud',
          limit: undefined,
          timestamp: undefined,
          from: undefined,
          to: undefined,
          order_by: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call trades with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.trades('btcaud', 5, 1540804696, 1, 1000, 'desc');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'trades/my.json',
        {
          market: 'btcaud',
          limit: 5,
          timestamp: 1540804696,
          from: 1,
          to: 1000,
          order_by: 'desc',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call getWithdraws without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.getWithdraws();

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'withdraws.json',
        {
          currency: undefined,
          limit: undefined,
          state: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call getWithdraws with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.getWithdraws('btcaud', 5, 'done');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'withdraws.json',
        {
          currency: 'btcaud',
          limit: 5,
          state: 'done',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call getWithdraw', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.getWithdraw('10');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'GET',
        'withdraw.json',
        {
          id: '10',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call postWithdraw', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await privateClass.postWithdraw('btc', 1.55, '1xdd11');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        true,
        'POST',
        'withdraw.json',
        null,
        {
          currency: 'btc',
          sum: 1.55,
          address: '1xdd11',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });
});
