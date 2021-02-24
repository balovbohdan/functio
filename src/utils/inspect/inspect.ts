import { Object } from 'types';

const inspectFunction = (fn: Function): string => (
  `function ${fn.name}() { }` || fn.toString()
);

const inspectString = (term: string): string => (
  `'${term}'`
);

const inspectObject = (value: Object): string => {
  const subTerms = Object.keys(value).map((key) => [key, inspect(value[key])]);
  const result = subTerms.map((subTerm) => subTerm.join(': ')).join(', ');

  return `{ ${result} }`;
};

const inspectArray = (value: any[]): string => {
  const result = value.map(inspect).join(', ');

  return `[ ${result} ]`;
};

function inspect(value: any): string {
  const isArray = Array.isArray(value);
  const isString = typeof value === 'string';
  const isObject = typeof value === 'object';
  const isFunction = typeof value === 'function';
  const hasInspectMethod = typeof value?.inspect === 'function';

  if (hasInspectMethod) {
    return value.inspect();
  } else if (isFunction) {
    return inspectFunction(value);
  } else if (isArray) {
    return inspectArray(value);
  } else if (isString) {
    return inspectString(value);
  } else if (isObject) {
    return inspectObject(value);
  } else {
    return String(value);
  }
};

export default inspect;
