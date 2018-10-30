'use strict';

import { assert } from 'chai';
import { SinonStub, stub } from 'sinon';

import * as crypto from 'crypto';
import * as rp from 'request-promise';
import * as sinon from 'sinon';

import { Common } from './common';

describe('Common', () => {
  let rpStub: SinonStub;
  let cryptoStub: SinonStub;
  let common: Common;

  before(() => {
    common = new Common('accessKey11', 'secret22');
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

  it('should call request without auth', async () => {
    rpStub.resolves({ response: true });

    const resp: any = await common.request(false, 'GET', 'deposits.json', { some1: 'qs' }, { some2: 'body' });

    const expectedResponse = {
      response: true,
    };

    assert.deepEqual(resp, expectedResponse);

    const expectedRpArgs = [
      [
        {
          uri: 'https://acx.io/api/v2/deposits.json',
          method: 'GET',
          qs: {
            some1: 'qs',
          },
          body: {
            some2: 'body',
          },
          json: true,
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedRpArgs);

    assert.strictEqual(rpStub.callCount, 1);
    assert.strictEqual(cryptoStub.callCount, 0);
  });

  it('should call request with auth', async () => {
    const cryptoReturns = {
      update(update) {
        const expectedUpdate = 'POST|/api/v2/deposits.json|access_key=accessKey11&some1=qs&tonce=1541581502000';

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

    const resp: any = await common.request(true, 'POST', 'deposits.json', { some1: 'qs' }, { some2: 'body' });

    const expectedResponse = {
      response: true,
    };

    assert.deepEqual(resp, expectedResponse);

    const expectedRpArgs = [
      [
        {
          uri: 'https://acx.io/api/v2/deposits.json',
          method: 'POST',
          qs: {
            access_key: 'accessKey11',
            signature: 'YWJjMTIz',
            some1: 'qs',
            tonce: 1541581502000,
          },
          body: {
            some2: 'body',
          },
          json: true,
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedRpArgs);

    assert.strictEqual(rpStub.callCount, 1);
    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call request with no QS', async () => {
    const cryptoReturns = {
      update(update) {
        const expectedUpdate = 'GET|/api/v2/deposits.json|access_key=accessKey11&tonce=1541581502000';

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

    const resp: any = await common.request(true, 'GET', 'deposits.json');

    const expectedResponse = {
      response: true,
    };

    assert.deepEqual(resp, expectedResponse);

    const expectedRpArgs = [
      [
        {
          uri: 'https://acx.io/api/v2/deposits.json',
          method: 'GET',
          qs: {
            access_key: 'accessKey11',
            signature: 'YWJjMTIz',
            tonce: 1541581502000,
          },
          json: true,
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedRpArgs);

    assert.strictEqual(rpStub.callCount, 1);
    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call request with duped QS and Body params', async () => {
    const cryptoReturns = {
      update(update) {
        const expectedUpdate = 'POST|/api/v2/deposits.json|access_key=accessKey11&some=one&tonce=1541581502000';

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

    const resp: any = await common.request(true, 'POST', 'deposits.json', { some: 'one' }, { some: 'two' });

    const expectedResponse = {
      response: true,
    };

    assert.deepEqual(resp, expectedResponse);

    const expectedRpArgs = [
      [
        {
          uri: 'https://acx.io/api/v2/deposits.json',
          method: 'POST',
          qs: {
            access_key: 'accessKey11',
            signature: 'YWJjMTIz',
            tonce: 1541581502000,
          },
          body: {
            some: 'two',
          },
          json: true,
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedRpArgs);

    assert.strictEqual(rpStub.callCount, 1);
    assert.strictEqual(cryptoStub.callCount, 1);
  });

  it('should call request with empty QS params', async () => {
    const cryptoReturns = {
      update(update) {
        const expectedUpdate = 'POST|/api/v2/deposits.json|access_key=accessKey11&tonce=1541581502000';

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

    const resp: any = await common.request(true, 'POST', 'deposits.json', { some1: null }, { some2: 'two' });

    const expectedResponse = {
      response: true,
    };

    assert.deepEqual(resp, expectedResponse);

    const expectedRpArgs = [
      [
        {
          uri: 'https://acx.io/api/v2/deposits.json',
          method: 'POST',
          qs: {
            access_key: 'accessKey11',
            signature: 'YWJjMTIz',
            tonce: 1541581502000,
            some1: null,
          },
          body: {
            some2: 'two',
          },
          json: true,
          callback: undefined,
        },
      ],
    ];

    assert.deepEqual(rpStub.args, expectedRpArgs);

    assert.strictEqual(rpStub.callCount, 1);
    assert.strictEqual(cryptoStub.callCount, 1);
  });
});
