import { type connect } from '@zag-js/select';

interface SelectProps<T> {
  placeholder?: string;
  value?: string;
  onChange?: (value?: string, option?: T) => void;
  options: T[];
  getOptionValue: (option: T) => string;
  getOptionLabel: (option: T) => string;
  renderOption?: (option: T, disabled?: boolean) => JSX.Element;
  isOptionDisabled?: (option: T) => boolean;
  getOptionGroup?: (option: T) => string | undefined;
  groupSort?: string[];
  disabled?: boolean;
  invalid?: boolean;
  clearTooltip?: string;
}

type SelectMachine = ReturnType<typeof connect>;

export type { SelectProps, SelectMachine };
