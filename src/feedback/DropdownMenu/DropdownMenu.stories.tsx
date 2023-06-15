import { type Meta, type StoryFn } from '@storybook/react';

import * as DropdownMenu from './';

export const Default: StoryFn = () => {
  return (
    <div style={{ padding: 20, width: 300 }}>
      <DropdownMenu.Menu>
        <DropdownMenu.List>
          <DropdownMenu.Item>Slate</DropdownMenu.Item>
          <DropdownMenu.Item>Gray</DropdownMenu.Item>
          <DropdownMenu.Item>Zinc</DropdownMenu.Item>
          <DropdownMenu.Item>Neutral</DropdownMenu.Item>
          <DropdownMenu.Item>Stone</DropdownMenu.Item>
          <DropdownMenu.Item>Red</DropdownMenu.Item>
          <DropdownMenu.Item active>Orange</DropdownMenu.Item>
          <DropdownMenu.Item>Amber</DropdownMenu.Item>
          <DropdownMenu.Item>Yellow</DropdownMenu.Item>
          <DropdownMenu.Item selected disabled>
            Lime
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled>Green</DropdownMenu.Item>
          <DropdownMenu.Item disabled>Emerald</DropdownMenu.Item>
          <DropdownMenu.Item>Teal</DropdownMenu.Item>
          <DropdownMenu.Item>Cyan</DropdownMenu.Item>
          <DropdownMenu.Item>Sky</DropdownMenu.Item>
          <DropdownMenu.Item>Blue</DropdownMenu.Item>
          <DropdownMenu.Item selected>Indigo</DropdownMenu.Item>
          <DropdownMenu.Item>Violet</DropdownMenu.Item>
          <DropdownMenu.Item>Purple</DropdownMenu.Item>
          <DropdownMenu.Item>Fuchsia</DropdownMenu.Item>
          <DropdownMenu.Item>Pink</DropdownMenu.Item>
          <DropdownMenu.Item>Rose</DropdownMenu.Item>
        </DropdownMenu.List>
      </DropdownMenu.Menu>
    </div>
  );
};

export const WithGroups: StoryFn = () => {
  return (
    <div style={{ padding: 20, width: 300 }}>
      <DropdownMenu.Menu>
        <DropdownMenu.Group>Haruki Murakami</DropdownMenu.Group>
        <DropdownMenu.List>
          <DropdownMenu.Item>Hear the Wind Sing, 1979</DropdownMenu.Item>
          <DropdownMenu.Item selected>
            A Wild Sheep Chase, 1982
          </DropdownMenu.Item>
          <DropdownMenu.Item>Norwegian Wood, 1987</DropdownMenu.Item>
        </DropdownMenu.List>

        <DropdownMenu.Group>Ernest Hemingway</DropdownMenu.Group>
        <DropdownMenu.List>
          <DropdownMenu.Item>A Farewell to Arms, 1929</DropdownMenu.Item>
          <DropdownMenu.Item active>
            For Whom the Bell Tolls, 1940
          </DropdownMenu.Item>
          <DropdownMenu.Item>The Old Man and the Sea, 1952</DropdownMenu.Item>
        </DropdownMenu.List>

        <DropdownMenu.Group>A. J. Cronin</DropdownMenu.Group>
        <DropdownMenu.List>
          <DropdownMenu.Item>Hatter&apos;s Castle, 1931</DropdownMenu.Item>
          <DropdownMenu.Item>The Stars Look Down, 1935</DropdownMenu.Item>
          <DropdownMenu.Item>The Citadel, 1937</DropdownMenu.Item>
        </DropdownMenu.List>
      </DropdownMenu.Menu>
    </div>
  );
};

export const WithMessage: StoryFn = () => {
  return (
    <div style={{ padding: 20, width: 300 }}>
      <DropdownMenu.Menu>
        <DropdownMenu.Message>Nothing found</DropdownMenu.Message>
      </DropdownMenu.Menu>
    </div>
  );
};

export default {
  title: 'Feedback/DropdownMenu',
} as Meta;
