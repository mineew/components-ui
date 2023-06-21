import { type Meta, type StoryFn } from '@storybook/react';

import ErrorClosable from './ErrorClosable';

export const Default: StoryFn<typeof ErrorClosable> = ({
  message,
  onClose,
}) => {
  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <ErrorClosable message={message} onClose={onClose} />
    </div>
  );
};

export default {
  title: 'Feedback/ErrorClosable',
  component: ErrorClosable,
  argTypes: {
    onClose: { action: 'onClose' },
  },
  args: {
    message:
      "The Cross-Origin-Opener-Policy header has been ignored, because the URL's origin was untrustworthy. It was defined either in the final response or a redirect.",
  },
} as Meta<typeof ErrorClosable>;
