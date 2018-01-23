#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');

program.version(pkg.version).description('Convert BTC to a fiat currency').parse(process.argv);