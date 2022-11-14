import { gameOptions } from './generateGame';

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
  if (gameOptions.score === 30) {
    audioVictory.play();
    popupScore.textContent = `Вы набрали максимальное количество очков!`;
    restartBtn.style.display = 'none';
  } else {
    popupScore.textContent = `Ваш результат: ${gameOptions.score}/30`;
  }
}

export { popupClose, popupOpen };