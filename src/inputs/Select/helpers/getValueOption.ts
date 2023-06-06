import { type SelectProps } from '../SelectProps';

function getValueOption<T>(props: SelectProps<T>, value?: string) {
  const { options, getOptionValue } = props;

  return options.find((option) => getOptionValue(option) === value);
}

export default getValueOption;
