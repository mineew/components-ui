import classNames from 'classnames';
import { forwardRef, type Ref, type InputHTMLAttributes } from 'react';

interface DropdownMenuInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

function DropdownMenuInput(
  props: DropdownMenuInputProps,
  ref: Ref<HTMLInputElement>,
) {
  const { icon, className, ...otherProps } = props;

  const wrapperClasses = [];
  const inputClasses = [];
  const iconClasses = [];

  wrapperClasses.push('relative');

  inputClasses.push('block', 'w-full', 'bg-transparent');
  inputClasses.push('p-3');
  inputClasses.push('border-b', 'border-slate-300');
  inputClasses.push('placeholder:text-slate-400');
  inputClasses.push('outline-none');

  if (icon) {
    inputClasses.push('pl-10');
  }

  iconClasses.push('w-5', 'h-5');
  iconClasses.push('absolute', 'left-3');
  iconClasses.push('top-1/2', '-translate-y-1/2');
  iconClasses.push('text-slate-400');

  return (
    <div className={classNames(wrapperClasses)}>
      <input
        ref={ref}
        className={classNames(inputClasses, className)}
        {...otherProps}
      />

      {icon && <div className={classNames(iconClasses)}>{icon}</div>}
    </div>
  );
}

export default forwardRef(DropdownMenuInput);
