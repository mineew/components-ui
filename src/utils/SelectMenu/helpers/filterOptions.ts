import { type SelectMenuProps } from '../SelectMenu';

import defaultGetOptionLabel from './defaultGetOptionLabel';

function filterOptions<T>(props: SelectMenuProps<T>) {
  const { options, getOptionLabel = defaultGetOptionLabel, query } = props;

  if (!query) {
    return options;
  }

  const filteredOptions = options.filter((option) =>
    getOptionLabel(option).toLowerCase().includes(query.toLowerCase()),
  );

  return filteredOptions;
}

export default filterOptions;
