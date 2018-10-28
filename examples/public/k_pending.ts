import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().k('btcaud')
  .then(k => {
    console.log(k);
  });

const timeInSeconds = Date.now() / 1000;
const anHourInSeconds = 3600;

acx.public().kPending('btcaud', 1540671600, 5, 5, timeInSeconds - anHourInSeconds)
  .then(k => {
    console.log(k);
  });
