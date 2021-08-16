import React from 'react';
import style from './Profile.module.scss';

import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = () => {

   return (
      <div>

         <ProfileInfo />

         <MyPostsContainer />

      </div>
   )
}

export default Profile;