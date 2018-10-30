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
const common_1 = require("./common");
const public_1 = require("./public");
describe('Public', () => {
    let publicClass;
    let commonStub;
    before(() => {
        publicClass = new public_1.Public();
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
    });
    beforeEach(() => {
        commonStub.reset();
    });
    after(() => {
        commonStub.restore();
    });
    it('should call depth without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.depth('btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call depth with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.depth('btcaud', 5);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call k without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.k('btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call k with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.k('btcaud', 5, 15, 1540804696);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call kPending without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.kPending('btcaud', 100);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call kPending with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.kPending('btcaud', 100, 5, 15, 1540804696);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call markets', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.markets();
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                false,
                'GET',
                'markets.json',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call orderbook without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.orderbook('btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call orderbook with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.orderbook('btcaud', 5, 10);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call tickers', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.tickers();
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                false,
                'GET',
                'tickers.json',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call ticker', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.ticker('btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                false,
                'GET',
                'tickers/btcaud.json',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call trades without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.trades('btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call trades with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.trades('btcaud', 5, 1540804696, 1, 100, 'asc');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call timestamp', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield publicClass.timestamp();
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                false,
                'GET',
                'timestamp.json',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcHVibGljLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBRWIsK0JBQThCO0FBRTlCLGlDQUF3QztBQUV4QyxxQ0FBa0M7QUFDbEMscUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3RCLElBQUksV0FBbUIsQ0FBQztJQUN4QixJQUFJLFVBQXFCLENBQUM7SUFFMUIsTUFBTSxDQUFDLEdBQUcsRUFBRTtRQUNWLFdBQVcsR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBRTNCLFVBQVUsR0FBRyxZQUFJLENBQUMsZUFBTSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztJQUVILFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZCxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1QsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFLEdBQVMsRUFBRTtRQUNoRCxVQUFVLENBQUMsT0FBTyxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLEdBQVEsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBELE1BQU0sa0JBQWtCLEdBQUc7WUFDekIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDO1FBRUYsYUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUUzQyxNQUFNLGtCQUFrQixHQUFHO1lBQ3pCO2dCQUNFLEtBQUs7Z0JBQ0wsS0FBSztnQkFDTCxZQUFZO2dCQUNaO29CQUNF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