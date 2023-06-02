import GitHubIcon from '../Icons/GitHubIcon/GitHubIcon';
import Container from '../Container/Container';

import classes from './Footer.module.scss';

const Footer = () => {
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
};

export default Footer;
