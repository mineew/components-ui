import { CheckIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

interface SwitchCheckProps {
  checked?: boolean;
  disabled?: boolean;
}

function SwitchCheck(props: SwitchCheckProps) {
  const { checked, disabled } = props;
  const classes = [];

  classes.push('absolute', 'left-[5px]');
  classes.push('h-3', 'w-3');
  classes.push('transform');
  classes.push('transition');

  if (checked) {
    classes.push('scale-100');
  } else {
    classes.push('scale-0');
  }

  if (disabled) {
    classes.push('text-slate-300');
  } else {
    classes.push('text-white');
  }

  return <CheckIcon className={classNames(classes)} strokeWidth={3} />;
}

export default SwitchCheck;
