import React from 'react'
import './navbar.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png'
import send from '../../assets/send.png'
import moon from '../../assets/moon.png'

const navbar = () => {
  return (
   <nav className='navbar'>
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

export default navbar