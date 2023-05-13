import { type ReactNode } from 'react';
import classNames from 'classnames';

interface CardTitleProps {
  children: ReactNode;
}

function CardTitle(props: CardTitleProps) {
  const { children } = props;
  const classes = [];

  classes.push('text-2xl');

  return <div className={classNames(classes)}>{children}</div>;
}

export default CardTitle;
