import React from 'react';
import classes from './GameProgress.module.scss';

export default function GameProgress() {
  return (
    <section className={classes.progress}>
      <p className={classes.progress__level}>Level: 1</p>
      <p className={classes.progress__points}>Points: 0</p>
    </section>
  );
}
