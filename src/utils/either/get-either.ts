import either from './either';
import { EitherFunction } from './types';

const getEither = <A, B, C>(): EitherFunction<A, B, C> => (
  either as EitherFunction<A, B, C>
);

export default getEither;
