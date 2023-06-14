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
const isOptionDisabled = (option: Color) => option.name.includes('Blue');

const renderOption = (option: Color, disabled?: boolean) => (
  <span>
    <span
      style={{
        display: 'inline-block',
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: disabled ? 'currentColor' : option.code,
        opacity: disabled ? 0.5 : undefined,
        marginRight: 5,
        boxSizing: 'border-box',
      }}
    />

    {option.name}
  </span>
);

const getOptionGroup = (option: Color) => {
  if (option.name.includes('Dark')) return 'Dark Colors';
  if (option.name.includes('Light')) return 'Light Colors';
};

const groupSort = ['Dark Colors', 'Light Colors'];

export const Default: StoryFn<typeof Combobox> = ({
  placeholder,
  disabled,
  invalid,
}) => {
  return (
    <div style={{ padding: 20, width: 400 }}>
      <Combobox
        placeholder={placeholder}
        options={options}
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        renderOption={renderOption}
        isOptionDisabled={isOptionDisabled}
        getOptionGroup={getOptionGroup}
        groupSort={groupSort}
        disabled={disabled}
        invalid={invalid}
      />
    </div>
  );
};

export default {
  title: 'Inputs/Combobox',
  component: Combobox,
  args: {
    placeholder: 'Select a color',
    disabled: false,
    invalid: false,
  },
} as Meta<typeof Combobox>;
