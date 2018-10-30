export interface Orderbook {
    asks: Order[];
    bids: Order[];
}
interface Order {
    id: number;
    side: string;
    ord_type: string;
    price: string;
    avg_price: string;
    state: string;
    market: string;
    created_at: string;
    volume: string;
    remaining_volume: string;
    executed_volume: string;
    trades_count: number;
}
export {};
