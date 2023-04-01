import React from 'react';
import GameMode from './GameMode/GameMode';
import classes from './Game.module.scss';
import Container from '../../components/Container/Container';
import OptionsContextProvider from './GameContext/GameContext';
export interface IBird {
  id: number;
  name: string;
  species: string;
  category: string;
  description: string;
  image: string;
  audio: string;
}

export default function Game() {
  return (
    <OptionsContextProvider>
      <section className={classes.game}>
        <Container>
          <GameMode />
        </Container>
      </section>
    </OptionsContextProvider>
  );
}
