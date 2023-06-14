import { type connect } from '@zag-js/combobox';

import { type SelectMenuProps } from '../../utils/SelectMenu';

type Combobox_SelectMenuProps<T> = Omit<
  SelectMenuProps<T>,
  | 'selectedValue'
  | 'activeValue'
  | 'getOptionProps'
  | 'getMenuProps'
  | 'getOptionGroupLabelProps'
  | 'getOptionGroupProps'
>;

interface ComboboxProps<T> extends Combobox_SelectMenuProps<T> {
  placeholder?: string;
  value?: string;
  onChange?: (value?: string, option?: T) => void;
  disabled?: boolean;
  invalid?: boolean;
}

type ComboboxMachine = ReturnType<typeof connect>;

export type { ComboboxProps, ComboboxMachine };
