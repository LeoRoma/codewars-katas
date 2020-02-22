const WeekCalc = require('../src/weekCalc.js');

describe('WeekCalc', () => {
  let weekCalc;

  beforeEach(() => {
    weekCalc = new WeekCalc;

  });

  describe('Monday', () => {
    it("should return 'false' with number different from 12", () => {
      expect(weekCalc.AmIAfraid('Monday', 13)).toBe(false);
    });

    it("should return 'true' with, 12", () => {
      expect(weekCalc.AmIAfraid('Monday', 12)).toBe(true);
    });

  });

  describe('Tuesday', () => {
    it("should return 'true' with bigger than 95", () => {
      expect(weekCalc.AmIAfraid('Tuesday', 96)).toBe(true);
    });

    it("should return 'false' with smaller than 95", () => {
      expect(weekCalc.AmIAfraid('Tuesday', 94)).toBe(false);
    });
  });

  describe('Wednesday', () => {
    it("should return 'true' with equal 34", () => {
      expect(weekCalc.AmIAfraid('Wednesday', 34)).toBe(true);
    });

    it("should return 'false' with number different from 34", () => {
      expect(weekCalc.AmIAfraid('Wednesday', 35)).toBe(false);
    });
  });

  describe('Thursday', () => {
    it("should return 'true' with equal 0", () => {
      expect(weekCalc.AmIAfraid('Thursday', 0)).toBe(true);
    });

    it("should return 'false' with different from 1", () => {
      expect(weekCalc.AmIAfraid('Thursday', 1)).toBe(false);
    });
  });

  describe('Friday', () => {
    it("should return 'true' with divisible by 2", () => {
      expect(weekCalc.AmIAfraid('Friday', 14)).toBe(true);
    });

    it("should return 'false' with no divisible by 2", () => {
      expect(weekCalc.AmIAfraid('Friday', 1)).toBe(false);
    });
  });

  describe('Saturday', () => {
    it("should return 'true' with equal 56", () => {
      expect(weekCalc.AmIAfraid('Saturday', 56)).toBe(true);
    });

    it("should return 'false' different from 56", () => {
      expect(weekCalc.AmIAfraid('Saturday', 1)).toBe(false);
    });
  });

  describe('Sunday', () => {
    it("should return 'true' with equal 666", () => {
      expect(weekCalc.AmIAfraid('Sunday', 666)).toBe(true);
    });

    it("should return 'true' with equal -666", () => {
      expect(weekCalc.AmIAfraid('Sunday', -666)).toBe(true);
    });

    it("should return 'false' with different from 666 or -666", () => {
      expect(weekCalc.AmIAfraid('Sunday', 1)).toBe(false);
    });
  });
});