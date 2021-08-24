import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import style from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {

   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <div>
            <img src={props.profile.photos.large} alt="Avatar" />
         </div>
         <div>
            My name is: {props.profile.fullName}
         </div>
         <div className={style.about}>
            {props.profile.aboutMe}
         </div>
         <div>
            <p>Looking for a job status: {props.profile.lookingForAJob ? 'true' : 'false'}</p>
            <p>Description: {props.profile.lookingForAJobDescription}</p>
         </div>

      </div>
   )
}

export default ProfileInfo;