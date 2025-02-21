import React from 'react'
import './toolbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/images/logo.png'
import send from '../../assets/images/send.png'
import moon from '../../assets/images/moon.png'

const toolbar = () => {
  return (
   <nav className='toolbar'>
    <img src={logo} alt='Logo' className='logo' />
    <div className='tabs'>
      <Link className='tabItem'>Home</Link>
      <Link className='tabItem'>About</Link>
      <Link className='tabItem'>Portfolio</Link>
    </div>
    <div className='tabs'>
    <button className='btnNormal'><img src={send} alt='Contact Me'/>Contact Me</button>
    <button className='btnAppearance'><img src={moon} alt='Mode'/></button>
    </div>
   </nav>
  )
}

export default toolbar