import React, { useRef } from "react";
import { useState } from "react";
import imgPlay from "../assets/images/play.png";
import imgPause from "../assets/images/pause.png";
import music from "../assets/media/music.mp3";

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
    <div id="audio-button">
      <audio id="player" src={music} ref={audioRef} loop type="audio/mpeg" />
      <img
        onClick={audioStatus ? pauseAudio : playAudio}
        src={audioStatus ? imgPause : imgPlay}
        alt="Play/Stop Music"
      />
    </div>
  );
};

export default AudioButton;
