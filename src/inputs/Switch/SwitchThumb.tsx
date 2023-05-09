import classNames from 'classnames';

interface SwitchThumbProps {
  checked?: boolean;
  disabled?: boolean;
}

function SwitchThumb(props: SwitchThumbProps) {
  const { checked, disabled } = props;

  const classes = [];

  classes.push('inline-block');
  classes.push('h-3', 'w-3', 'rounded-full');
  classes.push(disabled ? 'bg-slate-300' : 'bg-white');
  classes.push('transform');
  classes.push('transition');

  if (checked) {
    classes.push('translate-x-6');
  } else {
    classes.push('translate-x-1');
  }

  return <span className={classNames(classes)} />;
}

export default SwitchThumb;
