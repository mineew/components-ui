import { type ReactNode } from 'react';
import classNames from 'classnames';

interface ErrorReloadableMessageProps {
  children: ReactNode;
}

function ErrorReloadableMessage(props: ErrorReloadableMessageProps) {
  const { children } = props;
  const classes = [];

  classes.push('mb-4');

  return <div className={classNames(classes)}>{children}</div>;
}

export default ErrorReloadableMessage;
