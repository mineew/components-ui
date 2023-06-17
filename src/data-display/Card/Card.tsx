import classNames from 'classnames';
import { type ReactNode } from 'react';

import CardBody from './CardBody';
import CardDescription from './CardDescription';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';

interface CardProps {
  className?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

function Card(props: CardProps) {
  const { className, title, description, children, footer } = props;
  const classes = [];

  classes.push('bg-white', 'rounded-md');
  classes.push('border', 'border-slate-300');
  classes.push('shadow-sm', 'shadow-slate-200');

  return (
    <>
      <div className={classNames(classes, className)}>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}

        <CardBody>{children}</CardBody>
      </div>

      {footer && <CardFooter>{footer}</CardFooter>}
    </>
  );
}

export default Card;
