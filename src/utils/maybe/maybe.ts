import { Map } from 'types';
import { curry } from 'utils';
import { Maybe } from 'containers';

// maybe :: b -> (a -> b) -> Maybe a-> b

const maybe = <V, R>(fallback: R, map: Map<V, R>, maybe: Maybe<V>): R => (
  maybe.isNothing ? fallback : map(maybe.value)
);

export default curry(maybe);
