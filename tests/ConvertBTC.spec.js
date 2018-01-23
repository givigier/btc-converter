const expect = require('chai').expect;
const exec = require('child_process').exec;

const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  it('should return USD as currency default', () => {
    expect(convertBTC()).to.be.equal('1 BTC to USD = 0');
  });

  it('should return 1 as amount default', () => {
    expect(convertBTC()).to.be.equal('1 BTC to USD = 0');
  });
});
