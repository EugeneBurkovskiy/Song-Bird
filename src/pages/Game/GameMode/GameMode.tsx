import CategoryButton from '../../../components/Buttons/CategoryButton/CategoryButton';
import React, { useContext } from 'react';
import classes from '../GameMode/GameMode.module.scss';
import { IOptionsContext, OptionsContext } from '../GameContext/GameContext';

export default function GameMode() {
  const options = useContext<IOptionsContext>(OptionsContext);
  return (
    <ul className={classes.categories}>
      {options.modes.map((item) =>
        item === options.currentMode ? (
          <CategoryButton active={true} title={item} key={item} />
        ) : (
          <CategoryButton changeMode={options.setMode} title={item} key={item} />
        )
      )}
    </ul>
  );
}
