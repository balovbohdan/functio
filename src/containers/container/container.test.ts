import Container from '.';

describe('containers/Container', () => {
  it('should create container for a given value', () => {
    const value = 'value';
    const container = Container.of<string>(value);

    expect(container).toBeInstanceOf(Container);
  });

  it('should map value using given map function', () => {
    const value = 'value';
    const expectedMappedValue = 'mapped value';
    const container = Container.of<string>(value);
    const mappedContainer = container.map((x) => `mapped ${x}`);

    expect(mappedContainer.value).toBe(expectedMappedValue);
  });

  it('should inspect', () => {
    const value = 'value';
    const container = Container.of<string>(value);
    const inspectedValue = container.inspect();
    const expectedInspectedValue = `Container('${value}')`;

    expect(inspectedValue).toBe(expectedInspectedValue);
  });
});
