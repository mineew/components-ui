import { type Ref, useId, forwardRef } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as select from '@zag-js/select';

import Input from '../Input';

import { type SelectProps } from './SelectProps';
import SelectChevron from './SelectChevron';
import SelectMenu from './SelectMenu';
import SelectContent from './SelectContent';

function Select<T>(props: SelectProps<T>, ref: Ref<HTMLSelectElement>) {
  const {
    value,
    onChange,
    options,
    getOptionValue,
    getOptionLabel,
    invalid,
    disabled,
    name,
    ...otherProps
  } = props;

  const defaultValueOption = options.find(
    (option) => getOptionValue(option) === value,
  );

  const [state, send] = useMachine(
    select.machine({
      id: useId(),
      name,
      selectedOption: defaultValueOption
        ? {
            value: getOptionValue(defaultValueOption),
            label: getOptionLabel(defaultValueOption),
          }
        : undefined,
      onChange(selected) {
        onChange?.(
          selected?.value,
          options.find((option) => getOptionValue(option) === selected?.value),
        );
      },
      disabled,
      invalid,
      loop: true,
      positioning: { sameWidth: true },
    }),
  );

  const api = select.connect(state, send, normalizeProps);

  return (
    <>
      <Input
        as="button"
        className="text-left"
        rightIcon={<SelectChevron rotated={api.isOpen} />}
        active={api.isOpen}
        disabled={disabled}
        invalid={invalid}
        {...api.triggerProps}
      >
        <SelectContent {...props} api={api} />
      </Input>

      <Portal>
        <div {...api.positionerProps}>
          <SelectMenu {...props} api={api} />
        </div>
      </Portal>

      <select ref={ref} {...otherProps} {...api.hiddenSelectProps}>
        {options.map((option) => (
          <option key={getOptionValue(option)} value={getOptionValue(option)}>
            {getOptionLabel(option)}
          </option>
        ))}
      </select>
    </>
  );
}

export default forwardRef(Select) as <T>(
  props: SelectProps<T> & { ref?: Ref<HTMLSelectElement> },
) => JSX.Element;
