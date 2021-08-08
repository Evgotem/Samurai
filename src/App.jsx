import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';


const App = (props) => {
   return (
      <div className="appWrapper">
         <Header />
         <Navbar />
         <div className='appContent'>
            <Route exact path='/dialogs' component={Dialogs} />
            <Route exact path='/profile' component={Profile} />
         </div>
      </div>
   );
}

export default App;
