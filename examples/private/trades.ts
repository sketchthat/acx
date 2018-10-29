// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

acx.private().trades('btcaud')
  .then(trades => {
    console.log(trades);
  });

const timeInSeconds = Math.floor(Date.now() / 1000);
const anHourInSeconds = 3600;

acx.private().trades('btcaud', 5,  timeInSeconds - anHourInSeconds, 1, 8935296, 'asc')
  .then(trades => {
    console.log(trades);
  });
