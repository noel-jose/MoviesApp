import React from 'react'
import "./Header.scss"
import logo1 from "../img/logo.png";
import logo2 from "../img/Nlogo.png";

function Header() {
  return (
    <div className='header'>
        <img src={logo1} alt="logo1" className='header__logo1'/>
        <img src={logo2} alt="logo2" className='header__logo2' />
    </div>
  )
}

export default Header;