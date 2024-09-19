const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const { describe, it } = require('mocha');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi by using calculateNumber method', () => {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});
