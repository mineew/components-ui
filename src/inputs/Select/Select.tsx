import { type Ref, useId, useEffect, forwardRef } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as select from '@zag-js/select';
import { XMarkIcon } from '@heroicons/react/20/solid';

import Input from '../Input';
import SelectIndicator from '../../feedback/SelectIndicator';

import { type SelectProps } from './SelectProps';
import SelectContent from './SelectContent';
import SelectMenu from './SelectMenu';
import getSelectedOption from './helpers/getSelectedOption';
import getValueOption from './helpers/getValueOption';
import updateSelectedOption from './helpers/updateSelectedOption';

function Select<T>(props: SelectProps<T>, ref: Ref<HTMLButtonElement>) {
  const { value, onChange, disabled, invalid, clearTooltip = 'Clear' } = props;

  const [state, send] = useMachine(
    select.machine({
      id: useId(),
      selectedOption: getSelectedOption(props, value),
      loop: true,
      positioning: { sameWidth: true },
    }),
    {
      context: {
        onChange(option) {
          onChange?.(option?.value, getValueOption(props, option?.value));
        },
        disabled,
        invalid,
      },
    },
  );

  const api = select.connect(state, send, normalizeProps);

  useEffect(() => {
    updateSelectedOption(props, api, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <Input
        ref={ref}
        as="button"
        className="text-left"
        rightIcon={
          !api.selectedOption ? (
            <SelectIndicator rotated={api.isOpen} />
          ) : undefined
        }
        rightButtonIcon={<XMarkIcon />}
        rightButtonTooltip={clearTooltip}
        onRightButtonClick={() => api.clearSelectedOption()}
        active={api.isOpen}
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
    </>
  );
}

export default forwardRef(Select) as <T>(
  props: SelectProps<T> & { ref?: Ref<HTMLButtonElement> },
) => JSX.Element;
