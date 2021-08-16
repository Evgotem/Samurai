import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import StoreContext, { Provider } from './StoreContext';


let rerenderEntireTree = () => {
   ReactDOM.render(
      <BrowserRouter>
         <React.StrictMode>
            <Provider store={store}>
               <App />
            </Provider>
         </React.StrictMode>
      </BrowserRouter>,
      document.getElementById('root')
   );
}



rerenderEntireTree();

store.subscribe(() => {
   rerenderEntireTree();
});