import { type SelectProps } from '../SelectProps';

function buildSelectGroups<T>(props: SelectProps<T>) {
  const { options, getOptionGroup, groupSort } = props;

  if (!getOptionGroup) return [''];

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
