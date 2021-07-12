import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import Header from './Header';
import Login from './Login';
import ChatApp from '../containers/ChatApp';
import Footer from './Footer';

const Chat = ({user, ageCheck}) => {
  return (
    <div className='page-wrapper'>
      <Header />
      <main className='Chat-app'>
        {user && ageCheck ? (<ChatApp />) : (<Login />)}
      </main>
      <Footer />
    </div>
  );
};

Chat.propTypes = {
  user: PropTypes.string,
  ageCheck: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    ageCheck: state.ageCheck
  }
}


export default connect(mapStateToProps)(Chat);