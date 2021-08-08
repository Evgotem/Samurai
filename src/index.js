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

ReactDOM.render(
  <BrowserRouter>
     <React.StrictMode>
       <App postsData={postsData} />
     </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
