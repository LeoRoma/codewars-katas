const bookShop = require('../src/bookShop.js');

describe('bookShop', () => {

  it('should return ABART 20', () => {
    expect(bookShop('ABART 20')).toEqual('A : 20')
  });
});