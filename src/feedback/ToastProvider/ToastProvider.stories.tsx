import { type Meta, type StoryFn } from '@storybook/react';
import { type Placement } from '@zag-js/toast';
import { useState } from 'react';

import Button from '../../inputs/Button';
import Select from '../../inputs/Select';
import { type ToastType } from '../Toast/ToastType';

import ToastProvider from './ToastProvider';
import useToast from './useToast';

export const Default: StoryFn = () => {
  const [type, setType] = useState<ToastType>('info');
  const [placement, setPlacement] = useState<Placement>('top-start');
  const toast = useToast();

  const types: ToastType[] = ['custom', 'error', 'info', 'loading', 'success'];
  const placements: Placement[] = [
    'bottom',
    'bottom-end',
    'bottom-start',
    'top',
    'top-end',
    'top-start',
  ];

  const titles: Record<ToastType, string> = {
    info: 'Information',
    success: 'Success',
    loading: 'Loading...',
    error: 'Error',
    custom: 'Custom Toast Title',
  };

  const descriptions: Record<ToastType, string> = {
    info: 'Bugs have been fixed in version 1.3.18. Please reload the page',
    success: 'File upload completed successfully',
    loading: 'File upload in progress',
    error: 'Failed to upload file',
    custom: 'Custom Toast Description',
  };

  const createToast = () =>
    toast.create({
      type,
      placement,
      title: titles[type],
      description: descriptions[type],
    });

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: 300 }}>
        <div style={{ marginBottom: 20 }}>
          <Select
            options={types}
            value={type}
            onChange={(_, type) => {
              if (type) {
                setType(type);
              }
            }}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <Select
            options={placements}
            value={placement}
            onChange={(_, placement) => {
              if (placement) {
                setPlacement(placement);
              }
            }}
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Button onClick={createToast}>Create Toast</Button>
        </div>
      </div>
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
