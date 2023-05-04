import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../Navigation/Navigation';

import classes from './BurgerMenu.module.scss';

interface IProps {
  setShowBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showBurgerMenu: boolean;
}

const BurgerMenu: React.FC<IProps> = ({ showBurgerMenu, setShowBurgerMenu }) => {
  return ReactDOM.createPortal(
    <div
      className={`${classes.menu__overlay} ${showBurgerMenu && classes.show}`}
      onClick={() => setShowBurgerMenu((prev) => !prev)}
    >
      <div className={`${classes.menu} ${showBurgerMenu && classes.show}`}>
        <h1 className={classes.menu__title}>SongBirds</h1>
        <Navigation mobile={true} />
      </div>
    </div>,
    document.getElementById('burger-root') as HTMLElement
  );
};

export default BurgerMenu;
