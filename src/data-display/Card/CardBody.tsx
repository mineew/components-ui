import classNames from 'classnames';
import { type ReactNode } from 'react';

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
