import { type SelectMenuProps } from '../SelectMenu';

import filterOptions from './filterOptions';

function buildSelectGroups<T>(props: SelectMenuProps<T>) {
  const { getOptionGroup, groupSort } = props;

  if (!getOptionGroup) return [''];

  const options = filterOptions(props);
  const groups: string[] = [];

  options.forEach((option) => {
    const group = getOptionGroup(option);

    if (group?.trim() && !groups.includes(group)) {
      groups.push(group.trim());
    }
  });

  if (groupSort) {
    groups.sort((a, b) => groupSort.indexOf(a) - groupSort.indexOf(b));
  }

  groups.unshift('');

  return groups;
}

export default buildSelectGroups;
