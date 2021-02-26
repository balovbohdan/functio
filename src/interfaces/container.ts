import { Map } from 'types';

interface IContainer<A> {
  readonly value: A;
  map<B>(map: Map<A, B>): IContainer<A | B>;
  inspect: () => string;
}

export default IContainer;
