import { type Meta, type StoryFn } from '@storybook/react';

import Button from '../../inputs/Button/Button';
import Tooltip from './Tooltip';

export const Default: StoryFn<typeof Tooltip> = () => {
  return (
    <div style={{ padding: 20 }}>
      <Tooltip title="Tooltip Content">
        <Button>Over Me</Button>
      </Tooltip>
    </div>
  );
};

export default {
  title: 'Feedback/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;
