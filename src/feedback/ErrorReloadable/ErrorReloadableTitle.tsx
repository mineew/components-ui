import classNames from 'classnames';
import { type ReactNode } from 'react';

interface ErrorReloadableTitleProps {
  children: ReactNode;
}

function ErrorReloadableTitle(props: ErrorReloadableTitleProps) {
  const { children } = props;
  const classes = [];

  classes.push('text-xl', 'mb-2');

  return <div className={classNames(classes)}>{children}</div>;
}

export default ErrorReloadableTitle;
