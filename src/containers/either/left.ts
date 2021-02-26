import { Map } from 'types';
import { inspect } from 'utils';
import { IEitherSide } from 'interfaces';

class Left<A> implements IEitherSide<A> {
  readonly value: A;

  static of<C>(value: C): Left<C> {
    return new Left<C>(value);
  }

  private constructor(value: A) {
    this.value = value;
  }

  map<B>(map: Map<A, B>): Left<A> {
    return this;
  }

  inspect(): string {
    const inspectedValue = inspect(this.value);

    return `Left(${inspectedValue})`;
  }
}

export default Left;
