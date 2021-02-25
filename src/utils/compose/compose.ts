import { F } from 'types';

// compose :: ((y -> z), (x -> y),  ..., (a -> b)) -> a -> z

const compose = (...fns: F[]): F => (
  (...args: unknown[]) => {
    const [result] = fns.reduceRight((argsAccumulator, fn) => {
      const nextArgs = fn.call(null, ...argsAccumulator);

      return [nextArgs];
    }, args);

    return result;
  }
);

export default compose;
