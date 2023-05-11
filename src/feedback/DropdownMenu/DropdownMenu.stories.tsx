import { type Meta, type StoryFn } from '@storybook/react';

import DropdownMenu from './DropdownMenu';
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

export default {
  title: 'Feedback/DropdownMenu',
  component: DropdownMenu,
} as Meta<typeof DropdownMenu>;
