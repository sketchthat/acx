// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Widthdraw Digital Currency
 *
 * Currency: BTC
 * Volume: 1
 * Address: 1F9yNNrh75sNTAEXY1K9ZuqnNWCyh22xZg
 */
acx.private().postWithdraw('btc', 1, '1F9yNNrh75sNTAEXY1K9ZuqnNWCyh22xZg')
  .then(resp => {
    console.log(resp);
  });
