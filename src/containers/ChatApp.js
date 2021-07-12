import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AsideTop from '../components/AsideTop';
import RoomList from '../components/RoomList';
import OnlineUsers from '../components/OnlineUsers';
import Logout from '../components/Logout';
import ChatArea from '../components/ChatArea';
import ChatInput from '../components/ChatInput';

import {
  handleHistory,
  addMessage,
  handleUsersOnline,
  addNewUser,
  removeUser,
  addNewRoom,
} from '../helpers/actions';

class ChatApp extends Component {
  componentDidMount() {
    const { user, currentRoom } = this.props;
    
    this.drone = new window.Scaledrone('Kfq83hhwcwVnaNUG', {
      data: user,
    });
    this.drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      console.log(`User ${user} connected to Scaledrone`);
    });
    this.drone.on('disconnect', () => {
      console.log(
        'User has disconnected, Scaledrone will try to reconnect soon'
      );
    });
    this.drone.on('reconnect', () => {
      console.log('User has been reconnected');
    });
    this.addRoomListeners(currentRoom);
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentRoom } = this.props;

    if (prevProps.currentRoom !== currentRoom) {
      this.removeRoomListeners();
      this.addRoomListeners(currentRoom);
    }
  }

  componentWillUnmount() {
    this.drone.close();
  }

  addRoomListeners = (roomName) => {
    const {
      rooms,
      initiator,
      user,
      handleHistory,
      addNewRoom,
      handleUsersOnline,
      addNewUser,
      removeUser,
      addMessage
    } = this.props;

      const roomIndex = rooms.findIndex((room) => roomName === room);
      if (roomIndex >= 6) {
        this.room = this.drone.subscribe(`observable-${initiator}`, {
          historyCount: 10,
        });
      } else {
        this.room = this.drone.subscribe(`observable-${roomName}`, {
          historyCount: 10,
        });
      }
      this.room.on('open', (error) => {
        if (error) {
          return console.error(error);
        }
      });
      this.room.on('history_message', ({ data }) => {
        handleHistory(data);
      });
      this.room.on('data', (data) => {
        if (data.target === user) {
          addNewRoom(data);
          return;
        }
        addMessage(data);
      });
      this.room.on('members', (members) => {
        handleUsersOnline(members);
      });
      this.room.on('member_join', (member) => {
        addNewUser(member);
      });
      this.room.on('member_leave', (member) => {
        removeUser(member);
      });   
  };

  removeRoomListeners = () => {
    this.room.unsubscribe();
  };

  sendMessage = (message) => {
    const { rooms, currentRoom, initiator } = this.props;

    const roomIndex = rooms.findIndex((room) => currentRoom === room);
    if (roomIndex >= 6) {
      this.drone.publish({
        room: `observable-${initiator}`,
        message: { ...message, room: initiator },
      });
    } else {
      this.drone.publish({
        room: `observable-${currentRoom}`,
        message,
      });
    }
  };

  addPrivateRoom = (target, initiator) => {
    const { currentRoom } = this.props;

    this.drone.publish({
      room: `observable-${currentRoom}`,
      message: { target: target, initiator: initiator },
    });
  };

  render() {
    return (
      <div className='chat-wrapper'>
        <div className='chat-aside'>
          <AsideTop />
          <RoomList />
          <OnlineUsers addPrivateRoom={this.addPrivateRoom} />
          <Logout />
        </div>
        <div className='chat-main'>
          <ChatArea />
          <ChatInput sendMessage={this.sendMessage} />
        </div>
      </div>
    );
  }
}

ChatApp.propTypes = {
  user: PropTypes.string,
  rooms: PropTypes.array,
  currentRoom: PropTypes.string,
  target: PropTypes.string,
  inititator: PropTypes.string,
  handleHistory: PropTypes.func,
  addMessage: PropTypes.func,
  handleUsersOnline: PropTypes.func,
  addNewUser: PropTypes.func,
  removeUser: PropTypes.func,
  addNewRoom: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    state: state,
    user: state.user,
    rooms: state.rooms,
    currentRoom: state.currentRoom,
    target: state.target,
    initiator: state.initiator,
  };
};

const mapDispatchToProps = {
  handleHistory,
  addMessage,
  handleUsersOnline,
  addNewUser,
  removeUser,
  addNewRoom,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
