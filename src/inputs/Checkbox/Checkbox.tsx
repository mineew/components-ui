import classNames from 'classnames';
import {
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
  useRef,
  useId,
  useEffect,
  forwardRef,
} from 'react';

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
  const labelClasses = [];
  const inputClasses = [];

  wrapperClasses.push('inline-block');
  wrapperClasses.push('leading-[0px]');

  labelClasses.push('group/label');
  labelClasses.push('inline-flex');
  labelClasses.push('relative');

  inputClasses.push('peer/input');
  inputClasses.push('appearance-none');

  useEffect(() => {
    const input = labelRef.current?.firstElementChild;

    if (input instanceof HTMLInputElement) {
      input.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div
      className={classNames(wrapperClasses)}
      role="presentation"
      onMouseDown={(e) => e.preventDefault()}
    >
      <label
        ref={labelRef}
        className={classNames(labelClasses, className)}
        htmlFor={actualId}
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
    </div>
  );
}

export default forwardRef(Checkbox);
