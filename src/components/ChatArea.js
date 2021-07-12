import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ChatArea = ({ user, messages, currentRoom, chatBot }) => {
  useEffect(() => {
    document.querySelector('.chat-messages').scrollTop =
      document.querySelector('.chat-messages').scrollHeight;
  }, [messages]);

  return (
    <div className='room-wrapper'>
      <div className='chat-header'>
        <h1>{currentRoom}</h1>
      </div>

      <div className='chat-messages'>
        {chatBot ? (
          <div className='message-wrapper'>
            <div className='message-letter'>
              <h1>C</h1>
            </div>
            <div className='message-rest'>
              <div className='rest-wrapper'>
                <div className='username'>Chuck_Norris_Fan</div>
                <div className='message'>Hi {user}!</div>
              </div>
              <div className='time'>{new Date().toLocaleTimeString('en-GB').slice(0, -3)}</div>
            </div>
          </div>
        ) : (
          ''
        )}

        {/* eslint-disable-next-line */}
        {messages && messages.map((message, index) => {
          const my = message.username === user ? 'my' : '';

          if (message.username) {
            return (
              <div className={`message-wrapper ${my}`} key={index}>
                <div className={`message-letter ${my}`}>
                  <h1>{message.username.slice(0, 1)}</h1>
                </div>
                <div className='message-rest'>
                  <div className={`rest-wrapper ${my}`}>
                    <div className='username'>{message.username}</div>
                    <div className='message'>{message.message}</div>
                  </div>
                  <div className='time'>{message.time}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

ChatArea.propTypes = {
  user: PropTypes.string,
  messages: PropTypes.array,
  currentRoom: PropTypes.string,
  chatBot: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
    currentRoom: state.currentRoom,
    chatBot: state.chatBot,
  };
};

export default connect(mapStateToProps)(ChatArea);
