import './index.html';
import './scss/indexStyle.scss';
import showRules from './modules/rules';
import changeLang from './modules/changeLang/changeLang(startPage)';

window.addEventListener('DOMContentLoaded', () => {
  showRules();
  changeLang();
});