import React from 'react';
import style from './Users.module.scss';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

let Users = props => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
      <div>
         {pages.map(p => {
            return (
               <span
                  className={props.currentPage === p && style.selectedPage}
                  onClick={(e) => { props.onPageChanged(p) }}
               >
                  {p + ' '}
               </span>
            )
         })}
         <div className={style.usersWrapper}>
            {props.users.map(u => {
               return (
                  <div className={style.user} key={u.id}>

                     <div>
                        <NavLink to={'/profile/' + u.id}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" width={100} className={style.photo} />
                        </NavLink>
                     </div>

                     {u.followed
                        ?
                        <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        :
                        <button onClick={() => { props.follow(u.id) }}>Follow</button>
                     }


                     <div>
                        <div>
                           <div>
                              {u.name}
                           </div>
                           <div>
                              {u.status}
                           </div>
                        </div>
                        <div>
                           <div>
                              {'u.location.country'}
                           </div>
                           <div>
                              {'u.location.city'}
                           </div>
                        </div>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default Users;