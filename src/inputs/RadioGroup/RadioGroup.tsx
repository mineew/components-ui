import { useId } from 'react';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as radio from '@zag-js/radio-group';

import RadioControl from './RadioControl';

interface RadioGroupProps<T> {
  value?: string;
  onChange?: (value?: string, option?: T) => void;
  options: T[];
  getOptionValue: (option: T) => string;
  getOptionLabel: (option: T) => string;
  disabled?: boolean;
  invalid?: boolean;
}

function RadioGroup<T>(props: RadioGroupProps<T>) {
  const {
    value,
    onChange,
    options,
    getOptionValue,
    getOptionLabel,
    disabled,
    invalid,
  } = props;

  const [state, send] = useMachine(radio.machine({ id: useId() }), {
    context: {
      value,
      onChange({ value }) {
        onChange?.(
          value,
          options.find((option) => getOptionValue(option) === value),
        );
      },
      disabled,
    },
  });

  const api = radio.connect(state, send, normalizeProps);

  return (
    <div className="flex flex-col gap-2" {...api.rootProps}>
      {options.map((option) => {
        const value = getOptionValue(option);
        const label = getOptionLabel(option);

        return (
          <label
            key={value}
            className="group flex items-center gap-2 cursor-pointer"
            {...api.getRadioProps({ value })}
          >
            <RadioControl
              checked={api.getRadioState({ value }).isChecked}
              focused={api.getRadioState({ value }).isFocused}
              disabled={disabled}
              invalid={invalid}
              {...api.getRadioControlProps({ value })}
            />
            <span {...api.getRadioLabelProps({ value })}>{label}</span>
            <input {...api.getRadioInputProps({ value })} />
          </label>
        );
      })}
    </div>
  );
}

export default RadioGroup;
