import { type Meta, type StoryFn } from '@storybook/react';

import ErrorReloadable from './ErrorReloadable';

export const Default: StoryFn<typeof ErrorReloadable> = ({
  title,
  message,
  reloadButtonTitle,
  onReset,
}) => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <ErrorReloadable
        title={title}
        message={message}
        reloadButtonTitle={reloadButtonTitle}
        onReset={onReset}
      />
    </div>
  );
};

export default {
  title: 'Feedback/ErrorReloadable',
  component: ErrorReloadable,
  argTypes: {
    onReset: { action: 'onReset' },
  },
  args: {
    title: 'An error has occurred',
    message:
      'A detailed description of the error has been sent to technical support. Try reloading the page.',
    reloadButtonTitle: 'Reload',
  },
} as Meta<typeof ErrorReloadable>;
