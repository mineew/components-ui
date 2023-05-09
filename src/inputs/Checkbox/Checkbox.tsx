import { type ReactNode, type Ref, forwardRef, useId } from 'react';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as checkbox from '@zag-js/checkbox';
import classNames from 'classnames';

import CheckboxControl from './CheckboxControl';
import CheckboxLabel from './CheckboxLabel';

interface CheckboxProps {
  label: ReactNode;
  checked?: boolean | 'indeterminate';
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  invalid?: boolean;
  small?: boolean;
  muted?: boolean;
}

function Checkbox(props: CheckboxProps, ref: Ref<HTMLInputElement>) {
  const { label, checked, onChange, disabled, invalid, small, muted } = props;

  const [state, send] = useMachine(
    checkbox.machine({
      id: useId(),
      checked: checked === true,
      indeterminate: checked === 'indeterminate',
      disabled,
      invalid,
      onChange({ checked }) {
        onChange?.(!checked);
      },
    }),
  );

  const api = checkbox.connect(state, send, normalizeProps);

  return (
    <label className={classNames('group', 'inline-flex')} {...api.rootProps}>
      <input ref={ref} {...api.inputProps} />

      <CheckboxControl
        checked={checked}
        focused={api.isFocused}
        disabled={disabled}
        invalid={invalid}
        small={small}
        {...api.controlProps}
      />

      <CheckboxLabel
        disabled={disabled}
        invalid={invalid}
        small={small}
        muted={muted}
        {...api.labelProps}
      >
        {label}
      </CheckboxLabel>
    </label>
  );
}

export default forwardRef(Checkbox);
