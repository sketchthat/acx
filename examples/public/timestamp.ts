import { ACX } from '../../src/index';

const acx = new ACX();

/**
 * Get Timestamp
 */
acx.public().timestamp()
  .then(timestamp => {
    console.log(timestamp);
  });
