import React from 'react';

import classes from './BurgerButton.module.scss';

interface IProps {
  setShowBurgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showBurgerMenu: boolean;
}

const BurgerButton: React.FC<IProps> = ({ setShowBurgerMenu, showBurgerMenu }) => {
  return (
    <button
      className={`${classes.burger} ${showBurgerMenu && classes.burger_cross}`}
      onClick={() => setShowBurgerMenu((prev) => !prev)}
    >
      <div className={classes.burger__item}></div>
      <div className={classes.burger__item}></div>
      <div className={classes.burger__item}></div>
    </button>
  );
};

export default BurgerButton;
