import { forwardRef, type Ref, type LabelHTMLAttributes } from 'react';
import classNames from 'classnames';

function DropdownMenuGroup(
  props: LabelHTMLAttributes<HTMLLabelElement>,
  ref: Ref<HTMLLabelElement>,
) {
  const { className, htmlFor = '', ...otherProps } = props;
  const classes = [];

  classes.push('block');
  classes.push('px-3', 'pt-3');
  classes.push('font-bold', 'text-slate-400', 'text-xs', 'uppercase');
  classes.push('select-none');
  classes.push('focus:outline-none');

  return (
    <label
      ref={ref}
      className={classNames(classes, className)}
      htmlFor={htmlFor}
      {...otherProps}
    />
  );
}

export default forwardRef(DropdownMenuGroup);
