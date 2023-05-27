import classNames from 'classnames';

interface RadioIconProps {
  checked?: boolean;
  disabled?: boolean;
}

function RadioIcon(props: RadioIconProps) {
  const { checked, disabled } = props;
  const classes = [];

  classes.push('h-4', 'w-4', 'rounded-full');
  classes.push(
    'absolute',
    'left-1/2',
    'top-1/2',
    '-translate-x-1/2',
    '-translate-y-1/2',
  );

  if (disabled) {
    classes.push('bg-slate-300');
  } else {
    classes.push('bg-white');
  }

  if (checked) {
    classes.push('scale-50');
  } else {
    classes.push('scale-0');
  }

  classes.push('transform');
  classes.push('transition');

  return <div className={classNames(classes)} />;
}

export default RadioIcon;
