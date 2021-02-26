import IContainer from './container';

type IEither<L, R> = IContainer<L | R>;

export default IEither;
