import { type Ref, useId, useEffect, forwardRef } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as select from '@zag-js/select';

import Input from '../Input';

import { type SelectProps } from './SelectProps';
import SelectChevron from './SelectChevron';
import SelectContent from './SelectContent';
import SelectMenu from './SelectMenu';
import SelectHiddenNative from './SelectHiddenNative';
import getSelectedOption from './helpers/getSelectedOption';
import updateSelectedOption from './helpers/updateSelectedOption';

function Select<T>(props: SelectProps<T>, ref: Ref<HTMLSelectElement>) {
  const { id, value, disabled, invalid } = props;

  const generatedId = useId();
  const actualId = id || generatedId;

  const [state, send] = useMachine(
    select.machine({
      id: actualId,
      selectedOption: getSelectedOption(props, value),
      loop: true,
      positioning: { sameWidth: true },
    }),
    { context: { disabled } },
  );

  const api = select.connect(state, send, normalizeProps);

  useEffect(() => {
    updateSelectedOption(props, api, value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

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

      <SelectHiddenNative ref={ref} api={api} {...props} />
    </>
  );
}

export default forwardRef(Select) as <T>(
  props: SelectProps<T> & { ref?: Ref<HTMLSelectElement> },
) => JSX.Element;
