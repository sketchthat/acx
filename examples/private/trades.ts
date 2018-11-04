// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';

const acx = new ACX(keys.accessKey, keys.secret);

/**
 * Get Trades
 *
 * Market: BTCAUD
 */
acx.private().trades('btcaud')
  .then(trades => {
    console.log(trades);
  });

/**
 * Get Trades
 *
 * Market: BTCAUD
 * Limit: 5
 * Timestamp: An Hour Ago (Variable)
 * From: 1 (Start Order Number)
 * To: 8935296 (End Order Number)
 * Order By: ASC
 */
const timeInSeconds = Math.floor(Date.now() / 1000);
const anHourInSeconds = 3600;

acx.private().trades('btcaud', 5,  timeInSeconds - anHourInSeconds, 1, 8935296, 'asc')
  .then(trades => {
    console.log(trades);
  });
