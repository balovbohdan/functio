import { Maybe } from 'containers';

import maybe from '.';

describe('utils/maybe', () => {
  it('should use fallback when Maybe contains null', () => {
    const container = Maybe.of(null);
    const fallback = 'fallback';
    const map = (value: string) => value;
    const result = maybe(fallback, map, container);
    
    expect(result).toBe(fallback);
  });

  it('should use fallback when Maybe contains undefined', () => {
    const container = Maybe.of(undefined);
    const fallback = 'fallback';
    const map = (value: string) => value;
    const result = maybe(fallback, map, container);
    
    expect(result).toBe(fallback);
  });

  it('should call given map function when Maybe contains non-nothing value', () => {
    const container = Maybe.of('value');
    const fallback = 'fallback';
    const map = (value: string) => `mapped ${value}`;
    const result = maybe(fallback, map, container);
    const expectedResult = 'mapped value';
    
    expect(result).toBe(expectedResult);
  });
});
