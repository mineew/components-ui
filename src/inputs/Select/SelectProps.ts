import { type SelectHTMLAttributes } from 'react';
import { type connect } from '@zag-js/select';

type SelectNativeSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'value' | 'onChange'
>;

interface SelectProps<T> extends SelectNativeSelectProps {
  value?: string;
  onChange?: (value?: string, option?: T) => void;
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

export type { SelectNativeSelectProps, SelectProps, SelectMachine };
