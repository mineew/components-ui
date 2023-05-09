import classNames from 'classnames';

import Spinner from '../../feedback/Spinner/Spinner';

function ButtonSpinner() {
  const classes = [];

  classes.push('h-5', 'w-5');
  classes.push('-ml-1', 'mr-2');

  return <Spinner className={classNames(classes)} />;
}

export default ButtonSpinner;
