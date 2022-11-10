import './scss/indexStyle.scss';
import chooseMode from './modules/chooseMode';
import chooseAnswer from './modules/chooseAnswer';
import nextButton from './modules/next';
window.addEventListener('DOMContentLoaded', () => {
  chooseMode();
  chooseAnswer();
  nextButton();
});