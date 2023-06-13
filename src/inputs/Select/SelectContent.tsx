import { type SelectProps, type SelectMachine } from './SelectProps';
import SelectPlaceholder from './SelectPlaceholder';

interface SelectContentProps<T> extends SelectProps<T> {
  api: SelectMachine;
}

function SelectContent<T>(props: SelectContentProps<T>) {
  const {
    options,
    getOptionValue,
    getOptionLabel,
    renderOption = getOptionLabel,
    isOptionDisabled,
    disabled,
    placeholder,
    api,
  } = props;

  const selectedOption = options.find(
    (option) => getOptionValue?.(option) === api.selectedOption?.value,
  );

  return selectedOption ? (
    <>
      {renderOption?.(
        selectedOption,
        isOptionDisabled?.(selectedOption) || disabled,
      )}
    </>
  ) : (
    <SelectPlaceholder placeholder={placeholder} />
  );
}

export default SelectContent;
