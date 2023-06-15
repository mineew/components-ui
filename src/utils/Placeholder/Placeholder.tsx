import classNames from 'classnames';

interface PlaceholderProps {
  placeholder?: string;
}

function Placeholder(props: PlaceholderProps) {
  const { placeholder } = props;
  const classes = [];

  classes.push('text-slate-400');

  if (!placeholder) return null;
  return <span className={classNames(classes)}>{placeholder}</span>;
}

export default Placeholder;
