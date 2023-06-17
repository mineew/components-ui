import { forwardRef, type Ref, type HTMLAttributes } from 'react';
import classNames from 'classnames';

type DropdownMenuMessageProps = HTMLAttributes<HTMLDivElement>;

function DropdownMenuMessage(
  props: DropdownMenuMessageProps,
  ref: Ref<HTMLDivElement>,
) {
  const { className, ...otherProps } = props;
  const classes = [];

  classes.push('p-6');
  classes.push('text-center');
  classes.push('text-slate-400');

  return (
    <div ref={ref} className={classNames(classes, className)} {...otherProps} />
  );
}

export default forwardRef(DropdownMenuMessage);
