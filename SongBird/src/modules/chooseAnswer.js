import birdsData from './birds';
import { gameOptions } from './generateGame';
import checkAnswer from './checkAnswer';
import customAudio from './audio';

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
                <div class="player" id="answer-player">
                <audio class="game__question-audio" id="answer-audio" src = ${bird.audio}></audio>
                <input class="player__duration" id="answer-player-duration" type="range" min=0 max=100 value="0">
                <div class="player__start" id="answer-player-start"><img class="player__controls-img"
                    src="assets/icons/start.svg" alt="start">
                </div>
                <div class="player__pause" id="answer-player-pause"><img class="player__controls-img"
                    src="assets/icons/pause.svg" alt="pause">
                </div>
                <input class="player__volume" id="answer-player-volume" type="range" min=0 max=100 value="100">
              </div>
            </div>
            </div>
            <div class="game__about-descr">${bird.description}
            </div>
        `;
        }
      });
      customAudio('#answer-audio', '#answer-player-start', '#answer-player-pause', '#answer-player-volume', '#answer-player-duration');
      checkAnswer(e.target);
    }
  });
}

export default chooseAnswer;