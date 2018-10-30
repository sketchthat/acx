"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class Private {
    constructor(accessKey, secret) {
        this.common = new common_1.Common(accessKey, secret);
    }
    deposit(txid) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                txid,
            };
            return this.common.request(true, 'GET', 'deposit.json', qs);
        });
    }
    deposits(currency, limit, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                currency,
                limit,
                state,
            };
            return this.common.request(true, 'GET', 'deposits.json', qs);
        });
    }
    depositAddress(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                currency,
            };
            return this.common.request(true, 'GET', 'deposit_address.json', qs);
        });
    }
    members() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(true, 'GET', 'members/me.json');
        });
    }
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                id,
            };
            return this.common.request(true, 'GET', 'order.json', qs);
        });
    }
    getOrders(market, state, limit, page, orderBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                state,
                limit,
                page,
                order_by: orderBy,
            };
            return this.common.request(true, 'GET', 'orders.json', qs);
        });
    }
    postOrder(market, side, volume, price, ordType) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                market,
                side,
                volume,
                price,
                ord_type: ordType,
            };
            return this.common.request(true, 'POST', 'orders.json', null, body);
        });
    }
    postOrders(market, orders) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                market,
                orders,
            };
            return this.common.request(true, 'POST', 'orders/multi.json', null, body);
        });
    }
    clearOrders(side, market) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                side,
                market,
            };
            return this.common.request(true, 'POST', 'orders/clear.json', null, body);
        });
    }
    deleteOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                id,
            };
            return this.common.request(true, 'POST', 'order/delete.json', null, body);
        });
    }
    deleteOrders(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                ids: ids.join(','),
            };
            return this.common.request(true, 'POST', 'orders/delete.json', null, body);
        });
    }
    trades(market, limit, timestamp, from, to, orderBy) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                limit,
                timestamp,
                from,
                to,
                order_by: orderBy,
            };
            return this.common.request(true, 'GET', 'trades/my.json', qs);
        });
    }
    getWithdraws(currency, limit, state) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                currency,
                limit,
                state,
            };
            return this.common.request(true, 'GET', 'withdraws.json', qs);
        });
    }
    getWithdraw(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                id,
            };
            return this.common.request(true, 'GET', 'withdraw.json', qs);
        });
    }
    postWithdraw(currency, sum, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = {
                currency,
                sum,
                address,
            };
            return this.common.request(true, 'POST', 'withdraw.json', null, body);
        });
    }
}
exports.Private = Private;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpdmF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBa0M7QUFVbEM7SUFHRSxZQUNFLFNBQWtCLEVBQ2xCLE1BQWU7UUFFZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRVksT0FBTyxDQUFDLElBQVk7O1lBQy9CLE1BQU0sRUFBRSxHQUFHO2dCQUNULElBQUk7YUFDTCxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsUUFBaUIsRUFBRSxLQUFjLEVBQUUsS0FBYzs7WUFDckUsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUTtnQkFDUixLQUFLO2dCQUNMLEtBQUs7YUFDTixDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUMvRCxDQUFDO0tBQUE7SUFFWSxjQUFjLENBQUMsUUFBZ0I7O1lBQzFDLE1BQU0sRUFBRSxHQUFHO2dCQUNULFFBQVE7YUFDVCxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7S0FBQTtJQUVZLE9BQU87O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxFQUFVOztZ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