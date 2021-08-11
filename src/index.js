import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <App
               state={store.getState()}
               addPost={store.addPost.bind(store)}
               updateNewPostText={store.updateNewPostText.bind(store)}
               updateNewMessageText={store.updateNewMessageText.bind(store)}
               addMessage={store.addMessage.bind(store)}
            />
         </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
   );
}



rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);