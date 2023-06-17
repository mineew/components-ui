import classNames from 'classnames';
import { forwardRef, type Ref, type HTMLAttributes } from 'react';

import DropdownMenuItemIcon from './DropdownMenuItemIcon';

interface DropdownMenuItemProps extends HTMLAttributes<HTMLLIElement> {
  selected?: boolean;
  active?: boolean;
  disabled?: boolean;
}

function DropdownMenuItem(
  props: DropdownMenuItemProps,
  ref: Ref<HTMLLIElement>,
) {
  const { className, children, selected, active, disabled, ...otherProps } =
    props;

  const classes = [];

  classes.push('relative');
  classes.push('pl-3', 'pr-9', 'py-1');
  classes.push('select-none');
  classes.push('focus:outline-none');

  if (selected) {
    classes.push(disabled ? 'bg-slate-100' : 'bg-slate-200');
  }

  if (active && !disabled) {
    classes.push('bg-slate-800');
    classes.push('text-white');
    classes.push('font-medium');
  }

  if (disabled) {
    classes.push('text-slate-400');
    classes.push('cursor-not-allowed');
  }

  return (
    <li ref={ref} className={classNames(classes, className)} {...otherProps}>
      {children}
      {selected && <DropdownMenuItemIcon type="selected" />}
      {disabled && !selected && <DropdownMenuItemIcon type="disabled" />}
    </li>
  );
}

export default forwardRef(DropdownMenuItem);
