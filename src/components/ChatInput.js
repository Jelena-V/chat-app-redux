import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleBotMessage, addMessage } from '../helpers/actions';

import { UpArrowCircle } from '@styled-icons/boxicons-solid/UpArrowCircle';

const ChatInput = ({
  user,
  currentRoom,
  sendMessage,
  chatBot,
  addMessage,
  handleBotMessage,
  botMessage,
}) => {
  const handleMessage = (event) => {
    event.preventDefault();

    let myMessage = document.getElementById('chat-msg-input').value;
    document.getElementById('chat-msg-input').value = '';
    let time = new Date().toLocaleTimeString('en-GB').slice(0, -3);
    let random = Math.floor(Math.random() * 4 + 2) * 1000;

    if (myMessage && !chatBot) {
      sendMessage({
        room: currentRoom,
        id: user.id,
        message: myMessage,
        time: time,
        username: user,
      });
    } else if (myMessage && chatBot) {
      handleBotMessage();
      addMessage({
        message: myMessage,
        time: time,
        username: user,
      });

      setTimeout(() => {
        addMessage({
          message: botMessage,
          time: time,
          username: 'Chuck_Norris_Fan',
        });
      }, random);
    }
  };

  return (
    <div className='chat-footer'>
      <form className='chat-footer-form' onSubmit={handleMessage}>
        <input
          type='text'
          placeholder='Type a message...'
          className='chat-msg-input'
          id='chat-msg-input'
          autoComplete='off'
        />
        <div className='send-msg-btn'>
          <UpArrowCircle
            className='send-msg-icon'
            type='button'
            onClick={handleMessage}
            aria-roledescription='button'
          />
        </div>
      </form>
    </div>
  );
};

ChatInput.propTypes = {
  user: PropTypes.string,
  messages: PropTypes.array,
  currentRoom: PropTypes.string,
  chatBot: PropTypes.bool,
  addMessage: PropTypes.func,
  handleBotMessage: PropTypes.func,
  botMessage: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    messages: state.messages,
    currentRoom: state.currentRoom,
    chatBot: state.chatBot,
    botMessage: state.botMessage,
  };
};

const mapDispatchToProps = {
  addMessage,
  handleBotMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
