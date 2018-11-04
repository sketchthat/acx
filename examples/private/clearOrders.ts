// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Clear all pending orders
 */
acx.private().clearOrders()
  .then(resp => {
    console.log(resp);
  });

/**
 * Clear all buy orders on the BTCAUD market
 *
 * Side: Buy
 * Market: BTCAUD
 */
acx.private().clearOrders('buy', 'btcaud')
  .then(resp => {
    console.log(resp);
  });
