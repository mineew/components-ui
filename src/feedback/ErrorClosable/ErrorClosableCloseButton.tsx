import { XMarkIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

interface ErrorClosableCloseButtonProps {
  onClick: () => void;
}

function ErrorClosableCloseButton(props: ErrorClosableCloseButtonProps) {
  const { onClick } = props;

  const classes = [];

  classes.push('block', 'w-5', 'h-5', 'rounded-md');
  classes.push('absolute', 'top-2', 'right-3');
  classes.push('hover:bg-white/40');
  classes.push('focus:bg-white/40', 'focus:outline');
  classes.push('outline-2', 'outline-offset-2', 'outline-white');
  classes.push('active:bg-white', 'active:text-red-500');
  classes.push('transition');

  return (
    <button className={classNames(classes)} type="button" onClick={onClick}>
      <XMarkIcon className={classNames('w-5', 'h-5')} strokeWidth={2} />
    </button>
  );
}

export default ErrorClosableCloseButton;
