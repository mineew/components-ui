import { type Meta, type StoryFn } from '@storybook/react';

import Skeleton from './Skeleton';

export const Default: StoryFn<typeof Skeleton> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Skeleton className="h-3" />
    </div>
  );
};

export default {
  title: 'Feedback/Skeleton',
  component: Skeleton,
} as Meta<typeof Skeleton>;
