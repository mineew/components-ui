import { defaultGetOptionValue } from '../../../utils/SelectMenu';
import { type SelectProps } from '../SelectProps';

function getValueOption<T>(props: SelectProps<T>, value?: string) {
  const { options, getOptionValue = defaultGetOptionValue } = props;

  return options.find((option) => getOptionValue(option) === value);
}

export default getValueOption;
