import React, { ReactNode } from 'react';
import classes from './Card.module.scss';

export default function Card({ children }: { children: ReactNode }) {
  return <div className={classes.card}>{children}</div>;
}
