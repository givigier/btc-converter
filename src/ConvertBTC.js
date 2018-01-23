const request = require('request');

/* eslint consistent-return: 0 */
module.exports =
  function ConvertBTC(currency = 'USD', amount = 1) {
    const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;
    request(url, (err, response, body) => {
      let apiResponse;
      try {
        apiResponse = JSON.parse(body);
      } catch (parseError) {
        console.log('Something went wrong. Try again later.');
        return parseError;
      }
      console.log(`${amount} BTC to ${currency} = ${apiResponse.price}`);
    });
  };
