import { reachBotMessage } from './chuckNorrisAPI';

export const SHOW_LOGIN_MODAL = 'SHOW_LOGIN_MODAL';
export const LOGIN = 'LOGIN';
export const SET_AGE_CHECK = 'SET_AGE_CHECK';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const MEMBERS_ONLINE = 'MEMBERS_ONLINE';
export const MEMBER_JOINED = 'MEMBER_JOINED';
export const MEMBER_LEFT = 'MEMBER_LEFT';
export const SET_ASIDE_MODAL = 'SET_ASIDE_MODAL';
export const ROOM_CHANGE = 'ROOM_CHANGE';
export const SET_PRIVATE_CHAT = 'SET_PRIVATE_CHAT';
export const ADD_PRIVATE_ROOM = 'ADD_PRIVATE_ROOM';
export const SET_CHAT_BOT = 'SET_CHAT_BOT';
export const SET_BOT_MESSAGE = 'SET_BOT_MESSAGE';
export const SET_UPS_BOT = 'SET_UPS_BOT';

export function handleLoginModal() {
  return { type: SHOW_LOGIN_MODAL, payload: true };
}
export function login(username) {
  return { type: LOGIN, payload: username };
}
export function handleAge(ageCheck) {
  return { type: SET_AGE_CHECK, payload: ageCheck };
}
export function handleHistory(data) {
  return { type: ADD_MESSAGE, payload: data };
}
export function addMessage(data) {
  return { type: ADD_MESSAGE, payload: data };
}
export function handleUsersOnline(members) {
  return { type: MEMBERS_ONLINE, payload: members };
}
export function addNewUser(member) {
  return { type: MEMBER_JOINED, payload: member };
}
export function removeUser(member) {
  return { type: MEMBER_LEFT, payload: member };
}
export function handleRoomChange(room) {
  return { type: ROOM_CHANGE, payload: room };
}
export function handleAsideModal() {
  return { type: SET_ASIDE_MODAL, payload: false };
}
//kad ja iniciram privatni chat
export function addPrivateChat({ target, initiator }) {
  return { type: SET_PRIVATE_CHAT, payload: { target, initiator } };
}
//kad netko drugi inicira privatni chat
export function addNewRoom(data) {
  return { type: ADD_PRIVATE_ROOM, payload: data };
}
//chatBot-Chat
export function activateChatBot() {
  return { type: SET_CHAT_BOT, payload: true };
}
//ChuckNorrisAPI
export function handleBotMessage() {
  return (dispatch) => {
    reachBotMessage().then((data) => {
      if (data.length === 0) {
        throw new Error('Repos not found');
      }
      dispatch({ type: SET_BOT_MESSAGE, payload: data });
    });
  };
}
export function handleUpsBot(upsBot) {
  return { type: SET_UPS_BOT, payload: upsBot };
}
