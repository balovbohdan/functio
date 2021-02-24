import { curry } from 'utils';
import { Either } from 'containers';
import { IEither } from 'interfaces';

import { Handler } from './types';

const either = <V, R>(left: Handler<V, R>, right: Handler<V, R>, either: IEither<V>): R | undefined => {
  switch (either.constructor) {
    case Either.Left:
      return left(either.value);
    case Either.Right:
      return right(either.value);
    default:
      return undefined;
  }
}

export default curry(either);
