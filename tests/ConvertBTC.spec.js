const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const nock = require('nock');

const expect = chai.expect;
chai.use(sinonChai);
const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  const responseMock = {
    'success': true,
    'time': '14-04-2016 13:55:32',
    'price': 424.93
  };
  let consoleStub;

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'log');
  });

  afterEach(() => {
    console.log.restore();
  });

  it('should use USD as currency default and 1 as amount default', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 1 })
      .reply(200, responseMock);
    convertBTC();

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('1 BTC to USD = 424.93');
      done();
    }, 300);
  });

  it('should print the correct price when using custom parameters', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 100 })
      .reply(200, responseMock);
    convertBTC('BRL', 100);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('100 BTC to BRL = 424.93');
      done();
    }, 300);
  });

  it('should inform the user when the api raises an error', (done) => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 100 })
      .replyWithError('Error');
    convertBTC('BRL', 100);

    setTimeout(() => {
      expect(consoleStub).to.have.been.calledWith('Something went wrong. Try again later.');
      done();
    }, 300);
  });
});
