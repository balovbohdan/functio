import { Map } from 'types';
import { inspect } from 'utils';
import { IContainer } from 'interfaces';

class Container<T> implements IContainer<T> {
  readonly value: T;

  static of<T>(value: T): Container<T> {
    return new Container<T>(value);
  }

  private constructor(value: T) {
    this.value = value;
  }

  map<O>(map: Map<T, O>): Container<O> {
    const mappedValue = map(this.value);

    return Container.of<O>(mappedValue);
  }

  inspect(): string {
    const inspectedValue = inspect(this.value);

    return `Container(${inspectedValue})`;
  }
}

export default Container;
