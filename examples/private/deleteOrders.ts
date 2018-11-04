// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Delete Pending Orders
 *
 * Ids: 425432321, 451434981
 */
acx.private().deleteOrders(['425432321', '451434981'])
  .then(resp => {
    console.log(resp);
  });
