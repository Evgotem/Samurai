const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

const dialogsReducer = (state, action) => {

   switch (action.type) {
      case ADD_MESSAGE:
         let messageObj = {
            id: 4,
            text: state.newMessage,
         };
         state.messages.push(messageObj);
         state.newMessage = '';
         return state;
      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessage = action.newMessage;
         return state;
      default:
         return state;
   }
}

export default dialogsReducer;

export const updateNewMessageTextActionCreator = (text) => ({
   type: UPDATE_NEW_MESSAGE_TEXT,
   newMessage: text
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
