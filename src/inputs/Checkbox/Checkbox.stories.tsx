import { type Meta, type StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';

import Button from '../Button';
import Checkbox from './Checkbox';

export const Default: StoryFn<typeof Checkbox> = ({
  label,
  indeterminate,
  disabled,
  invalid,
  small,
  muted,
}) => {
  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        label={label}
        indeterminate={indeterminate}
        disabled={disabled}
        invalid={invalid}
        small={small}
        muted={muted}
      />
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { checkboxRequired: boolean; checkboxOptional: boolean };
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: { checkboxOptional: true },
  });

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <div style={{ marginBottom: 10 }}>
          <Checkbox
            label="Required Checkbox Field"
            {...register('checkboxRequired', { required: true })}
            invalid={!!formState.errors.checkboxRequired}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox
            label="Optional Checkbox Field"
            {...register('checkboxOptional')}
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
  title: 'Inputs/Checkbox',
  component: Checkbox,
  args: {
    label: 'Enable Email Notifications',
    indeterminate: false,
    disabled: false,
    invalid: false,
    small: false,
    muted: false,
  },
} as Meta<typeof Checkbox>;
