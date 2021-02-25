import { curry } from 'utils';
import { Either } from 'containers';
import { IEither } from 'interfaces';

import { Handler } from './types';

// either :: (a -> c) -> (b -> c) -> Either a b -> c | Undefined

const either = <A, B, C>(left: Handler<A, C>, right: Handler<B, C>, either: IEither<A, B>): C | undefined => {
  switch (either.constructor) {
    case Either.Left:
      return left(<A>either.value);
    case Either.Right:
      return right(<B>either.value);
    default:
      return undefined;
  }
}

export default curry(either);
