import { curry } from 'utils';
import { O } from 'types';

const prop = <T>(key: string, obj: O): T => (
  <T>obj[key]
);

export default curry(prop);
