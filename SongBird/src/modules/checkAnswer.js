import { gameMode, dataArr, secretBird } from "./chooseMode";

let scoreCounter = 5;
function checkAnswer(answer) {
  const score = document.querySelector('.game__score');
  if (answer.textContent === secretBird.name) {
    answer.classList.add('game__answer-item_true');
    score.textContent = `Score: ${scoreCounter}`;
  } else {
    answer.classList.add('game__answer-item_false');
    scoreCounter--;
  }
}

export default checkAnswer;