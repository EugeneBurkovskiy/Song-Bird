import birdsData from './data/birds';
import birdsDataEn from './data/birds-en';
import customAudio from './audio';
import { dataTranslate } from './changeLang/changeLang(gamePage)';

let gameOptions = {
  'score': 5,
  'level': 1,
  'gameMode': 1,
  'dataArr': [],
  'secretBird': {},
  'answerStatus': false,
  'birdsData': dataTranslate.lang === 'en' ? birdsDataEn : birdsData
};

function generateGame() {
  const answerBlock = document.querySelector('.game__answer'),
    qustionAudio = document.querySelector('.game__question-audio'),
    aboutBlock = document.querySelector('.game__about-block'),
    nextButton = document.querySelector('.game__next>a'),
    questionImg = document.querySelector('.game__question-img > img'),
    questionName = document.querySelector('.game__question-name'),
    lvlNumber = document.querySelector('.game__status-lvl'),
    gameScore = document.querySelector('.game__status-score');

  questionImg.src = 'assets/img/incognito.png';
  questionName.textContent = '***';

  lvlNumber.textContent = `${dataTranslate[dataTranslate.lang].lvlName} ${gameOptions.level}`;
  gameScore.textContent = `${dataTranslate[dataTranslate.lang].scoreName} ${gameOptions.score - 5}`;

  aboutBlock.style.top = '0';

  if (gameOptions.dataArr.length === 1) {
    nextButton.textContent = `${dataTranslate[dataTranslate.lang].finishBtn}`;
  }
  nextButton.style.cssText = '';

  answerBlock.innerHTML = '';

  gameOptions.birdsData[gameOptions.gameMode - 1].forEach(item => {
    const answerBtn = document.createElement('li');
    answerBtn.classList.add('game__answer-item');
    answerBtn.innerHTML = `${item.name}`;
    answerBlock.append(answerBtn);
  });

  gameOptions.secretBird = gameOptions.dataArr.splice(Math.floor(Math.random() * gameOptions.dataArr.length), 1)[0];
  qustionAudio.src = gameOptions.secretBird.audio;
  customAudio('#question-audio', '#question-player-start', '#question-player-pause', '#question-player-volume',
    '#question-player-duration', '#question-time-current', '#question-time-total', '#question-volume-true', '#question-volume-false');
}

export default generateGame;
export { gameOptions };