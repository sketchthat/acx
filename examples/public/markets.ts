import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().markets()
  .then(markets => {
    console.log(markets);
  });
