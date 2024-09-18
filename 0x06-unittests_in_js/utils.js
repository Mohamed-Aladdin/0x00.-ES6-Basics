const Utils = {
  calculateNumber(type, a, b) {
    switch (type) {
      case 'SUM':
        return Math.round(a) + Math.round(b);
        break;
      case 'SUBTRACT':
        return Math.round(a) - Math.round(b);
        break;
      case 'DIVIDE':
        return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
        break;
      default:
        return 'Please enter a valid operation!';
    }
  },
};

module.exports = Utils;
