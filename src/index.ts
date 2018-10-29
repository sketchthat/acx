import { Private } from './private';
import { Public } from './public';

export class ACX {
  private privateClass: Private;
  private publicClass: Public;

  constructor(
    accessKey?: string,
    secret?: string,
  ) {
    this.privateClass = new Private(accessKey, secret);
    this.publicClass = new Public();
  }

  public public() {
    return this.publicClass;
  }

  public private() {
    return this.privateClass;
  }
}
