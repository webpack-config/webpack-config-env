#webpack-config-env

Inject environment variables into your [webpack] build.

[![build status](http://img.shields.io/travis/webpack-config/webpack-config-env/master.svg?style=flat)](https://travis-ci.org/webpack-config/webpack-config-env)
[![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-env/master.svg?style=flat)](https://coveralls.io/github/webpack-config/webpack-config-env?branch=master)
[![license](http://img.shields.io/npm/l/webpack-config-env.svg?style=flat)](https://www.npmjs.com/package/webpack-config-env)
[![version](http://img.shields.io/npm/v/webpack-config-env.svg?style=flat)](https://www.npmjs.com/package/webpack-config-env)
[![downloads](http://img.shields.io/npm/dm/webpack-config-env.svg?style=flat)](https://www.npmjs.com/package/webpack-config-env)

## Usage

Install:
```sh
npm install --save webpack-config-env
```

Add to your `webpack.config.babel.js`:

```js
import env from `webpack-config-env`;

env({
  NODE_ENV: {required: false},
  DEPLOY_ENV: {required: process.env.NODE_ENV === 'production'},
  API_URL: {
    required: true,
    value: process.env.NODE_ENV !== 'production'
     ? 'https://my-app-api.herokuapp.com/api'
     : undefined,
  },
})({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
