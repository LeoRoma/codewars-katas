const WeekCalc = require('../src/weekCalc.js');

describe('WeekCalc', () => {
  let weekCalc;

  beforeEach(() => {
    weekCalc = new WeekCalc;
  });

  it("should return 'true' with 'Monday'", () => {
    expect(weekCalc.calculation('Monday', 13)).toBe(false)
  }); 
});