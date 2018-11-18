import * as types from '../constants/actiontypes.js';

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message,sender) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  sender
});

export const addUser = name => ({
  type: types.ADD_USER,
  id:nextUserId++,
  name
});

export const messageRecieved = (message,sender) => ({
  type: types.MESSAGE_RECIEVED,
  id: nextMessageId++,
  message,
  sender
});

export const getUsers = users => ({
  type: types.USERS_LIST,
  users
})
