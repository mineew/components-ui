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

  const classes = [];

  classes.push('absolute');
  classes.push('right-2', 'top-1/2', '-translate-y-1/2');
  classes.push('leading-[0px]');

  classes.push('w-5', 'h-5', 'rounded');
  classes.push('transition');

  classes.push('text-slate-400');
  classes.push(!disabled ? 'hover:text-slate-600' : '');
  classes.push(!disabled && !active ? 'group-hover:text-slate-600' : '');

  classes.push('focus:outline', 'outline-2', 'outline-slate-800');
  classes.push('focus:text-slate-800');
  classes.push('group-focus-within:!text-slate-800');
  if (!disabled && active) classes.push('!text-slate-800');

  classes.push('disabled:cursor-not-allowed');
  classes.push('disabled:text-slate-400');

  const hasTooltip = !!tooltip && !disabled;

  const focusInput = (eventTarget: EventTarget & HTMLButtonElement) => {
    const node = eventTarget.previousSibling;
    const focusable =
      node && 'focus' in node ? (node as { focus: () => void }) : null;

    focusable?.focus();
  };

  const button = (
    <button
      className={classNames(classes)}
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

  return hasTooltip ? <Tooltip title={tooltip}>{button}</Tooltip> : button;
}

export default InputButton;
