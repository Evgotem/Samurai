const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   messages: [
      { id: 1, text: 'React - it`s ez' },
      { id: 2, text: 'Easy peasy lemon squeezy' },
      { id: 3, text: 'Go go go' }
   ],
   dialogs: [
      { id: 1, name: 'Zhenya' },
      { id: 2, name: 'Leopold' },
      { id: 3, name: 'Mr. Money' }
   ],
   newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE: {
         let body = state.newMessageBody;
         let messageObj = {
            id: 6,
            text: body,
         };

         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, messageObj]
         };
      }
      case UPDATE_NEW_MESSAGE_BODY: {
         return {
            ...state,
            newMessageBody: action.newMessageBody
         };
      }
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
