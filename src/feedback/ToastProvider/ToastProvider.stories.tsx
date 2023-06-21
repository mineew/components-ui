import { type Meta, type StoryFn } from '@storybook/react';

import Button from '../../inputs/Button';

import ToastProvider, { useToast } from './ToastProvider';

export const Default: StoryFn = () => {
  const toast = useToast();

  return (
    <div style={{ padding: 20 }}>
      <Button
        onClick={() => {
          toast?.create({
            type: 'success',
            title: 'Success',
            description: 'File upload completed successfully',
            placement: 'top-end',
          });
        }}
      >
        Add Toast
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
