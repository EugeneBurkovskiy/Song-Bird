import ReactDOM from 'react-dom';
import { useEffect } from 'react';

import classes from './ModalWindow.module.scss';

interface IProps {
  children: React.ReactNode;
  show?: boolean;
  setShow?: React.Dispatch<React.SetStateAction<boolean>>;
  controls?: boolean;
}

const ModalWindow: React.FC<IProps> = ({ children, show = true, setShow, controls = true }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return show
    ? ReactDOM.createPortal(
        <section className={classes.overlay} onClick={() => setShow && setShow(false)}>
          <div className={classes.window} onClick={(e) => e.stopPropagation()}>
            {controls && (
              <button className={classes.window__close} onClick={() => setShow && setShow(false)}>
                ×
              </button>
            )}
            {children}
          </div>
        </section>,
        document.getElementById('overlay-root') as HTMLElement
      )
    : null;
};

export default ModalWindow;
