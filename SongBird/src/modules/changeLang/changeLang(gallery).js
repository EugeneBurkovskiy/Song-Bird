const dataTranslate = {
  lang: JSON.parse(localStorage.getItem('lang')).toLowerCase(),
  ru: {
    gamePage: '⇦ Начать игру',
    mainPage: 'На гравную ⇨',
    gameMode: ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певиче птицы', 'Хищные птицы', 'Морские птицы'],
  },
  en: {
    gamePage: '⇦ Start game',
    mainPage: 'Main page ⇨',
    gameMode: ['Warm-up', 'Passerines', 'Forest birds', 'Song birds', 'Predator birds', 'Sea birds'],
  }
};

function changeLang() {
  const navBtns = document.querySelectorAll('.header__button'),
    gameModeRow = document.querySelectorAll('.gallery__button');

  let lang = dataTranslate.lang;


  navBtns[0].textContent = dataTranslate[lang].gamePage;
  navBtns[1].textContent = dataTranslate[lang].mainPage;

  gameModeRow.forEach((item, i) => {
    item.textContent = `${dataTranslate[lang].gameMode[i]}`;
  });
}

export default changeLang;
export { dataTranslate };