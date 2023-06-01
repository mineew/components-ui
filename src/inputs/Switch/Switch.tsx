import {
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
  useId,
  forwardRef,
} from 'react';
import classNames from 'classnames';

import SwitchControl from './SwitchControl';
import SwitchCheck from './SwitchCheck';
import SwitchThumb from './SwitchThumb';
import SwitchLabel from './SwitchLabel';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  invalid?: boolean;
}

function Switch(props: SwitchProps, ref: Ref<HTMLInputElement>) {
  const { label, invalid, className, id, ...inputProps } = props;

  const generatedId = useId();
  const actualId = id || generatedId;

  const wrapperClasses = [];
  const labelClasses = [];
  const inputClasses = [];

  wrapperClasses.push('inline-block');
  wrapperClasses.push('leading-[0px]');

  labelClasses.push('group/label');
  labelClasses.push('inline-flex');
  labelClasses.push('relative');

  inputClasses.push('peer/input');
  inputClasses.push('appearance-none');

  return (
    <div
      className={classNames(wrapperClasses)}
      role="presentation"
      onMouseDown={(e) => e.preventDefault()}
    >
      <label className={classNames(labelClasses, className)} htmlFor={actualId}>
        <input
          ref={ref}
          className={classNames(inputClasses)}
          id={actualId}
          type="checkbox"
          {...inputProps}
        />
        <SwitchControl invalid={invalid} />
        <SwitchCheck />
        <SwitchThumb />
        <SwitchLabel invalid={invalid}>{label}</SwitchLabel>
      </label>
    </div>
  );
}

export default forwardRef(Switch);
