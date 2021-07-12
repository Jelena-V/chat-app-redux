import React from 'react';

import '../styles/footer.css';
import { Copyright } from '@styled-icons/material-sharp/Copyright';
import { Github } from '@styled-icons/entypo-social/Github';
import { Heroku } from '@styled-icons/simple-icons/Heroku';
import { Email } from '@styled-icons/entypo/Email';

const Footer = () => {
  return (
    <div className='App-footer'>
      <div className='footer-logo'>
        <a
          href='https://github.com/Jelena-V'
          target='_blank'
          rel='noopener noreferrer'
          aria-roledescription='button'>
          <Github className='footer-icon' />
        </a>
        <a
          href='https://www.heroku.com/'
          target='_blank'
          rel='noopener noreferrer'
          aria-roledescription='button'>
          <Heroku className='footer-icon' />
        </a>
        <a
          href='mailto:vignjevic.jelena@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          aria-roledescription='button'>
          <Email className='footer-icon' />
        </a>
      </div>
      <div className='copyrights'>
        <Copyright className='copyright-icon' /> &nbsp;Jelena Vignjević &nbsp;|
        &nbsp;
        {new Date().getFullYear()}.
      </div>
    </div>
  );
};

export default Footer;
