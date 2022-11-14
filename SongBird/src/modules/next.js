import generateGame from './generateGame';
import { gameOptions } from './generateGame';

function nextLvl() {
  const nextButton = document.querySelector('.game__next>a');
  nextButton.addEventListener('click', (e) => {
    if (gameOptions.dataArr.length !== 0) {
      e.preventDefault();
      gameOptions.level++;
      gameOptions.score += 5;
      generateGame();
    }
  });
}
export default nextLvl;