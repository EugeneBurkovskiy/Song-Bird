import ModalWindow from '../../../components/ModalWindow/ModalWindow';
import React, { useState } from 'react';
import classes from './GameHelp.module.scss';

export default function GameHelp() {
  const [help, setHelp] = useState(false);
  return (
    <>
      <button className={classes.help__button} onClick={() => setHelp(true)}>
        ?
      </button>
      <ModalWindow show={help} setShow={setHelp}>
        <div className={classes.help__info}>
          <p>Hello dear friend</p>
          <p>In this quiz you need to guess the name of the bird by its song.</p>
          <p>At each level you have 6 answer options, of which only one is correct.</p>
          <p>
            For each wrong answer you get -1 point, the maximum number of points for the level is 6,
            and the minimum is 1.
          </p>
          <p>Good luck!</p>
        </div>
      </ModalWindow>
    </>
  );
}
