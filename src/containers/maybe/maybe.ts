import { Map } from 'types';
import { isNil, inspect } from 'utils';
import { IContainer } from 'interfaces';

class Maybe<A> implements IContainer<A> {
  readonly value: A;

  static of<C>(value: C): Maybe<C> {
    return new Maybe<C>(value);
  }

  private constructor(value: A) {
    this.value = value;
  }

  map<B>(map: Map<A, B>): Maybe<A | B> {
    if (this.isNothing) {
      return this;
    } else {
      const mappedValue = map(this.value);

      return Maybe.of<B>(mappedValue);
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

  get isNothing(): boolean {
    return isNil(this.value);
  }
}

export default Maybe;
