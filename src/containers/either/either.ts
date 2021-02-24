import { Map } from 'types';
import { IEither } from 'interfaces';

import Left from './left';
import Right from './right';

class Either {
  static Left = Left;
  static Right = Right;

  static of<T>(value: T): IEither<T> {
    return Right.of<T>(value);
  }
}

export default Either;
