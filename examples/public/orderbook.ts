import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().orderbook('btcaud')
  .then(orderbook => {
    console.log(orderbook);
  });

acx.public().orderbook('btcaud', 2, 2)
  .then(orderbook => {
    console.log(orderbook);
  });
