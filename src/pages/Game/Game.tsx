import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import { BirdsContext, IBird } from '../../context/BirdsContext';
import React, { useContext } from 'react';
import GameContent from './GameContent/GameContent';
import classes from './Game.module.scss';
import GameHelp from './GameHelp/GameHelp';
import useFetching from '../../hooks/useFetching';
import NotFound from '../../components/NotFound/NotFound';

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
    (loading && <Loading />) ||
    (error && <NotFound />)
  );
};

export default Game;
