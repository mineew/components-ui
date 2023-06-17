import { XMarkIcon } from '@heroicons/react/20/solid';
import * as combobox from '@zag-js/combobox';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import { type Ref, useId, useEffect, forwardRef } from 'react';

import SelectIndicator from '../../utils/SelectIndicator';
import { SelectMenu, defaultGetOptionLabel } from '../../utils/SelectMenu';
import Input, { type InputToolbarItem } from '../Input';

import { type ComboboxProps } from './ComboboxProps';
import getValueOption from './helpers/getValueOption';
import updateSelectedOption from './helpers/updateSelectedOption';

function Combobox<T>(props: ComboboxProps<T>, ref: Ref<HTMLInputElement>) {
  const {
    getOptionLabel = defaultGetOptionLabel,
    value,
    onChange,
    placeholder,
    disabled,
    invalid,
  } = props;

  const [state, send] = useMachine(
    combobox.machine({
      id: useId(),
      inputBehavior: 'autohighlight',
      openOnClick: true,
      loop: true,
      positioning: { sameWidth: true },
    }),
    {
      context: {
        onOpen() {
          api.setInputValue('');
        },
        onSelect({ value, label }) {
          if (label) {
            api.setInputValue(label);
            onChange?.(value, getValueOption(props, value));
          }
        },
        onClose() {
          const selectedOption = getValueOption(props, api.selectedValue);

          if (selectedOption) {
            api.setInputValue(getOptionLabel(selectedOption));
          }
        },
        placeholder,
        disabled,
        invalid,
      },
    },
  );

  const api = combobox.connect(state, send, normalizeProps);

  useEffect(() => {
    updateSelectedOption(props, api, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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
      onPointerDown: () => {
        api.clearValue();
        onChange?.();
      },
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
            query={api.inputValue}
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
