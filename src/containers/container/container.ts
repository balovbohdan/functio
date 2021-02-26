import { Map } from 'types';
import { inspect } from 'utils';
import { IContainer } from 'interfaces';

class Container<A> implements IContainer<A> {
  readonly value: A;

  static of<C>(value: C): Container<C> {
    return new Container<C>(value);
  }

  private constructor(value: A) {
    this.value = value;
  }

  map<B>(map: Map<A, B>): Container<B> {
    const mappedValue = map(this.value);

    return Container.of<B>(mappedValue);
  }

  inspect(): string {
    const inspectedValue = inspect(this.value);

    return `Container(${inspectedValue})`;
  }
}

export default Container;
