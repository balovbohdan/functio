import maybe from './maybe';
import { MaybeFunction } from './types';

const getMaybe = <A, B>(): MaybeFunction<A, B> => (
  maybe as MaybeFunction<A, B>
);

export default getMaybe;
