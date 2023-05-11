import React from 'react';

import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import Game from '../../components/Game/Game';
import useFetching from '../../hooks/useFetching';
import NotFound from '../../components/NotFound/NotFound';
import GameHelp from '../../components/GameHelp/GameHelp';

import classes from './GamePage.module.scss';

const GamePage = () => {
  const { data, loading } = useFetching();

  return (
    (data && (
      <article className={classes.game}>
        <Container>
          <GameHelp />
          <Game data={data} />
        </Container>
      </article>
    )) ||
    (loading && <Loading />) || <NotFound />
  );
};

export default GamePage;
