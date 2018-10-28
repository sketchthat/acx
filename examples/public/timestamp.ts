import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().timestamp()
  .then(timestamp => {
    console.log(timestamp);
  });
