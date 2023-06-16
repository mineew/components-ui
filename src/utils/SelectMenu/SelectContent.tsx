import Placeholder from '../Placeholder/Placeholder';
import { type SelectMenuProps } from './SelectMenu';
import defaultGetOptionValue from './helpers/defaultGetOptionValue';
import defaultGetOptionLabel from './helpers/defaultGetOptionLabel';

interface SelectContentProps<T> extends SelectMenuProps<T> {
  placeholder?: string;
  disabled?: boolean;
}

function SelectContent<T>(props: SelectContentProps<T>) {
  const {
    options,
    getOptionValue = defaultGetOptionValue,
    getOptionLabel = defaultGetOptionLabel,
    renderOption = getOptionLabel,
    isOptionDisabled,
    selectedValue,
    placeholder,
    disabled,
  } = props;

  const selectedOption = options.find(
    (option) => getOptionValue(option) === selectedValue,
  );

  return selectedOption ? (
    <>
      {renderOption(
        selectedOption,
        isOptionDisabled?.(selectedOption) || disabled,
      )}
    </>
  ) : (
    <Placeholder placeholder={placeholder} />
  );
}

export default SelectContent;
