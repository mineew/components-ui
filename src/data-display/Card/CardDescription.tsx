import classNames from 'classnames';
import { type ReactNode } from 'react';

interface CardDescriptionProps {
  children: ReactNode;
}

function CardDescription(props: CardDescriptionProps) {
  const { children } = props;
  const classes = [];

  classes.push('mt-2');
  classes.push('text-slate-600');

  return <div className={classNames(classes)}>{children}</div>;
}

export default CardDescription;
