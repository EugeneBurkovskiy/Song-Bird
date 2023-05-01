import ModalWindow from '../../../../components/ModalWindow/ModalWindow';
import React from 'react';
import classes from './GameFinishWindow.module.scss';
import ProgressCircle from '../../../../components/ProgressCircle/ProgressCircle';

interface IProps {
  gameMode: string;
  points: number;
}

const GameFinishWindow: React.FC<IProps> = ({ gameMode, points }) => {
  function calculatePercentage(score: number) {
    const allQuestions = 30;
    return Math.floor((score / allQuestions) * 100);
  }
  return (
    <ModalWindow controls={false}>
      <div className={classes.content}>
        <h3 className={classes.content__title}>Congratulations!</h3>
        <p className={classes.content__mode}>{gameMode}</p>
        <p className={classes.content__score}>{points}</p>
        <ProgressCircle percent={calculatePercentage(points)} />
      </div>
    </ModalWindow>
  );
};

export default GameFinishWindow;
