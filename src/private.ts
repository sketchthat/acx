import { Common } from './common';

export class Private {
  private common: Common;

  constructor(
    publicKey?: string,
    privateKey?: string,
  ) {
    this.common = new Common(publicKey, privateKey);
  }

  public async getCommon() {
    await this.common.request(true, 'GET', '/v2/markets.json');
  }
}
