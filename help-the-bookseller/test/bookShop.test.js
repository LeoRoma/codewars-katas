const BookShop = require('../src/bookShop.js');

describe('BookShop', () => {
  let bookShop;
  s = ['ABART 20'];
  c = ['A'];

  beforeEach(() => {
    bookShop = new BookShop(s, c)
  });

  xit('should return "A : 20" with "ABART 20"', () => {
    s = ['ABART 20'];
    c = ['A'];
    expect(bookShop.stockList(s, c)).toEqual('(A : 20)');
  });

  xit('should return "A : 20, B : 100" with "ABART 20, BKWRK 100"', () => {
    s = ['ABART 20', 'BKWRK 100'];
    c = ['A', 'B'];
    expect(bookShop(s, c)).toEqual('(A : 20) - (B : 100)');
  });

  xit('should return "A : 20, B : 100" with "ABART 20, BKWRK 100", "CDXEF 50"', () => {
    s = ['ABART 20', "CDXEF 50", 'BKWRK 100'];
    c = ['A', 'B', 'C'];
    expect(bookShop(s, c)).toEqual('(A : 20) - (B : 100) - (C : 50)');
  });

  xit('should return "A : 20, B : 100" with "ABART 20, BKWRK 100", "CDXEF 50"', () => {
    s = ['ABART 20', "CDXEF 50", 'BKWRK 100'];
    c = ['A'];
    expect(bookShop(s, c)).toEqual('(A : 20)');
  });

  xit('should return "(A : 20) - (B : 114) - (C : 50) - (W : 0)" with "ABART 20", "BKWRK 25", "CDXEF 50", "BTSQZ 89", "DRTYM 60"', () => {
    s = ["ABART 20", "BKWRK 25", "CDXEF 50", "BTSQZ 89", "DRTYM 60"];
    c = ["A", "B", "C", "W"];
    expect(bookShop(s, c)).toEqual('(A : 20) - (B : 114) - (C : 50) - (W : 0)');
  });

  xit('should return empty string "" with "ABART 0", "BKWRK 0", "CDXEF 0", "BTSQZ 0", "DRTYM 0"', () => {
    s = ["ABART 0", "BKWRK 0", "CDXEF 0", "BTSQZ 0", "DRTYM 0"];
    c = ["A", "B", "C", "W"];
    expect(bookShop(s, c)).toEqual('');
  });

  it('should return array with objects', () => {
    bookShop.convertBookWithQtyList()
    expect(bookShop.bookWithQtyList).toEqual(expect.arrayContaining([{ 'initial': 'A', 'quantity': '20' }]))
  });

  it('should return book with quantity object', () => {
    // bookObject = [{ 'initial': 'A', 'quantity': '20' }]
    bookShop.addingQuantity()
    expect(bookShop.sumOfQtyObject).toEqual(expect.arrayContaining([{ 'initial': 'A', 'quantity': '20' }]))
  });
});