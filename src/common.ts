import * as crypto from 'crypto';
import * as querystring from 'querystring';
import * as rp from 'request-promise';

declare const Buffer;

interface RequestOpts {
  json?: any;
  method: string;
  qs: any;
  body?: any;
  uri?: string;
}

interface Authentication {
  access_key: string;
  tonce: number;
  signature: string;
}

interface Keys {
  accessKey: string;
  secret: string;
}

export class Common {
  private uri: string;
  private api: string;
  private keys: Keys;

  constructor(accessKey?: string, secret?: string) {
    this.api = '/api/v2/';
    this.uri = `https://acx.io${this.api}`;

    if (accessKey && secret) {
      this.keys = { accessKey, secret };
    }
  }

  public async request(auth: boolean, method: string, path: string, qs?: any, body?: any): Promise<any> {
    const opts: RequestOpts = {
      uri: `${this.uri}${path}`,
      method: method,
      qs: qs,
      body: body,
      json: true,
    };

    if (auth) {
      const secureQs = this.generateAuthentication(this.keys.accessKey, this.keys.secret, method, path, qs);

      if (!opts.qs) {
        opts.qs = {};
      }

      opts.qs = Object.assign(opts.qs, secureQs);

      if (method === 'POST') { // Remove QS
        Object.keys(body).forEach(key => opts.qs[key] && delete opts.qs[key]);
      }
    }

    return rp(opts);
  }

  private generateAuthentication(accessKey: string, secret: string, method: string, path: string, qs: any): Authentication {
    const d = Date.now();

    const message = [
      method,
      `${this.api}${path}`,
    ];

    const signatureParams = Object.assign({
      access_key: accessKey,
      tonce: d,
    }, qs);

    const orderedSignatureParams = {};

    Object.keys(signatureParams).sort()
      .forEach(key => {
        if (signatureParams[key]) {
          orderedSignatureParams[key] = signatureParams[key];
        }
      });

    const stringQs = querystring.stringify(orderedSignatureParams);

    const param = message.join('|') + '|' + stringQs;

    const signature = crypto.createHmac('sha256', new Buffer(secret, 'utf8'))
      .update(param)
      .digest('hex');

    return Object.assign(signatureParams, { signature: signature });
  }
}
