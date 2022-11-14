import { gameOptions } from './generateGame';
function popupClose() {
  document.querySelectorAll('.result-popup__button').forEach(item => {
    const popupWindow = document.querySelector('.result-popup');
    popupWindow.style.display = 'none';
  });
}
function popupOpen() {
  const popupWindow = document.querySelector('.result-popup'),
    popupScore = document.querySelector('.result-popup__score');
  popupWindow.style.display = 'flex';
  popupScore.textContent = `Ваш результат: ${gameOptions.score}/30`;
}

export { popupClose, popupOpen };