import { type StoryFn, type Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TrashIcon } from '@heroicons/react/24/outline';

import Button from '../Button';
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
        notFoundMessage="Nothing found"
      />
    </div>
  );
};

export const Controlled: StoryFn<typeof Combobox> = ({
  placeholder,
  disabled,
  invalid,
}) => {
  const [value, setValue] = useState('#9932CC');

  return (
    <div style={{ padding: 20, width: 400 }}>
      <div style={{ marginBottom: 10 }}>
        <Combobox
          value={value}
          onChange={(value) => {
            setValue(value || '');
          }}
          placeholder={placeholder}
          options={options}
          getOptionValue={getOptionValue}
          getOptionLabel={getOptionLabel}
          disabled={disabled}
          invalid={invalid}
          notFoundMessage="Nothing found"
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        Current Value:{' '}
        {!value ? (
          '–'
        ) : (
          <>
            {value}, {colors.find((c) => c.code === value)?.name || ''}
          </>
        )}
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <Button
          type="button"
          theme="primary"
          onClick={() => setValue('#1E90FF')}
        >
          Use Dodger Blue
        </Button>

        <Button
          type="button"
          theme="danger"
          icon={<TrashIcon />}
          onClick={() => setValue('')}
        >
          Clear
        </Button>
      </div>
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { comboboxRequired: string; comboboxOptional: string };
  const { control, setValue, handleSubmit } = useForm<FormValues>({
    defaultValues: { comboboxOptional: '#483D8B' },
  });

  return (
    <div style={{ padding: 20, width: 400 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <div style={{ marginBottom: 10 }}>
          <Controller
            control={control}
            name="comboboxRequired"
            rules={{ required: true }}
            render={({ field, fieldState, formState }) => (
              <Combobox
                ref={field.ref}
                placeholder="Required Combobox Field"
                value={field.value}
                onChange={(value) => {
                  setValue('comboboxRequired', value || '', {
                    shouldValidate: formState.isSubmitted,
                  });
                }}
                options={options}
                getOptionValue={getOptionValue}
                getOptionLabel={getOptionLabel}
                invalid={fieldState.invalid}
              />
            )}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Controller
            control={control}
            name="comboboxOptional"
            render={({ field }) => (
              <Combobox
                ref={field.ref}
                placeholder="Optional Combobox Field"
                value={field.value}
                onChange={(value) => {
                  setValue('comboboxOptional', value || '');
                }}
                options={options}
                getOptionValue={getOptionValue}
                getOptionLabel={getOptionLabel}
              />
            )}
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
  title: 'Inputs/Combobox',
  component: Combobox,
  args: {
    placeholder: 'Select a color',
    disabled: false,
    invalid: false,
  },
} as Meta<typeof Combobox>;
