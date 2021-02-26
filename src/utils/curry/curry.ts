import { F } from 'types';

// curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c

const curry = <A extends F>(fn: F): A => {
  const $curry = (...args: unknown[]): F | unknown => {
    const hasRestArguments = args.length < fn.length;

    if (hasRestArguments) {
      return $curry.bind(null, ...args);
    } else {
      return fn.call(null, ...args);
    }
  };

  return <A>$curry;
};

export default curry;
