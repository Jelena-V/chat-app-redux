import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';
import logo from '../assets/chat-logo.svg';

const Header = () => {
  return (
    <div className='App-header'>
      <div className='header-logo-wrapper'>
        <img src={logo} alt='Chat logo' className='header-logo' />
        <h1>Let's chat!</h1>
      </div>
      <nav className='header-nav'>
        <ul aria-roledescription='menu'>
          <Link to='/'>
            <li aria-roledescription='menuitem'>Home</li>
          </Link>
          <Link to='/chat'>
            <li aria-roledescription='menuitem'>Chat</li>
          </Link>
          <Link to='/about'>
            <li aria-roledescription='menuitem'>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
