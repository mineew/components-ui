import { forwardRef, type ButtonHTMLAttributes, type Ref } from 'react';
import classNames from 'classnames';

import ButtonSpinner from './ButtonSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  loading?: boolean;
}

function Button(props: ButtonProps, ref: Ref<HTMLButtonElement>) {
  const { primary, loading, className, children, ...otherProps } = props;
  const classes = [];

  classes.push('inline-flex', 'items-center');
  classes.push('px-2', 'py-1', 'rounded-md');
  classes.push('border', 'border-2');
  classes.push('font-semibold');
  classes.push('focus:outline', 'outline-2', 'outline-offset-2');
  classes.push('outline-slate-800');
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

  if (primary) {
    classes.push('text-white');
    classes.push('border-transparent');
    classes.push('bg-slate-800', 'active:bg-black');
  } else {
    classes.push('border-slate-800');
    classes.push('hover:bg-slate-50', 'active:bg-slate-100');
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
