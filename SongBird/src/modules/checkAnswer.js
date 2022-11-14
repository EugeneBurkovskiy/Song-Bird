import { gameOptions } from './generateGame';

function checkAnswer(answer) {
  const score = document.querySelector('.game__status-score'),
    questionImg = document.querySelector('.game__question-img > img'),
    questionName = document.querySelector('.game__question-name'),
    nextButton = document.querySelector('.game__next>a'),
    audioPauseBtn = document.querySelectorAll('.player__pause'),
    audioAnswerTrue = document.querySelector('.game__ansnwer-true'),
    audioAnswerFalse = document.querySelector('.game__ansnwer-false');

  if (window.getComputedStyle(nextButton).pointerEvents === 'none') {
    gameOptions.answerStatus = false;
  }

  if (!gameOptions.answerStatus) {
    if (answer.textContent === gameOptions.secretBird.name) {

      answer.classList.add('game__answer-item_true');
      score.textContent = `Очки: ${gameOptions.score}`;
      questionImg.src = gameOptions.secretBird.image;
      questionName.textContent = gameOptions.secretBird.name;
      nextButton.style.cssText = 'pointer-events: auto; background-color: #2baa27;';
      gameOptions.answerStatus = true;
      audioPauseBtn.forEach(item => { item.click(); });
      audioAnswerTrue.play();

    } else {
      answer.classList.add('game__answer-item_false');
      audioAnswerFalse.play();
      gameOptions.score--;
    }
  }
}
export default checkAnswer;