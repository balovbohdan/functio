import { Map } from 'types';
import { Maybe } from 'containers';

export type MaybeFunction<A = unknown, B = unknown> = (fallback: A) => (map: Map<A, B>) => (maybe: Maybe<A>) => B;
