import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleUpsBot } from '../helpers/actions';

import '../styles/ups.css';
import bot404 from '../assets/bot-404.svg';
import botWink from '../assets/bot-wink.svg';

const Ups = ({ upsBot, handleUpsBot }) => {
  return (
    <div className='App-ups'>
      <Link to='/chat'>
        <div
          className='ups-icon-wrapper'
          onMouseEnter={() => handleUpsBot()}
          onMouseLeave={() => handleUpsBot()}>
          {!upsBot ? (
            <img src={bot404} alt='404 bot icon' className='bot-icon-404' />
          ) : (
            <img src={botWink} alt='wink bot icon' className='bot-icon-404' />
          )}
        </div>
      </Link>
      <h1 className='ups-h1'>
        Uuups... Something went wrong! <br />
        The page you have requested does not exist
      </h1>
    </div>
  );
};

Ups.propTypes = {
  upsBot: PropTypes.bool,
  handleUpsBot: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    upsBot: state.upsBot,
  };
};

const mapDispatchToProps = {
  handleUpsBot,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ups);
