'use strict';

import { assert } from 'chai';

import { SinonStub, stub } from 'sinon';

import { Common } from './common';
import { Public } from './public';

describe('Public', () => {
  let publicClass: Public;
  let commonStub: SinonStub;

  before(() => {
    publicClass = new Public();

    commonStub = stub(Common.prototype, 'request');
  });

  beforeEach(() => {
    commonStub.reset();
  });

  after(() => {
    commonStub.restore();
  });

  it('should call depth without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.depth('btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'depth.json',
        {
          limit: undefined,
          market: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call depth with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.depth('btcaud', 5);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'depth.json',
        {
          limit: 5,
          market: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call k without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.k('btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'k.json',
        {
          limit: undefined,
          period: undefined,
          timestamp: undefined,
          market: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call k with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.k('btcaud', 5, 15, 1540804696);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'k.json',
        {
          limit: 5,
          period: 15,
          timestamp: 1540804696,
          market: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call kPending without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.kPending('btcaud', 100);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'k_with_pending_trades.json',
        {
          limit: undefined,
          period: undefined,
          timestamp: undefined,
          trade_id: 100,
          market: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call kPending with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.kPending('btcaud', 100, 5, 15, 1540804696);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'k_with_pending_trades.json',
        {
          limit: 5,
          period: 15,
          timestamp: 1540804696,
          trade_id: 100,
          market: 'btcaud',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call markets', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.markets();

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'markets.json',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call orderbook without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.orderbook('btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'order_book.json',
        {
          market: 'btcaud',
          asks_limit: undefined,
          bids_limit: undefined,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call orderbook with params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.orderbook('btcaud', 5, 10);

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'order_book.json',
        {
          market: 'btcaud',
          asks_limit: 5,
          bids_limit: 10,
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call tickers', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.tickers();

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'tickers.json',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call ticker', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.ticker('btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'tickers/btcaud.json',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call trades without params', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.trades('btcaud');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'trades.json',
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

    const resp: any = await publicClass.trades('btcaud', 5, 1540804696, 1, 100, 'asc');

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'trades.json',
        {
          market: 'btcaud',
          limit: 5,
          timestamp: 1540804696,
          from: 1,
          to: 100,
          order_by: 'asc',
        },
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });

  it('should call timestamp', async () => {
    commonStub.returns({
      response: true,
    });

    const resp: any = await publicClass.timestamp();

    const expectedMockReturn = {
      response: true,
    };

    assert.deepEqual(resp, expectedMockReturn);

    const expectedCommonArgs = [
      [
        false,
        'GET',
        'timestamp.json',
      ],
    ];

    assert.deepEqual(commonStub.args, expectedCommonArgs);
    assert.strictEqual(commonStub.callCount, 1);
  });
});
