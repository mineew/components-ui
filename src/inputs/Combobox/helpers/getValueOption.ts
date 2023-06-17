import { defaultGetOptionValue } from '../../../utils/SelectMenu';
import { type ComboboxProps } from '../ComboboxProps';

function getValueOption<T>(props: ComboboxProps<T>, value?: string) {
  const { options, getOptionValue = defaultGetOptionValue } = props;

  return options.find((option) => getOptionValue(option) === value);
}

export default getValueOption;
