import {
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
  useRef,
  useId,
  useEffect,
  forwardRef,
} from 'react';
import classNames from 'classnames';

import CheckboxControl from './CheckboxControl';
import CheckboxIcon from './CheckboxIcon';
import CheckboxLabel from './CheckboxLabel';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  indeterminate?: boolean;
  invalid?: boolean;
  small?: boolean;
  muted?: boolean;
}

function Checkbox(props: CheckboxProps, ref: Ref<HTMLInputElement>) {
  const {
    label,
    indeterminate = false,
    invalid,
    small,
    muted,
    className,
    id,
    ...inputProps
  } = props;

  const labelRef = useRef<HTMLLabelElement>(null);
  const generatedId = useId();
  const actualId = id || generatedId;

  const wrapperClasses = [];
  const inputClasses = [];

  wrapperClasses.push('group/label');
  wrapperClasses.push('inline-flex');
  wrapperClasses.push('relative');

  inputClasses.push('peer/input');
  inputClasses.push('appearance-none');

  useEffect(() => {
    const input = labelRef.current?.firstElementChild;

    if (input instanceof HTMLInputElement) {
      input.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      ref={labelRef}
      className={classNames(wrapperClasses, className)}
      htmlFor={actualId}
      // onMouseDown={(e) => e.preventDefault()}
    >
      <input
        ref={ref}
        className={classNames(inputClasses)}
        id={actualId}
        type="checkbox"
        {...inputProps}
      />
      <CheckboxControl invalid={invalid} small={small} />
      <CheckboxIcon indeterminate={indeterminate} small={small} />
      <CheckboxLabel invalid={invalid} small={small} muted={muted}>
        {label}
      </CheckboxLabel>
    </label>
  );
}

export default forwardRef(Checkbox);
