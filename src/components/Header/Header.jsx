import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from './../../assets/me.png'
import HeaderSocials from './headerSocials'
const Header = () => {
  return (
<header>
<div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Muhammad Fahad Siddiqui</h1>
      <h5 className='text-light'>MERN Stack Developer / Data Scientist</h5>
      <CTA />
      <HeaderSocials />
      <div className='me'>
        <img src={ME} alt='me' className='meimg'></img>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
</header>
  )
}

export default Header