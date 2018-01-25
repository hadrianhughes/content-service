const monthNumberToString = require('../lib/monthNumberToString');

jest.mock('../__mocks__/prismic-javascript.js');

describe('monthNumberToString function', () => {
  it('Should return the name of the numerical month passed to it', () => {
    expect(monthNumberToString(1)).toBe('January');
  });
});
