import { type LiHTMLAttributes } from 'react';

import * as DropdownMenu from '../../data-display/DropdownMenu';

import defaultGetOptionValue from './helpers/defaultGetOptionValue';
import defaultGetOptionLabel from './helpers/defaultGetOptionLabel';

interface SelectListItemContext {
  index: number;
  value: string;
  label: string;
  selected: boolean;
  active: boolean;
  disabled: boolean;
}

interface SelectListProps<T> {
  options: T[];
  selectedValue?: string;
  activeValue?: string;
  getOptionValue?: (option: T) => string;
  getOptionLabel?: (option: T) => string;
  isOptionDisabled?: (option: T) => boolean;
  renderOption?: (option: T, disabled?: boolean) => JSX.Element;
  getOptionProps?: (
    context: SelectListItemContext,
  ) => LiHTMLAttributes<HTMLLIElement>;
}

function SelectList<T>(props: SelectListProps<T>) {
  const {
    options,
    selectedValue,
    activeValue,
    getOptionValue = defaultGetOptionValue,
    getOptionLabel = defaultGetOptionLabel,
    renderOption = getOptionLabel,
    isOptionDisabled,
    getOptionProps,
  } = props;

  return (
    <>
      {options.map((option, index) => {
        const value = getOptionValue(option);
        const label = getOptionLabel(option);
        const selected = value === selectedValue;
        const active = value === activeValue;
        const disabled = Boolean(isOptionDisabled?.(option));

        const liProps = getOptionProps?.({
          index,
          value,
          label,
          selected,
          active,
          disabled,
        });

        return (
          <DropdownMenu.Item
            key={value}
            {...liProps}
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
export type { SelectListItemContext, SelectListProps };
