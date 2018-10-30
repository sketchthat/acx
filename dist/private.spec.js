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
const private_1 = require("./private");
describe('Private', () => {
    let privateClass;
    let commonStub;
    before(() => {
        privateClass = new private_1.Private('accessKey', 'secret');
        commonStub = sinon_1.stub(common_1.Common.prototype, 'request');
    });
    beforeEach(() => {
        commonStub.reset();
    });
    after(() => {
        commonStub.restore();
    });
    it('should call deposit', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.deposit('112233');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call deposits without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.deposits('btc');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call deposits with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.deposits('btc', 5, 'done');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call depositAddress', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.depositAddress('btc');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call members', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.members();
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
        const expectedCommonArgs = [
            [
                true,
                'GET',
                'members/me.json',
            ],
        ];
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call getOrder', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.getOrder(112233);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call getOrders without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.getOrders('btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call getOrders with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.getOrders('btcaud', 'done', 5, 10, 'asc');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call postOrder without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.postOrder('btcaud', 'sell', 0.5);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call postOrder with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.postOrder('btcaud', 'sell', 0.5, 8500.11, 'limit');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call postOrders', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const orders = [
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
        const resp = yield privateClass.postOrders('btcaud', orders);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call clearOrders without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.clearOrders();
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call clearOrders with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.clearOrders('sell', 'btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call deleteOrder', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.deleteOrder('112233');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call deleteOrders', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.deleteOrders(['112233', '445566']);
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call trades without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.trades('btcaud');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call trades with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.trades('btcaud', 5, 1540804696, 1, 1000, 'desc');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call getWithdraws without params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.getWithdraws();
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call getWithdraws with params', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.getWithdraws('btcaud', 5, 'done');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call getWithdraw', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.getWithdraw('10');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
    it('should call postWithdraw', () => __awaiter(this, void 0, void 0, function* () {
        commonStub.returns({
            response: true,
        });
        const resp = yield privateClass.postWithdraw('btc', 1.55, '1xdd11');
        const expectedMockReturn = {
            response: true,
        };
        chai_1.assert.deepEqual(resp, expectedMockReturn);
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
        chai_1.assert.deepEqual(commonStub.args, expectedCommonArgs);
        chai_1.assert.strictEqual(commonStub.callCount, 1);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3ByaXZhdGUuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFFYiwrQkFBOEI7QUFDOUIsaUNBQXdDO0FBRXhDLHFDQUFrQztBQUNsQyx1Q0FBb0M7QUFHcEMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDdkIsSUFBSSxZQUFxQixDQUFDO0lBQzFCLElBQUksVUFBcUIsQ0FBQztJQUUxQixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1YsWUFBWSxHQUFHLElBQUksaUJBQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFbEQsVUFBVSxHQUFHLFlBQUksQ0FBQyxlQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDVCxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUJBQXFCLEVBQUUsR0FBUyxFQUFFO1FBQ25DLFVBQVUsQ0FBQyxPQUFPLENBQUM7WUFDakIsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksR0FBUSxNQUFNLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkQsTUFBTSxrQkFBa0IsR0FBRztZQUN6QixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFFRixhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRTNDLE1BQU0sa0JBQWtCLEdBQUc7WUFDekI7Z0JBQ0UsSUFBSTtnQkFDSixLQUFL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