import Placeholder from '../Placeholder/Placeholder';

import { type SelectMenuProps } from './SelectMenu';
import defaultGetOptionLabel from './helpers/defaultGetOptionLabel';
import defaultGetOptionValue from './helpers/defaultGetOptionValue';

interface SelectContentProps<T> extends SelectMenuProps<T> {
  placeholder?: string;
  disabled?: boolean;
}

function SelectContent<T>(props: SelectContentProps<T>) {
  const {
    options,
    getOptionValue = defaultGetOptionValue,
    getOptionLabel = defaultGetOptionLabel,
    selectedValue,
    placeholder,
  } = props;

  const selectedOption = options.find(
    (option) => getOptionValue(option) === selectedValue,
  );

  return selectedOption ? (
    <>{getOptionLabel(selectedOption)}</>
  ) : (
    <Placeholder placeholder={placeholder} />
  );
}

export default SelectContent;
