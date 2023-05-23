import classNames from 'classnames';

interface SelectPlaceholderProps {
  placeholder?: string;
}

function SelectPlaceholder(props: SelectPlaceholderProps) {
  const { placeholder } = props;
  const classes = [];

  classes.push('text-slate-400');

  if (!placeholder) return null;
  return <span className={classNames(classes)}>{placeholder}</span>;
}

export default SelectPlaceholder;
