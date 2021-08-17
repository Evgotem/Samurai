import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = () => {
   return (
      <div className='appWrapper'>
         <Header />
         <Navbar />
         <div className='appContent'>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/users' render={() => <div>users</div>} />
         </div>
      </div>
   );
}

export default App;
