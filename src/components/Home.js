import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/home.css';
import logo from '../assets/chat-logo.svg';
import { Enter } from '@styled-icons/ionicons-solid/Enter';

const Home = () => {
  return (
    <div className='App-home'>
      <Link to='/chat'>
        <img src={logo} alt='Chat logo' className='chat-logo' />
        <Enter className='Enter-icon' />
      </Link>
      <div className='home-animation'>
        <span className='home-span'>
          <h1>Get ready</h1>
        </span>
        <span className='home-span'>
          <h1>To see something more...</h1>
        </span>
        <span className='home-span'>
          <h1>Than just animations</h1>
        </span>
        <span className='home-span'>
          <h1>Come in...</h1>
        </span>
        <span className='home-span'>
          <Link to='/chat'>
            <h1>Let's chat!</h1>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
