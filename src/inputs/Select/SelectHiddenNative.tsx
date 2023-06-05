/* eslint-disable @typescript-eslint/no-unused-vars */

import { type Ref, forwardRef } from 'react';

import { type SelectProps, type SelectMachine } from './SelectProps';

interface SelectHiddenNativeProps<T> extends SelectProps<T> {
  api: SelectMachine;
}

function SelectHiddenNative<T>(
  props: SelectHiddenNativeProps<T>,
  ref: Ref<HTMLSelectElement>,
) {
  const {
    options,
    getOptionValue,
    getOptionLabel,
    renderOption,
    isOptionDisabled,
    getOptionGroup,
    groupSort,
    invalid,
    api,
    id,
    ...nativeSelectProps
  } = props;

  const { defaultValue, ...selectMachineProps } = api.hiddenSelectProps;

  return (
    <select ref={ref} {...selectMachineProps} {...nativeSelectProps}>
      <option key="empty" value=""></option>
      {options.map((option) => (
        <option key={getOptionValue(option)} value={getOptionValue(option)}>
          {getOptionLabel(option)}
        </option>
      ))}
    </select>
  );
}

export default forwardRef(SelectHiddenNative) as <T>(
  props: SelectHiddenNativeProps<T> & { ref?: Ref<HTMLSelectElement> },
) => JSX.Element;
