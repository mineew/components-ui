import { type ReactNode } from 'react';
import classNames from 'classnames';

interface ErrorReloadableTitleProps {
  children: ReactNode;
}

function ErrorReloadableTitle(props: ErrorReloadableTitleProps) {
  const { children } = props;
  const classes = [];

  classes.push('text-xl');

  return <div className={classNames(classes)}>{children}</div>;
}

export default ErrorReloadableTitle;
