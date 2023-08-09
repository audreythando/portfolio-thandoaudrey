import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
<header>
  <div className='container header__container'>
    <h5>Hello I'm </h5>
    <h1>Audrey Thando Mpalume</h1>
    <h5 className='text-light'>Software Developer</h5>
<CTA/>
<HeaderSocials/>
<div className='me'>
  <img className='mine'src={ME} alt="me" />


</div>

<a href="#contact" className='scroll__down'>Scroll Down</a>
  </div>
</header>
  )
}

export default Header