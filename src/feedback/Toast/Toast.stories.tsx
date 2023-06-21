import { BellIcon } from '@heroicons/react/24/outline';
import { type Meta, type StoryFn } from '@storybook/react';

import Toast from './Toast';
import ToastTitle from './ToastTitle';

export const Default: StoryFn<typeof Toast> = ({ toastType }) => {
  let title = '';
  let description = '';
  let icon: JSX.Element | undefined;

  switch (toastType) {
    case 'info': {
      title = 'Information';
      description =
        'Bugs have been fixed in version 1.3.18. Please reload the page';
      break;
    }

    case 'success': {
      title = 'Success';
      description = 'File upload completed successfully';
      break;
    }

    case 'loading': {
      title = 'Loading...';
      description = 'File upload in progress';
      break;
    }

    case 'error': {
      title = 'Error';
      description = 'Failed to upload file';
      break;
    }

    case 'custom': {
      title = 'Notification';
      description = 'Read the latest updates on our blog';
      icon = <BellIcon />;
      break;
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 300 }}>
      <Toast toastType={toastType} icon={icon}>
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <p>{description}</p>}
      </Toast>
    </div>
  );
};

export default {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: {
    toastType: {
      options: ['info', 'loading', 'success', 'error', 'custom'],
      control: { type: 'select' },
    },
  },
  args: {
    toastType: 'info',
  },
} as Meta<typeof Toast>;
