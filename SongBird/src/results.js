import './results.html';
import './scss/indexStyle.scss';

window.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.results__list'),
    resultsArr = JSON.parse(localStorage.getItem('result'));
  list.innerHTML = '';
  resultsArr.forEach((item, i) => {
    list.innerHTML += `<li class="results__item">${i + 1}. ${item.score} очков</li>`;
  });
});