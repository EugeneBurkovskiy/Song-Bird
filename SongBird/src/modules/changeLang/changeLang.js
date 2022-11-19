
const dataTranslate = {
  lang: JSON.parse(localStorage.getItem('lang')),
  ru: {
    gamePageBtn: 'Начать игру',
    mainPageBtn: 'На главную',
    galleryPageBtn: 'Галлерея',
    gameModeArr: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певиче птицы', 'Хищные птицы', 'Морские птицы'],
    lvlName: 'Уровень:',
    scoreName: 'Очки:',
    nextBtn: 'Дальше',
    finishBtn: 'Конец',
    playAgainBtn: 'Еще раз',
    resultPageBtn: 'Статистика',
    shieldText: 'Послушайте аудио и выберите птицу',
    scoreText: 'Ваш результат:',
    gameLogoText: 'Режим игры',
    winText: 'Вы набрали максимальное количество очков!',
    rules: `
    <p>Правила игры:</p>
    <p>Задача игры состоит в отгадывании птиц по их пению. Каждый новый уровень дает игроку 5 баллов.</p>
    <p>За каждый неправильный ответ отнимается 1 бал.</p>
    <p>Максимальное количество балов - 30</p>
    `
  },
  en: {
    gamePageBtn: 'Start game',
    mainPageBtn: 'Main page',
    galleryPageBtn: 'Gallery',
    gameModeArr: ['Warm-up', 'Passerines', 'Forest birds', 'Song birds', 'Predator birds', 'Sea birds'],
    lvlName: 'Level:',
    scoreName: 'Score:',
    nextBtn: 'Next',
    finishBtn: 'Finish',
    playAgainBtn: 'Again',
    resultPageBtn: 'Statistic',
    shieldText: 'Listen to the audio and choose a bird',
    scoreText: 'Your result:',
    gameLogoText: 'Game mode',
    winText: 'You have scored the maximum number of points!',
    rules: `
    <p>Game rules:</p>
    <p>The task of the game is to guess the birds by their singing. Each new level gives the player 5 points.</p>
    <p>For each wrong answer, 1 point is subtracted.</p>
    <p>Maximum points - 30</p>
    `
  },
};

function changeLang() {
  const changeBtn = document.querySelectorAll('.header__changelang-button');

  changeBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      changeBtn.forEach(item => {
        item.style.cssText = '';
      });

      item.style.cssText = 'background-color: #165c52';
      localStorage.setItem('lang', JSON.stringify(item.textContent));
    });
  });

  let language = JSON.parse(localStorage.getItem('lang'));

  if (language) {
    changeBtn.forEach(item => {
      if (item.textContent === language) {
        item.click();
      }
    });
  } else {
    changeBtn[0].click();
  }

  changeBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
      checkLang();
    });
  });

  let filename = window.location.href.split('/');

  checkLang();

  function checkLang() {
    language = JSON.parse(localStorage.getItem('lang'));
    switch (filename[filename.length - 1]) {
      case ('index.html'):
        changeStartPageLang();
        break;
      case ('gamePage.html'):
        changeGamePageLang();
        break;
      case ('gallery.html'):
        changeGalleryPageLang();
        break;
      case ('results.html'):
        changeResultPageLang();
        break;
    }
  }

  function changeStartPageLang() {
    const navBtns = document.querySelectorAll('.header__button'),
      gameInfo = document.querySelector('.rules__window-text');

    navBtns[0].innerHTML = dataTranslate[language].gamePageBtn;
    navBtns[1].innerHTML = dataTranslate[language].galleryPageBtn;
    gameInfo.innerHTML = dataTranslate[language].rules;
  }

  function changeGamePageLang() {
    const navBtns = document.querySelectorAll('.header__button'),
      gameLogo = document.querySelector('.game__logo'),
      gameModeRow = document.querySelectorAll('.game__button'),
      gameLvl = document.querySelector('.game__status-lvl'),
      gameScore = document.querySelector('.game__status-score'),
      nextBtn = document.querySelector('.game__next>a'),
      aboutShield = document.querySelector('.game__about-block'),
      popupScore = document.querySelector('.result-popup__score'),
      popupBtns = document.querySelectorAll('.result-popup__button');

    navBtns[0].innerHTML = dataTranslate[language].mainPageBtn;
    navBtns[1].innerHTML = dataTranslate[language].galleryPageBtn;
    gameLogo.innerHTML = dataTranslate[language].gameLogoText;
    gameModeRow.forEach((item, i) => {
      item.innerHTML = `${dataTranslate[language].gameModeArr[i]}`;
    });
    gameLvl.innerHTML = dataTranslate[language].lvlName;
    gameScore.innerHTML = dataTranslate[language].scoreName;
    nextBtn.innerHTML = dataTranslate[language].nextBtn;
    aboutShield.innerHTML = dataTranslate[language].shieldText;
    popupScore.innerHTML = dataTranslate[language].scoreText;
    popupBtns[0].innerHTML = dataTranslate[language].playAgainBtn;
    popupBtns[1].innerHTML = dataTranslate[language].resultPageBtn;
  }

  function changeGalleryPageLang() {
    const navBtns = document.querySelectorAll('.header__button'),
      gameModeRow = document.querySelectorAll('.gallery__button');


    navBtns[0].textContent = dataTranslate[language].gamePageBtn;
    navBtns[1].textContent = dataTranslate[language].mainPageBtn;

    gameModeRow.forEach((item, i) => {
      item.textContent = `${dataTranslate[language].gameModeArr[i]}`;
    });
  }

  function changeResultPageLang() {
    const navBtns = document.querySelectorAll('.header__button');


    navBtns[0].innerHTML = dataTranslate[language].gamePageBtn;
    navBtns[1].innerHTML = dataTranslate[language].galleryPageBtn;
  }
}
export default changeLang;
export { dataTranslate };