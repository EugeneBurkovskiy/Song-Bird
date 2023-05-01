import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import { BirdsContext } from '../../context/BirdsContext';
import React, { useContext } from 'react';
import GameContent from './GameContent/GameContent';
import classes from './Game.module.scss';
import GameHelp from './GameHelp/GameHelp';

const Game = () => {
  const { data } = useContext(BirdsContext);

  return data ? (
    <article className={classes.game}>
      <Container>
        <GameHelp />
        <GameContent data={data} />
      </Container>
    </article>
  ) : (
    <Loading />
  );
};

export default Game;
