import { O, F } from 'types';

import { ValueWithInspect } from './types';

const inspectFunction = (fn: F): string => (
  `function ${fn.name}() { }` || fn.toString()
);

const inspectString = (term: string): string => (
  `'${term}'`
);

const inspectObject = (value: O): string => {
  const subTerms = Object.keys(value).map((key) => [key, inspect(value[key])]);
  const result = subTerms.map((subTerm) => subTerm.join(': ')).join(', ');

  return `{ ${result} }`;
};

const inspectArray = (value: unknown[]): string => {
  const result = value.map(inspect).join(', ');

  return `[ ${result} ]`;
};

function inspect(value: unknown): string {
  const isArray = Array.isArray(value);
  const isString = typeof value === 'string';
  const isObject = typeof value === 'object';
  const isFunction = typeof value === 'function';
  const hasInspectMethod = typeof (<O>value)?.inspect === 'function';

  if (hasInspectMethod) {
    return (<ValueWithInspect>value).inspect();
  } else if (isFunction) {
    return inspectFunction(<F>value);
  } else if (isArray) {
    return inspectArray(<unknown[]>value);
  } else if (isString) {
    return inspectString(<string>value);
  } else if (isObject) {
    return inspectObject(<O>value);
  } else {
    return String(value);
  }
}

export default inspect;
