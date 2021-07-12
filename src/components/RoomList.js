import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleRoomChange } from '../helpers/actions';

const RoomList = ({ rooms, currentRoom, handleRoomChange }) => {
  const roomChange = (room) => {
    if (currentRoom !== room) {
      handleRoomChange(room);
    }
  };

  return (
    <div className='room-list'>
      <h1>Chat rooms</h1>
      <p>
        {rooms && rooms.map((room, index, array) => {
          const classRooms =
            room === currentRoom ? 'room-list-current' : 'room-list-span';
          const roomPosition =
            array.length - 1 === index ? `${room}` : `${room}, `;

          return (
            <span
              key={index}
              className={classRooms}
              type='button'
              onClick={() => roomChange(room)}
              aria-roledescription='button'>
              {roomPosition}
            </span>
          );
        })}
      </p>
    </div>
  );
};

RoomList.propTypes = {
  rooms: PropTypes.array,
  currentRoom: PropTypes.string,
  handleRoomChange: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms,
    currentRoom: state.currentRoom,
  };
};

const mapDispatchToProps = {
  handleRoomChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
