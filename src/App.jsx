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
         <Navbar friends={props.state.friends} />
         <div className='appContent'>
            <Route path='/dialogs'
               render={() => <Dialogs
                  dialogsPage={props.state.dialogsPage}
                  updateNewMessageText={props.updateNewMessageText}
                  addMessage={props.addMessage} />}
            />
            <Route path='/profile'
               render={() =>
                  <Profile
                     profilePage={props.state.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                  />
               }

            />
         </div>
      </div>
   );
}

export default App;
