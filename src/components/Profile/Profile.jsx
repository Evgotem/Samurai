import React from 'react';
import style from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
      <div className={style.content}>
            <div>
               ava + desc
            </div>

            <MyPosts />
         </div>
   )
}

export default Profile;