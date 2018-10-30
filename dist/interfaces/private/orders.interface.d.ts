export declare type Side = 'sell' | 'buy';
export declare type OrdType = 'limit' | 'market';
export interface Order {
    side: Side;
    volume: string;
    price?: string;
    ord_type?: string;
}
