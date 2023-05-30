import classNames from 'classnames';

interface InputIconProps {
  type: 'left' | 'right';
  active?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  children?: JSX.Element;
}

function InputIcon(props: InputIconProps) {
  const { type, active, disabled, invalid, children } = props;
  if (!children) return null;

  const classes = [];

  classes.push('absolute');
  classes.push('top-1/2', '-translate-y-1/2');
  classes.push('w-5', 'h-5');
  classes.push('pointer-events-none');
  classes.push('transition');

  if (disabled) {
    classes.push('text-slate-400');
  } else {
    if (!invalid) {
      classes.push('text-slate-400');
      classes.push('group-hover:text-slate-600');
      classes.push('group-focus-within:!text-slate-800');
      if (active) classes.push('text-slate-800');
    } else {
      classes.push('text-red-600');
    }
  }

  if (type === 'left') {
    classes.push('left-2');
  } else {
    classes.push('right-2');
  }

  return <span className={classNames(classes)}>{children}</span>;
}

export default InputIcon;
