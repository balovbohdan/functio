import { O } from 'types';

export type PropFunction<A = unknown> = (key: string) => (obj: O) => A | undefined;
