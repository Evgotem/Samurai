let rerenderEntireTree = () => {
   console.log('state changed');
}
let state = {
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
      newMessage:'',
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

}

export const addPost = () => {
   let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0
   };
   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
};
export const updateNewPostText = newText => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
};
export const addMessage = () => {
   let newMessage = {
      id: 4,
      text: state.dialogsPage.newMessage,
   };
   state.dialogsPage.messages.push(newMessage);
   state.dialogsPage.newMessage = '';
   rerenderEntireTree(state);
};
export const updateNewMessageText = newMessage => {
   state.dialogsPage.newMessage = newMessage;
   rerenderEntireTree(state);
};
export const subscribe = (observer) => {
   rerenderEntireTree = observer; //observer // publisher-subscriber // addEventListener// паттерн
};

export default state;