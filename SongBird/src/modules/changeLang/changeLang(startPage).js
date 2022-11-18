const dataTranslate = {
  ru: {
    startGameBtn: 'Начать викторину',
    galleryBtn: 'Галлерея',
    rules: `
    <p>Правила игры:</p>
    <p>Задача игры состоит в отгадывании птиц по их пению. Каждый новый уровень дает игроку 5 баллов.</p>
    <p>За каждый неправильный ответ отнимается 1 бал.</p>
    <p>Максимальное количество балов - 30</p>
    `

  },
  en: {
    startGameBtn: 'Start game',
    galleryBtn: 'Gallery',
    rules: `
    <p>Rules of the game:</p> 
         <p>The task of the game is to guess the birds by their singing. Each new level gives the player 5 points.</p>
         <p>For each incorrect answer, 1 point is deducted.</p>
         <p>The maximum number of points - 30</p>
    `
  }
};

function changeLang() {
  const navBtns = document.querySelectorAll('.header__button'),
    gameInfo = document.querySelector('.rules__window-text'),
    changeBtn = document.querySelectorAll('.header__changelang');

  let lang = JSON.parse(localStorage.getItem('lang'));

  changeBtn.forEach(item => {
    item.addEventListener('click', () => {
      if (item.textContent === 'Ru') {
        localStorage.setItem('lang', JSON.stringify(item.textContent));
        navBtns[0].innerHTML = dataTranslate.ru.startGameBtn;
        navBtns[1].innerHTML = dataTranslate.ru.galleryBtn;
        gameInfo.innerHTML = dataTranslate.ru.rules;
      } else if (item.textContent === 'En') {
        localStorage.setItem('lang', JSON.stringify(item.textContent));
        navBtns[0].innerHTML = dataTranslate.en.startGameBtn;
        navBtns[1].innerHTML = dataTranslate.en.galleryBtn;
        gameInfo.innerHTML = dataTranslate.en.rules;
      }
    });
  });

  if (lang === null) {
    changeBtn[0].click();
  } else {
    changeBtn.forEach(item => {
      if (item.textContent === lang) {
        item.click();
      }
    });
  }

}

export default changeLang;