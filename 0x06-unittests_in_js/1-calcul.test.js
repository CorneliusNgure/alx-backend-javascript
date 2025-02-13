const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should correctly add two integers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should correctly add when numbers need rounding', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5); // 1+4=5
    });

    it('should handle negative numbers', () => {
      assert.strictEqual(calculateNumber('SUM', -1.6, -3.3), -5); // -2 + (-3) = -5
    });
  });

  describe('SUBTRACT', () => {
    it('should correctly subtract two integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 3), 2);
    });

    it('should correctly subtract when numbers need rounding', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.7, 2.1), 4); // 6 - 2 = 4
    });

    it('should handle negative results', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3, 5), -2);
    });
  });

  describe('DIVIDE', () => {
    it('should correctly divide two integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 3), 2);
    });

    it('should correctly divide with rounding', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 6.7, 2.3), 3.5); // 7/2 = 3.5 → 3
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 3, 0.3), 'Error'); // Rounded divisor = 0
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for invalid operation types', () => {
      assert.throws(() => calculateNumber('MULTIPLY', 1, 2), {
        name: 'Error',
        message: 'Invalid operation type'
      });
    });
  });
});
