

let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'Hi, how are you?', likesCount: 1 },
         { id: 2, message: 'Ez', likesCount: 2 },
         { id: 3, message: 'Breezy', likesCount: 3 }
      ]
   },
   dialogsPage: {
      messages: [
         { id: 1, text: 'React - it`s ez' },
         { id: 2, text: 'Easy peasy lemon squeezy' },
         { id: 3, text: 'Ez clap' }
      ],
      dialogs: [
         { id: 1, name: 'Zhenya' },
         { id: 2, name: 'Leopold' },
         { id: 3, name: 'Mr. Money' }
      ]
   },
   friends: [
      { id: 1, name: 'Leopold' },
      { id: 2, name: 'Mr. Money' }
   ]

}

export default state;