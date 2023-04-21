import { BirdsContext } from '../../context/BirdsContext';
import React, { useContext } from 'react';
import Container from '../../components/Container/Container';
import classes from './Score.module.scss';
import Card from '../../components/Сard/Card';
import NotFound from '../../components/NotFound/NotFound';

export default function Score() {
  const { score } = useContext(BirdsContext);
  return (
    <article className={classes.score}>
      <Container>
        <section>
          <h3 className={classes.score__title}>Score Table</h3>
          {score.length ? (
            <Card>
              <ul className={classes.score__list}>
                {score
                  .sort((a, b) => b.points - a.points)
                  .map((item, i) => (
                    <li key={item.date.getMilliseconds()} className={classes['score__list-item']}>
                      <p>{i + 1}</p>
                      <p>{item.points}</p>
                      <p>{item.mode}</p>
                      <p>{`${item.date.getHours()}:${item.date.getMinutes()} | ${item.date.getDate()}/${
                        item.date.getMonth() + 1
                      }/${item.date.getFullYear()}`}</p>
                    </li>
                  ))}
              </ul>
            </Card>
          ) : (
            <NotFound text="Play at least one game to see your stats" />
          )}
        </section>
      </Container>
    </article>
  );
}
