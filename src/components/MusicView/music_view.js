import React, { useRef } from "react";
import "./music_view.css";
import imgPlay from "../../assets/images/play.png";
import imgPause from "../../assets/images/pause.png";
import music from "../../assets/media/music.mp3";
import { useState } from "react";

const MusicView = () => {
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
    <button
      className="btn-music"
      onClick={audioStatus ? pauseAudio : playAudio}
    >
      <audio
        id="player"
        src={music}
        ref={audioRef}
        loop
        autoPlay
        type="audio/mpeg"
      />
      <img src={audioStatus ? imgPause : imgPlay} alt="Play/Stop Music" />
    </button>
  );
};

export default MusicView;
