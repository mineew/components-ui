import classNames from 'classnames';
import { forwardRef, type HTMLAttributes, type Ref } from 'react';

type TagGroupProps = HTMLAttributes<HTMLDivElement>;

function TagGroup(props: TagGroupProps, ref: Ref<HTMLDivElement>) {
  const { className, ...otherProps } = props;
  const classes = [];

  classes.push('inline-flex', 'flex-wrap', 'gap-2');

  return (
    <div ref={ref} className={classNames(classes, className)} {...otherProps} />
  );
}

export default forwardRef(TagGroup);
