import classNames from 'classnames';
import { forwardRef, type HTMLAttributes, type Ref } from 'react';

type ToastTitleProps = HTMLAttributes<HTMLDivElement>;

function ToastTitle(props: ToastTitleProps, ref: Ref<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  const classes = [];

  classes.push('text-sm', 'font-bold');
  classes.push('mb-1', 'last:mb-0');

  return (
    <div ref={ref} className={classNames(classes, className)} {...otherProps}>
      {children}
    </div>
  );
}

export default forwardRef(ToastTitle);
