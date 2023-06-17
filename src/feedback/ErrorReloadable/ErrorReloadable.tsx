import classNames from 'classnames';
import type { ReactNode } from 'react';

import ErrorReloadableButton from './ErrorReloadableButton';
import ErrorReloadableMessage from './ErrorReloadableMessage';
import ErrorReloadableTitle from './ErrorReloadableTitle';

interface ErrorReloadableProps {
  title: ReactNode;
  message: ReactNode;
  reloadButtonTitle?: string;
  onReset: () => void;
}

function ErrorReloadable(props: ErrorReloadableProps) {
  const { title, message, reloadButtonTitle, onReset } = props;
  const classes = [];

  classes.push('px-6', 'py-5', 'rounded-md');
  classes.push('bg-red-500');
  classes.push('font-semibold', 'text-white');

  return (
    <div className={classNames(classes)}>
      <ErrorReloadableTitle>{title}</ErrorReloadableTitle>
      <ErrorReloadableMessage>{message}</ErrorReloadableMessage>
      <ErrorReloadableButton title={reloadButtonTitle} onClick={onReset} />
    </div>
  );
}

export default ErrorReloadable;
