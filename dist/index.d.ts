import { Private } from './private';
import { Public } from './public';
export declare class ACX {
    private privateClass;
    private publicClass;
    constructor(accessKey?: string, secret?: string);
    public(): Public;
    private(): Private;
}
