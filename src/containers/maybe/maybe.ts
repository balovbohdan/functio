import { Map } from 'types';
import { isNil, inspect } from 'utils';
import { IContainer } from 'interfaces';

class Maybe<T> implements IContainer<T> {
  readonly value: T;

  static of<T>(value: T): Maybe<T> {
    return new Maybe(value);
  }

  private constructor(value: T) {
    this.value = value;
  }

  map<O>(map: Map<T, O>): Maybe<T | O> {
    if (this.isNothing) {
      return this;
    } else {
      const mappedValue = map(this.value);

      return Maybe.of<O>(mappedValue);
    }
  }

  inspect(): string {
    if (this.isNothing) {
      return 'Nothing';
    } else {
      const inspectedValue = inspect(this.value);

      return `Just(${inspectedValue})`;
    }
  }

  private get isNothing(): boolean {
    return isNil(this.value);
  }
}

export default Maybe;
