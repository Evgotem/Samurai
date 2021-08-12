import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import profileReducer from "./profile-reducer";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 1 },
            { id: 2, message: 'Ez', likesCount: 2 },
            { id: 3, message: 'Breezy', likesCount: 3 }
         ],
         newPostText: ''
      },
      dialogsPage: {
         messages: [
            { id: 1, text: 'React - it`s ez' },
            { id: 2, text: 'Easy peasy lemon squeezy' },
            { id: 3, text: 'Go go go' }
         ],
         newMessage: '',
         dialogs: [
            { id: 1, name: 'Zhenya' },
            { id: 2, name: 'Leopold' },
            { id: 3, name: 'Mr. Money' }
         ],
      },
      friends: [
         { id: 1, name: 'Leopold' },
         { id: 2, name: 'Mr. Money' }
      ]
   },
   _callSubscriber() {
      console.log('state changed');
   },

   getState() {
      return this._state;
   },
   subscribe(observer) {
      this._callSubscriber = observer; //observer // publisher-subscriber // addEventListener// паттерн
   },

   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.friends = friendsReducer(this._state.friends, action);

      this._callSubscriber(this._state);

   }
}




export default store;
window.store = store;