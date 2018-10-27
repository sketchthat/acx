// import * as crypto from 'crypto';
import * as rp from 'request-promise';

// declare const Buffer;

interface RequestOpts {
  json?: any;
  method: string;
  qs: any;
  uri?: string;
}

// interface Authentication {
//   apiKey: string;
//   nonce: number;
//   signature: string;
// }

export class Common {
  private uri: string;
  private keys;

  constructor(publicKey?: string, privateKey?: string) {
    this.uri = 'https://acx.io/api/v2/';

    if (publicKey && privateKey) {
      this.keys = { publicKey, privateKey };
      console.log(this.keys);
    }
  }

  public async request(auth: boolean, method: string, path: string, qs?: any): Promise<any> {
    const opts: RequestOpts = {
      uri: `${this.uri}${path}`,
      method: method,
      qs: qs,
      json: true,
    };

    if (auth) {
      console.log('do auth');
    }


    console.log(opts.uri);

    // const opts: RequestOpts = {
    //   method: method,
    //   qs: qs,
    //   json: json,
    // };

    // if (auth) {
    //   opts.uri = `${this.uri}/Private/${path}`;

    //   if (json) {
    //     Object.keys(json).forEach(key => {
    //       if (!json[key]) {
    //         delete json[key];
    //       }
    //     });
    //   }

    //   const authentication = this.generateAuthentication(opts.uri, json);

    //   opts.json = authentication;

    //   if (method === 'post' && json) {
    //     opts.json = Object.assign(authentication, json);
    //   }

    //   delete opts.qs;
    // } else {
    //   opts.uri = `${this.uri}/Public/${path}`;
    //   opts.json = true;
    // }

    return rp(opts);
  }

  // private generateAuthentication(uri: string, params: any): Authentication {
  //   const nonce = new Date().getTime();

  //   const message = [
  //     uri,
  //     `apiKey=${this.keys.publicKey}`,
  //     `nonce=${nonce}`,
  //   ];

  //   if (params) {
  //     Object.keys(params).forEach(key => {
  //       let value = params[key];

  //       if (Array.isArray(params[key])) {
  //         value = params[key].join(',');
  //       }

  //       message.push(`${key}=${value}`);
  //     });
  //   }

  //   const signature = crypto.createHmac('sha256', new Buffer(this.keys.privateKey, 'utf8'))
  //     .update(message.join(','))
  //     .digest('hex')
  //     .toUpperCase();

  //   return {
  //     apiKey: this.keys.publicKey,
  //     nonce,
  //     signature,
  //   };
  // }
}
