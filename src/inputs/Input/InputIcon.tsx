import classNames from 'classnames';

interface InputIconProps {
  icon: JSX.Element;
  type?: 'left' | 'right';
  active?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}

function InputIcon(props: InputIconProps) {
  const { icon, type = 'left', active, disabled, invalid } = props;

  const classes = [];

  classes.push('absolute');
  classes.push(type === 'left' ? 'left-2' : 'right-2');
  classes.push('top-1/2', '-translate-y-1/2');
  classes.push('w-5', 'h-5');
  classes.push('pointer-events-none');
  classes.push('transition');

  if (disabled) {
    classes.push(type === 'left' ? 'text-slate-400' : 'text-slate-300');
  } else if (invalid) {
    classes.push('text-red-600');
  } else {
    classes.push('text-slate-400');
    classes.push('group-hover:text-slate-600');
    classes.push('group-focus-within:!text-slate-800');

    if (active) {
      classes.push('text-slate-800');
    }
  }

  return <span className={classNames(classes)}>{icon}</span>;
}

export default InputIcon;
