import classNames from 'classnames';

import Tooltip from '../../feedback/Tooltip/Tooltip';

interface InputButtonProps {
  tooltip?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: JSX.Element;
}

function InputButton(props: InputButtonProps) {
  const { tooltip, active, disabled, onClick, children } = props;
  if (!children) return null;

  const wrapperClasses = [];
  const buttonClasses = [];

  wrapperClasses.push('absolute');
  wrapperClasses.push('right-2', 'top-1/2', '-translate-y-1/2');
  wrapperClasses.push('leading-[0px]');

  buttonClasses.push('w-5', 'h-5', 'rounded');
  buttonClasses.push('transition');

  buttonClasses.push('text-slate-400');
  buttonClasses.push(!disabled ? 'hover:text-slate-600' : '');
  buttonClasses.push(!disabled ? 'group-hover:text-slate-600' : '');

  buttonClasses.push('focus:outline', 'outline-2', 'outline-slate-800');
  buttonClasses.push('focus:text-slate-800');
  buttonClasses.push('group-focus-within:!text-slate-800');
  if (!disabled && active) buttonClasses.push('text-slate-800');

  buttonClasses.push('disabled:cursor-not-allowed');
  buttonClasses.push('disabled:text-slate-400');

  const hasTooltip = !!tooltip && !disabled;

  const focusInput = (eventTarget: EventTarget & HTMLButtonElement) => {
    const input = hasTooltip
      ? eventTarget.parentElement?.previousSibling
      : eventTarget.previousSibling;

    if (input && input instanceof HTMLInputElement) {
      input.focus();
    }
  };

  const button = (
    <button
      className={classNames(buttonClasses, hasTooltip ? null : wrapperClasses)}
      type="button"
      disabled={disabled}
      onMouseDown={(e) => {
        e.preventDefault();
        onClick?.();
        focusInput(e.currentTarget);
      }}
      onKeyDown={(e) => {
        if (e.key === ' ') {
          e.preventDefault();
          onClick?.();
          focusInput(e.currentTarget);
        }
      }}
    >
      {children}
    </button>
  );

  return hasTooltip ? (
    <Tooltip className={classNames(wrapperClasses)} title={tooltip}>
      {button}
    </Tooltip>
  ) : (
    button
  );
}

export default InputButton;
