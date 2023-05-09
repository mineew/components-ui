import { CheckIcon, MinusSmallIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

interface CheckboxIconProps {
  checked?: boolean | 'indeterminate';
  disabled?: boolean;
  small?: boolean;
}

function CheckboxIcon(props: CheckboxIconProps) {
  const { checked, disabled, small } = props;
  const classes = [];

  if (small) {
    classes.push('h-3', 'w-3');
  } else {
    classes.push('h-4', 'w-4');
  }

  if (disabled) {
    classes.push('text-slate-300');
  } else {
    classes.push('text-white');
  }

  if (checked) {
    classes.push('scale-100');
  } else {
    classes.push('scale-0');
  }

  classes.push('transform');
  classes.push('transition');

  return checked === 'indeterminate' ? (
    <MinusSmallIcon className={classNames(classes)} strokeWidth={3} />
  ) : (
    <CheckIcon className={classNames(classes)} strokeWidth={3} />
  );
}

export default CheckboxIcon;
