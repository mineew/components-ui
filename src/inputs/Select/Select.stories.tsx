import { type StoryFn, type Meta } from '@storybook/react';

import Select from './Select';

const H1 = ({ children }: { children: string }) => {
  return <h1 style={{ fontSize: 20, marginBottom: 10 }}>{children}</h1>;
};

const H2 = ({ children }: { children: string }) => {
  return <h2 style={{ fontSize: 16, marginBottom: 10 }}>{children}</h2>;
};

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

export const Default: StoryFn = () => {
  const options: Color[] = colors;
  const getOptionValue = (option: Color) => option.code;
  const getOptionLabel = (option: Color) => option.name;
  const isOptionDisabled = (option: Color) =>
    option.name.toLowerCase().includes('blue');

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
    if (option.name.toLowerCase().includes('dark')) return 'Dark Colors';
    if (option.name.toLowerCase().includes('light')) return 'Light Colors';
  };

  const groupSort = ['Dark Colors', 'Light Colors'];

  return (
    <div style={{ padding: 20, width: 400 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Select
            placeholder="Select a color"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            isOptionDisabled={isOptionDisabled}
          />
        </div>

        <H2>With Groups</H2>

        <div style={{ marginBottom: 10 }}>
          <Select
            placeholder="Select a color"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            isOptionDisabled={isOptionDisabled}
            getOptionGroup={getOptionGroup}
            groupSort={groupSort}
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Select
            placeholder="Select a color"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            isOptionDisabled={isOptionDisabled}
            disabled
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Select
            value={options[1].code}
            placeholder="Select a color"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            isOptionDisabled={isOptionDisabled}
            disabled
          />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Select
            placeholder="Select a color"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            isOptionDisabled={isOptionDisabled}
            invalid
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Select
            placeholder="Select a color"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            isOptionDisabled={isOptionDisabled}
            disabled
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Select
            value={options[1].code}
            placeholder="Select a color"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            renderOption={renderOption}
            isOptionDisabled={isOptionDisabled}
            disabled
            invalid
          />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Select',
} as Meta;
