import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import React from 'react';
import classes from './Footer.module.scss';
import Container from '../Container/Container';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.footer__wrapper}>
          <GitHubIcon />
          <p className={classes.footer__year}>2023</p>
          <a href="https://rs.school/" target={'blank'}>
            <img
              src="./assets/image/icons/rs_school_js.svg"
              alt="rsschool"
              className={classes.footer__gitIcon}
            />
          </a>
        </div>
      </Container>
    </footer>
  );
}
