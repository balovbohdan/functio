import Maybe from '.';

describe('containers/Maybe', () => {
  it('should create container for a given value', () => {
    const value = 'value';
    const maybe = Maybe.of<string>(value);

    expect(maybe).toBeInstanceOf(Maybe);
  });

  it('should map value using given map function', () => {
    const value = 'value';
    const expectedMappedValue = 'mapped value';
    const maybe = Maybe.of<string>(value);
    const mappedMaybe = maybe.map((x) => `mapped ${x}`);

    expect(mappedMaybe.value).toBe(expectedMappedValue);
  });

  it('should inspect non-nullish value', () => {
    const value = 'value';
    const maybe = Maybe.of<string>(value);
    const inspectedValue = maybe.inspect();
    const expectedInspectedValue = `Just('${value}')`;

    expect(inspectedValue).toBe(expectedInspectedValue);
  });

  it('should inspect nullish value', () => {
    const value: any = null;
    const maybe = Maybe.of<null>(value);
    const inspectedValue = maybe.inspect();
    const expectedInspectedValue = 'Nothing';

    expect(inspectedValue).toBe(expectedInspectedValue);
  });

  it('should not map null value', () => {
    const value: any = null;
    const expectedMappedValue: any = null;
    const maybe = Maybe.of<null>(value);
    const mappedMaybe = maybe.map((x) => `mapped ${x}`);

    expect(mappedMaybe).toBe(maybe);
    expect(mappedMaybe.value).toBe(expectedMappedValue);
  });

  it('should not map undefined value', () => {
    const value: any = undefined;
    const expectedMappedValue: any = undefined;
    const maybe = Maybe.of<undefined>(value);
    const mappedMaybe = maybe.map((x) => `mapped ${x}`);

    expect(mappedMaybe).toBe(maybe);
    expect(mappedMaybe.value).toBe(expectedMappedValue);
  });
});
