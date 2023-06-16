import ModalWindow from '../../../../components/ModalWindow/ModalWindow';
import ProgressCircle from '../../../../components/ProgressCircle/ProgressCircle';

import classes from './GameFinishWindow.module.scss';

interface IProps {
  gameMode: string;
  points: number;
  show: boolean;
}

const GameFinishWindow: React.FC<IProps> = ({ gameMode, points, show }) => {
  function calculatePercentage(score: number) {
    const allQuestions = 30;
    return Math.floor((score / allQuestions) * 100);
  }
  return (
    <ModalWindow controls={false} show={show}>
      <div className={classes.content}>
        <h3 className={classes.content__title}>Congratulations!</h3>
        <p className={classes.content__mode}>{gameMode}</p>
        <ProgressCircle percent={calculatePercentage(points)} />
      </div>
    </ModalWindow>
  );
};

export default GameFinishWindow;
