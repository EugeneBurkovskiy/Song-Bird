const dataTranslate = {
  lang: JSON.parse(localStorage.getItem('lang')).toLowerCase(),
  ru: {
    startGameBtn: '⇦ На главную',
    galleryBtn: 'Галлерея ⇨',
    score: 'очков'
  },

  en: {
    startGameBtn: '⇦ Main page',
    galleryBtn: 'Start page ⇨',
    score: 'score'
  }
};

function changeLang() {
  const navBtns = document.querySelectorAll('.header__button');


  navBtns[0].innerHTML = dataTranslate[dataTranslate.lang].startGameBtn;
  navBtns[1].innerHTML = dataTranslate[dataTranslate.lang].galleryBtn;

}

export default changeLang;
export { dataTranslate };