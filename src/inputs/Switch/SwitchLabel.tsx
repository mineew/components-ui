import { type HTMLAttributes } from 'react';
import classNames from 'classnames';

interface SwitchLabelProps extends HTMLAttributes<HTMLSpanElement> {
  disabled?: boolean;
  invalid?: boolean;
}

function SwitchLabel(props: SwitchLabelProps) {
  const { disabled, invalid, className, children, ...otherProps } = props;
  const classes = [];

  classes.push('ml-2');
  classes.push('font-medium', 'leading-5');
  classes.push('select-none');

  if (invalid) {
    classes.push('text-red-600');
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

export default SwitchLabel;
