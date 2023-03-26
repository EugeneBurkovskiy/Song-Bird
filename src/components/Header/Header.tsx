import Container from '../../components/Container/Container';
import React from 'react';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.scss';

export default function Header() {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.header__wrapper}>
          <h1 className={classes.header__title}>SongBirds</h1>
          <Navigation />
        </div>
      </Container>
    </header>
  );
}
