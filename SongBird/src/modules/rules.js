function showRules() {
  const rulesBtn = document.querySelector('.header__button-rules'),
    window = document.querySelector('.rules'),
    closeBtn = document.querySelector('.rules__window-close');

  rulesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.style.display = 'block';
  });

  window.addEventListener('click', (e) => {
    if (e.target && (e.target === window || e.target === closeBtn)) {
      window.style.display = 'none';
    }
  });
}

export default showRules;