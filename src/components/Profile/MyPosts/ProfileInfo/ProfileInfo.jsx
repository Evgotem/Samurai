import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import style from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {

   if(!props.profile) {
      return <Preloader />
   }
debugger;

   return (
      <div>
         <img src={props.profile.photos.large} alt="Avatar" />
      </div>
   )
}

export default ProfileInfo;