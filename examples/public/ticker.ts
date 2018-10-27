import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().ticker('btcaud')
  .then(ticker => {
    console.log(ticker);
  });
