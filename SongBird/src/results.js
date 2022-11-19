import './results.html';
import './scss/indexStyle.scss';
import changeLang from './modules/changeLang/changeLang';
import { dataTranslate } from './modules/changeLang/changeLang';

window.addEventListener('DOMContentLoaded', () => {
  changeLang();
  const list = document.querySelector('.results__list'),
    resultsArr = JSON.parse(localStorage.getItem('result'));
  list.innerHTML = '';
  resultsArr.forEach((item, i) => {
    list.innerHTML += `<li class="results__item">${i + 1}. ${item.score} ${dataTranslate[dataTranslate.lang].scoreName}</li>`;
  });
});