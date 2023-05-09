import { type Meta, type StoryFn } from '@storybook/react';

import Spinner from './Spinner';

export const Default: StoryFn<typeof Spinner> = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ width: 20, height: 20 }}>
        <Spinner />
      </div>
    </div>
  );
};

export default {
  title: 'Feedback/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;
