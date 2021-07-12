import {
  SHOW_LOGIN_MODAL,
  LOGIN,
  SET_AGE_CHECK,
  ADD_MESSAGE,
  MEMBERS_ONLINE,
  MEMBER_JOINED,
  MEMBER_LEFT,
  ROOM_CHANGE,
  SET_ASIDE_MODAL,
  SET_PRIVATE_CHAT,
  ADD_PRIVATE_ROOM,
  SET_CHAT_BOT,
  SET_BOT_MESSAGE,
  SET_UPS_BOT,
} from './actions';

const age = localStorage.getItem('ageCheck');
const checkAge = age === 'true';

const initialState = {
  user: localStorage.getItem('username') || null,
  ageCheck: checkAge || false,
  loginModal: false,
  messages: [],
  usersOnline: [],
  member: '',
  showAsideModal: false,
  rooms: [`Let's talk about Chuck Norris`, 'NERDS', 'DRAMA', 'SQUAD', 'INCREDIBLES', '404', ],
  currentRoom: 'NERDS',
  target: null,
  initiator: null,
  chatBot: false,
  botMessage: `Let's share some Chuck Norris facts!`,
  upsBot: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_MODAL: {
      return {
        ...state,
        loginModal: action.payload,
      };
    }
    case LOGIN: {
      return {
        ...state,
        user: action.payload,
        member: action.payload,
        memberChange: true,
        showAsideModal: true,
      };
    }
    case SET_AGE_CHECK: {
      localStorage.setItem('ageCheck', !state.ageCheck);
      return {
        ...state,
        ageCheck: !state.ageCheck,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    }
    case MEMBERS_ONLINE: {
      return {
        ...state,
        usersOnline: action.payload,
      };
    }
    case MEMBER_JOINED: {
      return {
        ...state,
        usersOnline: [...state.usersOnline, action.payload],
        member: action.payload.clientData,
        memberChange: true,
        showAsideModal: true,
      };
    }
    case MEMBER_LEFT: {
      let membersOnline = state.usersOnline.filter(
        (userOnline) => userOnline.id !== action.payload.id
      );
      return {
        ...state,
        usersOnline: membersOnline,
        member: action.payload.clientData,
        memberChange: false,
        showAsideModal: true,
      };
    }
    case ROOM_CHANGE: {
      const checkChuck = action.payload === `Let's talk about Chuck Norris`;
      return {
        ...state,
        messages: [],
        currentRoom: action.payload,
        chatBot: checkChuck ? true : false,
        member: state.user,
        memberChange: true,
        showAsideModal: true,
      };
    }
    case SET_ASIDE_MODAL: {
      return {
        ...state,
        showAsideModal: action.payload,
      };
    }
    //kad ja iniciram privatni chat
    case SET_PRIVATE_CHAT: {
      return {
        ...state,
        messages: [],
        rooms: [...state.rooms, action.payload.target],
        target: action.payload.taregt,
        initiator: action.payload.initiator,
      };
    }
    //kad netko drugi inicira privatni chat
    case ADD_PRIVATE_ROOM: {
      return {
        ...state,
        messages: [],
        rooms: [...state.rooms, action.payload.initiator],
        target: action.payload.taregt,
        initiator: action.payload.initiator,
      };
    }
    case SET_CHAT_BOT: {
      return {
        ...state,
        chatBot: action.payload,
        currentRoom: '',
      };
    }
    case SET_BOT_MESSAGE: {
      return {
        ...state,
        botMessage: action.payload.value,
      };
    }
    case SET_UPS_BOT: {
      return {
        ...state,
        upsBot: !state.upsBot,
      };
    }
    default:
      return { ...state };
  }
}
