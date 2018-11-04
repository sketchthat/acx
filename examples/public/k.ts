import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get History (K)
 *
 * Market: BTCAUD
 */
acx.public().k('btcaud')
  .then(k => {
    console.log(k);
  });

/**
 * Get History (K)
 *
 * Market: BTCAUD
 * Limit: 2
 * Period: 5
 * Timestamp: An Hour Ago (Variable)
 */
const timeInSeconds = Date.now() / 1000;
const anHourInSeconds = 3600;

acx.public().k('btcaud', 2, 5, timeInSeconds - anHourInSeconds)
  .then(k => {
    console.log(k);
  });
