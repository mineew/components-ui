import { type HTMLAttributes, type LabelHTMLAttributes, Fragment } from 'react';

import * as DropdownMenu from '../../data-display/DropdownMenu';

import SelectList, { type SelectListProps } from './SelectList';
import buildSelectGroups from './helpers/buildSelectGroups';
import filterOptions from './helpers/filterOptions';

interface SelectMenuProps<T> extends SelectListProps<T> {
  query?: string;
  notFoundMessage?: string;
  getOptionGroup?: (option: T) => string | undefined;
  groupSort?: string[];
  getMenuProps?: () => HTMLAttributes<HTMLDivElement>;
  getOptionGroupLabelProps?: (
    groupId: string,
    groupLabel: string,
  ) => LabelHTMLAttributes<HTMLLabelElement>;
  getOptionGroupProps?: (
    groupId: string,
    groupLabel: string,
  ) => HTMLAttributes<HTMLUListElement>;
}

function SelectMenu<T>(props: SelectMenuProps<T>) {
  const {
    notFoundMessage = 'Ничего не найдено',
    getOptionGroup,
    getMenuProps,
    getOptionGroupLabelProps,
    getOptionGroupProps,
  } = props;

  const groups = buildSelectGroups(props);
  const options = filterOptions(props);

  const dropdownContent = groups.map((group, groupIndex) => {
    const groupId = group ? `${group}-${groupIndex}` : `no-group-${groupIndex}`;

    const groupOptions = options.filter(
      (option) => (getOptionGroup?.(option) || '') === group,
    );

    if (!groupOptions.length) {
      return null;
    }

    const list = <SelectList {...props} options={groupOptions} />;

    return group ? (
      <Fragment key={groupId}>
        <DropdownMenu.Group {...getOptionGroupLabelProps?.(groupId, group)}>
          {group}
        </DropdownMenu.Group>
        <DropdownMenu.List {...getOptionGroupProps?.(groupId, group)}>
          {list}
        </DropdownMenu.List>
      </Fragment>
    ) : (
      <DropdownMenu.List key={groupId}>{list}</DropdownMenu.List>
    );
  });

  return (
    <DropdownMenu.Menu {...getMenuProps?.()}>
      {options.length ? (
        dropdownContent
      ) : (
        <DropdownMenu.Message>{notFoundMessage}</DropdownMenu.Message>
      )}
    </DropdownMenu.Menu>
  );
}

export default SelectMenu;
export type { SelectMenuProps };
