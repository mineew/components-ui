import { type SelectHTMLAttributes } from 'react';
import { type connect } from '@zag-js/select';

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  options: T[];
  getOptionValue: (option: T) => string;
  getOptionLabel: (option: T) => string;
  renderOption?: (option: T, disabled?: boolean) => JSX.Element;
  isOptionDisabled?: (option: T) => boolean;
  getOptionGroup?: (option: T) => string | undefined;
  groupSort?: string[];
  invalid?: boolean;
}

type SelectMachine = ReturnType<typeof connect>;

export type { SelectProps, SelectMachine };
