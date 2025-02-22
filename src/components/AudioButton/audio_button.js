import React, { useRef } from "react";
import "./audio_button.css";
import imgPlay from "../../assets/images/play.png";
import imgPause from "../../assets/images/pause.png";
import music from "../../assets/media/music.mp3";
import { useState } from "react";

const AudioButton = () => {
  const [audioStatus, setAudioStatus] = useState(false);
  const audioRef = useRef();

  const playAudio = () => {
    audioRef.current.play();
    setAudioStatus(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setAudioStatus(false);
  };

  return (
    <div>
      <audio id="player" src={music} ref={audioRef} loop type="audio/mpeg" />
      <img
        className="audio-button"
        onClick={audioStatus ? pauseAudio : playAudio}
        src={audioStatus ? imgPause : imgPlay}
        alt="Play/Stop Music"
      />
    </div>
  );
};

export default AudioButton;
