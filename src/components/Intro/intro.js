import React from 'react'
import './intro.css'
import { Link } from 'react-scroll';
import suitcase from '../../assets/suitcase.png'
import logo from '../../assets/logo.png'

const intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Atirek Pothiwala</span><br/>Mobile Application Developer</span>
            <p className='introPara'>I'm a skilled mobile application developer with 8.8 years of experience in building high-performance, user-friendly apps while ensuring clean and efficiet code.
                Passionate about creating seamless and scalable mobile experiences.</p>
            <Link>
            <button className='btnNormal'><img src={suitcase} alt='Hire Me'/>Hire Me</button>
            </Link>
        </div>
        <img src={logo} alt='Logo' className='bg'/>
    </section>
  )
}

export default intro