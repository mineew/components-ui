import { XMarkIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import { forwardRef, type ButtonHTMLAttributes, type Ref } from 'react';

type TagCloseButton = ButtonHTMLAttributes<HTMLButtonElement>;

function TagCloseButton(props: TagCloseButton, ref: Ref<HTMLButtonElement>) {
  const { className, children, ...otherProps } = props;
  const classes = [];

  classes.push('h-4', 'w-4', 'rounded-md');
  classes.push('-mr-1');
  classes.push('outline-none');
  classes.push('hover:bg-white/50');
  classes.push('focus:bg-white/50');
  classes.push('active:bg-transparent');

  return (
    <button
      ref={ref}
      className={classNames(classes, className)}
      {...otherProps}
    >
      {children || <XMarkIcon />}
    </button>
  );
}

export default forwardRef(TagCloseButton) as (
  props: TagCloseButton,
) => JSX.Element;
