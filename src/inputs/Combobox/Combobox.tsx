import { type Ref, useId, forwardRef } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as combobox from '@zag-js/combobox';
import { XMarkIcon } from '@heroicons/react/20/solid';

import Input, { type InputToolbarItem } from '../Input';
import SelectIndicator from '../../utils/SelectIndicator';
import { SelectMenu } from '../../utils/SelectMenu';

import { type ComboboxProps } from './ComboboxProps';

function Combobox<T>(props: ComboboxProps<T>, ref: Ref<HTMLInputElement>) {
  const {
    options,
    getOptionValue,
    getOptionLabel,
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
        onClose() {
          if (api.selectedValue) {
            const selectedOption = options.find(
              (option) => getOptionValue?.(option) === api.selectedValue,
            );

            const selectedOptionLabel = selectedOption
              ? getOptionLabel?.(selectedOption)
              : '';

            if (selectedOptionLabel) {
              api.setInputValue(selectedOptionLabel);
            }
          }
        },
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
