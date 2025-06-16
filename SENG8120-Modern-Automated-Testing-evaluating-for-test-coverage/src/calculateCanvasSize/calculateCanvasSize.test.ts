import { calculateCanvasSize } from './calculateCanvasSize';

describe('calculateCanvasSize', () => {
  it('should return area for valid dimensions', () => {
    expect(calculateCanvasSize(10, 20)).toBe(200);
  });

  it('should throw error for non-positive dimensions', () => {
    expect(() => calculateCanvasSize(0, 10)).toThrow('Invalid dimensions');
  });
});

