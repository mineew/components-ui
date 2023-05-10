import {
  type ElementType,
  type ComponentPropsWithRef,
  type Ref,
  forwardRef,
} from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

import InputWrapper from './InputWrapper';
import InputIcon from './InputIcon';
import InputButton from './InputButton';

type InputCustomProps<T extends ElementType> = {
  as?: T;
  invalid?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  rightButtonIcon?: JSX.Element;
  rightButtonTooltip?: string;
  onRightButtonClick?: () => void;
};

type InputProps<T extends ElementType> = InputCustomProps<T> &
  Omit<ComponentPropsWithRef<T>, keyof InputCustomProps<T>>;

function Input<T extends ElementType = 'input'>(
  props: InputProps<T>,
  ref: Ref<HTMLInputElement>,
) {
  const {
    as = 'input',
    invalid = false,
    leftIcon,
    rightIcon,
    rightButtonIcon,
    rightButtonTooltip,
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

  if (as === 'select') {
    classes.push('appearance-none');
  }

  if (leftIcon) {
    classes.push('pl-9');
  }

  if (rightIcon || rightButtonIcon) {
    classes.push('pr-9');
  }

  const Element = as;

  return (
    <InputWrapper disabled={disabled} invalid={invalid}>
      <InputIcon type="left" disabled={disabled} invalid={invalid}>
        {leftIcon}
      </InputIcon>

      <Element
        ref={ref}
        className={classNames(classes, className)}
        disabled={disabled}
        {...otherProps}
      />

      <InputIcon type="right" disabled={disabled} invalid={invalid}>
        {rightIcon || (as === 'select' ? <ChevronDownIcon /> : undefined)}
      </InputIcon>

      {!rightIcon && (
        <InputButton
          tooltip={rightButtonTooltip}
          disabled={disabled}
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
