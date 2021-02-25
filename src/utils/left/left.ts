import { Either } from 'containers';
import { IEither } from 'interfaces';

const left = <T>(value: T): IEither<T> => (
  Either.Left.of<T>(value)
);

export default left;
