const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should correctly add two integers', () => {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
    it('should correctly add when numbers need rounding', () => {
      expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5);
    });
    it('should handle negative numbers', () => {
      expect(calculateNumber('SUM', -1.4, -3.7)).to.equal(-5);
    });
  });

  describe('SUBTRACT', () => {
    it('should correctly subtract two integers', () => {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
    it('should correctly subtract when numbers need rounding', () => {
      expect(calculateNumber('SUBTRACT', 5.6, 2.2)).to.equal(4);
    });
    it('should handle negative results', () => {
      expect(calculateNumber('SUBTRACT', 2, 5)).to.equal(-3);
    });
  });

  describe('DIVIDE', () => {
    it('should correctly divide two integers', () => {
      expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });
    it('should correctly divide with rounding', () => {
      expect(calculateNumber('DIVIDE', 7.5, 2.1)).to.equal(4);
    });
    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 7, 0)).to.equal('Error');
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for invalid operation types', () => {
      expect(() => calculateNumber('INVALID', 2, 3)).to.throw(Error);
    });
  });
});
