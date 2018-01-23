#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description('Convert BTC to a fiat currency')
  .parse(process.argv);
