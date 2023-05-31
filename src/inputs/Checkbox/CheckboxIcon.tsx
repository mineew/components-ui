import { CheckIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

interface CheckboxIconProps {
  indeterminate?: boolean;
  small?: boolean;
}

function CheckboxIcon(props: CheckboxIconProps) {
  const { indeterminate, small } = props;
  const classes = [];

  classes.push('absolute', 'top-[2px]', 'left-[2px]');
  classes.push('text-white');
  classes.push('scale-0', 'peer-checked/input:scale-100');
  classes.push('transition', 'transform');

  classes.push('peer-disabled/input:text-slate-300');
  classes.push('peer-disabled/input:cursor-not-allowed');

  if (small) {
    classes.push('h-3', 'w-3');
  } else {
    classes.push('h-4', 'w-4');
  }

  return indeterminate ? (
    <MinusSmallIcon className={classNames(classes)} strokeWidth={3} />
  ) : (
    <CheckIcon className={classNames(classes)} strokeWidth={3} />
  );
}

export default CheckboxIcon;
