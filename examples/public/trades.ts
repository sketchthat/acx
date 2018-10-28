import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().trades('btcaud')
  .then(trades => {
    console.log(trades);
  });

const timeInSeconds = Date.now() / 1000;
const anHourInSeconds = 3600;

acx.public().trades('btcaud', 5,  timeInSeconds - anHourInSeconds, 0, 8935296, 'asc')
  .then(trades => {
    console.log(trades);
  });
