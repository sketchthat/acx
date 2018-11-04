import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get Historic Trades
 *
 * Market: BTCAUD
 */
acx.public().trades('btcaud')
  .then(trades => {
    console.log(trades);
  });

/**
 * Get Historic Trades
 *
 * Market: BTCAUD
 * Limit: 5
 * Timestamp: An Hour Ago (Variable)
 * From: 0 (Order ID)
 * To: 8935296 (Order ID)
 * Order By: ASC
 */
const timeInSeconds = Date.now() / 1000;
const anHourInSeconds = 3600;

acx.public().trades('btcaud', 5,  timeInSeconds - anHourInSeconds, 0, 8935296, 'asc')
  .then(trades => {
    console.log(trades);
  });
