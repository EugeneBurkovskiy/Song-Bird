import React, { ReactNode } from 'react';
import classes from './Container.module.scss';

export default function Container({ children }: { children: ReactNode }) {
  return <div className={classes.container}>{children}</div>;
}
