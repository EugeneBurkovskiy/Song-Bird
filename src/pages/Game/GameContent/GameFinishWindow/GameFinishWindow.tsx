import ModalWindow from '../../../../components/ModalWindow/ModalWindow';
import React from 'react';
import classes from './GameFinishWindow.module.scss';

export default function GameFinishWindow({
  gameMode,
  points,
}: {
  gameMode: string;
  points: number;
}) {
  return (
    <ModalWindow>
      <div className={classes.content}>
        <h3>Congratulations</h3>
        <p>{gameMode}</p>
        <p>{points}</p>
      </div>
    </ModalWindow>
  );
}
