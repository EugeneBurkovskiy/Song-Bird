import birdsData from './birds';
let gameOptions = {
  'score': 5,
  'level': 1,
  'gameMode': 1,
  'dataArr': [],
  'secretBird': {},
  'answerStatus': false
};

function generateGame() {

  const answerBlock = document.querySelector('.game__answer'),
    qustionAudio = document.querySelector('.game__question-audio'),
    aboutBlock = document.querySelector('.game__about-block'),
    nextButton = document.querySelector('.game__next'),
    questionImg = document.querySelector('.game__question-img > img'),
    questionName = document.querySelector('.game__question-name'),
    lvlNumber = document.querySelector('.game__status-lvl');

  questionImg.src = '../assets/img/incognito.png';
  questionName.textContent = '***';

  lvlNumber.textContent = `Уровень: ${gameOptions.level}`;
  aboutBlock.style.top = '0';

  if (gameOptions.dataArr.length === 1) {
    nextButton.textContent = 'Finish';
  }
  nextButton.style.cssText = '';

  answerBlock.innerHTML = '';

  birdsData[gameOptions.gameMode - 1].forEach(item => {
    const answerBtn = document.createElement('li');
    answerBtn.classList.add('game__answer-item');
    answerBtn.innerHTML = `${item.name}`;
    answerBlock.append(answerBtn);
  });

  gameOptions.secretBird = gameOptions.dataArr.splice(Math.floor(Math.random() * gameOptions.dataArr.length), 1)[0];
  qustionAudio.src = gameOptions.secretBird.audio;
}

export default generateGame;
export { gameOptions };