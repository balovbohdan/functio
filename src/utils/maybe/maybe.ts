import { Map } from 'types';
import { curry } from 'utils';
import { Maybe } from 'containers';

// maybe :: b -> (a -> b) -> Maybe a -> b

const maybe = <A, B>(fallback: B, map: Map<A, B>, maybe: Maybe<A>): B => (
  maybe.isNothing ? fallback : map(maybe.value)
);

export default curry(maybe);
