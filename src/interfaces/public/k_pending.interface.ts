export interface KPending {
  k: number[][];
  trades: Trade[];
}

interface Trade {
  tid: number;
  type: string;
  date: number;
  price: string;
  amount: string;
}
