const isNil = (value: any): boolean => {
  const isNull = value === null;
  const isUndefined = value === undefined;

  return isNull || isUndefined;
};

export default isNil;
