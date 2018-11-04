import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get Ticker
 *
 * Market: BTCAUD
 */
acx.public().ticker('btcaud')
  .then(ticker => {
    console.log(ticker);
  });
