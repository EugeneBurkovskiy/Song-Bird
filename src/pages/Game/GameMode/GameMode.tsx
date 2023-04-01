import CategoryButton from '../../../components/Buttons/CategoryButton/CategoryButton';
import React, { useContext } from 'react';
import classes from '../GameMode/GameMode.module.scss';
import { IOptionsContext, OptionsContext } from '../GameContext/GameContext';

export default function GameMode() {
  const options = useContext<IOptionsContext>(OptionsContext);
  return (
    <section className={classes.categories}>
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
    </section>
  );
}
