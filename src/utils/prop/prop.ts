import { curry } from 'utils';
import { Object } from 'types';

const prop = <T>(key: string, obj: Object): T => (
  obj[key]
);

export default curry(prop);
