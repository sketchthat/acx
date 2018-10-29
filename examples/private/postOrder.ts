// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

acx.private().postOrder('btcaud', 'buy', 0.1, 2.96, 'limit')
  .then(resp => {
    console.log(resp);
  });
