import classNames from 'classnames';
import { forwardRef, type HTMLAttributes, type Ref } from 'react';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
}

function Tag(props: TagProps, ref: Ref<HTMLSpanElement>) {
  const { active, className, ...otherProps } = props;
  const classes = [];

  classes.push('inline-flex', 'items-center', 'gap-1');
  classes.push('px-2', 'py-1', 'rounded-md');
  classes.push('text-xs', 'font-medium');
  classes.push('bg-slate-200');
  classes.push('transition');

  if (active) {
    classes.push('bg-slate-800');
    classes.push('text-white');
  }

  return (
    <span
      ref={ref}
      className={classNames(classes, className)}
      {...otherProps}
    />
  );
}

export default forwardRef(Tag);
