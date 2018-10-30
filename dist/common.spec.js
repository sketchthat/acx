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
const common_1 = require("./common");
describe('Common', () => {
    let rpStub;
    let cryptoStub;
    let common;
    before(() => {
        common = new common_1.Common('accessKey11', 'secret22');
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
    it('should call request without auth', () => __awaiter(this, void 0, void 0, function* () {
        rpStub.resolves({ response: true });
        const resp = yield common.request(false, 'GET', 'deposits.json', { some1: 'qs' }, { some2: 'body' });
        const expectedResponse = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedResponse);
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
        chai_1.assert.deepEqual(rpStub.args, expectedRpArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.strictEqual(cryptoStub.callCount, 0);
    }));
    it('should call request with auth', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoReturns = {
            update(update) {
                const expectedUpdate = 'POST|/api/v2/deposits.json|access_key=accessKey11&some1=qs&tonce=1541581502000';
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
        const resp = yield common.request(true, 'POST', 'deposits.json', { some1: 'qs' }, { some2: 'body' });
        const expectedResponse = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedResponse);
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
        chai_1.assert.deepEqual(rpStub.args, expectedRpArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call request with no QS', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoReturns = {
            update(update) {
                const expectedUpdate = 'GET|/api/v2/deposits.json|access_key=accessKey11&tonce=1541581502000';
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
        const resp = yield common.request(true, 'GET', 'deposits.json');
        const expectedResponse = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedResponse);
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
        chai_1.assert.deepEqual(rpStub.args, expectedRpArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call request with duped QS and Body params', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoReturns = {
            update(update) {
                const expectedUpdate = 'POST|/api/v2/deposits.json|access_key=accessKey11&some=one&tonce=1541581502000';
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
        const resp = yield common.request(true, 'POST', 'deposits.json', { some: 'one' }, { some: 'two' });
        const expectedResponse = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedResponse);
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
        chai_1.assert.deepEqual(rpStub.args, expectedRpArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
    it('should call request with empty QS params', () => __awaiter(this, void 0, void 0, function* () {
        const cryptoReturns = {
            update(update) {
                const expectedUpdate = 'POST|/api/v2/deposits.json|access_key=accessKey11&tonce=1541581502000';
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
        const resp = yield common.request(true, 'POST', 'deposits.json', { some1: null }, { some2: 'two' });
        const expectedResponse = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedResponse);
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
        chai_1.assert.deepEqual(rpStub.args, expectedRpArgs);
        chai_1.assert.strictEqual(rpStub.callCount, 1);
        chai_1.assert.strictEqual(cryptoStub.callCount, 1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29tbW9uLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBQzlCLGlDQUF3QztBQUV4QyxpQ0FBaUM7QUFDakMsc0NBQXNDO0FBQ3RDLCtCQUErQjtBQUUvQixxQ0FBa0M7QUFFbEMsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxNQUFpQixDQUFDO0lBQ3RCLElBQUksVUFBcUIsQ0FBQztJQUMxQixJQUFJLE1BQWMsQ0FBQztJQUVuQixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMvQyxVQUFVLEdBQUcsWUFBSSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4QyxNQUFNLEdBQUcsWUFBSSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWYsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNULFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFD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