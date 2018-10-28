import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().depth('btcaud')
  .then(depth => {
    console.log(depth);
  });

acx.public().depth('btcaud', 10)
  .then(depth => {
    console.log(depth);
  });
