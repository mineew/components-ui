import { type Meta, type StoryFn } from '@storybook/react';
import { useState } from 'react';

import Switch from './Switch';

const H1 = ({ children }: { children: string }) => {
  return <h1 style={{ fontSize: 20, marginBottom: 10 }}>{children}</h1>;
};

const H2 = ({ children }: { children: string }) => {
  return <h2 style={{ fontSize: 16, marginBottom: 10 }}>{children}</h2>;
};

export const Default: StoryFn<typeof Switch> = () => {
  const [checked, setChecked] = useState(false);
  const [invalidDhecked, setInvalidChecked] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 40 }}>
        <H1>Default</H1>

        <div style={{ marginBottom: 10 }}>
          <Switch
            label="Enable Email Notifications"
            checked={checked}
            onChange={setChecked}
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Switch label="Enable Email Notifications" checked disabled />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Switch label="Enable Email Notifications" disabled />
        </div>
      </div>

      <div style={{ marginBottom: 40 }}>
        <H1>Invalid</H1>

        <div style={{ marginBottom: 10 }}>
          <Switch
            label="Enable Email Notifications"
            checked={invalidDhecked}
            onChange={setInvalidChecked}
            invalid
          />
        </div>

        <H2>Disabled</H2>

        <div style={{ marginBottom: 10 }}>
          <Switch label="Enable Email Notifications" checked disabled invalid />
        </div>

        <div style={{ marginBottom: 10 }}>
          <Switch label="Enable Email Notifications" disabled invalid />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Inputs/Switch',
  component: Switch,
} as Meta<typeof Switch>;
