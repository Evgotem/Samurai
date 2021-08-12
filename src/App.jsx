import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {
   return (
      <div className='appWrapper'>
         <Header />
         <Navbar friends={props.state.friends} />
         <div className='appContent'>
            <Route path='/dialogs'
               render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />}
            />
            <Route path='/profile'
               render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />}
            />
         </div>
      </div>
   );
}

export default App;
