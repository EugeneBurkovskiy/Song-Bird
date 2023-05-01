import CustomButton from '../../components/Buttons/CustomButton/CustomButton';
import React from 'react';
import classes from './Home.module.scss';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className={classes.home}>
        <video src="./assets/video/intro.mp4" loop muted autoPlay></video>
        <div className={classes.home__button}>
          <CustomButton onClick={() => navigate('game')}>Start</CustomButton>
        </div>
      </section>
    </>
  );
};

export default Home;
