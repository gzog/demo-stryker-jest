const { isSmaller } = require('../src/main');

describe('main', () => {
  it('isSmaller should return true if a <= b', () => {
    expect(isSmaller(1, 2)).toBeTruthy();
  });

  it('isSmaller should return false if a > b', () => {
    expect(isSmaller(2, 1)).toBeFalsy();
  });
});
