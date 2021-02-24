import prop from '.';

describe('utils/prop', () => {
  it('should extract object property by key', () => {
    const obj = { 1: 1, 2: 2, 3: 4 };
    const result = prop('2', obj);
    const expectedResult = 2;

    expect(result).toBe(expectedResult);
  });
});
