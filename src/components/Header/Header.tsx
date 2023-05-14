import React, { useEffect, useState } from 'react';

import Container from '../../components/Container/Container';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import BurgerButton from './BurgerMenu/BurgerButton/BurgerButton';

import classes from './Header.module.scss';

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleResize() {
    if (window.screen.width < 769) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${isScrolled ? classes.header__black : ''}`}>
      <Container>
        {mobile ? (
          <BurgerButton setShowBurgerMenu={setShowBurgerMenu} showBurgerMenu={showBurgerMenu} />
        ) : (
          <DesktopMenu />
        )}
      </Container>
      {mobile && (
        <BurgerMenu showBurgerMenu={showBurgerMenu} setShowBurgerMenu={setShowBurgerMenu} />
      )}
    </header>
  );
};

export default Header;
