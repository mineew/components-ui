import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

import Tooltip from '../Tooltip/Tooltip';

interface ErrorClosableCloseButtonProps {
  onClick: () => void;
}

function ErrorClosableCloseButton(props: ErrorClosableCloseButtonProps) {
  const { onClick } = props;

  const buttonClasses = [];
  const positionClasses = [];

  buttonClasses.push('block', 'w-5', 'h-5', 'rounded-md');
  buttonClasses.push('hover:bg-white/40');
  buttonClasses.push('focus:bg-white/40', 'focus:outline');
  buttonClasses.push('outline-2', 'outline-offset-2', 'outline-white');
  buttonClasses.push('active:bg-white', 'active:text-red-500');
  buttonClasses.push('transition');

  positionClasses.push('absolute', 'top-2', 'right-2');

  return (
    <Tooltip className={classNames(positionClasses)} title="Закрыть">
      <button
        className={classNames(buttonClasses)}
        type="button"
        onClick={onClick}
      >
        <XMarkIcon className={classNames('w-5', 'h-5')} strokeWidth={2} />
      </button>
    </Tooltip>
  );
}

export default ErrorClosableCloseButton;
