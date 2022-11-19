import './gamePage.html';
import './scss/indexStyle.scss';
import chooseMode from './modules/chooseMode';
import chooseAnswer from './modules/chooseAnswer';
import nextLvl from './modules/next';
import { popupClose } from './modules/popup';
import changeLang from './modules/changeLang/changeLang';

window.addEventListener('DOMContentLoaded', () => {
  changeLang();
  chooseMode();
  chooseAnswer();
  nextLvl();
  popupClose();
});