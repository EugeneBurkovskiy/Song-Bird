import React from 'react';
import classes from './NotFound.module.scss';

export default function NotFound({ text }: { text: string }) {
  return <div className={classes.error}>{text}</div>;
}
