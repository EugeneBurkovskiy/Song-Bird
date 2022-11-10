function customAudio(audioSelector, startSelector, pauseSelector, volumeSelector, progressSelector) {
  const audio = document.querySelector(audioSelector),
    startBtn = document.querySelector(startSelector),
    pauseBtn = document.querySelector(pauseSelector),
    volumeBar = document.querySelector(volumeSelector),
    progressBar = document.querySelector(progressSelector);

  audio.ontimeupdate = progress;
  startBtn.addEventListener('click', () => {
    audio.play();
    pauseBtn.style.display = 'block';
    startBtn.style.display = 'none';
  });

  pauseBtn.addEventListener('click', () => {
    audio.pause();
    pauseBtn.style.display = 'none';
    startBtn.style.display = 'block';
  });

  volumeBar.addEventListener('input', () => {
    let volumeStatus = volumeBar.value;
    audio.volume = volumeStatus / volumeBar.max;
  });

  progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value * audio.duration / progressBar.max;
  });

  function progress() {
    progressBar.value = progressBar.max * audio.currentTime / audio.duration;
  }
}
export default customAudio;