import Container from '../../components/Container/Container';
import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import DesktopMenu from './DesktopMenu/DesktopMenu';
import BurgerMenu from './BurgerMenu/BurgerMenu';

export default function Header() {
  const [mobile, setMobile] = useState(false);

  function handleResize() {
    if (window.screen.width < 768) {
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

  return (
    <header className={classes.header}>
      <Container>{mobile ? <BurgerMenu /> : <DesktopMenu />}</Container>
    </header>
  );
}
