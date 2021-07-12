import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import '../styles/about.css';
import botChat from '../assets/bot-chat.svg';
import botWorking from '../assets/bot-working.svg';
import botMessage from '../assets/bot-message.svg';
import botLoading from '../assets/bot-loading.svg';
import botBye from '../assets/bot-bye.svg';

const About = () => {
  let history = useHistory();

  const handleRedirect = () => {
    history.push('/chat');
  };

  setTimeout(() => {
    handleRedirect();
  }, 21000);

  return (
    <div className='App-about'>
      <div className='about-heading'>
        <p>Završni seminar Algebrinog programa obrazovanja</p>
        <h1>Front-end developer</h1>
        <div className='bot-animation-wrapper'>
          <span className='bot-animation'>
            <img src={botChat} alt='Bot chat' className='bot-final' />
          </span>
          <span className='bot-animation'>
            <img src={botWorking} alt='Bot loading' className='bot-final' />
          </span>
          <span className='bot-animation'>
            <img src={botMessage} alt='Bot message' className='bot-final' />
          </span>
          <span className='bot-animation'>
            <img src={botLoading} alt='Bot loading' className='bot-final' />
          </span>

          <span className='bot-animation'>
            <Link to='/chat'>
              <img src={botBye} alt='Bot bye' className='bot-final bot-bye' />
            </Link>
          </span>
        </div>
        <div className='about-me'>
          <p>Aplikaciju izradila:</p>
          <h1>Jelena Vignjević</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
