import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

import Tooltip from '../Tooltip/Tooltip';

interface ErrorClosableCloseButtonProps {
  tooltip?: string;
  onClick: () => void;
}

function ErrorClosableCloseButton(props: ErrorClosableCloseButtonProps) {
  const { tooltip = 'Закрыть', onClick } = props;

  const classes = [];

  classes.push('absolute', 'top-2', 'right-2');
  classes.push('block', 'w-5', 'h-5', 'rounded-md');
  classes.push('hover:bg-white/40');
  classes.push('focus:bg-white/40', 'focus:outline');
  classes.push('outline-2', 'outline-offset-2', 'outline-white');
  classes.push('active:bg-white', 'active:text-red-500');
  classes.push('transition');

  return (
    <Tooltip title={tooltip}>
      <button className={classNames(classes)} type="button" onClick={onClick}>
        <XMarkIcon className={classNames('w-5', 'h-5')} strokeWidth={2} />
      </button>
    </Tooltip>
  );
}

export default ErrorClosableCloseButton;
