import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/20/solid';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';

import Spinner from '../Spinner';

import { type ToastType } from './ToastType';

interface ToastIconProps {
  toastType?: ToastType;
  icon?: JSX.Element;
}

function ToastIcon(props: ToastIconProps) {
  const { toastType = 'info', icon: providedIcon } = props;
  const classes = [];

  classes.push('shrink-0');

  if (toastType === 'loading') {
    classes.push('w-5', 'h-5');
    classes.push('mr-2', 'mt-0.5');
  } else {
    classes.push('w-6', 'h-6');
    classes.push('-ml-1', 'mr-2');
  }

  let icon: JSX.Element | undefined;

  switch (toastType) {
    case 'info': {
      icon = <InformationCircleIcon />;
      break;
    }

    case 'success': {
      icon = <CheckCircleIcon />;
      break;
    }

    case 'loading': {
      icon = <Spinner />;
      break;
    }

    case 'error': {
      icon = <ExclamationCircleIcon />;
      break;
    }
  }

  if (!icon && !providedIcon) {
    return null;
  }

  return <div className={classNames(classes)}>{providedIcon || icon}</div>;
}

export default ToastIcon;
