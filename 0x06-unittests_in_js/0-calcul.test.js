const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 5 when a = 1.5 and b = 3', () => {
    assert.strictEqual(calculateNumber(1.5, 3), 5);
  });

  it('should return 5 when a = 1 and b = 2.6', () => {
    assert.strictEqual(calculateNumber(1, 2.6), 4);
  });

  it('should return 4 when a = 1.4 and b = 2.4', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should return 6 when a = 1.5 and b = 4.5', () => {
    assert.strictEqual(calculateNumber(1.5, 4.5), 7);
  });

  it('should return 0 when a = 0.1 and b = 0.2', () => {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });

  it('should handle negative numbers: return -4 when a = -1.4 and b = -2.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });
});
