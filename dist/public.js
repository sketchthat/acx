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
class Public {
    constructor() {
        this.common = new common_1.Common();
    }
    depth(market, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                limit,
            };
            return this.common.request(false, 'GET', 'depth.json', qs);
        });
    }
    k(market, limit, period, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                limit,
                period,
                timestamp,
            };
            return this.common.request(false, 'GET', 'k.json', qs);
        });
    }
    kPending(market, tradeId, limit, period, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                trade_id: tradeId,
                limit,
                period,
                timestamp,
            };
            return this.common.request(false, 'GET', 'k_with_pending_trades.json', qs);
        });
    }
    markets() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'GET', 'markets.json');
        });
    }
    orderbook(market, asksLimit, bidsLimit) {
        return __awaiter(this, void 0, void 0, function* () {
            const qs = {
                market,
                asks_limit: asksLimit,
                bids_limit: bidsLimit,
            };
            return this.common.request(false, 'GET', 'order_book.json', qs);
        });
    }
    tickers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'GET', 'tickers.json');
        });
    }
    ticker(market) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'GET', `tickers/${market}.json`);
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
            return this.common.request(false, 'GET', 'trades.json', qs);
        });
    }
    timestamp() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.common.request(false, 'GET', 'timestamp.json');
        });
    }
}
exports.Public = Public;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3B1YmxpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQWtDO0FBWWxDO0lBR0U7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVZLEtBQUssQ0FBQyxNQUFjLEVBQUUsS0FBYzs7WUFDL0MsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLO2FBQ04sQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDN0QsQ0FBQztLQUFBO0lBRVksQ0FBQyxDQUFDLE1BQWMsRUFBRSxLQUFjLEVBQUUsTUFBZSxFQUFFLFNBQWtCOztZQUNoRixNQUFNLEVBQUUsR0FBRztnQkFDVCxNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixTQUFTO2FBQ1YsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLE1BQWMsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLE1BQWUsRUFBRSxTQUFrQjs7WUFDeEcsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTTtnQkFDTixRQUFRLEVBQUUsT0FBTztnQkFDakIsS0FBSztnQkFDTCxNQUFNO2dCQUNOLFNBQVM7YUFDVixDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLENBQUM7S0FBQTtJQUVZLE9BQU87O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxTQUFTLENBQUMsTUFBYyxFQUFFLFNBQWtCLEVBQUUsU0FBa0I7O1lBQzNFLE1BQU0sRUFBRSxHQUFHO2dCQUNULE1BQU07Z0JBQ04sVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLFVBQVUsRUFBRSxTQUFTO2FBQ3RCLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBRVksT0FBTzs7WUFDbEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxNQUFjOztZQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxNQUFNLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxNQUFjLEVBQUUsS0FBYyxFQUFFLFNBQWtCLEVBQUUsSUFBYSxFQUFFLEVBQVcsRUFBRSxPQUFpQjs7WUFDbkgsTUFBTSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTTtnQkFDTixLQUFLO2dCQUNMLFNBQVM7Z0JBQ1QsSUFBSTtnQkFDSixFQUFFO2dCQUNGLFFBQVEsRUFBRSxPQUFPO2FBQ2xCLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUVZLFNBQVM7O1lBQ3BCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELENBQUM7S0FBQTtDQUNGO0FBN0VELHdCQTZFQyJ9