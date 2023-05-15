import { forwardRef, type ButtonHTMLAttributes, type Ref } from 'react';
import classNames from 'classnames';

import ButtonSpinner from './ButtonSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'default' | 'primary' | 'danger';
  loading?: boolean;
}

function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const {
    theme = 'default',
    loading,
    className,
    children,
    ...otherProps
  } = props;

  const classes = [];

  classes.push('inline-flex', 'items-center');
  classes.push('px-2', 'py-1', 'rounded-md');
  classes.push('border', 'border-2');
  classes.push('font-semibold');
  classes.push('focus:outline', 'outline-2', 'outline-offset-2');
  classes.push('transition');

  classes.push(
    'disabled:bg-slate-100',
    'disabled:border-slate-100',
    'disabled:text-slate-500',
  );

  if (loading) {
    classes.push('disabled:cursor-wait');
  } else {
    classes.push('disabled:cursor-not-allowed');
  }

  if (theme === 'primary' || theme === 'danger') {
    classes.push('text-white');
    classes.push('border-transparent');
  }

  if (theme === 'primary') {
    classes.push('bg-slate-800', 'active:bg-black');
    classes.push('outline-slate-800');
  } else if (theme === 'danger') {
    classes.push('bg-red-600', 'active:bg-red-700');
    classes.push('outline-red-600');
  } else {
    classes.push('border-slate-800');
    classes.push('hover:bg-slate-50', 'active:bg-slate-100');
    classes.push('outline-slate-800');
  }

  return (
    <button
      ref={ref}
      className={classNames(classes, className)}
      {...otherProps}
    >
      {loading && <ButtonSpinner />}
      {children}
    </button>
  );
}

export default forwardRef(Button);
