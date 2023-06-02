import classes from './NotFound.module.scss';

const NotFound = ({ text = 'Something went wrong' }) => {
  return <div className={classes.error}>{text}</div>;
};

export default NotFound;
