import { type HTMLAttributes } from 'react';
import classNames from 'classnames';

import SwitchCheck from './SwitchCheck';
import SwitchThumb from './SwitchThumb';

interface SwitchControlProps extends HTMLAttributes<HTMLDivElement> {
  checked?: boolean;
  focused?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

function SwitchControl(props: SwitchControlProps) {
  const { checked, focused, disabled, invalid, className, ...otherProps } =
    props;
  const classes = [];

  classes.push('relative');
  classes.push('inline-flex', 'items-center', 'shrink-0');
  classes.push('h-5', 'w-10', 'rounded-full');
  classes.push(focused ? 'outline' : '', 'outline-2', 'outline-offset-2');
  classes.push('transition');

  if (invalid && !disabled) {
    classes.push('bg-red-600');
    classes.push('outline-red-600');
  }

  if (!invalid && !disabled) {
    classes.push(checked || focused ? 'bg-slate-800' : 'bg-slate-300');
    classes.push(!checked && !focused ? 'group-hover:bg-slate-600' : '');
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
    <div className={classNames(classes, className)} {...otherProps}>
      <SwitchCheck checked={checked} disabled={disabled} />
      <SwitchThumb checked={checked} disabled={disabled} />
    </div>
  );
}

export default SwitchControl;
