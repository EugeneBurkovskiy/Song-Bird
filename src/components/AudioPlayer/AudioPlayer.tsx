import React, { useEffect, useRef, useState } from 'react';

import PauseIcon from '../Icons/AudioIcons/PauseIcon/PauseIcon';
import PlayIcon from '../Icons/AudioIcons/PlayIcon/PlayIcon';
import VolumeControls from './VolumeControls/VolumeControls';
import CustomRangeInput from '../CustomRangeInput/CustomRangeInput';

import classes from './AudioPlayer.module.scss';

interface IProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<IProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [durationValue, setDurationValue] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsPlaying(false);
  }, [audioUrl]);

  const handleMetadata = () => {
    setDurationValue(0);
  };

  const handleTimeUpdate = (event: React.ChangeEvent<HTMLAudioElement>) => {
    const audio = event.target;
    if (audio) {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const percentage = (currentTime / duration) * 100;

      setDurationValue(percentage);
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const inputValue = event.target.value;
      const duration = audio.duration;
      const currentTime = (+inputValue * duration) / 100;
      audio.currentTime = currentTime;
    }
  };

  return (
    <div className={classes.player}>
      <audio
        src={audioUrl}
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleMetadata}
      />
      {isPlaying ? (
        <button onClick={handlePause} className={classes.player__button}>
          <PauseIcon />
        </button>
      ) : (
        <button onClick={handlePlay} className={classes.player__button}>
          <PlayIcon />
        </button>
      )}
      <CustomRangeInput min="0" max="100" value={`${durationValue}`} onChange={handleDuration} />
      <VolumeControls audio={audioRef} />
    </div>
  );
};

export default AudioPlayer;
