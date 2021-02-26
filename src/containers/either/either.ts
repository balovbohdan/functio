import { IEitherSide } from 'interfaces';

import Left from './left';
import Right from './right';

class Either {
  static Left = Left;
  static Right = Right;

  static of<A>(value: A): IEitherSide<A> {
    return Right.of<A>(value);
  }
}

export default Either;
