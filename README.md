[![Build Status](https://travis-ci.org/sketchthat/acx.svg?branch=master)](https://travis-ci.org/sketchthat/acx) [![Coverage Status](https://coveralls.io/repos/github/sketchthat/acx/badge.svg?branch=master)](https://coveralls.io/github/sketchthat/acx?branch=master)
![Dependencies](https://david-dm.org/sketchthat/acx.svg)

# ACX Wrapper

Typescript / Node wrapper for the Data and Trading APIs offered by [ACX](https://www.acx.com)

## Setup

Install the dependancies with npm / yarn.

```
npm install acx-io --save
```

### API Key

In order to utilise the `private()` method you'll need to generate an [API Key](https://www.acx.com/API#authentication).

## Usage

The API wrapper exposes a [Public](https://www.acx.com/API#public) and a [Private](https://www.acx.com/API#private) method, which contain each of the endpoint functions.

### Exposed Functions
- Public methods are within [`public.ts`](https://github.com/sketchthat/acx/blob/master/src/public.ts)
- Private methods are within [`private.ts`](https://github.com/sketchthat/acx/blob/master/src/private.ts)

### Example

Examples for usage of each function can be found within the [examples folder](/examples).

They can be run by the command line with `ts-node`.

```bash
npm install ts-node -g
ts-node examples/public/orderbook
```

```typescript
import { acx } from 'acx-io';

const acx = new acx('accessKey', 'secret');

// Access Public Timestamp
acx.public().timestamp()
  .then(resp => {
    console.log(resp);
  });
```


