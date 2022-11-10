import generateGame from "./generateGame";
import { gameOptions } from "./generateGame";

function nextLvl() {
  const nextButton = document.querySelector('.game__btn');
  nextButton.addEventListener('click', () => {
    gameOptions.level++;
    gameOptions.score += 5;
    generateGame();
  });
}
export default nextLvl;