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
});
