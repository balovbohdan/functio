import { Either, Container } from 'containers';

import either from '.';

describe('utils/either', () => {
  it('should call left handler when container is Either.Left', () => {
    const left = (value: string) => `${value} with left`;
    const right = (value: string) => `${value} with right`;
    const container = Either.Left.of<string>('value');
    const result = either(left, right, container);
    const expectedResult = 'value with left';

    expect(result).toBe(expectedResult);
  });

  it('should call rigt handler when container is Either.Right', () => {
    const left = (value: string) => `${value} with left`;
    const right = (value: string) => `${value} with right`;
    const container = Either.Right.of<string>('value');
    const result = either(left, right, container);
    const expectedResult = 'value with right';

    expect(result).toBe(expectedResult);
  });

  it('should return undefined when container is not Either', () => {
    const left = (value: string) => `${value} with left`;
    const right = (value: string) => `${value} with right`;
    const container = Container.of<string>('value');
    const result = either(left, right, container);

    expect(result).toBeUndefined();
  });
});
