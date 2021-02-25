const isNil = (value: unknown): boolean => {
  const isNull = value === null;
  const isUndefined = value === undefined;

  return isNull || isUndefined;
};

export default isNil;
