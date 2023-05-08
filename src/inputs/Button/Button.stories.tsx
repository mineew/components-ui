import { type StoryFn, type Meta } from '@storybook/react';

import Button from './Button';

const H1 = ({ children }: { children: string }) => {
  return <h1 style={{ fontSize: 20, marginBottom: 10 }}>{children}</h1>;
};

const H2 = ({ children }: { children: string }) => {
  return <h2 style={{ fontSize: 16, marginBottom: 10 }}>{children}</h2>;
};

export const Default: StoryFn = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Button>Вход</Button>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Button disabled>Вход</Button>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Primary</H1>

        <div style={{ marginBottom: 10 }}>
          <Button primary>Регистрация</Button>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Button primary disabled>
            Регистрация
          </Button>
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Loading</H1>

        <div style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', gap: 10 }}>
            <Button loading>Регистрация</Button>
            <Button primary loading>
              Регистрация
            </Button>
          </div>
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Button primary loading disabled>
            Регистрация
          </Button>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Button',
} as Meta;
