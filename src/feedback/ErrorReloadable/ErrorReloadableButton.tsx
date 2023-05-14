import { ArrowPathIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

interface ErrorReloadableButtonProps {
  title?: string;
  onClick: () => void;
}

function ErrorReloadableButton(props: ErrorReloadableButtonProps) {
  const { title = 'Перезагрузить', onClick } = props;
  const classes = [];

  classes.push('flex', 'items-center', 'gap-2');
  classes.push('px-2', 'py-1', 'rounded-md');
  classes.push('border', 'border-2', 'border-white');
  classes.push('hover:bg-white/40');
  classes.push('focus:bg-white/40', 'focus:outline');
  classes.push('outline-2', 'outline-offset-2', 'outline-white');
  classes.push('active:bg-white', 'active:text-red-500');
  classes.push('transition');

  return (
    <button className={classNames(classes)} type="button" onClick={onClick}>
      <ArrowPathIcon
        className={classNames('hidden', 'sm:block', 'h-5', 'w-5')}
        strokeWidth={2}
      />
      {title}
    </button>
  );
}

export default ErrorReloadableButton;
