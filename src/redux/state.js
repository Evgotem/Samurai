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
      if(action.type === 'ADD-POST') {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         };
         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      } 
      else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      } 
      else if (action.type === 'ADD-MESSAGE') {
         let newMessage = {
            id: 4,
            text: this._state.dialogsPage.newMessage,
         };
         this._state.dialogsPage.messages.push(newMessage);
         this._state.dialogsPage.newMessage = '';
         this._callSubscriber(this._state);
      } 
      else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
         this._state.dialogsPage.newMessage = action.newMessage;
         this._callSubscriber(this._state);
      }
   }
}

export default store;
window.store = store;