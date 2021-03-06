import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';

import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


const App = () => {
   return (
      <div className='appWrapper'>
         <HeaderContainer />
         <Navbar />
         <div className='appContent'>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
         </div>
      </div>
   );
}

export default App;
