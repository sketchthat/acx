import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get Market Depth
 *
 * Market: BTCAUD
 */
acx.public().depth('btcaud')
  .then(depth => {
    console.log(depth);
  });

/**
 * Get Market Depth
 *
 * Market: BTCAUD
 * Limit: 10
 */
acx.public().depth('btcaud', 10)
  .then(depth => {
    console.log(depth);
  });
