import isNil from '.';

describe('utils/isNil', () => {
  it('should return boolen', () => {
    const result = isNil('value');

    expect(result).toBe(false);
  });

  it('should return true for null', () => {
    const result = isNil(null);

    expect(result).toBe(true);
  });

  it('should return true for undefined', () => {
    const result = isNil(undefined);

    expect(result).toBe(true);
  });

  it('should return false for empty string', () => {
    const result = isNil('');

    expect(result).toBe(false);
  });
});
