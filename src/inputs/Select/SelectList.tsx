import * as DropdownMenu from '../../feedback/DropdownMenu';

import { type SelectProps, type SelectMachine } from './SelectProps';

interface SelectListProps<T> extends SelectProps<T> {
  api: SelectMachine;
}

function SelectList<T>(props: SelectListProps<T>) {
  const {
    options,
    getOptionValue,
    getOptionLabel,
    isOptionDisabled,
    renderOption = getOptionLabel,
    api,
  } = props;

  return (
    <>
      {options.map((option) => {
        const value = getOptionValue(option);
        const label = getOptionLabel(option);
        const selected = api.selectedOption?.value === value;
        const active = api.highlightedOption?.value === value;
        const disabled = isOptionDisabled?.(option);

        return (
          <DropdownMenu.Item
            key={value}
            {...api.getOptionProps({ value, label, disabled })}
            selected={selected}
            active={active}
            disabled={disabled}
          >
            {renderOption(option, disabled)}
          </DropdownMenu.Item>
        );
      })}
    </>
  );
}

export default SelectList;
