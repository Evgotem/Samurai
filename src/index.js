import React from 'react';
import state from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText, updateNewMessageText, addMessage } from './redux/state';

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App
               state={state}
               addPost={addPost}
               updateNewPostText={updateNewPostText}
               updateNewMessageText={updateNewMessageText}
               addMessage={addMessage} />
         </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
   );
}



rerenderEntireTree(state);

