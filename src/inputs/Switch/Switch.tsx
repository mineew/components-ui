import { type ReactNode, type Ref, forwardRef, useId } from 'react';
import { useMachine, normalizeProps } from '@zag-js/react';
import * as checkbox from '@zag-js/checkbox';
import classNames from 'classnames';

import SwitchControl from './SwitchControl';
import SwitchLabel from './SwitchLabel';

interface SwitchProps {
  label: ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  invalid?: boolean;
}

function Switch(props: SwitchProps, ref: Ref<HTMLInputElement>) {
  const { label, checked, onChange, disabled, invalid } = props;

  const [state, send] = useMachine(
    checkbox.machine({
      id: useId(),
      checked,
      disabled,
      invalid,
      onChange({ checked }) {
        onChange?.(Boolean(checked));
      },
    }),
  );

  const api = checkbox.connect(state, send, normalizeProps);

  return (
    <label className={classNames('group', 'inline-flex')} {...api.rootProps}>
      <input ref={ref} {...api.inputProps} />

      <SwitchControl
        checked={checked}
        focused={api.isFocused}
        disabled={disabled}
        invalid={invalid}
        {...api.controlProps}
      />

      <SwitchLabel disabled={disabled} invalid={invalid} {...api.labelProps}>
        {label}
      </SwitchLabel>
    </label>
  );
}

export default forwardRef(Switch);
