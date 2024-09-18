const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('type === SUM', () => {
  it('should return 5 when a = 1.5 and b = 3', () => {
    expect(calculateNumber('SUM', 1.5, 3)).to.equal(5);
  });

  it('should return 5 when a = 1 and b = 2.6', () => {
    expect(calculateNumber('SUM', 1, 2.6)).to.equal(4);
  });

  it('should return 4 when a = 1.4 and b = 2.4', () => {
    expect(calculateNumber('SUM', 1.4, 2.4)).to.equal(3);
  });

  it('should return 6 when a = 1.5 and b = 4.5', () => {
    expect(calculateNumber('SUM', 1.5, 4.5)).to.equal(7);
  });

  it('should return 0 when a = 0.1 and b = 0.2', () => {
    expect(calculateNumber('SUM', 0.1, 0.2)).to.equal(0);
  });

  it('should handle negative numbers: return -4 when a = -1.4 and b = -2.6', () => {
    expect(calculateNumber('SUM', -1.4, -2.6)).to.equal(-4);
  });
});

describe('type === SUBTRACT', () => {
  it('should return -1 when a = 1.5 and b = 3', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
  });

  it('should return -2 when a = 1 and b = 2.6', () => {
    expect(calculateNumber('SUBTRACT', 1, 2.6)).to.equal(-2);
  });

  it('should return -1 when a = 1.4 and b = 2.4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 2.4)).to.equal(-1);
  });

  it('should return -3 when a = 1.5 and b = 4.5', () => {
    expect(calculateNumber('SUBTRACT', 1.5, 4.5)).to.equal(-3);
  });

  it('should return 0 when a = 0.1 and b = 0.2', () => {
    expect(calculateNumber('SUBTRACT', 0.1, 0.2)).to.equal(0);
  });

  it('should handle negative numbers: return 2 when a = -1.4 and b = -2.6', () => {
    expect(calculateNumber('SUBTRACT', -1.4, -2.6)).to.equal(2);
  });
});

describe('type === DIVIDE', () => {
  it('should return 1.5 when a = 3 and b = 1.5', () => {
    expect(calculateNumber('DIVIDE', 3, 1.5)).to.equal(1.5);
  });

  it('should return 3 when a = 2.6 and b = 1', () => {
    expect(calculateNumber('DIVIDE', 2.6, 1)).to.equal(3);
  });

  it('should return 0.5 when a = 1.4 and b = 2.4', () => {
    expect(calculateNumber('DIVIDE', 1.4, 2.4)).to.equal(0.5);
  });

  it('should return 2.5 when a = 4.5 and b = 1.5', () => {
    expect(calculateNumber('DIVIDE', 4.5, 1.5)).to.equal(2.5);
  });

  it('should return 0 when a = 0.1 and b = 0.2', () => {
    expect(calculateNumber('DIVIDE', 0.1, 0.2)).to.equal('Error');
  });

  it('should handle negative numbers: return 3 when a = -2.6 and b = -1.4', () => {
    expect(calculateNumber('DIVIDE', -2.6, -1.4)).to.equal(3);
  });
});
