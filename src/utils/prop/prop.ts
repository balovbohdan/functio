import { curry } from 'utils';
import { O } from 'types';

// prop :: { p: a } -> a | Undefined

const prop = <A>(key: string, obj: O): A => (
  <A>obj[key]
);

export default curry(prop);
