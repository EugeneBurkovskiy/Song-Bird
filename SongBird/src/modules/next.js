import generateGame from './generateGame';
import { gameOptions } from './generateGame';
import { popupOpen } from './popup';

function nextLvl() {
  const nextButton = document.querySelector('.game__next>a');
  nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (gameOptions.dataArr.length !== 0) {
      gameOptions.level++;
      gameOptions.score += 5;
      generateGame();
    } else {
      popupOpen();
      saveToStorage();
    }
  });

  function saveToStorage() {
    let resultsArr = [];
    let resultItem = JSON.parse(localStorage.getItem('result'));
    if (resultItem) {
      resultsArr = resultItem;
      resultsArr.push(gameOptions);
      resultsArr = resultsArr.sort((a, b) => { return b.score - a.score; }).filter((item, i) => {
        if (i < 10) {
          return item;
        }
      });
      localStorage.setItem('result', JSON.stringify(resultsArr));
    } else {
      resultsArr = [];
      resultsArr.push(gameOptions);
      localStorage.setItem('result', JSON.stringify(resultsArr));
    }
  }
}
export default nextLvl;