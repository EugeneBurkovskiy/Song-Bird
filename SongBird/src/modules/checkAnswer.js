import { gameOptions } from "./generateGame";


function checkAnswer(answer) {
  const score = document.querySelector('.game__status-score'),
    questionImg = document.querySelector('.game__question-img > img'),
    questionName = document.querySelector('.game__question-name'),
    nextButton = document.querySelector('.game__next');

  if (window.getComputedStyle(nextButton).pointerEvents === 'none') {
    gameOptions.answerStatus = false;
  }

  if (!gameOptions.answerStatus) {
    if (answer.textContent === gameOptions.secretBird.name) {

      answer.classList.add('game__answer-item_true');
      score.textContent = `Score: ${gameOptions.score}`;
      questionImg.src = gameOptions.secretBird.image;
      questionName.textContent = gameOptions.secretBird.name;
      nextButton.style.cssText = 'pointer-events: auto; background-color: #2baa27;';
      gameOptions.answerStatus = true;

    } else {
      answer.classList.add('game__answer-item_false');
      gameOptions.score--;
    }
  }
}
export default checkAnswer;