import compose from '.';

describe('utils/compose', () => {
  it('should compose functions with single parameter', () => {
    const double = (x: number) => x * 2;
    const increment = (x: number) => x + 1;
    const doubleAndIncrement = compose(increment, double);
    const result = doubleAndIncrement(1);
    const expectedResult = 3;

    expect(result).toBe(expectedResult);
  });

  it('should compose functions with multiple parameters', () => {
    const double = (x: number) => x * 2;
    const sum = (x: number, y: number) => x + y;
    const sumAndDouble = compose(double, sum);
    const result = sumAndDouble(1, 2);
    const expectedResult = 6;

    expect(result).toBe(expectedResult);
  });
});
