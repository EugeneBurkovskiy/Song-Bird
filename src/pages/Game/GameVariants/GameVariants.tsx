import { IBird } from '../../../context/BirdsContext';
import React, { useContext } from 'react';
import Card from '../../../components/Сard/Card';
import { GameOptionsContext } from '../GameOptionsContext/GameOptionsContext';
import classes from './GameVariants.module.scss';

export default function GameQuestion({ data }: { data: IBird[] }) {
  const { currentMode } = useContext(GameOptionsContext);

  return (
    <section className={classes.variants}>
      <Card>
        <ul className={classes.variants__list}>
          {data.map((item) =>
            item.category === currentMode ? (
              <li key={item.id} className={classes.variants__item}>
                {item.name}
              </li>
            ) : null
          )}
        </ul>
      </Card>
    </section>
  );
}
