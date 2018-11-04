// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Delete Pending Order
 *
 * ID: 454948336
 */
acx.private().deleteOrder('454948336')
  .then(resp => {
    console.log(resp);
  });
