const request = require('request');
const { expect } = require('chai');

describe('API Integration Test', () => {
  const URL = 'http://localhost:7865';

  it('GET /', (done) => {
    request.get(URL, (res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
