import { Fragment } from 'react';

import * as DropdownMenu from '../../feedback/DropdownMenu';

import { type SelectProps, type SelectMachine } from './SelectProps';
import SelectList from './SelectList';
import buildSelectGroups from './helpers/buildSelectGroups';

interface SelectMenuProps<T> extends SelectProps<T> {
  api: SelectMachine;
}

function SelectMenu<T>(props: SelectMenuProps<T>) {
  const { options, getOptionGroup, api } = props;
  const groups = buildSelectGroups(props);

  return (
    <DropdownMenu.Menu {...api.contentProps}>
      {groups.map((group, groupIndex) => {
        const groupId = group
          ? `${group}-${groupIndex}`
          : `no-group-${groupIndex}`;

        const groupOptions = options.filter(
          (option) => (getOptionGroup?.(option) || '') === group,
        );

        const list = <SelectList {...props} api={api} options={groupOptions} />;

        return group ? (
          <Fragment key={groupId}>
            <DropdownMenu.Group
              {...api.getOptionGroupLabelProps({ htmlFor: groupId })}
            >
              {group}
            </DropdownMenu.Group>
            <DropdownMenu.List {...api.getOptionGroupProps({ id: groupId })}>
              {list}
            </DropdownMenu.List>
          </Fragment>
        ) : (
          <DropdownMenu.List key={groupId}>{list}</DropdownMenu.List>
        );
      })}
    </DropdownMenu.Menu>
  );
}

export default SelectMenu;
