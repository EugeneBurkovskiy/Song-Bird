import React from 'react';

import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import { IBird } from '../../context/BirdsContext';
import GameContent from './GameContent/GameContent';
import GameHelp from './GameHelp/GameHelp';
import useFetching from '../../hooks/useFetching';
import NotFound from '../../components/NotFound/NotFound';

import classes from './Game.module.scss';

const Game = () => {
  const [data, loading, error] = useFetching();

  return (
    (data && (
      <article className={classes.game}>
        <Container>
          <GameHelp />
          <GameContent data={data as IBird[]} />
        </Container>
      </article>
    )) ||
    (loading && <Loading />) || <NotFound />
  );
};

export default Game;
