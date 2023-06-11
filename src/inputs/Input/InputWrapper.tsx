import { type ReactNode } from 'react';
import classNames from 'classnames';

interface InputWrapperProps {
  active?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  children: ReactNode;
}

function InputWrapper(props: InputWrapperProps) {
  const { active, disabled, invalid, children } = props;
  const classes = [];

  classes.push('relative', 'group');
  classes.push('flex');
  classes.push('border', 'border-2', 'rounded-md');
  classes.push('overflow-hidden');
  classes.push('transition');

  classes.push('focus-within:ring-4');
  if (!disabled && active) classes.push('ring-4');

  if (disabled) {
    classes.push('bg-slate-100', 'border-slate-100');
    classes.push('cursor-not-allowed');
  } else if (invalid) {
    classes.push('border-red-600');
    classes.push('ring-red-200');
  } else {
    classes.push('border-slate-300');
    classes.push('ring-slate-300');
    classes.push('hover:border-slate-600');
    classes.push('focus-within:!border-slate-800');

    if (active) {
      classes.push('border-slate-800');
    }
  }

  return <div className={classNames(classes)}>{children}</div>;
}

export default InputWrapper;
