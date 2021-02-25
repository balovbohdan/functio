import Either from '.';
import Right from './right';

describe('containers/Either', () => {
  it('should create container for a given value', () => {
    const either = Either.of('value');

    expect(either).toBeInstanceOf(Right);
  });

  it('should map value using given map function', () => {
    const either = Either.of<string, number>(1);
    const eitherMapped = either.map((x) => x + 1);
    const expectedValue = 2;

    expect(eitherMapped.value).toBe(expectedValue);
  });

  it('should inspect', () => {
    const value = 'value';
    const either = Either.of(value);
    const inspectedValue = either.inspect();
    const expectedInspectedvalue = `Right('${value}')`; 

    expect(inspectedValue).toBe(expectedInspectedvalue);
  });
});
