import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get Orderbook
 *
 * Market: BTCAUD
 */
acx.public().orderbook('btcaud')
  .then(orderbook => {
    console.log(orderbook);
  });

/**
 * Get Orderbook
 *
 * Market: BTCAUD
 * Asks Limit: 2
 * Bids Limit: 2
 */
acx.public().orderbook('btcaud', 2, 2)
  .then(orderbook => {
    console.log(orderbook);
  });
