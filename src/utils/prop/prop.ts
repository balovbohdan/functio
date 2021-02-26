import { curry } from 'utils';
import { O } from 'types';

import { PropFunction } from './types';

// prop :: { p: a } -> a | Undefined

const prop = <A>(key: string, obj: O): A | undefined => (
  <A | undefined>obj[key]
);

export default curry<PropFunction>(prop);
