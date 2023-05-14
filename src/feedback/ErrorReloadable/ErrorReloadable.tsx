import type { ReactNode } from 'react';
import classNames from 'classnames';

import ErrorReloadableIcon from './ErrorReloadableIcon';
import ErrorReloadableTitle from './ErrorReloadableTitle';
import ErrorReloadableDivider from './ErrorReloadableDivider';
import ErrorReloadableMessage from './ErrorReloadableMessage';
import ErrorReloadableButton from './ErrorReloadableButton';

interface ErrorReloadableProps {
  title: ReactNode;
  message: ReactNode;
  onReset: () => void;
}

function ErrorReloadable(props: ErrorReloadableProps) {
  const { title, message, onReset } = props;
  const classes = [];

  classes.push('sm:relative');
  classes.push('sm:pl-16', 'pl-4', 'pr-4', 'py-4', 'rounded-md');
  classes.push('bg-red-500');
  classes.push('font-semibold', 'text-white');

  return (
    <div className={classNames(classes)}>
      <ErrorReloadableIcon />
      <ErrorReloadableTitle>{title}</ErrorReloadableTitle>
      <ErrorReloadableDivider />
      <ErrorReloadableMessage>{message}</ErrorReloadableMessage>
      <ErrorReloadableButton onClick={onReset} />
    </div>
  );
}

export default ErrorReloadable;
