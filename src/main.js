#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const convertBTC = require('./ConvertBTC');

program
  .version(pkg.version)
  .description('Convert BTC to a fiat currency')
  .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-A, --amount <amount>', 'Amount in BTC to convert. (Default: 1)')
  .parse(process.argv);

console.log(convertBTC(program.currency, program.amount));
