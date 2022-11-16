import './gallery.html';
import './scss/indexStyle.scss';
import birdsData from './modules/birds';
import customAudio from './modules/audio';

window.addEventListener('DOMContentLoaded', () => {
  const mode = document.querySelector('.gallery__mode'),
    btns = document.querySelectorAll('.gallery__button'),
    galleryRow = document.querySelector('.gallery__row');

  mode.addEventListener('click', (e) => {
    if (e.target && e.target.value) {
      btns.forEach(btn => {
        btn.style.cssText = ``;
        btn.style.pointerEvents = '';
      });

      galleryRow.innerHTML = '';

      birdsData[e.target.value - 1].forEach((item, i) => {
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');
        galleryItem.innerHTML = `

          <div class="gallery__about-img"><img src=${item.image} alt="incognito"></div>
          <div class="gallery__about-info">
            <div class="gallery__about-name">${item.name}</div>
            <hr class="gallery__about-divider">
            <div class="gallery__about-subname">${item.species}</div>
            <hr class="gallery__about-divider">
          </div>
          <div class="player gallery__player" id="answer-player-${i}">
            <audio class="gallery__question-audio" id="answer-audio-${i}"
              src=${item.audio}></audio>
            <input class="player__duration" id="answer-player-duration-${i}" type="range" min=0 max=100 value="0">
            <div class="player__time">
              <span class="player__time-current" id="answer-time-current-${i}">00:00</span>
              <span class="player__time-total" id="answer-time-total-${i}">00:00</span>
            </div>
            <div class="player__start" id="answer-player-start-${i}"><img class="player__controls-img"
                src="assets/img/start.svg" alt="start">
            </div>
            <div class="player__pause" id="answer-player-pause-${i}"><img class="player__controls-img"
                src="assets/img/pause.svg" alt="pause">
            </div>
            <img class="player__volume-true" id="answer-volume-true-${i}" src="assets/img/volume.svg" alt="volume">
            <img class="player__volume-false" id="answer-volume-false-${i}" src="assets/img/mute.svg" alt="mute">
            <input class="player__volume" id="answer-player-volume-${i}" type="range" min=0 max=100 value="50">
          </div>

          <div class="gallery__about-descr">${item.description}</div>

        `;
        galleryRow.append(galleryItem);
        customAudio('#answer-audio-' + i, '#answer-player-start-' + i, '#answer-player-pause-' + i, '#answer-player-volume-' + i,
          '#answer-player-duration-' + i, '#answer-time-current-' + i, '#answer-time-total-' + i, '#answer-volume-true-' + i, '#answer-volume-false-' + i);
      });

      e.target.style.cssText = `border: 3px solid white; background-color: #165c52`;
      e.target.style.pointerEvents = 'none';
    }
  });
  btns[0].click();
});