const curry = (fn: Function): Function => (
  function $curry(...args: any[]) {
    const hasRestArguments = args.length < fn.length;

    if (hasRestArguments) {
      return $curry.bind(null, ...args);
    } else {
      return fn.call(null, ...args);
    }
  }
);

export default curry;
