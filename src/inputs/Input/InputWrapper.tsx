import { type ReactNode } from 'react';
import classNames from 'classnames';

interface InputWrapperProps {
  disabled?: boolean;
  invalid?: boolean;
  children: ReactNode;
}

function InputWrapper(props: InputWrapperProps) {
  const { disabled, invalid, children } = props;
  const classes = [];

  classes.push('relative', 'group');
  classes.push('border', 'border-2', 'rounded-md');
  classes.push('overflow-hidden');
  classes.push('transition');

  classes.push('focus-within:ring-4');

  if (invalid) {
    classes.push(!disabled ? 'border-red-600' : '');
    classes.push('ring-red-200');
  } else {
    classes.push(!disabled ? 'border-slate-300' : '');
    classes.push(!disabled ? 'hover:border-slate-600' : '');
    classes.push(!disabled ? 'focus-within:!border-slate-800' : '');
    classes.push('ring-slate-300');
  }

  if (disabled) {
    classes.push('bg-slate-100', 'border-slate-100');
    classes.push('cursor-not-allowed');
  }

  return <div className={classNames(classes)}>{children}</div>;
}

export default InputWrapper;
