import { type ReactNode } from 'react';
import classNames from 'classnames';

interface RadioGroupLegendProps {
  children?: ReactNode;
}

function RadioGroupLegend(props: RadioGroupLegendProps) {
  const { children } = props;
  const classes = [];

  classes.push('mb-2');
  classes.push('font-medium');

  if (!children) return null;
  return <legend className={classNames(classes)}>{children}</legend>;
}

export default RadioGroupLegend;
