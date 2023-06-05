import { type SelectProps } from '../SelectProps';

function getSelectedOption<T>(
  props: SelectProps<T>,
  value?: string | number | readonly string[],
) {
  const { options, getOptionValue, getOptionLabel } = props;

  const valueOption = options.find(
    (option) => getOptionValue(option) === value,
  );

  const selectedOption = valueOption
    ? {
        value: getOptionValue(valueOption),
        label: getOptionLabel(valueOption),
      }
    : undefined;

  return selectedOption;
}

export default getSelectedOption;
