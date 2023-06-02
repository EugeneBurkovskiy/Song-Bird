import Navigation from '../Navigation/Navigation';

import classes from './DesktopMenu.module.scss';

const DesktopMenu = () => {
  return (
    <div className={classes.menu}>
      <h1 className={classes.menu__title}>SongBirds</h1>
      <Navigation />
    </div>
  );
};

export default DesktopMenu;
