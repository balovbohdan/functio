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
    const value: unknown = null;
    const maybe = Maybe.of<unknown>(value);
    const inspectedValue = maybe.inspect();
    const expectedInspectedValue = 'Nothing';

    expect(inspectedValue).toBe(expectedInspectedValue);
  });

  it('should not map null value', () => {
    const value: unknown = null;
    const expectedMappedValue: unknown = null;
    const maybe = Maybe.of<unknown>(value);
    const mappedMaybe = maybe.map((x) => `mapped ${x}`);

    expect(mappedMaybe).toBe(maybe);
    expect(mappedMaybe.value).toBe(expectedMappedValue);
  });

  it('should not map undefined value', () => {
    const value: unknown = undefined;
    const expectedMappedValue: unknown = undefined;
    const maybe = Maybe.of<unknown>(value);
    const mappedMaybe = maybe.map((x) => `mapped ${x}`);

    expect(mappedMaybe).toBe(maybe);
    expect(mappedMaybe.value).toBe(expectedMappedValue);
  });
});
