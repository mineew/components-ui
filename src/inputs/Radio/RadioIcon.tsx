import classNames from 'classnames';

function RadioIcon() {
  const classes = [];

  classes.push('absolute');
  classes.push('left-[6px]');
  classes.push('top-1/2', '-translate-y-1/2');

  classes.push('h-2', 'w-2', 'rounded-full');
  classes.push('bg-white');
  classes.push('scale-0', 'peer-checked/input:scale-100');
  classes.push('pointer-events-none');
  classes.push('transition', 'transform');

  classes.push('peer-disabled/input:bg-slate-300');

  return <div className={classNames(classes)} />;
}

export default RadioIcon;
