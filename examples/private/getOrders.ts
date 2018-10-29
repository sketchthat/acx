// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

acx.private().getOrders('btcaud')
  .then(orders => {
    console.log(orders);
  });

acx.private().getOrders('btcaud', 'done', 5, 1, 'asc')
  .then(orders => {
    console.log(orders);
  });
