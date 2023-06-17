import classNames from 'classnames';
import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  forwardRef,
} from 'react';

import InputIcon from './InputIcon';
import InputToolbar, { type InputToolbarItem } from './InputToolbar';
import InputWrapper from './InputWrapper';

type InputCustomProps<T extends ElementType> = {
  as?: T;
  active?: boolean;
  invalid?: boolean;
  icon?: JSX.Element;
  rightIcon?: JSX.Element;
  toolbar?: InputToolbarItem | InputToolbarItem[];
};

type InputProps<T extends ElementType> = InputCustomProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof InputCustomProps<T>> & {
    ref?: ComponentPropsWithRef<T>['ref'] | string;
  };

function Input<T extends ElementType = 'input'>(
  props: InputProps<T>,
  ref: ComponentPropsWithRef<T>['ref'] | string,
) {
  const {
    as = 'input',
    active = false,
    invalid = false,
    icon,
    rightIcon,
    toolbar,
    className,
    disabled,
    ...otherProps
  } = props;

  const classes = [];

  classes.push('w-full', 'bg-transparent');
  classes.push('px-2', 'py-1');
  classes.push('outline-none');
  classes.push('transition');

  classes.push('placeholder:text-slate-400');

  classes.push('disabled:text-slate-500');
  classes.push('disabled:cursor-not-allowed');

  if (icon) {
    classes.push('pl-9');
  }

  if (rightIcon) {
    classes.push('pr-9');
  }

  const Element = as;

  return (
    <InputWrapper active={active} disabled={disabled} invalid={invalid}>
      {!!icon && (
        <InputIcon
          icon={icon}
          active={active}
          disabled={disabled}
          invalid={invalid}
        />
      )}

      <Element
        ref={ref}
        className={classNames(classes, className)}
        disabled={disabled}
        {...otherProps}
      />

      {!!toolbar && (
        <InputToolbar
          items={Array.isArray(toolbar) ? toolbar : [toolbar]}
          active={active}
          disabled={disabled}
          invalid={invalid}
        />
      )}

      {!toolbar && !!rightIcon && (
        <InputIcon
          icon={rightIcon}
          type="right"
          active={active}
          disabled={disabled}
          invalid={invalid}
        />
      )}
    </InputWrapper>
  );
}

export default forwardRef(Input) as <T extends ElementType = 'input'>(
  props: InputProps<T>,
) => JSX.Element;
export type { InputProps };
