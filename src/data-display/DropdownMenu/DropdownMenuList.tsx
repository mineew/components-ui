import classNames from 'classnames';
import { forwardRef, type Ref, type HTMLAttributes } from 'react';

type DropdownMenuListProps = HTMLAttributes<HTMLUListElement>;

function DropdownMenuList(
  props: DropdownMenuListProps,
  ref: Ref<HTMLUListElement>,
) {
  const { className, ...otherProps } = props;
  const classes = [];

  classes.push('py-1');

  return (
    <ul ref={ref} className={classNames(classes, className)} {...otherProps} />
  );
}

export default forwardRef(DropdownMenuList);
