import classNames from 'classnames';

interface SkeletonProps {
  className?: string;
}

function Skeleton(props: SkeletonProps) {
  const { className } = props;
  const classes = [];

  classes.push('animate-pulse');
  classes.push('rounded-md');
  classes.push('bg-slate-200');

  return <div className={classNames(classes, className)} />;
}

export default Skeleton;
