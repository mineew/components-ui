import { CheckIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

function SwitchCheck() {
  const classes = [];

  classes.push('absolute', 'left-[5px]', 'top-1/2', '-translate-y-1/2');
  classes.push('h-3', 'w-3');
  classes.push('pointer-events-none');
  classes.push('transform');
  classes.push('transition');

  classes.push('scale-0', 'peer-checked/input:scale-100');

  classes.push('text-white');
  classes.push('peer-disabled/input:text-slate-300');

  return <CheckIcon className={classNames(classes)} strokeWidth={3} />;
}

export default SwitchCheck;
