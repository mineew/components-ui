import { type ReactNode } from 'react';
import classNames from 'classnames';

interface CardFooterProps {
  children: ReactNode;
}

function CardFooter(props: CardFooterProps) {
  const { children } = props;
  const classes = [];

  classes.push('flex', 'flex-wrap');
  classes.push('items-center', 'justify-center', 'text-center');
  classes.push('gap-2');
  classes.push('mt-4');

  return <div className={classNames(classes)}>{children}</div>;
}

export default CardFooter;
