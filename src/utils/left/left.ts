import { Either } from 'containers';
import { IEither } from 'interfaces';

// left :: a -> Either.Left a

const left = <A>(value: A): IEither<A, unknown> => (
  Either.Left.of<A>(value)
);

export default left;
