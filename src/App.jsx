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
            <Route exact path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
            <Route exact path='/profile' render={ () => <Profile postsData={props.postsData} />} />
         </div>
      </div>
   );
}

export default App;
