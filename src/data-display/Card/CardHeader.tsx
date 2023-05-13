import { type ReactNode } from 'react';
import classNames from 'classnames';

interface CardHeaderProps {
  children: ReactNode;
}

function CardHeader(props: CardHeaderProps) {
  const { children } = props;
  const classes = [];

  classes.push('px-6', 'pb-4', 'mt-4');
  classes.push('border-b', 'border-slate-200');

  return <div className={classNames(classes)}>{children}</div>;
}

export default CardHeader;
