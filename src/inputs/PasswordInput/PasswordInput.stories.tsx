import { type Meta, type StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';

import Button from '../Button';
import PasswordInput from './PasswordInput';

export const Default: StoryFn<typeof PasswordInput> = () => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <PasswordInput
        placeholder="Password"
        showPasswordTooltip="Show Password"
        hidePasswordTooltip="Hide Password"
      />
    </div>
  );
};

export const ReactHookForm = () => {
  type FormValues = { requiredPswd: string; optionalPswd: string };
  const { register, handleSubmit, formState } = useForm<FormValues>();

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <form onSubmit={handleSubmit(action('onSubmit'))}>
        <div style={{ marginBottom: 10 }}>
          <PasswordInput
            placeholder="Required Password Field"
            {...register('requiredPswd', { required: true })}
            invalid={!!formState.errors.requiredPswd}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <PasswordInput
            placeholder="Optional Password Field"
            {...register('optionalPswd')}
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
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
} as Meta<typeof PasswordInput>;
