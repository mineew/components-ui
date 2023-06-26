import { type connect } from '@zag-js/tags-input';

import { type SelectMenuProps } from '../../utils/SelectMenu';

type MultiCombobox_SelectMenuProps<T> = Omit<
  SelectMenuProps<T>,
  | 'selectedValue'
  | 'activeValue'
  | 'getOptionProps'
  | 'getMenuProps'
  | 'getOptionGroupLabelProps'
  | 'getOptionGroupProps'
>;

interface MultiComboboxProps<T> extends MultiCombobox_SelectMenuProps<T> {
  placeholder?: string;
  value?: string[];
  onChange?: (value?: string[], options?: T[]) => void;
  disabled?: boolean;
  invalid?: boolean;
}

type MultiComboboxMachine = ReturnType<typeof connect>;

export type { MultiComboboxProps, MultiComboboxMachine };
