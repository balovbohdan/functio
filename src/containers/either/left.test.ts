import Either from '.';

describe('containers/Either.Left', () => {
  it('should create container for a given value', () => {
    const left = Either.Left.of<string>('value');

    expect(left).toBeInstanceOf(Either.Left);
  });

  it('should inspect', () => {
    const value = 'value';
    const left = Either.Left.of<string>(value);
    const inspectedValue = left.inspect();
    const expectedInspectedValue = `Left('${value}')`;

    expect(inspectedValue).toBe(expectedInspectedValue);
  });

  it('should preserve Either.Left instance during mappings', () => {
    const value = 1;
    const left = Either.Left.of<number>(value);
    const mappedLeft = left.map<number>((x) => x + 1);

    expect(mappedLeft).toBe(left);
    expect(mappedLeft.value).toBe(value);
  });
});
