import React from 'react';
import classes from './Home.module.scss';

export default function Home() {
  return (
    <section className={classes.home}>
      <video src="./assets/video/intro.mp4" loop muted autoPlay></video>
    </section>
  );
}
