import {
  type InputHTMLAttributes,
  type ReactNode,
  type Ref,
  useId,
  forwardRef,
} from 'react';
import classNames from 'classnames';

import RadioControl from './RadioControl';
import RadioIcon from './RadioIcon';
import RadioLabel from './RadioLabel';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
  invalid?: boolean;
}

function Radio(props: RadioProps, ref: Ref<HTMLInputElement>) {
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
          type="radio"
          id={actualId}
          {...inputProps}
        />
        <RadioControl invalid={invalid} />
        <RadioIcon />
        <RadioLabel invalid={invalid}>{label}</RadioLabel>
      </label>
    </div>
  );
}

export default forwardRef(Radio);
