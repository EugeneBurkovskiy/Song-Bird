import CategoryButton from '../../../components/Buttons/CategoryButton/CategoryButton';
import React from 'react';
import classes from '../GameMode/GameMode.module.scss';
import Card from '../../../components/Сard/Card';
import { IBird } from 'context/BirdsContext';

export default function GameMode({
  currentMode,
  data,
  setGameMode,
}: {
  currentMode: string | null;
  data: IBird[];
  setGameMode: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const categoriesArr = [...new Set(data.map((item) => item.category))];

  return (
    <section className={classes.section}>
      <Card>
        <div className={classes.categories}>
          <h2 className={classes.categories__title}>Game mode</h2>
          <ul className={classes.categories__list}>
            {categoriesArr.map((item) =>
              item === currentMode ? (
                <CategoryButton active={true} title={item} key={item} />
              ) : (
                <CategoryButton changeMode={setGameMode} title={item} key={item} />
              )
            )}
          </ul>
        </div>
      </Card>
    </section>
  );
}
