'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import * as crypto from 'crypto';
import * as rp from 'request-promise';
import * as sinon from 'sinon';

import { ACX } from './index';

describe('Index', () => {
  let cryptoStub: SinonStub;
  let rpStub: SinonStub;

  before(() => {
    cryptoStub = stub(crypto, 'createHmac');
    rpStub = stub(rp, 'Request');
  });

  beforeEach(() => {
    cryptoStub.reset();
    rpStub.reset();

    const utcDate = new Date(Date.UTC(2018, 10, 7, 9, 5, 2));
    this.clock = sinon.useFakeTimers(utcDate);
  });

  after(() => {
    cryptoStub.restore();
    rpStub.restore();
  });

  afterEach(() => {
    this.clock.restore();
  });

  it('should call public/timestamp', async () => {
    rpStub.resolves({ response: true });

    const acx = new ACX();

    const resp: any = await acx.public().timestamp();

    const expectedResponse = {
      response: true,
    };

    assert.deepEqual(resp, expectedResponse);

    const expectedArgs = [
      [
        {
          callback: undefined,
          json: true,
          method: 'GET',
          uri: 'https://acx.io/api/v2/timestamp.json',
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
  });

  it('should call private/members', async () => {
    const cryptoReturns = {
      update(update) {
        const expectedUpdate = 'GET|/api/v2/members/me.json|access_key=accessKey&tonce=1541581502000';

        assert.strictEqual(update, expectedUpdate);

        return cryptoReturns;
      },
      digest(digest) {
        assert.strictEqual(digest, 'hex');

        return 'YWJjMTIz';
      },
    };

    cryptoStub.returns(cryptoReturns);

    rpStub.resolves({ response: true });

    const acx = new ACX('accessKey', 'secret');

    const resp: any = await acx.private().members();

    const expectedResponse = {
      response: true,
    };

    assert.deepEqual(resp, expectedResponse);

    const expectedArgs = [
      [
        {
          callback: undefined,
          json: true,
          method: 'GET',
          uri: 'https://acx.io/api/v2/members/me.json',
          qs: {
            access_key: 'accessKey',
            signature: 'YWJjMTIz',
            tonce: 1541581502000,
          },
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);
  });
/*
  it('should call account/balance', async () => {
    rpStub.resolves([{
      balance: 15000000000,
      pendingFunds: 9955000000,
    }]);

    const btcm = new BTCMarkets('MyApiKey', 'MySecretKey');

    const resp: any = await btcm.account().balance();

    const expectedArgs = [
      [
        {
          uri: 'https://api.btcmarkets.net/account/balance',
          json: true,
          method: 'GET',
          qs: null,
          body: null,
          headers: {
            apiKey: 'MyApiKey',
            timestamp: 1541581502000,
            signature: 'YWJjMTIz',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);

    const expectedResponse = [{
      balance: 150,
      pendingFunds: 99.55,
    }];

    assert.deepEqual(resp, expectedResponse);

    assert.strictEqual(hmacStub.callCount, 1);
  });

  it('should call fundTransfer/withdrawCrypto', async () => {
    hmacStub.returns({
      path: '/fundtransfer/withdrawCrypto',
      headers: {
        apiKey: 'MyApiKey',
        timestamp: 1541581502000,
        signature: 'YWJjMTIz',
      },
    });

    rpStub.resolves({ response: true });

    const btcm = new BTCMarkets('MyApiKey', 'MySecretKey');

    const resp: any = await btcm.fundTransfer().withdrawCrypto(1.55, 'x12abc', 'BTC');

    const expectedArgs = [
      [
        {
          uri: 'https://api.btcmarkets.net/fundtransfer/withdrawCrypto',
          json: true,
          method: 'POST',
          qs: null,
          body: {
            amount: 155000000,
            address: 'x12abc',
            currency: 'BTC',
          },
          headers: {
            apiKey: 'MyApiKey',
            timestamp: 1541581502000,
            signature: 'YWJjMTIz',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);

    const expectedResponse = { response: true };

    assert.deepEqual(resp, expectedResponse);

    assert.strictEqual(hmacStub.callCount, 1);
  });

  it('should call market/active', async () => {
    rpStub.resolves({ response: true });

    const btcm = new BTCMarkets('MyApiKey', 'MySecretKey');

    const resp: any = await btcm.market().active();

    const expectedArgs = [
      [
        {
          uri: 'https://api.btcmarkets.net/v2/market/active',
          json: true,
          method: 'GET',
          qs: null,
          body: null,
          callback: undefined,
        },
      ],
    ];

    assert.strictEqual(hmacStub.callCount, 0);

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);

    const expectedResponse = { response: true };

    assert.deepEqual(resp, expectedResponse);
  });

  it('should call trading/create', async () => {
    hmacStub.returns({
      path: '/order/create',
      headers: {
        apiKey: 'MyApiKey',
        timestamp: 1541581502000,
        signature: 'YWJjMTIz',
      },
      body: {
        clientRequestId: 'abc123',
        currency: 'AUD',
        instrument: 'BTC',
        orderSide: 'Ask',
        ordertype: 'Limit',
        price: 850043000000,
        volume: 155000000,
      },
    });

    rpStub.resolves({ response: true });

    const btcm = new BTCMarkets('MyApiKey', 'MySecretKey');

    const resp: any = await btcm.trading().create('BTC', 'AUD', 8500.43, 1.55, 'Ask', 'Limit', 'abc123');

    const expectedArgs = [
      [
        {
          uri: 'https://api.btcmarkets.net/order/create',
          json: true,
          method: 'POST',
          qs: null,
          body: {
            clientRequestId: 'abc123',
            currency: 'AUD',
            instrument: 'BTC',
            orderSide: 'Ask',
            ordertype: 'Limit',
            price: 850043000000,
            volume: 155000000,
          },
          headers: {
            apiKey: 'MyApiKey',
            timestamp: 1541581502000,
            signature: 'YWJjMTIz',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);

    const expectedResponse = { response: true };

    assert.deepEqual(resp, expectedResponse);

    assert.strictEqual(hmacStub.callCount, 1);
  });

  it('should call transaction/history', async () => {
    hmacStub.returns({
      path: '/v2/transaction/history',
      headers: {
        apiKey: 'MyApiKey',
        timestamp: 1541581502000,
        signature: 'YWJjMTIz',
      },
    });

    rpStub.resolves({ transactions: [] });

    const btcm = new BTCMarkets('MyApiKey', 'MySecretKey');

    const resp: any = await btcm.transaction().history();

    const expectedArgs = [
      [
        {
          uri: 'https://api.btcmarkets.net/v2/transaction/history',
          json: true,
          method: 'GET',
          qs: null,
          body: null,
          headers: {
            apiKey: 'MyApiKey',
            timestamp: 1541581502000,
            signature: 'YWJjMTIz',
          },
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedArgs);
    assert.strictEqual(rpStub.callCount, 1);

    const expectedResponse = { transactions: [] };

    assert.deepEqual(resp, expectedResponse);

    assert.strictEqual(hmacStub.callCount, 1);
  });
*/
});
