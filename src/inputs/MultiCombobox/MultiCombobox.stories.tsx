import { type Meta, type StoryFn } from '@storybook/react';

import MultiCombobox from './MultiCombobox';

export const Default: StoryFn<typeof MultiCombobox> = () => {
  return (
    <div style={{ padding: 20 }}>
      <MultiCombobox />
    </div>
  );
};

export default {
  title: 'Inputs/MultiCombobox',
  component: MultiCombobox,
} as Meta<typeof MultiCombobox>;
