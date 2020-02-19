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

  it("should return 'true' with 'Wednesday' equal 34", () => {
    expect(weekCalc.calculation('Wednesday', 34)).toBe(true);
  });

  it("should return 'true' with 'Thursday' equal to 0", () => {
    expect(weekCalc.calculation('Thursday', 0)).toBe(true);
  });

  it("should return 'true' with 'Friday' divisible by 2", () => {
    expect(weekCalc.calculation('Friday', 14)).toBe(true);
  });
});