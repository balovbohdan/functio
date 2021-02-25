import curry from '.';

describe('utils/curry', () => {
  it('should curry function with multiple parameters', () => {
    const multiply = curry((x: number, y: number) => x * y);
    const double = multiply(2) as ((value: number) => number);
    const result = double(2);
    const expectedResult = 4;

    expect(result).toBe(expectedResult);
  });

  it('should curry function with single parameter', () => {
    const id = curry((x: unknown) => x);
    const result = id(1);
    const expectedResult = 1;

    expect(result).toBe(expectedResult);
  });

  it('should curry function with no parameters', () => {
    const fn = curry(() => 1);
    const result = fn();
    const expectedResult = 1;

    expect(result).toBe(expectedResult);
  });
});
