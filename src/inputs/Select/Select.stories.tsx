import { type StoryFn, type Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../Button';
import Select from './Select';

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

export const Default: StoryFn<typeof Select> = ({
  placeholder,
  disabled,
  invalid,
}) => {
  return (
    <div style={{ padding: 20, width: 400 }}>
      <Select
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

export const Controlled: StoryFn<typeof Select> = ({
  placeholder,
  disabled,
  invalid,
}) => {
  const [value, setValue] = useState('#9932CC');

  return (
    <div style={{ padding: 20, width: 400 }}>
      <div style={{ marginBottom: 10 }}>
        <Select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder={placeholder}
          options={options}
          getOptionValue={getOptionValue}
          getOptionLabel={getOptionLabel}
          disabled={disabled}
          invalid={invalid}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        Current Value: {value},{' '}
        {colors.find((c) => c.code === value)?.name || ''}
      </div>

      <Button type="button" theme="primary" onClick={() => setValue('#1E90FF')}>
        Use Dodger Blue
      </Button>
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { selectRequired: string; selectOptional: string };
  const { register, handleSubmit, formState } = useForm<FormValues>();

  return (
    <div style={{ padding: 20, width: 400 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <div style={{ marginBottom: 10 }}>
          <Select
            placeholder="Required Select Field"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            {...register('selectRequired', { required: true })}
            invalid={!!formState.errors.selectRequired}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Select
            placeholder="Optional Select Field"
            options={options}
            getOptionValue={getOptionValue}
            getOptionLabel={getOptionLabel}
            {...register('selectOptional')}
          />
        </div>

        <Button type="submit" theme="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default {
  title: 'Inputs/Select',
  component: Select,
  args: {
    placeholder: 'Select a color',
    disabled: false,
    invalid: false,
  },
} as Meta<typeof Select>;
