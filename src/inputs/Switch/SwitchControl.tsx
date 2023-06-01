import classNames from 'classnames';

interface SwitchControlProps {
  invalid?: boolean;
}

function SwitchControl(props: SwitchControlProps) {
  const { invalid } = props;
  const classes = [];

  classes.push('h-5', 'w-10', 'rounded-full');
  classes.push('peer-focus/input:outline', 'outline-2', 'outline-offset-2');
  classes.push('cursor-pointer');
  classes.push('transition');

  if (invalid) {
    classes.push('bg-red-600');
    classes.push('outline-red-600');
  } else {
    classes.push('bg-slate-300');
    classes.push('group-hover/label:bg-slate-600');
    classes.push('peer-checked/input:bg-slate-800');
    classes.push('peer-focus/input:bg-slate-800');
    classes.push('outline-slate-800');
  }

  classes.push('peer-disabled/input:bg-slate-100');
  classes.push('peer-disabled/input:border-slate-100');
  classes.push('peer-disabled/input:cursor-not-allowed');

  return <div className={classNames(classes)} />;
}

export default SwitchControl;
