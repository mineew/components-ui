import { type HTMLAttributes } from 'react';
import classNames from 'classnames';

import CheckboxIcon from './CheckboxIcon';

interface CheckboxControlProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean | 'indeterminate';
  focused?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  small?: boolean;
}

const CheckboxControl = (props: CheckboxControlProps) => {
  const {
    checked,
    focused,
    disabled,
    invalid,
    small,
    className,
    ...otherProps
  } = props;

  const classes = [];

  classes.push('border', 'border-2');
  classes.push(focused ? 'outline' : '', 'outline-2', 'outline-offset-2');
  classes.push('transition');

  if (invalid && !disabled) {
    classes.push(checked ? 'bg-red-600' : '');
    classes.push('border-red-600');
    classes.push('outline-red-600');
  }

  if (!invalid && !disabled) {
    classes.push(checked ? 'bg-slate-800' : '');
    classes.push(checked || focused ? 'border-slate-800' : 'border-slate-300');
    classes.push(!checked && !focused ? 'group-hover:border-slate-600' : '');
    classes.push('outline-slate-800');
  }

  if (disabled) {
    classes.push('bg-slate-100');
    classes.push('border-slate-100');
    classes.push('cursor-not-allowed');
  } else {
    classes.push('cursor-pointer');
  }

  if (small) {
    classes.push('h-4', 'w-4');
    classes.push('rounded');
  } else {
    classes.push('h-5', 'w-5');
    classes.push('rounded-md');
  }

  return (
    <div className={classNames(classes, className)} {...otherProps}>
      <CheckboxIcon checked={checked} disabled={disabled} small={small} />
    </div>
  );
};

export default CheckboxControl;
