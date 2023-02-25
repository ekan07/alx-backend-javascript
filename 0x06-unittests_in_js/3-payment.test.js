const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi using Utils.caculateNumber', () => {
    const spyUtils = sinon.spy(Utils);

    sendPaymentRequestToApi(100, 20);
    expect(spyUtils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spyUtils.calculateNumber.calledOnce).to.be.true;
    spyUtils.calculateNumber.restore();
  });
});
