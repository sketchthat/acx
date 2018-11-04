import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get History Pending (K)
 *
 * Market: BTCAUD
 * Trade ID: 1540671600
 */
acx.public().kPending('btcaud', 1540671600)
  .then(k => {
    console.log(k);
  });

/**
 * Get History Pending (K)
 *
 * Market: BTCAUD
 * Trade ID: 1540671600,
 * Limit: 2
 * Period: 5
 * Timestamp: An Hour Ago (Variable)
 */
const timeInSeconds = Date.now() / 1000;
const anHourInSeconds = 3600;

acx.public().kPending('btcaud', 1540671600, 2, 5, timeInSeconds - anHourInSeconds)
  .then(k => {
    console.log(k);
  });
