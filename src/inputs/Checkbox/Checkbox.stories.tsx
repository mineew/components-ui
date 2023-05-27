import { type Meta, type StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Button from '../Button';
import Checkbox from './Checkbox';

export const Default: StoryFn<typeof Checkbox> = ({
  label,
  disabled,
  invalid,
  small,
  muted,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <Checkbox
          label={label}
          checked={checked}
          onChange={setChecked}
          disabled={disabled}
          invalid={invalid}
          small={small}
          muted={muted}
        />
      </div>

      <div style={{ marginBottom: 10 }}>
        <Checkbox
          label={label}
          checked="indeterminate"
          disabled={disabled}
          invalid={invalid}
          small={small}
          muted={muted}
        />
      </div>
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { checkbox: boolean };
  const { control, setValue, handleSubmit } = useForm<FormValues>();

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <Controller
          control={control}
          name="checkbox"
          rules={{ required: true }}
          render={({ field, fieldState, formState }) => (
            <Checkbox
              ref={field.ref}
              label="Required Checkbox Field"
              checked={field.value}
              onChange={(checked) => {
                setValue('checkbox', checked, {
                  shouldValidate: formState.isSubmitted,
                });
              }}
              invalid={fieldState.invalid}
            />
          )}
        />

        <div style={{ marginTop: 10 }}>
          <Button type="submit" theme="primary">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    label: 'Enable Email Notifications',
    disabled: false,
    invalid: false,
    small: false,
    muted: false,
  },
} as Meta<typeof Checkbox>;
