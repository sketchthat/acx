import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get Market Information
 */
acx.public().markets()
  .then(markets => {
    console.log(markets);
  });
