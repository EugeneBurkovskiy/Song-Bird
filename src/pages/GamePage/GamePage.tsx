import React from 'react';

import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import GameContent from './components/GameContent/GameContent';
import useFetching from '../../hooks/useFetching';
import NotFound from '../../components/NotFound/NotFound';
import GameHelp from './components/GameHelp/GameHelp';

import classes from './GamePage.module.scss';

const GamePage = () => {
  const { data, error } = useFetching();

  return (
    (data && (
      <article className={classes.game}>
        <Container>
          <GameHelp />
          <GameContent data={data} />
        </Container>
      </article>
    )) ||
    (error && <NotFound />) || <Loading />
  );
};

export default GamePage;
