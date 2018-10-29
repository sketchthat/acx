export type Side = 'sell' | 'buy';
export type OrdType = 'limit' | 'market';

export interface Order {
  side: Side;
  volume: string;
  price?: string;
  ord_type?: string;
}
