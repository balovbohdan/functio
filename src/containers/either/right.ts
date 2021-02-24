import { Map } from 'types';
import { inspect } from 'utils';
import { IEither } from 'interfaces';

class Right<T> implements IEither<T> {
  readonly value: T;

  static of<T>(value: T): Right<T> {
    return new Right<T>(value);
  }

  private constructor(value: T) {
    this.value = value;
  }

  map<O>(map: Map<T, O>): Right<O> {
    const mappedValue = map(this.value);

    return Right.of<O>(mappedValue);
  }

  inspect(): string {
    const inspectedValue = inspect(this.value);

    return `Right(${inspectedValue})`;
  }
}

export default Right;
