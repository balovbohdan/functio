import { Map } from 'types';
import { inspect } from 'utils';
import { IEither } from 'interfaces';

class Left<T> implements IEither<T> {
  readonly value: T;

  static of<T>(value: T): Left<T> {
    return new Left<T>(value);
  }

  private constructor(value: T) {
    this.value = value;
  }

  map<O>(map: Map<T, O>): Left<T> {
    return this;
  }

  inspect(): string {
    const inspectedValue = inspect(this.value);

    return `Left(${inspectedValue})`;
  }
}

export default Left;
