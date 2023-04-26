import Container from '../../components/Container/Container';
import Loading from '../../components/Loading/Loading';
import { BirdsContext } from '../../context/BirdsContext';
import React, { useContext, useState } from 'react';
import GameContent from './GameContent/GameContent';
import classes from './Game.module.scss';
import GameHelp from './GameHelp/GameHelp';

export default function Game() {
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
}
