// isNil :: a -> Bool

const isNil = <A>(value: A): boolean => {
  const isNull = value === null;
  const isUndefined = value === undefined;

  return isNull || isUndefined;
};

export default isNil;
