import prop from './prop';
import { PropFunction } from './types';

const getProp = <A>(): PropFunction<A> => (
  prop as PropFunction<A>
);

export default getProp;
