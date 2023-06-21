import classNames from 'classnames';
import { forwardRef, type HTMLAttributes, type Ref } from 'react';

import ToastCloseButton from './ToastCloseButton';
import ToastIcon from './ToastIcon';
import type { ToastType } from './ToastType';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  toastType?: ToastType;
  icon?: JSX.Element;
  onClose?: () => void;
}

function Toast(props: ToastProps, ref: Ref<HTMLDivElement>) {
  const {
    toastType = 'info',
    icon,
    onClose,
    className,
    children,
    ...otherProps
  } = props;

  const classes = [];
  const contentClasses = [];

  classes.push('flex');
  classes.push('pl-4', 'pr-3', 'py-3', 'rounded-md');
  classes.push('border');
  classes.push('shadow-md');

  if (
    toastType === 'info' ||
    toastType === 'loading' ||
    toastType === 'custom'
  ) {
    classes.push('bg-white');
    classes.push('border-slate-300');
    classes.push('shadow-slate-100');
  }

  if (toastType === 'success' || toastType === 'error') {
    classes.push('text-white');
    classes.push('border-transparent');
  }

  if (toastType === 'success') {
    classes.push('bg-slate-800');
    classes.push('font-medium');
    classes.push('shadow-slate-100');
  }

  if (toastType === 'error') {
    classes.push('bg-red-500');
    classes.push('font-semibold');
    classes.push('shadow-red-100');
  }

  contentClasses.push('max-w-[200px]');

  return (
    <div ref={ref} className={classNames(classes, className)} {...otherProps}>
      <ToastIcon toastType={toastType} icon={icon} />
      <div className={classNames(contentClasses)}>{children}</div>
      <ToastCloseButton toastType={toastType} onClick={onClose} />
    </div>
  );
}

export default forwardRef(Toast);
