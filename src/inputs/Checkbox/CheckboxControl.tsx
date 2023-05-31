import classNames from 'classnames';

interface CheckboxControlProps {
  invalid?: boolean;
  small?: boolean;
}

function CheckboxControl(props: CheckboxControlProps) {
  const { invalid, small } = props;
  const classes = [];

  classes.push('border', 'border-2');
  classes.push('peer-focus/input:outline', 'outline-2', 'outline-offset-2');
  classes.push('cursor-pointer');
  classes.push('transition');

  if (invalid) {
    classes.push('peer-checked/input:bg-red-600');
    classes.push('border-red-600');
    classes.push('outline-red-600');
  } else {
    classes.push('border-slate-300');
    classes.push('group-hover/label:border-slate-600');
    classes.push('peer-checked/input:bg-slate-800');
    classes.push('peer-checked/input:border-slate-800');
    classes.push('peer-focus/input:border-slate-800');
    classes.push('outline-slate-800');
  }

  if (small) {
    classes.push('h-4', 'w-4');
    classes.push('rounded');
  } else {
    classes.push('h-5', 'w-5');
    classes.push('rounded-md');
  }

  classes.push('peer-disabled/input:bg-slate-100');
  classes.push('peer-disabled/input:border-slate-100');
  classes.push('peer-disabled/input:cursor-not-allowed');

  return <div className={classNames(classes)} />;
}

export default CheckboxControl;
