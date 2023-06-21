import { XMarkIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { forwardRef, type ButtonHTMLAttributes, type Ref } from 'react';

import { type ToastType } from './ToastType';

interface ToastCloseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  toastType?: ToastType;
}

function ToastCloseButton(
  props: ToastCloseButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  const { toastType = 'info', className, children, ...otherProps } = props;
  const classes = [];

  classes.push('block', 'w-5', 'h-5', 'rounded-md');
  classes.push('shrink-0', 'ml-auto');
  classes.push('focus:outline', 'outline-2', 'outline-offset-2');
  classes.push('transition');

  if (
    toastType === 'info' ||
    toastType === 'loading' ||
    toastType === 'custom'
  ) {
    classes.push('hover:bg-slate-100');
    classes.push('focus:bg-slate-100');
    classes.push('active:text-white');
    classes.push('active:bg-slate-800');
    classes.push('outline-slate-800');
  }

  if (toastType === 'success' || toastType === 'error') {
    classes.push('hover:bg-white/40');
    classes.push('focus:bg-white/40');
    classes.push('active:bg-white');
    classes.push('outline-white');
  }

  if (toastType === 'success') {
    classes.push('active:text-slate-800');
  }

  if (toastType === 'error') {
    classes.push('active:text-red-500');
  }

  return (
    <button
      ref={ref}
      className={classNames(classes, className)}
      type="button"
      {...otherProps}
    >
      {children || <XMarkIcon />}
    </button>
  );
}

export default forwardRef(ToastCloseButton);
