import React, { useEffect, useRef } from 'react'
import './home_page.css'
import { Link } from 'react-scroll';
import suitcase from '../../assets/images/suitcase.png'
import imgLogo from '../../assets/images/logo.png'
import imgPlay from '../../assets/images/play.png'
import imgPause from '../../assets/images/pause.png'
import music from '../../assets/media/music.mp3'
import {useState} from "react";

const HomePage = () => {
  
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
    <section id='homePage'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Atirek Pothiwala</span><br/>Mobile Application Developer</span>
            <p className='introPara'>I'm a skilled mobile application developer with 8.8 years of experience in building high-performance, user-friendly apps while ensuring clean and efficiet code.
                Passionate about creating seamless and scalable mobile experiences.</p>
            <Link>
            <div className='tabs'>
              <button className='btnNormal'><img src={suitcase} alt='Hire Me'/>Hire Me</button>
              <button className='btnMusic' onClick={audioStatus ? pauseAudio : playAudio}>
                <audio id='player' src={music} ref={audioRef} loop autoPlay type='audio/mpeg'/>
                <img src={audioStatus ? imgPause : imgPlay} alt='Play/Stop Music'/>
              </button>
            </div>
            </Link>
        </div>
        <img src={imgLogo} alt='Logo' className='bg'/>
    </section>
  )
}

export default HomePage