import birdsData from './birds';

let gameMode,
  dataArr = [],
  secretBird;
function chooseMode() {
  const gameTypeRow = document.querySelector('.game__window-row'),
    answerBlock = document.querySelector('.game__answer'),
    qustionAudio = document.querySelector('.game__question-audio'),
    blockWindow = document.querySelector('.game__blocking');

  gameTypeRow.addEventListener('click', (e) => {
    if (e.target && e.target.value) {

      blockWindow.style.top = '-100%';
      gameMode = e.target.value;

      dataArr = birdsData[gameMode - 1].slice(0);
      secretBird = dataArr.splice(Math.floor(Math.random() * 6), 1)[0];

      qustionAudio.src = secretBird.audio;

      answerBlock.innerHTML = '';

      birdsData[e.target.value - 1].forEach(item => {
        const answerBtn = document.createElement('li');
        answerBtn.classList.add('game__answer-item');
        answerBtn.innerHTML = `${item.name}`;
        answerBlock.append(answerBtn);
      });

    }
  });
}

export default chooseMode;
export { gameMode, dataArr, secretBird };