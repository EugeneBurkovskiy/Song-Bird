import CategoryButton from '../../../../components/Buttons/CategoryButton/CategoryButton';
import React from 'react';
import classes from '../GameMode/GameMode.module.scss';
import Card from '../../../../components/Сard/Card';

interface IProps {
  currentGameMode: string;
  gameModsArr: string[];
  setCurrentGameMode: React.Dispatch<React.SetStateAction<string>>;
}

const GameMode: React.FC<IProps> = ({ currentGameMode, setCurrentGameMode, gameModsArr }) => {
  return (
    <section className={classes.section}>
      <Card>
        <div className={classes.categories}>
          <h2 className={classes.categories__title}>Game mode</h2>
          <ul className={classes.categories__list}>
            {gameModsArr.map((item) =>
              item === currentGameMode ? (
                <CategoryButton active={true} title={item} key={item} />
              ) : (
                <CategoryButton onClick={() => setCurrentGameMode(item)} title={item} key={item} />
              )
            )}
          </ul>
        </div>
      </Card>
    </section>
  );
};

export default GameMode;
