import Either from '.';

describe('containers/Either.Right', () => {
  it('should create container for a given value', () => {
    const right = Either.Right.of<string>('value');

    expect(right).toBeInstanceOf(Either.Right);
  });

  it('should inspect', () => {
    const value = 'value';
    const right = Either.Right.of<string>(value);
    const inspectedValue = right.inspect();
    const expectedInspectedValue = `Right('${value}')`;

    expect(inspectedValue).toBe(expectedInspectedValue);
  });

  it('should map value using given map function', () => {
    const value = 'value';
    const expectedMappedValue = 'mapped value';
    const right = Either.Right.of<string>(value);
    const mappedRight = right.map((x) => `mapped ${x}`);

    expect(mappedRight.value).toBe(expectedMappedValue);
  });
});
