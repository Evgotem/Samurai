import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let postsData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 1 },
    { id: 2, message: 'Ez', likesCount: 2 },
    { id: 3, message: 'Breezy', likesCount: 3 }
];
let dialogs = [
   { id: 1, name: 'Zhenya' },
   { id: 2, name: 'Leopold' },
   { id: 3, name: 'Mr. Money' }
];
let messages = [
   { id: 1, text: 'React - it`s ez' },
   { id: 2, text: 'Easy peasy lemon squeezy' },
   { id: 3, text: 'Ez clap' }
];

ReactDOM.render(
  <BrowserRouter>
     <React.StrictMode>
       <App postsData={postsData} dialogs={dialogs} messages={messages} />
     </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
