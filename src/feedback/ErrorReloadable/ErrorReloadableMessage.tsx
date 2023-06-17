import classNames from 'classnames';
import { type ReactNode } from 'react';

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
