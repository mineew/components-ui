import { forwardRef, type Ref, type HTMLAttributes } from 'react';
import classNames from 'classnames';

function DropdownMenuGroup(
  props: HTMLAttributes<HTMLDivElement>,
  ref: Ref<HTMLDivElement>,
) {
  const { className, ...otherProps } = props;
  const classes = [];

  classes.push('px-3', 'pt-3');
  classes.push('font-bold', 'text-slate-400', 'text-xs', 'uppercase');
  classes.push('select-none');
  classes.push('focus:outline-none');

  return (
    <div ref={ref} className={classNames(classes, className)} {...otherProps} />
  );
}

export default forwardRef(DropdownMenuGroup);
