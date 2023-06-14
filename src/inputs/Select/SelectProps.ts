import { type connect } from '@zag-js/select';

import { type SelectMenuProps } from '../../utils/SelectMenu';

type Select_SelectMenuProps<T> = Omit<
  SelectMenuProps<T>,
  | 'selectedValue'
  | 'activeValue'
  | 'getOptionProps'
  | 'query'
  | 'notFoundMessage'
  | 'getMenuProps'
  | 'getOptionGroupLabelProps'
  | 'getOptionGroupProps'
>;

interface SelectProps<T> extends Select_SelectMenuProps<T> {
  placeholder?: string;
  value?: string;
  onChange?: (value?: string, option?: T) => void;
  disabled?: boolean;
  invalid?: boolean;
}

type SelectMachine = ReturnType<typeof connect>;

export type { SelectProps, SelectMachine };
