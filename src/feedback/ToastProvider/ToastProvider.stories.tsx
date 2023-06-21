import { type Meta, type StoryFn } from '@storybook/react';

import Button from '../../inputs/Button';

import ToastProvider from './ToastProvider';
import useToast from './useToast';

export const Default: StoryFn = () => {
  const toast = useToast();

  const createInfoToast = () =>
    toast.create({
      type: 'info',
      title: 'Information',
      description:
        'Bugs have been fixed in version 1.3.18. Please reload the page',
      placement: 'top-start',
    });

  const createSuccessToast = () =>
    toast.create({
      type: 'success',
      title: 'Success',
      description: 'File upload completed successfully',
      placement: 'top-end',
    });

  const createLoadingToast = () =>
    toast.create({
      type: 'loading',
      title: 'Loading...',
      description: 'File upload in progress',
      placement: 'bottom-end',
    });

  const createErrorToast = () =>
    toast.create({
      type: 'error',
      title: 'Error',
      description: 'Failed to upload file',
      placement: 'bottom-end',
    });

  return (
    <div
      style={{
        padding: 20,
        width: 300,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
      }}
    >
      <Button onClick={createInfoToast}>Create Info Toast</Button>
      <Button theme="primary" onClick={createSuccessToast}>
        Create Success Toast
      </Button>
      <Button onClick={createLoadingToast} loading>
        Create Loading Toast
      </Button>
      <Button theme="danger" onClick={createErrorToast}>
        Create Error Toast
      </Button>
    </div>
  );
};

export default {
  title: 'Feedback/ToastProvider',
  component: ToastProvider,
  decorators: [
    (Story) => {
      return (
        <ToastProvider>
          <Story />
        </ToastProvider>
      );
    },
  ],
} as Meta<typeof ToastProvider>;
