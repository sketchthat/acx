// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Post Order - Limit Buy
 *
 * Market: BTCAUD
 * Side: Buy
 * Volume: 0.1
 * Price: 8340.22
 * Order Type: Limit
 */
acx.private().postOrder('btcaud', 'buy', 0.1, 8340.22, 'limit')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Order - Market Buy
 *
 * Market: BTCAUD
 * Side: Buy
 * Volume: 0.1
 * Order Type: Market
 */
acx.private().postOrder('btcaud', 'buy', 0.1, null, 'market')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Order - Limit Sell
 *
 * Market: BTCAUD
 * Side: Buy
 * Volume: 0.1
 * Price: 8890.22
 * Order Type: Limit
 */
acx.private().postOrder('btcaud', 'sell', 0.1, 8890.22, 'limit')
  .then(resp => {
    console.log(resp);
  });

/**
 * Post Order - Market Sell
 *
 * Market: BTCAUD
 * Side: Sell
 * Volume: 0.1
 * Order Type: Market
 */
acx.private().postOrder('btcaud', 'sell', 0.1, null, 'market')
  .then(resp => {
    console.log(resp);
  });
