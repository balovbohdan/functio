import IEitherSide from './either-side';

type IEither<A, B> = IEitherSide<A | B>;

export default IEither;
