// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

acx.private().deposits()
  .then(deposits => {
    console.log(deposits);
  });

acx.private().deposits('btc', 2, 'accepted')
  .then(deposits => {
    console.log(deposits);
  });
