import { IEither } from 'interfaces';

export type Handler<A, B> = (value: A) => B;

export type EitherFunction<A = unknown, B = unknown, C = unknown> = (
  (left: Handler<A, C>) => (right: Handler<B, C>) => (either: IEither<A, B>) => C | undefined
);
