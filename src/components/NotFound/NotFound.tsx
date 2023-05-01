import React from 'react';
import classes from './NotFound.module.scss';

const NotFound = ({ text }: { text: string }) => {
  return <div className={classes.error}>{text}</div>;
};

export default NotFound;
