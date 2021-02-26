import { F } from 'types';

// compose :: ((y -> z), (x -> y),  ..., (a -> b)) -> a -> z

const compose = <A extends F>(...fns: F[]): A => {
  const composed = (...args: unknown[]) => {
    const [result] = fns.reduceRight((argsAccumulator, fn) => {
      const nextArgs = fn.call(null, ...argsAccumulator);

      return [nextArgs];
    }, args);

    return result;
  };

  return <A>composed;
};

export default compose;
