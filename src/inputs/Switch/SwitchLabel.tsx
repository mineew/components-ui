import classNames from 'classnames';
import { type ReactNode } from 'react';

interface SwitchLabelProps {
  children: ReactNode;
  invalid?: boolean;
}

function SwitchLabel(props: SwitchLabelProps) {
  const { children, invalid } = props;
  const classes = [];

  classes.push('ml-2');
  classes.push('font-medium', 'leading-5');
  classes.push('select-none');
  classes.push('cursor-pointer');

  classes.push('peer-disabled/input:text-slate-500');
  classes.push('peer-disabled/input:cursor-not-allowed');

  if (invalid) {
    classes.push('text-red-600');
  }

  return <span className={classNames(classes)}>{children}</span>;
}

export default SwitchLabel;
