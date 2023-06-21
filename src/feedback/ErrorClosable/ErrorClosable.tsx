import classNames from 'classnames';

import ErrorClosableCloseButton from './ErrorClosableCloseButton';

interface ErrorClosableProps {
  message: string;
  onClose: () => void;
}

function ErrorClosable(props: ErrorClosableProps) {
  const { message, onClose } = props;

  const classes = [];

  classes.push('relative');
  classes.push('pl-4', 'pr-12', 'py-2', 'rounded-md');
  classes.push('bg-red-500');
  classes.push('font-semibold', 'text-white');
  classes.push('mb-4', 'last:mb-0');

  return message ? (
    <div className={classNames(classes)}>
      <div>{message}</div>
      <ErrorClosableCloseButton onClick={onClose} />
    </div>
  ) : null;
}

export default ErrorClosable;
