import { type Ref, useId, useEffect, forwardRef } from 'react';
import { useMachine, normalizeProps, Portal } from '@zag-js/react';
import * as select from '@zag-js/select';
import classNames from 'classnames';

import Input from '../Input';
import SelectIndicator from '../../utils/SelectIndicator';
import { SelectMenu, SelectContent } from '../../utils/SelectMenu';

import { type SelectProps } from './SelectProps';
import getSelectedOption from './helpers/getSelectedOption';
import getValueOption from './helpers/getValueOption';
import updateSelectedOption from './helpers/updateSelectedOption';

function Select<T>(props: SelectProps<T>, ref: Ref<HTMLButtonElement>) {
  const { value, onChange, disabled, invalid } = props;
  const classes = [];

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

  classes.push('text-left');
  classes.push('select-none');

  return (
    <>
      <Input
        ref={ref}
        as="button"
        className={classNames(classes)}
        rightIcon={<SelectIndicator rotated={api.isOpen} />}
        active={api.isOpen}
        invalid={invalid}
        {...api.triggerProps}
      >
        <SelectContent {...props} selectedValue={api.selectedOption?.value} />
      </Input>

      <Portal>
        <div {...api.positionerProps}>
          <SelectMenu
            {...props}
            selectedValue={api.selectedOption?.value}
            activeValue={api.highlightedOption?.value}
            getMenuProps={() => {
              return api.contentProps;
            }}
            getOptionGroupLabelProps={(groupId) => {
              return api.getOptionGroupLabelProps({ htmlFor: groupId });
            }}
            getOptionGroupProps={(groupId) => {
              return api.getOptionGroupProps({ id: groupId });
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

export default forwardRef(Select) as <T>(
  props: SelectProps<T> & { ref?: Ref<HTMLButtonElement> },
) => JSX.Element;
