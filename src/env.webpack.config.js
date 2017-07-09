/* eslint-disable no-console */
import flow from 'lodash/fp/flow';
import map from 'lodash/fp/map';
import has from 'lodash/fp/has';
import isUndefined from 'lodash/fp/isUndefined';
import fromPairs from 'lodash/fp/fromPairs';
import toPairs from 'lodash/fp/toPairs';

import chalk from 'chalk';
import webpack from 'webpack';
import {plugin} from 'webpack-partial';

const extract = flow(
  toPairs,
  map(([key, {value, required}]) => {
    if (has(key, process.env)) {
      const val = process.env[key];
      console.log(`   ${chalk.yellow(key)} ${chalk.bold(val)}`);
      return [`process.env.${key}`, JSON.stringify(val)];
    }

    if (!isUndefined(value)) {
      const val = value;
      console.log(`   ${chalk.yellow(key)} ${chalk.bold(val)}`);
      return [`process.env.${key}`, JSON.stringify(val)];
    }

    if (required) {
      throw new TypeError(`Required env variable ${key} is not defined`);
    }

    return [`process.env.${key}`, undefined];
  }),
  fromPairs,
);

export default (env = {}) => console.log(chalk.bold('📦  Environment')) ||
  plugin(new webpack.DefinePlugin(extract(env)));
