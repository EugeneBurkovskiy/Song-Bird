import React from 'react';
import classes from './GameProgress.module.scss';
interface IProps {
  currentLvL: number;
  currentScore: number;
}

const GameProgress: React.FC<IProps> = ({ currentLvL, currentScore }) => {
  return (
    <section className={classes.progress}>
      <p className={classes.progress__level}>Level: {currentLvL}</p>
      <p className={classes.progress__points}>Points: {currentScore}</p>
    </section>
  );
};

export default GameProgress;
