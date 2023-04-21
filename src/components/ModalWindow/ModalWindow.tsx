import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ModalWindow.module.scss';

const ModalWindow = ({ children }: { children?: React.ReactNode }) => {
  return ReactDOM.createPortal(
    <section className={classes.overlay}>
      <div className={classes.window}>{children}</div>
    </section>,
    document.getElementById('overlay-root') as HTMLElement
  );
};

export default ModalWindow;
