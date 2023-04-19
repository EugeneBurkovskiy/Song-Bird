import CategoryButton from '../../../components/Buttons/CategoryButton/CategoryButton';
import React, { useContext } from 'react';
import classes from '../GameMode/GameMode.module.scss';
import { IOptionsContext, GameOptionsContext } from '../GameOptionsContext/GameOptionsContext';
import Card from '../../../components/Сard/Card';

export default function GameMode() {
  const options = useContext<IOptionsContext>(GameOptionsContext);
  return (
    <section className={classes.section}>
      <Card>
        <div className={classes.categories}>
          <h2 className={classes.categories__title}>Game mode</h2>
          <ul className={classes.categories__list}>
            {options.modes.map((item) =>
              item === options.currentMode ? (
                <CategoryButton active={true} title={item} key={item} />
              ) : (
                <CategoryButton changeMode={options.setMode} title={item} key={item} />
              )
            )}
          </ul>
        </div>
      </Card>
    </section>
  );
}
