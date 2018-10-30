'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = require("sinon");
const crypto = require("crypto");
const rp = require("request-promise");
const sinon = require("sinon");
const index_1 = require("./index");
describe('Index', () => {
    let cryptoStub;
    let rpStub;
    before(() => {
        cryptoStub = sinon_1.stub(crypto, 'createHmac');
        rpStub = sinon_1.stub(rp, 'Request');
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
    it('should call public/timestamp', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const acx = new index_1.ACX();
        const resp = yield acx.public().timestamp();
        const expectedResponse = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedResponse);
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
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
    }));
    it('should call private/members', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoReturns = {
            update(update) {
                const expectedUpdate = 'GET|/api/v2/members/me.json|access_key=accessKey&tonce=1541581502000';
                chai_1.assert.strictEqual(update, expectedUpdate);
                return cryptoReturns;
            },
            digest(digest) {
                chai_1.assert.strictEqual(digest, 'hex');
                return 'YWJjMTIz';
            },
        };
        cryptoStub.returns(cryptoReturns);
        rpStub.resolves({ response: true });
        const acx = new index_1.ACX('accessKey', 'secret');
        const resp = yield acx.private().members();
        const expectedResponse = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedResponse);
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
        chai_1.assert.deepEqual(rpStub.args, expectedArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
    }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUViLCtCQUE4QjtBQUM5QixpQ0FBd0M7QUFFeEMsaUNBQWlDO0FBQ2pDLHNDQUFzQztBQUN0QywrQkFBK0I7QUFFL0IsbUNBQThCO0FBRTlCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLElBQUksVUFBcUIsQ0FBQztJQUMxQixJQUFJLE1BQWlCLENBQUM7SUFFdEIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLFVBQVUsR0FBRyxZQUFJLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sR0FBRyxZQUFJLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZixNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxD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