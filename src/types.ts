export type Map<I, O> = (value: I) => O;

export type O = { [key: string]: unknown };

export type F = (...args: unknown[]) => unknown;
