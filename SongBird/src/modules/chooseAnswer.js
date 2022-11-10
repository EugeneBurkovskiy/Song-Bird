import birdsData from './birds';
import { gameOptions } from './generateGame';
import checkAnswer from './checkAnswer';

function chooseAnswer() {
  const answerRow = document.querySelector('.game__answer'),
    aboutSection = document.querySelector('.game__about-wrapper'),
    aboutBlock = document.querySelector('.game__about-block');

  answerRow.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('game__answer-item')) {
      aboutBlock.style.top = '-100%';
      birdsData[gameOptions.gameMode - 1].forEach(bird => {

        if (bird.name === e.target.textContent) {
          aboutSection.innerHTML = `
      <div class="game__about-img"><img src=${bird.image} alt="incognito"></div>
            <div class="game__about-info">
              <div class="game__about-name">${bird.name}</div>
              <hr class="game__about-divider">
              <div class="game__about-subname">${bird.species}</div>
              <hr class="game__about-divider">
              <audio class="game__about-audio" src=${bird.audio} controls></audio>
            </div>
            <div class="game__about-descr">${bird.description}
            </div>
        `;
        }
      });
      checkAnswer(e.target);
    }
  });
}

export default chooseAnswer;