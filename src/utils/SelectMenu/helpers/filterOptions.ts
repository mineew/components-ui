import { type SelectMenuProps } from '../SelectMenu';

function filterOptions<T>(props: SelectMenuProps<T>) {
  const { options, getOptionLabel, query } = props;

  if (!query) {
    return options;
  }

  const filteredOptions = options.filter((option) =>
    getOptionLabel?.(option).toLowerCase().includes(query.toLowerCase()),
  );

  return filteredOptions;
}

export default filterOptions;
