import { BirdsContext, IScore } from '../../context/BirdsContext';
import React, { useContext, useMemo } from 'react';
import classes from './Score.module.scss';
import Card from '../../components/Сard/Card';
import NotFound from '../../components/NotFound/NotFound';
import PageContainer from '../../components/PageContainer/PageContainer';

const Score = () => {
  const { score } = useContext(BirdsContext);

  function parseDate(storageDate: Date) {
    const date = new Date(storageDate);
    function addZero(value: number) {
      if (value < 10) {
        return `0${value}`;
      }
      return value;
    }

    return `${addZero(date.getHours())}:${addZero(date.getMinutes())} | ${addZero(
      date.getDate()
    )}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  const scoreCopy: IScore[] = useMemo(() => score.slice(), [score]);

  return (
    <PageContainer title="Score">
      {score.length ? (
        <Card>
          <ul className={classes.score__list}>
            {scoreCopy
              .sort((a, b) => b.points - a.points)
              .map((item, i) => (
                <li key={i} className={classes['score__list-item']}>
                  <p>{i + 1}</p>
                  <p>{item.points}</p>
                  <p>{item.mode}</p>
                  <p>{parseDate(item.date)}</p>
                </li>
              ))}
          </ul>
        </Card>
      ) : (
        <NotFound text="Play at least one game to see your stats" />
      )}
    </PageContainer>
  );
};

export default Score;
