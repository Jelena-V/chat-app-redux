import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addPrivateChat } from '../helpers/actions';

import { Users } from '@styled-icons/fa-solid/Users';

const OnlineUsers = ({
  usersOnline,
  user,
  rooms,
  chatBot,
  addPrivateChat,
  addPrivateRoom,
}) => {
  const handlePrivateChat = (member) => {
    let initiator = user;
    let target = member.clientData;

    if (initiator !== target && !rooms.includes(target)) {
      addPrivateChat({ target, initiator });
      addPrivateRoom(target, initiator);
    }
  };

  return (
    <div className='people-online'>
      <h1>
        <Users className='users-icon' />
        &nbsp; in this room
      </h1>
      <p>
        {chatBot ? (
          <span style={{ cursor: 'default' }}>Chuck_Norris_Fan, </span>
        ) : (
          ''
        )}

        {usersOnline &&
          usersOnline.map((member, index, array) => {
            const classOnline =
              user === member.clientData
                ? 'users-for-chat-bold'
                : 'users-for-chat';

            const userPosition =
              array.length - 1 === index
                ? `${member.clientData}`
                : `${member.clientData}, `;

            return (
              <span
                key={index}
                className={classOnline}
                onClick={() => handlePrivateChat(member)}
                aria-roledescription='button'>
                {userPosition}
              </span>
            );
          })}
      </p>
    </div>
  );
};

OnlineUsers.propTypes = {
  user: PropTypes.string,
  usersOnline: PropTypes.array,
  rooms: PropTypes.array,
  chatBot: PropTypes.bool,
  addPrivateChat: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    usersOnline: state.usersOnline,
    rooms: state.rooms,
    chatBot: state.chatBot,
  };
};

const mapDispatchToProps = {
  addPrivateChat,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnlineUsers);
