import './scss/indexStyle.scss';
import chooseMode from './modules/chooseMode';
import chooseAnswer from './modules/chooseAnswer';

window.addEventListener('DOMContentLoaded', () => {
  chooseMode();
  chooseAnswer();
});