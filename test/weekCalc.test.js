const WeekCalc = require('../src/weekCalc.js');

describe('WeekCalc', () => {
  let weekCalc;

  beforeEach(() => {
    weekCalc = new WeekCalc;
  });

  it("should return 'false' with 'Monday', 13", () => {
    expect(weekCalc.calculation('Monday', 13)).toBe(false);
  }); 
  
  it("should return 'true' with 'Tuesday' bigger than 95", () => {
    expect(weekCalc.calculation('Tuesday', 96)).toBe(true);
  });
});