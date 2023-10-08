import React from 'react';
import './navbar.css';

import logo from '../../assets/sensei_logo.svg';

function Navbar() {
  return (
    <div className='sensei_nav_main'>
        <nav className='sensei_nav'>
            <img className='sensei_nav_logo' src={logo} alt='logo' />
        </nav>
    </div>
  )
}

export default Navbar