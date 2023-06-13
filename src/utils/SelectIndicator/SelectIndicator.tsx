import { ChevronDownIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

interface SelectIndicatorProps {
  rotated?: boolean;
}

function SelectIndicator(props: SelectIndicatorProps) {
  const { rotated = false } = props;
  const classes = [];

  classes.push('transition-transform');
  if (rotated) classes.push('rotate-180');

  return <ChevronDownIcon className={classNames(classes)} />;
}

export default SelectIndicator;
