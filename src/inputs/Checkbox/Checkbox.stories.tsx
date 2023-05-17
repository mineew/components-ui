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
            label="Enable Email Notifications"
            checked={checked}
            onChange={(checked) => setChecked(checked)}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="All Items" checked="indeterminate" />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Enable Email Notifications" checked disabled />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Enable Email Notifications" disabled />
        </div>

        <Checkbox label="All Items" checked="indeterminate" disabled />
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Checkbox
            label="Enable Email Notifications"
            checked={invalidDhecked}
            onChange={(checked) => setInvalidChecked(!!checked)}
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="All Items" checked="indeterminate" invalid />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Checkbox
            label="Enable Email Notifications"
            checked
            disabled
            invalid
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Checkbox label="Enable Email Notifications" disabled invalid />
        </div>

        <Checkbox label="All Items" checked="indeterminate" disabled invalid />
      </div>
    </div>
  );
};

export const Small: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <Checkbox
        label="Enable Email Notifications"
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
        label="Enable Email Notifications"
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
