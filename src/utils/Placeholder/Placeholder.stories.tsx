import { type StoryFn, type Meta } from '@storybook/react';

import Placeholder from './Placeholder';

export const Default: StoryFn<typeof Placeholder> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Placeholder placeholder="Placeholder text" />
    </div>
  );
};

export default {
  title: 'Utils/Placeholder',
  component: Placeholder,
} as Meta<typeof Placeholder>;
