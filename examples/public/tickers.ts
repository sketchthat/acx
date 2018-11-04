import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get All Tickers
 */
acx.public().tickers()
  .then(tickers => {
    console.log(tickers);
  });
