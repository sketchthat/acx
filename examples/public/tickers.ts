import { ACX } from '../../src/index';

const acx = new ACX();

acx.public().tickers()
  .then(tickers => {
    console.log(tickers);
  });
