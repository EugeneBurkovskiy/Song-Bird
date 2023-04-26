import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import React from 'react';
import classes from './Home.module.scss';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className={classes.home}>
        <video src="./assets/video/intro.mp4" loop muted autoPlay></video>
        <div className={classes.home__button}>
          <CustomButton>
            <NavLink to="game">Start</NavLink>
          </CustomButton>
        </div>
      </section>
    </>
  );
}
