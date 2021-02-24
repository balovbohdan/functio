import { Either } from 'containers';

const left = <T>(value: T) => (
  Either.Left.of<T>(value)
);

export default left;
