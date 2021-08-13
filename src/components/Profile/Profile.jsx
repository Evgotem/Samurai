import React from 'react';
import style from './Profile.module.scss';

import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

   return (
      <div>

         <ProfileInfo />

         <MyPostsContainer store={props.store} />

      </div>
   )
}

export default Profile;