import React from 'react';
import style from './Friends.module.scss';


const Friends = (props) => {
   return (
      <div>
         <h3>Friends</h3>
         <div className={style.friends}>
               {props.friends.map((f) => (
                  <div className={style.friendsItem}>
                     <div className={style.avatar}>
                        
                     </div>
                     <div className="name">{f.name}</div>
                  </div>
               ))}
         </div>
      </div>

   )
}

export default Friends;