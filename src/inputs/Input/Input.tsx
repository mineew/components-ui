import {
  type ElementType,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type ButtonHTMLAttributes,
  forwardRef,
} from 'react';
import classNames from 'classnames';

import InputWrapper from './InputWrapper';
import InputIcon from './InputIcon';
import InputButton from './InputButton';

type InputCustomProps<T extends ElementType> = {
  as?: T;
  active?: boolean;
  invalid?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  rightButtonIcon?: JSX.Element;
  rightButtonTooltip?: string;
  rightButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  onRightButtonClick?: () => void;
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
    leftIcon,
    rightIcon,
    rightButtonIcon,
    rightButtonTooltip,
    rightButtonProps,
    onRightButtonClick,
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

  if (leftIcon) {
    classes.push('pl-9');
  }

  if (rightIcon || rightButtonIcon) {
    classes.push('pr-9');
  }

  const Element = as;

  return (
    <InputWrapper active={active} disabled={disabled} invalid={invalid}>
      <InputIcon
        type="left"
        active={active}
        disabled={disabled}
        invalid={invalid}
      >
        {leftIcon}
      </InputIcon>

      <Element
        ref={ref}
        className={classNames(classes, className)}
        disabled={disabled}
        {...otherProps}
      />

      <InputIcon
        type="right"
        active={active}
        disabled={disabled}
        invalid={invalid}
      >
        {rightIcon}
      </InputIcon>

      {!rightIcon && (
        <InputButton
          tooltip={rightButtonTooltip}
          active={active}
          {...rightButtonProps}
          disabled={rightButtonProps?.disabled || disabled}
          onClick={onRightButtonClick}
        >
          {rightButtonIcon}
        </InputButton>
      )}
    </InputWrapper>
  );
}

export default forwardRef(Input) as <T extends ElementType = 'input'>(
  props: InputProps<T>,
) => JSX.Element;
export type { InputProps };
