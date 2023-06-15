import { forwardRef, type Ref, type HTMLAttributes } from 'react';
import classNames from 'classnames';

type DropdownMenuProps = HTMLAttributes<HTMLDivElement>;

function DropdownMenu(props: DropdownMenuProps, ref: Ref<HTMLDivElement>) {
  const { className, ...otherProps } = props;
  const classes = [];

  classes.push('rounded-md');
  classes.push('bg-white');
  classes.push('border', 'border-slate-300');
  classes.push('shadow-md', 'shadow-slate-200');
  classes.push('focus:outline-none');
  classes.push('overflow-hidden');

  return (
    <div ref={ref} className={classNames(classes, className)} {...otherProps} />
  );
}

export default forwardRef(DropdownMenu);
