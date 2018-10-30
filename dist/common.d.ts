export declare class Common {
    private uri;
    private api;
    private keys;
    constructor(accessKey?: string, secret?: string);
    request(auth: boolean, method: string, path: string, qs?: any, body?: any): Promise<any>;
    private generateAuthentication;
}
