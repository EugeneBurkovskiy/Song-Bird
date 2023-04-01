import React, { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import classes from './BurgerMenu.module.scss';

export default function BurgerMenu() {
  const [menu, setMenu] = useState(false);

  function handleBurger() {
    setMenu((prev) => !prev);
  }

  function handleMenuClick(event: React.MouseEvent) {
    event.stopPropagation();
  }

  return (
    <>
      <button
        className={`${classes.burger} ${menu && classes.close__burger}`}
        onClick={handleBurger}
      >
        <div className={classes.burger__item}></div>
        <div className={classes.burger__item}></div>
        <div className={classes.burger__item}></div>
      </button>
      <div className={`${classes.menu__overlay} ${menu && classes.show}`} onClick={handleBurger}>
        <div className={`${classes.menu} ${menu && classes.show}`} onClick={handleMenuClick}>
          <button className={classes.menu__close} onClick={handleBurger}>
            ✖
          </button>
          <h1 className={classes.menu__title}>SongBirds</h1>
          <Navigation mobile={true} />
        </div>
      </div>
    </>
  );
}
