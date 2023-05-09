import { type HTMLAttributes } from 'react';
import classNames from 'classnames';

interface CheckboxLabelProps extends HTMLAttributes<HTMLSpanElement> {
  disabled?: boolean;
  invalid?: boolean;
  small?: boolean;
  muted?: boolean;
}

function CheckboxLabel(props: CheckboxLabelProps) {
  const {
    disabled,
    invalid,
    small,
    muted,
    className,
    children,
    ...otherProps
  } = props;

  const classes = [];

  if (small) {
    classes.push('text-xs', 'leading-4');
  } else {
    classes.push('leading-5');
  }

  classes.push('ml-2');
  classes.push('font-medium');
  classes.push('select-none');

  if (invalid) {
    classes.push('text-red-600');
  } else if (muted) {
    classes.push('text-slate-600');
  }

  if (disabled) {
    classes.push('text-slate-500');
    classes.push('cursor-not-allowed');
  } else {
    classes.push('cursor-pointer');
  }

  return (
    <span className={classNames(classes, className)} {...otherProps}>
      {children}
    </span>
  );
}

export default CheckboxLabel;
