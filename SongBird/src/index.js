import './gamePage.html';
import './scss/indexStyle.scss';
import chooseMode from './modules/chooseMode';
import chooseAnswer from './modules/chooseAnswer';
import nextLvl from './modules/next';

window.addEventListener('DOMContentLoaded', () => {
  chooseMode();
  chooseAnswer();
  nextLvl();
});