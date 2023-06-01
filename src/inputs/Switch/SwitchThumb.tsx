import classNames from 'classnames';

function SwitchThumb() {
  const classes = [];

  classes.push('absolute', 'left-0', 'top-1/2', '-translate-y-1/2');
  classes.push('inline-block', 'h-3', 'w-3', 'rounded-full');
  classes.push('pointer-events-none');
  classes.push('transform');
  classes.push('transition');

  classes.push('translate-x-1', 'peer-checked/input:translate-x-6');

  classes.push('bg-white');
  classes.push('peer-disabled/input:bg-slate-300');

  return <span className={classNames(classes)} />;
}

export default SwitchThumb;
