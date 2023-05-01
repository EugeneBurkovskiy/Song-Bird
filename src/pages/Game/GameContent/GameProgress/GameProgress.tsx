import React from 'react';
import { IStats } from '../GameContent';
import classes from './GameProgress.module.scss';
interface IProps {
  stats: IStats;
}

const GameProgress: React.FC<IProps> = ({ stats }) => {
  return (
    <section className={classes.progress}>
      <p className={classes.progress__level}>Level: {stats.currentLvl}</p>
      <p className={classes.progress__points}>Points: {stats.currentPoints}</p>
    </section>
  );
};

export default GameProgress;
