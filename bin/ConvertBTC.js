'use strict';

var request = require('request');

/* eslint consistent-return: 0 */
module.exports = function ConvertBTC() {
  var currency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'USD';
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var url = 'https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=' + currency + '&amount=' + amount;
  request(url, function (err, response, body) {
    var apiResponse = void 0;
    try {
      apiResponse = JSON.parse(body);
    } catch (parseError) {
      console.log('Something went wrong. Try again later.');
      return parseError;
    }
    console.log(amount + ' BTC to ' + currency + ' = ' + apiResponse.price);
  });
};