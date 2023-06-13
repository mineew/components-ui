import { type StoryFn, type Meta } from '@storybook/react';

import SelectIndicator from './SelectIndicator';

export const Default: StoryFn<typeof SelectIndicator> = ({ rotated }) => {
  return (
    <div style={{ padding: 20, width: 400 }}>
      <div style={{ width: 20, height: 20 }}>
        <SelectIndicator rotated={rotated} />
      </div>
    </div>
  );
};

export default {
  title: 'Utils/SelectIndicator',
  component: SelectIndicator,
  args: {
    rotated: false,
  },
} as Meta<typeof SelectIndicator>;
