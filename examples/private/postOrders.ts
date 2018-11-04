// Import Keys
import * as fs from 'fs';
const keys = JSON.parse(fs.readFileSync('./examples/keys.json', 'utf8'));

// Start Example
import { ACX } from '../../src';
import { Order } from '../../src/interfaces/private/orders.interface';

const acx = new ACX(keys.accessKey, keys.secret);

const orders: Order[] = [
  {
    side: 'buy',
    volume: '0.5',
    price: '9820.11',
    ord_type: 'limit',
  },
  {
    side: 'sell',
    volume: '0.1',
    price: '8920.11',
    ord_type: 'limit',
  },
  {
    side: 'buy',
    volume: '0.1',
    price: null,
    ord_type: 'market',
  },
  {
    side: 'sell',
    volume: '0.1',
    price: null,
    ord_type: 'market',
  },
];

/**
 * Post Multiple Orders
 *
 * Market: BTCAUD
 * Orders: Market & Limit. Buy & Sell.
 */
acx.private().postOrders('btcaud', orders)
  .then(resp => {
    console.log(resp);
  });
