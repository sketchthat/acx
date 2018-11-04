// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Get Orders
 *
 * Market: BTCAUD
 */
acx.private().getOrders('btcaud')
  .then(orders => {
    console.log(orders);
  });

/**
 * Get Orders
 *
 * Market: BTCAUD
 * State: Done
 * Limit: 5
 * Page: 1
 * Order By: ASC
 */
acx.private().getOrders('btcaud', 'done', 5, 1, 'asc')
  .then(orders => {
    console.log(orders);
  });
