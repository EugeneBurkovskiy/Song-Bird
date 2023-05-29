import React, { useMemo } from 'react';

import CategoryButton from '../../../../components/Buttons/CategoryButton/CategoryButton';
import Card from '../../../../components/Сard/Card';
import { IBird } from 'context/BirdsContext';

import classes from '../GameMode/GameMode.module.scss';

interface IProps {
  currentGameMode: string;
  data: IBird[];
  setCurrentGameMode: React.Dispatch<React.SetStateAction<string>>;
}

const GameMode: React.FC<IProps> = ({ currentGameMode, setCurrentGameMode, data }) => {
  const categoryArr = useMemo(() => [...new Set(data.map((item) => item.category))], [data]);

  return (
    <section className={classes.section}>
      <Card>
        <div className={classes.categories}>
          <h2 className={classes.categories__title}>Game mode</h2>
          <ul className={classes.categories__list}>
            {categoryArr.map((item) =>
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
