import id from '.';

describe('utils/id', () => {
  it('should return the given value', () => {
    const value = 'value';
    const response = id<string>(value);

    expect(response).toBe(value);
  });
});
