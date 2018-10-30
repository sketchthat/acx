export interface Members {
    sn: string;
    name: string;
    email: string;
    activated: boolean;
    accounts: Account[];
}
interface Account {
    currency: string;
    balance: string;
    locked: string;
}
export {};
