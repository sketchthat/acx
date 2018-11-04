// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Get Withdraws
 */
acx.private().getWithdraws()
  .then(withdraws => {
    console.log(withdraws);
  });

/**
 * Get Withdraws
 *
 * Currency: BTC
 * Limit: 5
 * State: Done
 */
acx.private().getWithdraws('btc', 5, 'done')
  .then(withdraws => {
    console.log(withdraws);
  });
