const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi by using calculateNumber method', () => {
    const compare = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(compare.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(compare.calculateNumber.callCount).to.be.equal(1);
    compare.calculateNumber.restore();
  });
});
