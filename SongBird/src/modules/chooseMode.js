import birdsData from './birds';
import generateGame from './generateGame';
import { gameOptions } from './generateGame';

function chooseMode() {
  const gameModeRow = document.querySelector('.game__mode'),
    btns = document.querySelectorAll('.game__button'),
    blockWindow = document.querySelector('.game__blocking');

  gameModeRow.addEventListener('click', (e) => {
    if (e.target && e.target.value) {

      btns.forEach(btn => {
        btn.style.cssText = ``;
        btn.style.pointerEvents = '';
      });

      e.target.style.cssText = `border: 3px solid white; background-color: #165c52`;
      e.target.style.pointerEvents = 'none';
      blockWindow.style.top = '-100%';
      gameOptions.gameMode = e.target.value;
      gameOptions.level = 1;
      gameOptions.score = 5;

      gameOptions.dataArr = birdsData[gameOptions.gameMode - 1].slice(0);
      generateGame();
    }
  });
}

export default chooseMode;