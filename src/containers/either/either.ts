import { IEither } from 'interfaces';

import Left from './left';
import Right from './right';

class Either {
  static Left = Left;
  static Right = Right;

  static of<L, R>(value: R): IEither<L, R> {
    return Right.of<R>(value);
  }
}

export default Either;
