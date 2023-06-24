function defaultGetOptionValue<T>(option: T) {
  let value: unknown = option;

  if (typeof value === 'string') {
    return value;
  }

  if ('code' in (option as object)) {
    value = (option as { code: unknown }).code;
  }

  if ('id' in (option as object)) {
    value = (option as { id: unknown }).id;
  }

  if ('value' in (option as object)) {
    value = (option as { value: unknown }).value;
  }

  return (value as string) + '';
}

export default defaultGetOptionValue;
