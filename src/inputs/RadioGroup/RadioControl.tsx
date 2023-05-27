import { type HTMLAttributes } from 'react';
import classNames from 'classnames';

import RadioIcon from './RadioIcon';

interface RadioControlProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  focused?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

function RadioControl(props: RadioControlProps) {
  const { checked, focused, disabled, invalid, ...otherProps } = props;
  const classes = [];

  classes.push('h-5', 'w-5', 'rounded-full');
  classes.push('border', 'border-2');
  classes.push(focused ? 'outline' : '', 'outline-2', 'outline-offset-2');
  classes.push('relative');
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

  return (
    <div className={classNames(classes)} {...otherProps}>
      <RadioIcon checked={checked} disabled={disabled} />
    </div>
  );
}

export default RadioControl;
