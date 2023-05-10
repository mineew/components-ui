import { type Meta, type StoryFn } from '@storybook/react';

import PasswordInput from './PasswordInput';

export const Default: StoryFn<typeof PasswordInput> = () => {
  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <PasswordInput placeholder="введите пароль" />
    </div>
  );
};

export default {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
} as Meta<typeof PasswordInput>;
