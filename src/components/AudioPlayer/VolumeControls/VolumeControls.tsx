import React, { useEffect, useState } from 'react';

import SoundIcon from '../../Icons/AudioIcons/SoundIcon/SoundIcon';
import MuteIcon from '../../Icons/AudioIcons/MuteIcon/MuteIcon';
import CustomRangeInput from '../../CustomRangeInput/CustomRangeInput';

import classes from './VolumeControls.module.scss';

interface IProps {
  audio: React.RefObject<HTMLAudioElement>;
}

const VolumeControls: React.FC<IProps> = ({ audio }) => {
  const [volumeValue, setVolumeValue] = useState(0.5);
  const [mute, setMute] = useState(false);

  useEffect(() => {
    if (audio.current) {
      if (mute) {
        audio.current.volume = 0;
        setVolumeValue(0);
      } else {
        audio.current.volume = 1;
        setVolumeValue(0.5);
      }
    }
  }, [audio, mute]);

  useEffect(() => {
    if (volumeValue === 0) {
      setMute(true);
    } else {
      setMute(false);
    }
  }, [volumeValue]);

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setVolumeValue(+inputValue);
    if (audio.current) {
      audio.current.volume = +event.target.value;
    }
  };

  const handleMute = () => {
    setMute(!mute);
  };

  return (
    <div className={classes.volume__controls}>
      <button className={classes.player__button} onClick={handleMute}>
        {mute ? <MuteIcon /> : <SoundIcon />}
      </button>
      <CustomRangeInput
        min="0"
        max="1"
        step="0.01"
        value={`${volumeValue}`}
        onChange={handleVolume}
      />
    </div>
  );
};

export default VolumeControls;
