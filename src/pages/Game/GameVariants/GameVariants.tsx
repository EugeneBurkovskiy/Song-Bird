import { IBird } from '../../../context/BirdsContext';
import React, { useEffect, useState } from 'react';
import Card from '../../../components/Сard/Card';
import classes from './GameVariants.module.scss';

export default function GameQuestion({ data, gameMode }: { data: IBird[]; gameMode: string }) {
  const [variants, setVariants] = useState<IBird[] | null>(null);

  useEffect(() => {
    const variantsBirdsArr = data.filter((item) => item.category === gameMode);
    setVariants(variantsBirdsArr);
  }, [data, gameMode]);

  return variants ? (
    <section className={classes.variants}>
      <Card>
        <ul className={classes.variants__list}>
          {variants.map((item) => (
            <li key={item.id} className={classes.variants__item}>
              {item.name}
            </li>
          ))}
        </ul>
      </Card>
    </section>
  ) : null;
}
