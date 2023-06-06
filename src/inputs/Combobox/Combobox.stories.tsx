import { type StoryFn, type Meta } from '@storybook/react';

import Combobox from './Combobox';

interface Color {
  code: string;
  name: string;
}

const colors: Color[] = [
  { code: '#F08080', name: 'Light Coral' },
  { code: '#8A2BE2', name: 'Blue Violet' },
  { code: '#9932CC', name: 'Dark Orchid' },
  { code: '#778899', name: 'Light Slate Gray' },
  { code: '#006400', name: 'Dark Green' },
  { code: '#1E90FF', name: 'Dodger Blue' },
  { code: '#B22222', name: 'Fire Brick' },
  { code: '#008B8B', name: 'Dark Cyan' },
  { code: '#483D8B', name: 'Dark Slate Blue' },
  { code: '#228B22', name: 'Forest Green' },
];

const options: Color[] = colors;
const getOptionValue = (option: Color) => option.code;
const getOptionLabel = (option: Color) => option.name;

export const Default: StoryFn<typeof Combobox> = () => {
  return (
    <div style={{ padding: 20, width: 400 }}>
      <Combobox
        options={options}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
      />
    </div>
  );
};

export default {
  title: 'Inputs/Combobox',
  component: Combobox,
} as Meta<typeof Combobox>;
