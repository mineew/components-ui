function defaultGetOptionValue<T>(option: T) {
  let value: unknown = option;

  if ('code' in (option as object)) {
    value = (option as { code: unknown }).code;
  }

  if ('value' in (option as object)) {
    value = (option as { value: unknown }).value;
  }

  if (typeof value === 'string') {
    return value;
  }

  return (value as string) + '';
}

export default defaultGetOptionValue;
