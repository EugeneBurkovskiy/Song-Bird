import './scss/indexStyle.scss';
import chooseMode from './modules/chooseMode';
import chooseAnswer from './modules/chooseAnswer';
import nextButton from './modules/next';
import customAudio from './modules/audio';

window.addEventListener('DOMContentLoaded', () => {
  chooseMode();
  chooseAnswer();
  nextButton();
  customAudio('#question-audio', '#question-player-start', '#question-player-pause', '#question-player-volume', '#question-player-duration');
});