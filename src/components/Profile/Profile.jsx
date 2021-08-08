import React from 'react';
import style from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
      <div>
         <div>
            ava + desc
         </div>

         <MyPosts />
         
      </div>
   )
}

export default Profile;