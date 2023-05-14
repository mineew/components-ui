import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

function ErrorReloadableIcon() {
  const classes = [];

  classes.push('hidden', 'sm:block');
  classes.push('w-9', 'h-9');
  classes.push('absolute');
  classes.push('top-4', 'left-4');

  return <ExclamationTriangleIcon className={classNames(classes)} />;
}

export default ErrorReloadableIcon;
