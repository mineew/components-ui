import { type Meta, type StoryFn } from '@storybook/react';

import RadioGroup from './RadioGroup';

interface Color {
  code: string;
  name: string;
}

const colors: Color[] = [
  { code: '#F08080', name: 'Light Coral' },
  { code: '#8A2BE2', name: 'Blue Violet' },
  { code: '#9932CC', name: 'Dark Orchid' },
];

export const Default: StoryFn<typeof RadioGroup> = () => {
  const options: Color[] = colors;
  const getOptionValue = (option: Color) => option.code;
  const getOptionLabel = (option: Color) => option.name;

  return (
    <div style={{ padding: 20 }}>
      <RadioGroup
        options={options}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
      />
    </div>
  );
};

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
} as Meta<typeof RadioGroup>;
