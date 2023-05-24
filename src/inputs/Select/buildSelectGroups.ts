function buildSelectGroups<T>(
  options: T[],
  getOptionGroup?: (option: T) => string | undefined,
  groupSort?: string[],
) {
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
