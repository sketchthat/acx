"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = require("crypto");
const querystring = require("querystring");
const rp = require("request-promise");
class Common {
    constructor(accessKey, secret) {
        this.api = '/api/v2/';
        this.uri = `https://acx.io${this.api}`;
        if (accessKey && secret) {
            this.keys = { accessKey, secret };
        }
    }
    request(auth, method, path, qs, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
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
        });
    }
    generateAuthentication(accessKey, secret, method, path, qs) {
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
exports.Common = Common;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUNBQWlDO0FBQ2pDLDJDQUEyQztBQUMzQyxzQ0FBc0M7QUF1QnRDO0lBS0UsWUFBWSxTQUFrQixFQUFFLE1BQWU7UUFDN0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZDLElBQUksU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVZLE9BQU8sQ0FBQyxJQUFhLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxFQUFRLEVBQUUsSUFBVTs7WUFDcEYsTUFBTSxJQUFJLEdBQWdCO2dCQUN4QixHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtnQkFDekIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsRUFBRSxFQUFFLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLElBQUk7YUFDWCxDQUFDO1lBRUYsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRXRHLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO29CQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUNkO2dCQUVELElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUUzQyxJQUFJLE1BQU0sS0FBSyxNQUFNLEVBQUUsRUFBRSxZQUFZO29CQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZFO2FBQ0Y7WUFFRCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFTyxzQkFBc0IsQ0FBQyxTQUFpQixFQUFFLE1BQWMsRUFBRSxNQUFjLEVBQUUsSUFBWSxFQUFFLEVBQU87UUFDckcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFHO1lBQ2QsTUFBTTtZQUNOLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7U0FDckIsQ0FBQztRQUVGLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDcEMsVUFBVSxFQUFFLFNBQVM7WUFDckIsS0FBSyxFQUFFLENBQUM7U0FDVCxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsTUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFFbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUU7YUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUwsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRS9ELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztRQUVqRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDdEUsTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVqQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUNGO0FBeEVELHdCQXdFQyJ9