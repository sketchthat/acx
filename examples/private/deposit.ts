// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Check Deposit Information
 *
 * TXID: f2354e1641975ed2f2c0e2ce3d6f4929d9ab35d1794e3
 */
acx.private().deposit('f2354e1641975ed2f2c0e2ce3d6f4929d9ab35d1794e3')
  .then(deposit => {
    console.log(deposit);
  });
