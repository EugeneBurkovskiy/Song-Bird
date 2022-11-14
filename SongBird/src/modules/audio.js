function customAudio(audioSelector, startSelector, pauseSelector, volumeSelector, progressSelector, currentTime, totalTime, volumeTrue, volumeFalse) {
  const audio = document.querySelector(audioSelector),
    startBtn = document.querySelector(startSelector),
    pauseBtn = document.querySelector(pauseSelector),
    volumeBar = document.querySelector(volumeSelector),
    progressBar = document.querySelector(progressSelector),
    currentTimeText = document.querySelector(currentTime),
    totalTimeText = document.querySelector(totalTime),
    audioIconTrue = document.querySelector(volumeTrue),
    audioIconFalse = document.querySelector(volumeFalse);

  pauseBtn.style.display = 'none';
  startBtn.style.display = 'block';
  audio.ontimeupdate = progress;
  startBtn.addEventListener('click', () => {
    audio.play();
    timeConverter(audio.duration, totalTimeText);
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

    if (volumeBar.value < 1) {
      audioIconTrue.style.display = 'none';
      audioIconFalse.style.display = 'block';
    } else {
      audioIconFalse.style.display = 'none';
      audioIconTrue.style.display = 'block';
    }

  });

  progressBar.addEventListener('input', () => {
    audio.currentTime = progressBar.value * audio.duration / progressBar.max;
  });

  function progress() {
    progressBar.value = progressBar.max * audio.currentTime / audio.duration;
    timeConverter(audio.currentTime, currentTimeText);
    if (audio.currentTime === audio.duration) {
      pauseBtn.style.display = 'none';
      startBtn.style.display = 'block';
    }
  }

  function timeConverter(time, cell) {
    cell.textContent = '';
    let seconds = Math.floor(time % 60),
      minutes = Math.floor((time / 60) % 60);
    let timeArr = [minutes, seconds];
    timeArr = timeArr.map(item => {
      if (item < 10) {
        item = '0' + item;
      } else if (item === 0) {
        item = '00';
      }
      return item;
    });
    cell.textContent = timeArr[0] + ':' + timeArr[1];
  }
}
export default customAudio;