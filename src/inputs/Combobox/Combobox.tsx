import { type Ref, useId, useState, forwardRef } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as combobox from '@zag-js/combobox';

import Input from '../Input';
import * as DropdownMenu from '../../feedback/DropdownMenu';

interface ComboboxProps<T> {
  options: T[];
  getOptionValue: (option: T) => string;
  getOptionLabel: (option: T) => string;
}

function Combobox<T>(props: ComboboxProps<T>, ref: Ref<HTMLInputElement>) {
  const { options, getOptionValue, getOptionLabel } = props;
  const [query, setQuery] = useState('');

  const filteredOptions = options.filter((option) =>
    getOptionLabel(option).toLowerCase().includes(query.toLowerCase()),
  );

  const [state, send] = useMachine(
    combobox.machine({
      id: useId(),
      onOpen() {
        setQuery('');
      },
      onInputChange({ value }) {
        setQuery(value);
      },
      positioning: { sameWidth: true },
      inputBehavior: 'autohighlight',
    }),
  );

  const api = combobox.connect(state, send, normalizeProps);

  return (
    <>
      <div {...api.rootProps}>
        <div {...api.controlProps}>
          <Input ref={ref} {...api.inputProps} />
        </div>
      </div>

      <Portal>
        <div {...api.positionerProps}>
          <DropdownMenu.Menu>
            <DropdownMenu.List {...api.contentProps}>
              {filteredOptions.map((option, index) => (
                <DropdownMenu.Item
                  key={getOptionValue(option)}
                  {...api.getOptionProps({
                    value: getOptionValue(option),
                    label: getOptionLabel(option),
                    index,
                  })}
                  selected={api.selectedValue === getOptionValue(option)}
                  active={api.focusedOption?.value === getOptionValue(option)}
                >
                  {getOptionLabel(option)}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.List>
          </DropdownMenu.Menu>
        </div>
      </Portal>
    </>
  );
}

export default forwardRef(Combobox) as <T>(
  props: ComboboxProps<T> & { ref?: Ref<HTMLInputElement> },
) => JSX.Element;
