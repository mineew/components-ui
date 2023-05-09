import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import Checkbox from './Checkbox';

const H1 = ({ children }: { children: string }) => {
  return <h1 style={{ fontSize: 20, marginBottom: 10 }}>{children}</h1>;
};

const H2 = ({ children }: { children: string }) => {
  return <h2 style={{ fontSize: 16, marginBottom: 10 }}>{children}</h2>;
};

export const Default: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);
  const [invalidDhecked, setInvalidChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Checkbox
            label="Подписаться на Email-рассылку"
            checked={checked}
            onChange={(checked) => setChecked(!!checked)}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Выбрать все" checked="indeterminate" />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Подписаться на Email-рассылку" checked disabled />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Подписаться на Email-рассылку" disabled />
        </div>

        <Checkbox label="Выбрать все" checked="indeterminate" disabled />
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Checkbox
            label="Подписаться на Email-рассылку"
            checked={invalidDhecked}
            onChange={(checked) => setInvalidChecked(!!checked)}
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Выбрать все" checked="indeterminate" invalid />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Checkbox
            label="Подписаться на Email-рассылку"
            checked
            disabled
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Подписаться на Email-рассылку" disabled invalid />
        </div>

        <Checkbox
          label="Выбрать все"
          checked="indeterminate"
          disabled
          invalid
        />
      </div>
    </div>
  );
};

export const Small: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        label="Подписаться на Email-рассылку"
        checked={checked}
        onChange={setChecked}
        small
      />
    </div>
  );
};

export const Muted: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        label="Подписаться на Email-рассылку"
        checked={checked}
        onChange={setChecked}
        small
        muted
      />
    </div>
  );
};

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;
