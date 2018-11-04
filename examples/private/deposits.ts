// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Check historic deposits
 */
acx.private().deposits()
  .then(deposits => {
    console.log(deposits);
  });

/**
 * Check historic deposits
 *
 * Currency: BTC
 * Limit: 2
 * State: Accepted
 */
acx.private().deposits('btc', 2, 'accepted')
  .then(deposits => {
    console.log(deposits);
  });
