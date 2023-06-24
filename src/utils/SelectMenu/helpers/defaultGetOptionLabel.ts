function defaultGetOptionLabel<T>(option: T) {
  let label: unknown = option;

  if (typeof label === 'string') {
    return label;
  }

  if ('name' in (option as object)) {
    label = (option as { name: unknown }).name;
  }

  if ('title' in (option as object)) {
    label = (option as { title: unknown }).title;
  }

  if ('label' in (option as object)) {
    label = (option as { label: unknown }).label;
  }

  return (label as string) + '';
}

export default defaultGetOptionLabel;
