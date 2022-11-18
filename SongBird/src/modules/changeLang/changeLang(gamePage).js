const dataTranslate = {
  lang: JSON.parse(localStorage.getItem('lang')).toLowerCase(),
  ru: {
    mainPage: '⇦ На главную',
    galleryPage: 'Галлерея ⇨',
    gameLogo: 'Режим игры',
    gameMode: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певиче птицы', 'Хищные птицы', 'Морские птицы'],
    lvlName: 'Уровень:',
    scoreName: 'Очки:',
    shield: 'Послушайте аудио и выберите птицу',
    nextBtn: 'Дальше',
    finishBtn: 'Конец'
  },
  en: {
    mainPage: '⇦ Main page',
    galleryPage: 'Gallery ⇨',
    gameLogo: 'Game mode',
    gameMode: ['Warm-up', 'Passerines', 'Forest birds', 'Song birds', 'Predator birds', 'Sea birds'],
    lvlName: 'Level:',
    scoreName: 'Score',
    shield: 'Listen to the audio and choose a bird',
    nextBtn: 'Next',
    finishBtn: 'Final'
  }
};

function changeLang() {
  const navBtns = document.querySelectorAll('.header__button'),
    gameLogo = document.querySelector('.game__logo'),
    gameModeRow = document.querySelectorAll('.game__button'),
    gameLvl = document.querySelector('.game__status-lvl'),
    gameScore = document.querySelector('.game__status-score'),
    nextBtn = document.querySelector('.game__next>a'),
    aboutShield = document.querySelector('.game__about-block');

  let lang = dataTranslate.lang;


  navBtns[0].textContent = dataTranslate[lang].mainPage;
  navBtns[1].textContent = dataTranslate[lang].galleryPage;
  gameLogo.textContent = dataTranslate[lang].gameLogo;
  gameModeRow.forEach((item, i) => {
    item.textContent = `${dataTranslate[lang].gameMode[i]}`;
  });
  gameLvl.textContent = dataTranslate[lang].lvlName;
  gameScore.textContent = dataTranslate[lang].scoreName;
  nextBtn.textContent = dataTranslate[lang].nextBtn;
  aboutShield.textContent = dataTranslate[lang].shield;

}

export default changeLang;
export { dataTranslate };