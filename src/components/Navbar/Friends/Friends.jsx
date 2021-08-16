import React from 'react';
import StoreContext from '../../../StoreContext';
import style from './Friends.module.scss';


const Friends = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               return (
                  <div>
                     <h3>Friends</h3>
                     <div className={style.friends}>
                        {store.getState().friends.map((f) => (
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
         }

      </StoreContext.Consumer>
   )
}

export default Friends;