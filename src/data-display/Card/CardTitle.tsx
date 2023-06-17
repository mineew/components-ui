import classNames from 'classnames';
import { type ReactNode } from 'react';

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
