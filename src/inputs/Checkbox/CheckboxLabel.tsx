import { type ReactNode } from 'react';
import classNames from 'classnames';

interface CheckboxLabelProps {
  children: ReactNode;
  invalid?: boolean;
  small?: boolean;
  muted?: boolean;
}

function CheckboxLabel(props: CheckboxLabelProps) {
  const { children, invalid, small, muted } = props;
  const classes = [];

  classes.push('ml-2');
  classes.push('font-medium');
  classes.push('select-none');
  classes.push('cursor-pointer');

  classes.push('peer-disabled/input:text-slate-500');
  classes.push('peer-disabled/input:cursor-not-allowed');

  if (small) {
    classes.push('text-xs', 'leading-4');
  } else {
    classes.push('leading-5');
  }

  if (invalid) {
    classes.push('text-red-600');
  } else if (muted) {
    classes.push('text-slate-600');
  }

  return <span className={classNames(classes)}>{children}</span>;
}

export default CheckboxLabel;
