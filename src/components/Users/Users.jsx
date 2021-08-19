import React from 'react';
import style from './Users.module.scss';



const Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: true, fullName: 'Evgeny', status: 'I am learning React right now', location: { city: 'Samara', country: 'Russia' } 
      },
         { id: 2, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: true, fullName: 'Kristy', status: 'I am write an article today', location: { city: 'Samara', country: 'Russia' }
       },
         { id: 3, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: true, fullName: 'Oleg', status: 'I bought an apartment', location: { city: 'Samara', country: 'Russia' } 
      },
         { id: 4, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: false, fullName: 'Sasha', status: 'I stand and guard the store', location: { city: 'Samara', country: 'Russia' } 
      },
         { id: 5, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: true, fullName: 'Ruzil', status: 'I am just student', location: { city: 'Novo-Usmanovo', country: 'Russia' } 
      },
         { id: 6, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: true, fullName: 'Guzel', status: 'I listening to music', location: { city: 'Novo-Usmanovo', country: 'Russia' } 
      },
         { id: 7, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: false, fullName: 'Alex', status: 'Swimming in the smoke', location: { city: 'Pestravka', country: 'Russia' } },
         { id: 8, photoUrl: 'https://zooclub.ru/attach/8420.jpg', followed: true, fullName: 'Regulus', status: 'It was stolen', location: { city: 'Hogwards', country: 'UK' } },
      ]);
   }

   return (
      <div>
         {props.users.map(u => {
            return (
               <div key={u.id}>
                  <div>
                     <div>
                        <img src={u.photoUrl} alt="avatar" width={100} className={style.photo} />
                     </div>
                     <div className={style.btnWrapper}>
                        {u.followed
                           ?
                           <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                           :
                           <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                     </div>
                  </div>
                  <div>
                     <div>
                        <div>
                           {u.fullName}
                        </div>
                        <div>
                           {u.status}
                        </div>
                     </div>
                     <div>
                        <div>
                           {u.location.country}
                        </div>
                        <div>
                           {u.location.city}
                        </div>
                     </div>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default Users;