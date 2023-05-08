import { type StoryFn, type Meta } from '@storybook/react';

import Spinner from './Spinner';

export const Default: StoryFn = () => {
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
} as Meta;
