import { gameOptions } from './generateGame';
import { dataTranslate } from './changeLang/changeLang(gamePage)';

function popupClose() {
  document.querySelectorAll('.result-popup__button').forEach(item => {
    const popupWindow = document.querySelector('.result-popup');
    popupWindow.style.display = 'none';
  });
}
function popupOpen() {
  const popupWindow = document.querySelector('.result-popup'),
    popupScore = document.querySelector('.result-popup__score'),
    audioVictory = document.querySelector('.game__ansnwer-victory'),
    restartBtn = document.querySelector('.result-popup__button');

  popupWindow.style.display = 'flex';
  popupWindow.classList.add('FadeIn');
  if (gameOptions.score === 30) {
    audioVictory.play();
    popupScore.textContent = `${dataTranslate[dataTranslate.lang].winTitle}`;
    restartBtn.style.display = 'none';
  } else {
    popupScore.textContent = `${dataTranslate[dataTranslate.lang].scoreTitle} ${gameOptions.score}/30`;
  }
}

export { popupClose, popupOpen };