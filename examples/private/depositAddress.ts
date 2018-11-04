// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Get Deposit Address
 *
 * Curreny: BTC
 */
acx.private().depositAddress('btc')
  .then(depositAddress => {
    console.log(depositAddress);
  });
