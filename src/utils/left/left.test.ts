import { Either } from 'containers';

import left from '.';

describe('utils/left', () => {
  it('should return Either.Left', () => {
    const leftContainer = left('value');

    expect(leftContainer).toBeInstanceOf(Either.Left);
  });
});
