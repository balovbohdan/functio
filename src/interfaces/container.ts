import { Map } from 'types';

interface IContainer<T> {
  readonly value: T;
  map<O>(map: Map<T, O>): IContainer<T | O>;
  inspect: () => string;
}

export default IContainer;
