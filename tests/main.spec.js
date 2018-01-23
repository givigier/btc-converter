const expect = require('chai').expect;
const exec = require('child_process').exec;
const pkg = require('../package.json');

const btcConverter = './src/main.js';

describe('BTC Converter', () => {
  it('should return the version of the btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description of the btc-converter', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('Convert BTC to a fiat currency')).to.be.true;
      done();
    });
  });

  it('should return the currency option when call --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--currency')).to.be.true;
      done();
    });
  });

  it('should return the amount option when call --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.includes('--amount')).to.be.true;
      done();
    });
  });
});
