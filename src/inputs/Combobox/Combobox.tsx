import { type Ref, useId, useState, forwardRef } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as combobox from '@zag-js/combobox';
import { XMarkIcon } from '@heroicons/react/20/solid';

import Input, { type InputToolbarItem } from '../Input';
import SelectIndicator from '../../utils/SelectIndicator';
import { SelectMenu } from '../../utils/SelectMenu';

import { type ComboboxProps } from './ComboboxProps';

function Combobox<T>(props: ComboboxProps<T>, ref: Ref<HTMLInputElement>) {
  const { placeholder, disabled, invalid } = props;
  const [query, setQuery] = useState('');

  const [state, send] = useMachine(
    combobox.machine({
      id: useId(),
      onOpen() {
        setQuery('');
      },
      onInputChange({ value }) {
        setQuery(value);
      },
      inputBehavior: 'autohighlight',
      openOnClick: true,
      loop: true,
      positioning: { sameWidth: true },
    }),
    {
      context: {
        placeholder,
        disabled,
        invalid,
      },
    },
  );

  const api = combobox.connect(state, send, normalizeProps);

  const toolbar: InputToolbarItem[] = [
    {
      ...api.triggerProps,
      key: 'select-indicator',
      icon: <SelectIndicator rotated={api.isOpen} />,
    },
  ];

  if (api.selectedValue) {
    toolbar.unshift({
      ...api.clearTriggerProps,
      key: 'clear',
      icon: <XMarkIcon />,
      hidden: false,
    });
  }

  return (
    <>
      <div {...api.rootProps}>
        <div {...api.controlProps}>
          <Input
            ref={ref}
            toolbar={toolbar}
            active={api.isOpen}
            invalid={invalid}
            {...api.inputProps}
          />
        </div>
      </div>

      <Portal>
        <div {...api.positionerProps}>
          <SelectMenu
            {...props}
            query={query}
            selectedValue={api.selectedValue}
            activeValue={api.focusedOption?.value}
            getMenuProps={() => {
              return api.contentProps;
            }}
            getOptionGroupProps={(groupId, groupLabel) => {
              return api.getOptionGroupProps({ label: groupLabel });
            }}
            getOptionProps={(context) => {
              return api.getOptionProps(context);
            }}
          />
        </div>
      </Portal>
    </>
  );
}

export default forwardRef(Combobox) as <T>(
  props: ComboboxProps<T> & { ref?: Ref<HTMLInputElement> },
) => JSX.Element;
