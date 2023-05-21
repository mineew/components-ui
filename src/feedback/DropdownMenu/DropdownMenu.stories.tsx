import { type Meta, type StoryFn } from '@storybook/react';

import DropdownMenu from './DropdownMenu';
import DropdownMenuGroup from './DropdownMenuGroup';
import DropdownMenuList from './DropdownMenuList';
import DropdownMenuItem from './DropdownMenuItem';

export const Default: StoryFn<typeof DropdownMenu> = () => {
  return (
    <div style={{ padding: 20, width: 300 }}>
      <DropdownMenu>
        <DropdownMenuList>
          <DropdownMenuItem>Slate</DropdownMenuItem>
          <DropdownMenuItem>Gray</DropdownMenuItem>
          <DropdownMenuItem>Zinc</DropdownMenuItem>
          <DropdownMenuItem>Neutral</DropdownMenuItem>
          <DropdownMenuItem>Stone</DropdownMenuItem>
          <DropdownMenuItem>Red</DropdownMenuItem>
          <DropdownMenuItem active>Orange</DropdownMenuItem>
          <DropdownMenuItem>Amber</DropdownMenuItem>
          <DropdownMenuItem>Yellow</DropdownMenuItem>
          <DropdownMenuItem selected disabled>
            Lime
          </DropdownMenuItem>
          <DropdownMenuItem disabled>Green</DropdownMenuItem>
          <DropdownMenuItem disabled>Emerald</DropdownMenuItem>
          <DropdownMenuItem>Teal</DropdownMenuItem>
          <DropdownMenuItem>Cyan</DropdownMenuItem>
          <DropdownMenuItem>Sky</DropdownMenuItem>
          <DropdownMenuItem>Blue</DropdownMenuItem>
          <DropdownMenuItem selected>Indigo</DropdownMenuItem>
          <DropdownMenuItem>Violet</DropdownMenuItem>
          <DropdownMenuItem>Purple</DropdownMenuItem>
          <DropdownMenuItem>Fuchsia</DropdownMenuItem>
          <DropdownMenuItem>Pink</DropdownMenuItem>
          <DropdownMenuItem>Rose</DropdownMenuItem>
        </DropdownMenuList>
      </DropdownMenu>
    </div>
  );
};

export const WithGroups: StoryFn<typeof DropdownMenu> = () => {
  return (
    <div style={{ padding: 20, width: 300 }}>
      <DropdownMenu>
        <DropdownMenuGroup>Haruki Murakami</DropdownMenuGroup>
        <DropdownMenuList>
          <DropdownMenuItem>Hear the Wind Sing, 1979</DropdownMenuItem>
          <DropdownMenuItem selected>A Wild Sheep Chase, 1982</DropdownMenuItem>
          <DropdownMenuItem>Norwegian Wood, 1987</DropdownMenuItem>
        </DropdownMenuList>

        <DropdownMenuGroup>Ernest Hemingway</DropdownMenuGroup>
        <DropdownMenuList>
          <DropdownMenuItem>A Farewell to Arms, 1929</DropdownMenuItem>
          <DropdownMenuItem active>
            For Whom the Bell Tolls, 1940
          </DropdownMenuItem>
          <DropdownMenuItem>The Old Man and the Sea, 1952</DropdownMenuItem>
        </DropdownMenuList>

        <DropdownMenuGroup>A. J. Cronin</DropdownMenuGroup>
        <DropdownMenuList>
          <DropdownMenuItem>Hatter&apos;s Castle, 1931</DropdownMenuItem>
          <DropdownMenuItem>The Stars Look Down, 1935</DropdownMenuItem>
          <DropdownMenuItem>The Citadel, 1937</DropdownMenuItem>
        </DropdownMenuList>
      </DropdownMenu>
    </div>
  );
};

export default {
  title: 'Feedback/DropdownMenu',
  component: DropdownMenu,
} as Meta<typeof DropdownMenu>;
