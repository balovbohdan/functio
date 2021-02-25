import { F } from 'types';

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
