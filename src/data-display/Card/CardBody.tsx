import { type ReactNode } from 'react';
import classNames from 'classnames';

interface CardBodyProps {
  children: ReactNode;
}

function CardBody(props: CardBodyProps) {
  const { children } = props;
  const classes = [];

  classes.push('p-6');

  return <div className={classNames(classes)}>{children}</div>;
}

export default CardBody;
