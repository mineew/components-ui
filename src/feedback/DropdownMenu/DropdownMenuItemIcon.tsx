import { CheckIcon, NoSymbolIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

interface DropdownMenuItemIconProps {
  type: 'selected' | 'disabled';
}

function DropdownMenuItemIcon(props: DropdownMenuItemIconProps) {
  const { type } = props;
  const classes = [];

  classes.push('absolute');
  classes.push('h-4', 'w-4');
  classes.push('right-2', 'top-1/2', '-translate-y-1/2');

  let Icon = CheckIcon;

  if (type === 'disabled') {
    Icon = NoSymbolIcon;
  }

  return <Icon className={classNames(classes)} strokeWidth={2} />;
}

export default DropdownMenuItemIcon;
