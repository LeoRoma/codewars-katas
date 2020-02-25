const bookShop = require('../src/bookShop.js');

describe('bookShop', () => {

  it('should return "A : 20" with "ABART 20"', () => {
    s = ['ABART 20'];
    c = ['A']
    expect(bookShop(s, c)).toEqual('(A : 20)');
  });

  it('should return "A : 20, B : 100" with "ABART 20, BKWRK 100"', () => {
    s = ['ABART 20', 'BKWRK 100'];
    c = ['A', 'B'];
    expect(bookShop(s, c)).toEqual('(A : 20) - (B : 100)');
  });

  it('should return "A : 20, B : 100" with "ABART 20, BKWRK 100", "CDXEF 50"', () => {
    s = ['ABART 20', 'BKWRK 100', "CDXEF 50"];
    c = ['A', 'B', 'C'];
    expect(bookShop(s, c)).toEqual('(A : 20) - (B : 100) - (C : 50)');
  });
});