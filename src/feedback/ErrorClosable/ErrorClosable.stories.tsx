import { type Meta, type StoryFn } from '@storybook/react';

import ErrorClosable from './ErrorClosable';

export const Default: StoryFn<typeof ErrorClosable> = () => {
  const message =
    'Msg 2133 – You received this message because you sent a text to' +
    ' a number without the area code, used an invalid short code, or' +
    ' were blocked from using this service.';

  return (
    <div style={{ padding: 20 }}>
      <ErrorClosable message={message} onClose={() => undefined} />
    </div>
  );
};

export default {
  title: 'Feedback/ErrorClosable',
  component: ErrorClosable,
} as Meta<typeof ErrorClosable>;
