const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
   messages: [
      { id: 1, text: 'React - it`s ez' },
      { id: 2, text: 'Easy peasy lemon squeezy' },
      { id: 3, text: 'Go go go' }
   ],
   newMessageBody: '',
   dialogs: [
      { id: 1, name: 'Zhenya' },
      { id: 2, name: 'Leopold' },
      { id: 3, name: 'Mr. Money' }
   ],
}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE:
         let messageObj = {
            id: 4,
            text: state.newMessageBody,
         };
         state.messages.push(messageObj);
         state.newMessageBody = '';
         return state;
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.newMessageBody;
         return state;
      default:
         return state;
   }
}

export default dialogsReducer;

export const updateNewMessageBodyCreator = (text) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   newMessageBody: text
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
