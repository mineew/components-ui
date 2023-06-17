import { type StoryFn, type Meta } from '@storybook/react';
import {
  type LiHTMLAttributes,
  type HTMLAttributes,
  type LabelHTMLAttributes,
} from 'react';

import { type SelectListItemContext } from './SelectList';
import SelectMenu from './SelectMenu';

interface Color {
  code: string;
  name: string;
}

const colors: Color[] = [
  { code: '#F08080', name: 'Light Coral' },
  { code: '#8A2BE2', name: 'Blue Violet' },
  { code: '#9932CC', name: 'Dark Orchid' },
  { code: '#778899', name: 'Light Slate Gray' },
  { code: '#006400', name: 'Dark Green' },
  { code: '#1E90FF', name: 'Dodger Blue' },
  { code: '#B22222', name: 'Fire Brick' },
  { code: '#008B8B', name: 'Dark Cyan' },
  { code: '#483D8B', name: 'Dark Slate Blue' },
  { code: '#228B22', name: 'Forest Green' },
];

const ColorView = ({
  name,
  color,
  disabled,
}: {
  name: string;
  color: string;
  disabled?: boolean;
}) => (
  <span>
    <span
      style={{
        display: 'inline-block',
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: disabled ? 'currentColor' : color,
        opacity: disabled ? 0.5 : undefined,
        marginRight: 5,
        boxSizing: 'border-box',
      }}
    />

    {name}
  </span>
);

export const Default: StoryFn<typeof SelectMenu> = () => {
  const options: Color[] = colors;
  const getOptionValue = (option: Color) => option.code;
  const getOptionLabel = (option: Color) => option.name;
  const isOptionDisabled = (option: Color) => option.name.includes('Blue');

  const renderOption = (option: Color, disabled?: boolean) => (
    <ColorView name={option.name} color={option.code} disabled={disabled} />
  );

  const getOptionProps = (
    context: SelectListItemContext,
  ): LiHTMLAttributes<HTMLLIElement> => ({
    style: { fontWeight: context.selected ? 'bold' : 'normal' },
  });

  const getOptionGroup = (option: Color) => {
    if (option.name.includes('Dark')) return 'Dark Colors';
    if (option.name.includes('Light')) return 'Light Colors';
  };

  const groupSort = ['Dark Colors', 'Light Colors'];

  const getMenuProps = (): HTMLAttributes<HTMLDivElement> => ({
    id: 'menu',
  });

  const getOptionGroupLabelProps = (
    groupId: string,
    // groupLabel: string,
  ): LabelHTMLAttributes<HTMLLabelElement> => ({
    htmlFor: groupId,
  });

  const getOptionGroupProps = (
    groupId: string,
    // groupLabel: string,
  ): HTMLAttributes<HTMLUListElement> => ({
    id: groupId,
  });

  return (
    <div style={{ padding: 20, width: 400 }}>
      <SelectMenu
        options={options}
        selectedValue="#006400"
        activeValue="#B22222"
        getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}
        isOptionDisabled={isOptionDisabled}
        renderOption={renderOption}
        getOptionProps={getOptionProps}
        getOptionGroup={getOptionGroup}
        groupSort={groupSort}
        getMenuProps={getMenuProps}
        getOptionGroupLabelProps={getOptionGroupLabelProps}
        getOptionGroupProps={getOptionGroupProps}
      />
    </div>
  );
};

export const OnlyOptions: StoryFn<typeof SelectMenu> = () => {
  const options: Color[] = colors;

  return (
    <div style={{ padding: 20, width: 400 }}>
      <SelectMenu
        options={options}
        selectedValue="Dark Green"
        activeValue="Fire Brick"
      />
    </div>
  );
};

export default {
  title: 'Utils/SelectMenu',
  component: SelectMenu,
} as Meta<typeof SelectMenu>;
