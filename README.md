[![Build Status](https://travis-ci.org/sketchthat/acx.svg?branch=master)](https://travis-ci.org/sketchthat/acx) [![Coverage Status](https://coveralls.io/repos/github/sketchthat/acx/badge.svg?branch=master)](https://coveralls.io/github/sketchthat/acx?branch=master)
![Dependencies](https://david-dm.org/sketchthat/acx.svg)

# ACX Wrapper

Typescript / Node wrapper for the Data and Trading APIs offered by [ACX](https://www.acx.com)

## Setup

Install the dependancies with npm / yarn.

```
npm install ir-client --save
```

### API Key

In order to utilise the `private()` method you'll need to generate an [API Key](https://www.acx.com/API#authentication).

## Usage

The API wrapper exposes a [Public](https://www.acx.com/API#public) and a [Private](https://www.acx.com/API#private) method, which contain each of the endpoint functions.

### Exposed Functions
- [Public](https://github.com/sketchthat/acx/wiki/Public-Methods) methods are within [`public.ts`](https://github.com/sketchthat/acx/blob/master/src/public.ts)
- [Private](https://github.com/sketchthat/acx/wiki/Private-Methods) methods are within [`private.ts`](https://github.com/sketchthat/acx/blob/master/src/private.ts)

### Example

Examples for usage of each function can be found within the [examples folder](/examples).

They can be run by the command line with `ts-node`.

```bash
npm install ts-node -g
ts-node examples/public/orderBook
```

A couple of simple examples are listed below.

```typescript
import { acx } from 'ir-client';

const ir = new acx('public-key', 'private-key');

// Access Public API Methods
ir.public().GetMarketSummary('xbt', 'aud')
  .then(resp => {
    console.log(resp);
  });

/*
{
  DayHighestPrice: 10157.08,
  DayLowestPrice: 9800.1,
  DayAvgPrice: 9950.28,
  DayVolumeXbt: 29.02665049,
  DayVolumeXbtInSecondaryCurrrency: 28.29342014,
  CurrentLowestOfferPrice: 9993.1,
  CurrentHighestBidPrice: 9875.6,
  LastPrice: 9958.18,
  PrimaryCurrencyCode: 'Xbt',
  SecondaryCurrencyCode: 'Aud',
  CreatedTimestampUtc: '2018-05-26T07:10:09.6594524Z'
}
*/

// Access Private API Methods
ir.private().GetAccounts()
  .then(resp => {
    console.log(resp);
  });

/*
[
  {
    AccountGuid: '0a0578ba-60b4-11e8-9c2d-fa7ae01bbebc',
    AccountStatus: 'Active',
    AvailableBalance: 0,
    CurrencyCode: 'Aud',
    TotalBalance: 0
  },
  { AccountGuid: '0a057b62-60b4-11e8-9c2d-fa7ae01bbebc',
    AccountStatus: 'Active',
    AvailableBalance: 0,
    CurrencyCode: 'Usd',
    TotalBalance: 0
  },
  { AccountGuid: '0a057fae-60b4-11e8-9c2d-fa7ae01bbebc',
    AccountStatus: 'Active',
    AvailableBalance: 0,
    CurrencyCode: 'Nzd',
    TotalBalance: 0
  },
  { AccountGuid: '0a0581b6-60b4-11e8-9c2d-fa7ae01bbebc',
    AccountStatus: 'Active',
    AvailableBalance: 0,
    CurrencyCode: 'Xbt',
    TotalBalance: 0
  },
  { AccountGuid: '0a058300-60b4-11e8-9c2d-fa7ae01bbebc',
    AccountStatus: 'Active',
    AvailableBalance: 0,
    CurrencyCode: 'Eth',
    TotalBalance: 0
  },
  { AccountGuid: '20371896-60b4-11e8-9c2d-fa7ae01bbebc',
    AccountStatus: 'Active',
    AvailableBalance: 0,
    CurrencyCode: 'Bch',
    TotalBalance: 0
  },
  {
    AccountGuid: '20371bde-60b4-11e8-9c2d-fa7ae01bbebc',
    AccountStatus: 'Active',
    AvailableBalance: 0,
    CurrencyCode: 'Ltc',
    TotalBalance: 0
  }
]
*/
```


