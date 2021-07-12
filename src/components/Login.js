import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login, handleAge, handleLoginModal } from '../helpers/actions';

import '../styles/login.css';
import botHi from '../assets/bot-hi.svg';

const Login = ({ login, handleAge, ageCheck, handleLoginModal, loginModal}) => {
  const handleLogin = (event) => {
    event.preventDefault();
    let username = document.getElementById('login-input').value;
    localStorage.setItem('username', username);
    login(username);
  };

  return (
    <div className='chat-login'>
      <div className='welcome-wrapper'>
        <img src={botHi} alt='Bot says hi' className='bot-hi' />
       
          <div className='login-welcome'>
            <h1>Welcome to chat!</h1>
            <p>Press login to continue...</p>
          </div>
    
      </div>

      <div className='login-form'>
        <h1>Chat login</h1>
        <form onSubmit={handleLogin}>
          <p>
            <label htmlFor='firstName' className='input-firstName'>
              First Name: &nbsp;&nbsp;
            </label>
            <input
              type='text'
              name='firstName'
              placeholder='Type your first name here...'
              className='login-input'
            />
          </p>
          <p>
            <label htmlFor='lastName' className='input-lastName'>
              Last Name: &nbsp;&nbsp;
            </label>
            <input
              type='text'
              name='lastName'
              placeholder='Type your last name here...'
              className='login-input'
            />
          </p>
          <p>
            <label htmlFor='username'>Username: &nbsp;&nbsp;</label>
            <input
              type='text'
              name='username'
              placeholder='Type your username here...'
              id='login-input'
              className='login-input'
              onChange={() => handleLoginModal()}
              required='required'
              aria-required='true'
            />
          </p>
          <p>
            <input
              type='checkbox'
              name='age'
              className='checkbox-input'
              required='required'
              onChange={() => handleAge()}
              aria-required='true'
            />
            <label htmlFor='age'>
              &nbsp; I confirm that I am at least 18 years old
            </label>
          </p>

          <p>
            <button type='button' className='login-btn' onClick={handleLogin}>
              Login
            </button>
          </p>
        </form>
        {!loginModal || !ageCheck ? <p className="form-p-required">Please fillout the form (username & checkbox are reqiured)</p> : <p className="form-p-required">Press login to continue</p>
        }
        
      </div>
    </div>
  );
};

Login.propTypes = {
  ageCheck: PropTypes.bool,
  loginModal: PropTypes.bool,
  login: PropTypes.func,
  handleAge: PropTypes.func,
  handleLoginModal: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    loginModal: state.loginModal,
    ageCheck: state.ageCheck
  };
};

const mapDispatchToProps = {
  login,
  handleAge,
  handleLoginModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
