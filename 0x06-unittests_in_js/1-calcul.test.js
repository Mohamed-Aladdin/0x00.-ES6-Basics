const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('type === SUM', () => {
  it('should return 5 when a = 1.5 and b = 3', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 3), 5);
  });

  it('should return 5 when a = 1 and b = 2.6', () => {
    assert.strictEqual(calculateNumber('SUM', 1, 2.6), 4);
  });

  it('should return 4 when a = 1.4 and b = 2.4', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 2.4), 3);
  });

  it('should return 6 when a = 1.5 and b = 4.5', () => {
    assert.strictEqual(calculateNumber('SUM', 1.5, 4.5), 7);
  });

  it('should return 0 when a = 0.1 and b = 0.2', () => {
    assert.strictEqual(calculateNumber('SUM', 0.1, 0.2), 0);
  });

  it('should handle negative numbers: return -4 when a = -1.4 and b = -2.6', () => {
    assert.strictEqual(calculateNumber('SUM', -1.4, -2.6), -4);
  });
});

describe('type === SUBTRACT', () => {
  it('should return -1 when a = 1.5 and b = 3', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3), -1);
  });

  it('should return -2 when a = 1 and b = 2.6', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 2.6), -2);
  });

  it('should return -1 when a = 1.4 and b = 2.4', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 2.4), -1);
  });

  it('should return -3 when a = 1.5 and b = 4.5', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 4.5), -3);
  });

  it('should return 0 when a = 0.1 and b = 0.2', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 0.1, 0.2), 0);
  });

  it('should handle negative numbers: return 2 when a = -1.4 and b = -2.6', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -2.6), 2);
  });
});

describe('type === DIVIDE', () => {
  it('should return 1.5 when a = 3 and b = 1.5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3, 1.5), 1.5);
  });

  it('should return 3 when a = 2.6 and b = 1', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 2.6, 1), 3);
  });

  it('should return 0.5 when a = 1.4 and b = 2.4', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 2.4), 0.5);
  });

  it('should return 2.5 when a = 4.5 and b = 1.5', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.5), 2.5);
  });

  it('should return 0 when a = 0.1 and b = 0.2', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0.1, 0.2), 'Error');
  });

  it('should handle negative numbers: return 3 when a = -2.6 and b = -1.4', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -2.6, -1.4), 3);
  });
});
