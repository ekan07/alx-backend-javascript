const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('Should test positive floating number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.3, 2.5), 4);
    });

    it('Should test negative floating number', () => {
      assert.strictEqual(calculateNumber('SUM', -1.3, -2.5), -3);
    });

    it('Should test two decimal point number', () => {
      assert.strictEqual(calculateNumber('SUM', 1.35, 5.66), 7);
    });

    it('Should test two mixed type', () => {
      assert.strictEqual(calculateNumber('SUM', '3.5', 5.66), 10);
    });

    it('Should test for string type', () => {
      assert.strictEqual(calculateNumber('SUM', 'abc', 5.66), NaN);
    });

    it('Should test for Array type', () => {
      assert.strictEqual(calculateNumber('SUM', [1, 2, 3], 5.66), NaN);
    });

    it('Should test for Object type', () => {
      assert.strictEqual(calculateNumber('SUM', { a: 6 }, 5.66), NaN);
    });
  });

  describe('SUBTRACT', () => {
    it('Should test positive floating number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.3, 2.5), -2);
    });

    it('Should test negative floating number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.3, -2.5), 1);
    });

    it('Should test two decimal point number', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.66, 2.56), 3);
    });

    it('Should test two mixed type', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', '5.66', 2.0), 4);
    });

    it('Should test for string type', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 'abc', 5.66), NaN);
    });

    it('Should test for Array type', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', [1, 2, 3], 5.66), NaN);
    });

    it('Should test for Object type', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', { a: 6 }, 5.66), NaN);
    });
  });

  describe('DIVIDE', () => {
    it('Should test positive floating number', () => {
      assert.strictEqual(
        calculateNumber('DIVIDE', 1.3, 2.5),
        0.3333333333333333
      );
    });

    it('Should test positive floating number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.4, 2.4), 3.0);
    });

    it('Should test negative floating number', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6.4, -2.4), 3.0);
    });

    it('Should test for Zero division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.3, 0.4), 'Error');
    });

    it('Should test for string type', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.6, '2.4'), 5.5);
    });

    it('Should test for string type', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10.6, 'abc'), NaN);
    });
  });
});
