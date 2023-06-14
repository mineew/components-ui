import { type ReactNode } from 'react';
import classNames from 'classnames';

interface SelectNotFoundProps {
  children: ReactNode;
}

function SelectNotFound(props: SelectNotFoundProps) {
  const { children } = props;
  const classes = [];

  classes.push('p-6');
  classes.push('text-center');
  classes.push('text-slate-400');

  return <div className={classNames(classes)}>{children}</div>;
}

export default SelectNotFound;
