// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Get Withdraw
 *
 * ID: 135446
 */
acx.private().getWithdraw('135446')
  .then(withdraw => {
    console.log(withdraw);
  });
