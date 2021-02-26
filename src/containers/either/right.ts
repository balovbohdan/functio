import { Map } from 'types';
import { inspect } from 'utils';
import { IEitherSide } from 'interfaces';

class Right<A> implements IEitherSide<A> {
  readonly value: A;

  static of<C>(value: C): Right<C> {
    return new Right<C>(value);
  }

  private constructor(value: A) {
    this.value = value;
  }

  map<B>(map: Map<A, B>): Right<B> {
    const mappedValue = map(this.value);

    return Right.of<B>(mappedValue);
  }

  inspect(): string {
    const inspectedValue = inspect(this.value);

    return `Right(${inspectedValue})`;
  }
}

export default Right;
