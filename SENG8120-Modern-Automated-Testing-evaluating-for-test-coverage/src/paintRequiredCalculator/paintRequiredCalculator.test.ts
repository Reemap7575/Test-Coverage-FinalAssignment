
import { paintRequired } from './paintRequiredCalculator';

describe('paintRequired', () => {
  it('should return required litres of paint', () => {
    expect(paintRequired(100, 10)).toBe(10);
  });

  it('should round up partial litres', () => {
    expect(paintRequired(95, 10)).toBe(10);
  });

  it('should throw error for invalid inputs', () => {
    expect(() => paintRequired(-1, 10)).toThrow('Invalid input');
  });
});
