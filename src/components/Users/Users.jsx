import React from 'react';
import style from './Users.module.scss';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
   getUsers = () => {
      if (this.props.users.length === 0) {
         axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
               this.props.setUsers(response.data.items);
            });
      }
   };
   render() {
      return (
         <div>
            <button onClick={this.getUsers}>Get Users</button>
            {this.props.users.map(u => {
               return (
                  <div key={u.id}>
                     <div>
                        <div>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="avatar" width={100} className={style.photo} />
                        </div>
                        <div className={style.btnWrapper}>
                           {u.followed
                              ?
                              <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                              :
                              <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
                        </div>
                     </div>
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
      )
   }

}

export default Users;