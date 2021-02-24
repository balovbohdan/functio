const compose = (...fns: Function[]): Function => (
  (...args: any[]) => {
    const [result] = fns.reduceRight((argsAccumulator, fn) => {
      const nextArgs = fn.call(null, ...argsAccumulator);

      return [nextArgs];
    }, args);

    return result;
  }
);

export default compose;
