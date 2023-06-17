import {
  defaultGetOptionValue,
  defaultGetOptionLabel,
} from '../../../utils/SelectMenu';

import { type ComboboxProps, type ComboboxMachine } from '../ComboboxProps';
import getValueOption from './getValueOption';

function updateSelectedOption<T>(
  props: ComboboxProps<T>,
  api: ComboboxMachine,
  value?: string,
) {
  const {
    getOptionValue = defaultGetOptionValue,
    getOptionLabel = defaultGetOptionLabel,
  } = props;

  const selectedOption = getValueOption(props, value);

  if (selectedOption) {
    api.setValue(getOptionValue(selectedOption));
    api.setInputValue(getOptionLabel(selectedOption));
  } else if (api.selectedValue) {
    api.clearValue();
    api.setInputValue('');
  }
}

export default updateSelectedOption;
