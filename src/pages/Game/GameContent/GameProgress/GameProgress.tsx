import React from 'react';
import { IStats } from '../GameContent';
import classes from './GameProgress.module.scss';

export default function GameProgress({ stats }: { stats: IStats }) {
  return (
    <section className={classes.progress}>
      <p className={classes.progress__level}>Level: {stats.currentLvl}</p>
      <p className={classes.progress__points}>Points: {stats.currentPoints}</p>
    </section>
  );
}
