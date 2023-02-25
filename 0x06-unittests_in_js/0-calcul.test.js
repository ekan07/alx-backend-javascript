const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('Should return 4', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('Should return -5', function () {
    assert.strictEqual(calculateNumber(-3, -2), -5);
  });

  it('Should return 5', function () {
    assert.strictEqual(calculateNumber(1.4, 3.7), 5);
  });

  it('Should return -5', function () {
    assert.strictEqual(calculateNumber(-1.4, -3.7), -5);
  });

  it('Should return 5', function () {
    assert.strictEqual(calculateNumber(1.45, 3.79), 5);
  });

  it('Should return NaN', function () {
    assert.strictEqual(calculateNumber('a', 'b'), NaN);
  });

  it('Should return NaN', function () {
    assert.strictEqual(calculateNumber('goat', 'dog'), NaN);
  });

  it('Should return NaN', function () {
    assert.strictEqual(calculateNumber([1, 2, 3], 5), NaN);
  });

  it('Should return NaN', function () {
    assert.strictEqual(calculateNumber({ a: 24 }, 5), NaN);
  });

  it('Should return NaN', function () {
    assert.strictEqual(calculateNumber(), NaN);
  });

  it('Should return NaN', function () {
    assert.strictEqual(calculateNumber(2), NaN);
  });
});
