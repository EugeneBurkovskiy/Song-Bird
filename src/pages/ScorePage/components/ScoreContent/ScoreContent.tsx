import React, { useContext, useMemo } from 'react';

import { IScore, BirdsContext } from '../../../../context/BirdsContext';
import parseDate from '../../../../utils/parseDate';
import NotFound from '../../../../components/NotFound/NotFound';
import ScoreList from '../ScoreList/ScoreList';
import Card from '../../../../components/Сard/Card';

import classes from './ScoreContent.module.scss';

const ScoreContent = () => {
  const { score } = useContext(BirdsContext);

  const scoreCopy: IScore[] = useMemo(() => score.slice(), [score]);

  const scoreNumberArr = useMemo(
    () => scoreCopy.map((item) => `${scoreCopy.indexOf(item) + 1}`),
    [scoreCopy]
  );

  const scorePointsArr = useMemo(() => scoreCopy.map((item) => `${item.points}`), [scoreCopy]);
  const scoreModeArr = useMemo(() => scoreCopy.map((item) => item.mode), [scoreCopy]);
  const scoreDateArr = useMemo(() => scoreCopy.map((item) => parseDate(item.date)), [scoreCopy]);

  return score.length ? (
    <Card>
      <article className={classes.table}>
        <ScoreList data={scoreNumberArr} title={'№'} />
        <ScoreList data={scorePointsArr} title={'Score'} />
        <ScoreList data={scoreModeArr} title={'Mode'} />
        <ScoreList data={scoreDateArr} title={'Date'} />
      </article>
    </Card>
  ) : (
    <NotFound text="Play at least one game to see your stats" />
  );
};

export default ScoreContent;
